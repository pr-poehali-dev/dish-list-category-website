import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, clearAuth, getStoredUser } from "@/lib/auth";
import {
  getStats, getCategories, getMenuItems, getOrders,
  createCategory, updateCategory, deleteCategory,
  createMenuItem, updateMenuItem, deleteMenuItem,
  updateOrderStatus,
  type Stats, type Category, type MenuItem, type Order
} from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Pizza, ShoppingBag, Tag, BarChart3, LogOut, Plus, Pencil, Trash2,
  ChevronDown, Package, Flame, Sparkles, X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Tab = "dashboard" | "orders" | "menu" | "categories";

const ORDER_STATUS_LABELS: Record<string, { label: string; color: string }> = {
  new: { label: "Новый", color: "bg-blue-500" },
  processing: { label: "В работе", color: "bg-yellow-500" },
  completed: { label: "Выполнен", color: "bg-green-500" },
  cancelled: { label: "Отменён", color: "bg-red-500" },
};

export default function Admin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const user = getStoredUser();

  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [stats, setStats] = useState<Stats | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  // Modals
  const [categoryModal, setCategoryModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editingMenuItem, setEditingMenuItem] = useState<MenuItem | null>(null);

  // Form state
  const [categoryForm, setCategoryForm] = useState({ name: "", slug: "", sort_order: 0, is_active: true });
  const [menuForm, setMenuForm] = useState({
    category_id: 0, name: "", description: "", price: 0,
    weight: "", image_url: "", is_new: false, is_hot: false, is_active: true, sort_order: 0
  });

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const loadStats = useCallback(async () => {
    try {
      const data = await getStats();
      setStats(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const loadCategories = useCallback(async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const loadMenuItems = useCallback(async () => {
    try {
      const data = await getMenuItems();
      setMenuItems(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const loadOrders = useCallback(async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    if (activeTab === "dashboard") loadStats();
    if (activeTab === "categories" || activeTab === "menu") loadCategories();
    if (activeTab === "menu") loadMenuItems();
    if (activeTab === "orders") loadOrders();
  }, [activeTab, loadStats, loadCategories, loadMenuItems, loadOrders]);

  const handleLogout = () => {
    clearAuth();
    navigate("/admin/login");
  };

  // ===== CATEGORIES =====
  const openCategoryCreate = () => {
    setEditingCategory(null);
    setCategoryForm({ name: "", slug: "", sort_order: categories.length, is_active: true });
    setCategoryModal(true);
  };

  const openCategoryEdit = (cat: Category) => {
    setEditingCategory(cat);
    setCategoryForm({ name: cat.name, slug: cat.slug, sort_order: cat.sort_order, is_active: cat.is_active });
    setCategoryModal(true);
  };

  const handleCategorySave = async () => {
    setLoading(true);
    try {
      if (editingCategory) {
        await updateCategory(editingCategory.id, categoryForm);
        toast({ title: "Категория обновлена" });
      } else {
        await createCategory(categoryForm);
        toast({ title: "Категория создана" });
      }
      setCategoryModal(false);
      await loadCategories();
    } catch (err) {
      toast({ title: "Ошибка", description: err instanceof Error ? err.message : "Ошибка", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryDelete = async (id: number) => {
    if (!confirm("Удалить категорию?")) return;
    try {
      await deleteCategory(id);
      toast({ title: "Категория удалена" });
      await loadCategories();
    } catch (err) {
      toast({ title: "Ошибка", description: err instanceof Error ? err.message : "Ошибка", variant: "destructive" });
    }
  };

  // ===== MENU =====
  const openMenuCreate = () => {
    setEditingMenuItem(null);
    setMenuForm({
      category_id: categories[0]?.id || 0, name: "", description: "", price: 0,
      weight: "", image_url: "", is_new: false, is_hot: false, is_active: true, sort_order: 0
    });
    setMenuModal(true);
  };

  const openMenuEdit = (item: MenuItem) => {
    setEditingMenuItem(item);
    setMenuForm({
      category_id: item.category_id, name: item.name, description: item.description,
      price: item.price, weight: item.weight, image_url: item.image_url,
      is_new: item.is_new, is_hot: item.is_hot, is_active: item.is_active, sort_order: item.sort_order
    });
    setMenuModal(true);
  };

  const handleMenuSave = async () => {
    setLoading(true);
    try {
      if (editingMenuItem) {
        await updateMenuItem(editingMenuItem.id, menuForm);
        toast({ title: "Позиция обновлена" });
      } else {
        await createMenuItem(menuForm);
        toast({ title: "Позиция создана" });
      }
      setMenuModal(false);
      await loadMenuItems();
    } catch (err) {
      toast({ title: "Ошибка", description: err instanceof Error ? err.message : "Ошибка", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleMenuDelete = async (id: number) => {
    if (!confirm("Удалить позицию?")) return;
    try {
      await deleteMenuItem(id);
      toast({ title: "Позиция удалена" });
      await loadMenuItems();
    } catch (err) {
      toast({ title: "Ошибка", description: err instanceof Error ? err.message : "Ошибка", variant: "destructive" });
    }
  };

  // ===== ORDERS =====
  const handleOrderStatus = async (id: number, status: string) => {
    try {
      await updateOrderStatus(id, status);
      toast({ title: "Статус обновлён" });
      await loadOrders();
    } catch (err) {
      toast({ title: "Ошибка", description: err instanceof Error ? err.message : "Ошибка", variant: "destructive" });
    }
  };

  const navItems = [
    { id: "dashboard", label: "Дашборд", icon: BarChart3 },
    { id: "orders", label: "Заказы", icon: ShoppingBag },
    { id: "menu", label: "Меню", icon: Pizza },
    { id: "categories", label: "Категории", icon: Tag },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-60 bg-card border-r border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Pizza className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-foreground">БУМ ПИЦЦА</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Админ-панель</p>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as Tab)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                activeTab === id
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-border">
          <div className="px-3 py-2 mb-2">
            <p className="text-xs font-medium text-foreground">{user?.name || "Admin"}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Выйти
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">

          {/* DASHBOARD */}
          {activeTab === "dashboard" && (
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-6">Дашборд</h1>
              {stats ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="bg-card border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" /> Всего заказов
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-foreground">{stats.orders.total}</p>
                      <p className="text-sm text-muted-foreground">Выручка: {Number(stats.orders.revenue).toLocaleString("ru")} ₽</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                        <Package className="w-4 h-4" /> Новые заказы
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-primary">{stats.newOrders.count}</p>
                      <p className="text-sm text-muted-foreground">Ожидают обработки</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                        <Pizza className="w-4 h-4" /> Позиций в меню
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-foreground">{stats.menu.count}</p>
                      <p className="text-sm text-muted-foreground">Активных</p>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="text-muted-foreground">Загрузка статистики...</div>
              )}
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Добро пожаловать в панель управления <strong className="text-foreground">БУМ ПИЦЦА</strong>.
                  Используйте меню слева для управления заказами, меню и категориями.
                </p>
              </div>
            </div>
          )}

          {/* ORDERS */}
          {activeTab === "orders" && (
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-6">Заказы</h1>
              {orders.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">Заказов пока нет</div>
              ) : (
                <div className="space-y-3">
                  {orders.map((order) => {
                    const statusInfo = ORDER_STATUS_LABELS[order.status] || { label: order.status, color: "bg-gray-500" };
                    return (
                      <Card key={order.id} className="bg-card border-border">
                        <CardContent className="pt-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="font-bold text-foreground">#{order.id}</span>
                                <Badge className={`${statusInfo.color} text-white text-xs`}>
                                  {statusInfo.label}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {new Date(order.created_at).toLocaleString("ru")}
                                </span>
                              </div>
                              <p className="text-sm text-foreground">{order.customer_name} · {order.customer_phone}</p>
                              {order.customer_address && (
                                <p className="text-xs text-muted-foreground mt-1">{order.customer_address}</p>
                              )}
                              {order.comment && (
                                <p className="text-xs text-muted-foreground mt-1 italic">"{order.comment}"</p>
                              )}
                              <div className="mt-2">
                                {Array.isArray(order.items) && order.items.map((item, i) => (
                                  <span key={i} className="text-xs text-muted-foreground">
                                    {item.name} × {item.quantity || 1}
                                    {i < order.items.length - 1 && ", "}
                                  </span>
                                ))}
                              </div>
                              <p className="font-bold text-primary mt-2">{Number(order.total_price).toLocaleString("ru")} ₽</p>
                            </div>
                            <div className="flex flex-col gap-1 min-w-[140px]">
                              <Select
                                value={order.status}
                                onValueChange={(v) => handleOrderStatus(order.id, v)}
                              >
                                <SelectTrigger className="h-8 text-xs bg-background border-border">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {Object.entries(ORDER_STATUS_LABELS).map(([val, { label }]) => (
                                    <SelectItem key={val} value={val}>{label}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* MENU */}
          {activeTab === "menu" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-foreground">Меню</h1>
                <Button onClick={openMenuCreate} className="bg-primary hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-2" /> Добавить позицию
                </Button>
              </div>
              {menuItems.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">Нет позиций в меню</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {menuItems.map((item) => (
                    <Card key={item.id} className={`bg-card border-border ${!item.is_active ? "opacity-50" : ""}`}>
                      <CardContent className="pt-4">
                        {item.image_url && (
                          <img
                            src={item.image_url}
                            alt={item.name}
                            className="w-full h-32 object-cover rounded-md mb-3"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                          />
                        )}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-1 flex-wrap">
                              <p className="font-medium text-foreground text-sm">{item.name}</p>
                              {item.is_new && <Sparkles className="w-3 h-3 text-blue-400" />}
                              {item.is_hot && <Flame className="w-3 h-3 text-orange-500" />}
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.description}</p>
                            <div className="flex items-center gap-3 mt-2">
                              <span className="font-bold text-primary">{item.price} ₽</span>
                              {item.weight && <span className="text-xs text-muted-foreground">{item.weight}</span>}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{item.category_name}</p>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" variant="outline" onClick={() => openMenuEdit(item)} className="flex-1 h-7 text-xs border-border">
                            <Pencil className="w-3 h-3 mr-1" /> Ред.
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleMenuDelete(item.id)} className="h-7 text-xs border-border text-destructive hover:text-destructive">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* CATEGORIES */}
          {activeTab === "categories" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-foreground">Категории</h1>
                <Button onClick={openCategoryCreate} className="bg-primary hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-2" /> Добавить
                </Button>
              </div>
              {categories.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">Нет категорий</div>
              ) : (
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <div key={cat.id} className="flex items-center justify-between bg-card border border-border rounded-lg px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Tag className="w-4 h-4 text-primary" />
                        <div>
                          <p className="font-medium text-foreground text-sm">{cat.name}</p>
                          <p className="text-xs text-muted-foreground">/{cat.slug} · порядок: {cat.sort_order}</p>
                        </div>
                        {!cat.is_active && (
                          <Badge variant="outline" className="text-xs text-muted-foreground">Скрыта</Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => openCategoryEdit(cat)} className="h-7 text-xs border-border">
                          <Pencil className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleCategoryDelete(cat.id)} className="h-7 text-xs border-border text-destructive hover:text-destructive">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Category Modal */}
      <Dialog open={categoryModal} onOpenChange={setCategoryModal}>
        <DialogContent className="bg-card border-border text-foreground">
          <DialogHeader>
            <DialogTitle>{editingCategory ? "Редактировать категорию" : "Новая категория"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <Label>Название</Label>
              <Input value={categoryForm.name} onChange={(e) => setCategoryForm(f => ({ ...f, name: e.target.value }))} className="mt-1 bg-background border-border" />
            </div>
            <div>
              <Label>Slug (URL)</Label>
              <Input value={categoryForm.slug} onChange={(e) => setCategoryForm(f => ({ ...f, slug: e.target.value }))} placeholder="pizza" className="mt-1 bg-background border-border" />
            </div>
            <div>
              <Label>Порядок сортировки</Label>
              <Input type="number" value={categoryForm.sort_order} onChange={(e) => setCategoryForm(f => ({ ...f, sort_order: +e.target.value }))} className="mt-1 bg-background border-border" />
            </div>
            <div className="flex items-center gap-3">
              <Switch checked={categoryForm.is_active} onCheckedChange={(v) => setCategoryForm(f => ({ ...f, is_active: v }))} />
              <Label>Активна</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCategoryModal(false)} className="border-border">Отмена</Button>
            <Button onClick={handleCategorySave} disabled={loading} className="bg-primary hover:bg-primary/90">
              {loading ? "Сохранение..." : "Сохранить"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Menu Item Modal */}
      <Dialog open={menuModal} onOpenChange={setMenuModal}>
        <DialogContent className="bg-card border-border text-foreground max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingMenuItem ? "Редактировать позицию" : "Новая позиция"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div>
              <Label>Категория</Label>
              <Select value={String(menuForm.category_id)} onValueChange={(v) => setMenuForm(f => ({ ...f, category_id: +v }))}>
                <SelectTrigger className="mt-1 bg-background border-border">
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={String(cat.id)}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Название</Label>
              <Input value={menuForm.name} onChange={(e) => setMenuForm(f => ({ ...f, name: e.target.value }))} className="mt-1 bg-background border-border" />
            </div>
            <div>
              <Label>Описание</Label>
              <Textarea value={menuForm.description} onChange={(e) => setMenuForm(f => ({ ...f, description: e.target.value }))} className="mt-1 bg-background border-border resize-none" rows={2} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Цена (₽)</Label>
                <Input type="number" value={menuForm.price} onChange={(e) => setMenuForm(f => ({ ...f, price: +e.target.value }))} className="mt-1 bg-background border-border" />
              </div>
              <div>
                <Label>Вес/объём</Label>
                <Input value={menuForm.weight} onChange={(e) => setMenuForm(f => ({ ...f, weight: e.target.value }))} placeholder="300г" className="mt-1 bg-background border-border" />
              </div>
            </div>
            <div>
              <Label>URL изображения</Label>
              <Input value={menuForm.image_url} onChange={(e) => setMenuForm(f => ({ ...f, image_url: e.target.value }))} placeholder="https://..." className="mt-1 bg-background border-border" />
            </div>
            <div>
              <Label>Порядок</Label>
              <Input type="number" value={menuForm.sort_order} onChange={(e) => setMenuForm(f => ({ ...f, sort_order: +e.target.value }))} className="mt-1 bg-background border-border" />
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Switch checked={menuForm.is_new} onCheckedChange={(v) => setMenuForm(f => ({ ...f, is_new: v }))} />
                <Label className="flex items-center gap-1"><Sparkles className="w-3 h-3" /> Новинка</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={menuForm.is_hot} onCheckedChange={(v) => setMenuForm(f => ({ ...f, is_hot: v }))} />
                <Label className="flex items-center gap-1"><Flame className="w-3 h-3" /> Острое</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={menuForm.is_active} onCheckedChange={(v) => setMenuForm(f => ({ ...f, is_active: v }))} />
                <Label>Активно</Label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setMenuModal(false)} className="border-border">Отмена</Button>
            <Button onClick={handleMenuSave} disabled={loading} className="bg-primary hover:bg-primary/90">
              {loading ? "Сохранение..." : "Сохранить"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
