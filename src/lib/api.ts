// Backend API URLs - will be populated after deployment
const BACKEND_URLS = {
  auth: import.meta.env.VITE_AUTH_URL || "",
  admin: import.meta.env.VITE_ADMIN_URL || "",
  orders: import.meta.env.VITE_ORDERS_URL || "",
};

export function getAuthUrl() {
  return BACKEND_URLS.auth;
}
export function getAdminUrl() {
  return BACKEND_URLS.admin;
}
export function getOrdersUrl() {
  return BACKEND_URLS.orders;
}

function getToken(): string | null {
  return localStorage.getItem("admin_token");
}

function authHeaders(): Record<string, string> {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
      ...(options?.headers || {}),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || `HTTP error ${response.status}`);
  }

  return data as T;
}

// ===== AUTH =====
export interface AdminUser {
  id: number;
  email: string;
  name: string;
  role: string;
}

export interface LoginResponse {
  token: string;
  user: AdminUser;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const authUrl = getAuthUrl();
  if (!authUrl) throw new Error("AUTH_URL не настроен");
  return fetchJson<LoginResponse>(`${authUrl}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {},
  });
}

export async function verifyToken(): Promise<{ valid: boolean; user: AdminUser }> {
  const authUrl = getAuthUrl();
  if (!authUrl) throw new Error("AUTH_URL не настроен");
  return fetchJson(`${authUrl}/verify`, { method: "POST", headers: {} });
}

export async function setPassword(email: string, password: string): Promise<void> {
  const authUrl = getAuthUrl();
  if (!authUrl) throw new Error("AUTH_URL не настроен");
  await fetchJson(`${authUrl}/set-password`, {
    method: "POST",
    body: JSON.stringify({ email, password, setupKey: "bum-pizza-setup-2024" }),
    headers: {},
  });
}

// ===== ADMIN STATS =====
export interface Stats {
  orders: { total: string; revenue: string };
  newOrders: { count: string };
  menu: { count: string };
}

export async function getStats(): Promise<Stats> {
  const adminUrl = getAdminUrl();
  if (!adminUrl) throw new Error("ADMIN_URL не настроен");
  return fetchJson(`${adminUrl}/stats`);
}

// ===== CATEGORIES =====
export interface Category {
  id: number;
  name: string;
  slug: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

export async function getCategories(): Promise<Category[]> {
  const adminUrl = getAdminUrl();
  if (!adminUrl) throw new Error("ADMIN_URL не настроен");
  return fetchJson(`${adminUrl}/categories`);
}

export async function createCategory(data: Omit<Category, "id" | "created_at">): Promise<Category> {
  const adminUrl = getAdminUrl();
  if (!adminUrl) throw new Error("ADMIN_URL не настроен");
  return fetchJson(`${adminUrl}/categories`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateCategory(id: number, data: Partial<Category>): Promise<Category> {
  const adminUrl = getAdminUrl();
  if (!adminUrl) throw new Error("ADMIN_URL не настроен");
  return fetchJson(`${adminUrl}/categories/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteCategory(id: number): Promise<void> {
  const adminUrl = getAdminUrl();
  if (!adminUrl) throw new Error("ADMIN_URL не настроен");
  await fetchJson(`${adminUrl}/categories/${id}`, { method: "DELETE" });
}

// ===== MENU ITEMS =====
export interface MenuItem {
  id: number;
  category_id: number;
  category_name?: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  image_url: string;
  is_new: boolean;
  is_hot: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export async function getMenuItems(categoryId?: number): Promise<MenuItem[]> {
  const adminUrl = getAdminUrl();
  if (!adminUrl) throw new Error("ADMIN_URL не настроен");
  const url = categoryId
    ? `${adminUrl}/menu?category_id=${categoryId}`
    : `${adminUrl}/menu`;
  return fetchJson(url);
}

export async function createMenuItem(data: Omit<MenuItem, "id" | "created_at" | "updated_at" | "category_name">): Promise<MenuItem> {
  const adminUrl = getAdminUrl();
  if (!adminUrl) throw new Error("ADMIN_URL не настроен");
  return fetchJson(`${adminUrl}/menu`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateMenuItem(id: number, data: Partial<MenuItem>): Promise<MenuItem> {
  const adminUrl = getAdminUrl();
  if (!adminUrl) throw new Error("ADMIN_URL не настроен");
  return fetchJson(`${adminUrl}/menu/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteMenuItem(id: number): Promise<void> {
  const adminUrl = getAdminUrl();
  if (!adminUrl) throw new Error("ADMIN_URL не настроен");
  await fetchJson(`${adminUrl}/menu/${id}`, { method: "DELETE" });
}

// ===== ORDERS =====
export interface Order {
  id: number;
  customer_name: string;
  customer_phone: string;
  customer_address: string;
  comment: string;
  items: Array<{ id: number; name: string; price: number; quantity: number }>;
  total_price: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export async function getOrders(status?: string): Promise<Order[]> {
  const adminUrl = getAdminUrl();
  if (!adminUrl) throw new Error("ADMIN_URL не настроен");
  const url = status ? `${adminUrl}/orders?status=${status}` : `${adminUrl}/orders`;
  return fetchJson(url);
}

export async function updateOrderStatus(id: number, status: string): Promise<Order> {
  const adminUrl = getAdminUrl();
  if (!adminUrl) throw new Error("ADMIN_URL не настроен");
  return fetchJson(`${adminUrl}/orders/${id}/status`, {
    method: "PUT",
    body: JSON.stringify({ status }),
  });
}

// ===== PUBLIC ORDER =====
export async function placeOrder(data: {
  customer_name: string;
  customer_phone: string;
  customer_address?: string;
  comment?: string;
  items: Array<{ id: number; name: string; price: number; quantity: number }>;
  total_price: number;
}): Promise<{ success: boolean; order: { id: number; created_at: string } }> {
  const ordersUrl = getOrdersUrl();
  if (!ordersUrl) throw new Error("ORDERS_URL не настроен");
  return fetchJson(ordersUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {},
  });
}
