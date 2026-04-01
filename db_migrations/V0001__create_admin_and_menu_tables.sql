-- Create admin users table
CREATE TABLE IF NOT EXISTS t_p2600986_dish_list_category_w.admin_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'admin',
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create categories table
CREATE TABLE IF NOT EXISTS t_p2600986_dish_list_category_w.categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create menu items table
CREATE TABLE IF NOT EXISTS t_p2600986_dish_list_category_w.menu_items (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES t_p2600986_dish_list_category_w.categories(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL,
  weight VARCHAR(100),
  image_url TEXT,
  is_new BOOLEAN DEFAULT FALSE,
  is_hot BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS t_p2600986_dish_list_category_w.orders (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50) NOT NULL,
  customer_address TEXT,
  comment TEXT,
  items JSONB NOT NULL,
  total_price NUMERIC(10,2) NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default admin user (password: admin123 - bcrypt hash)
INSERT INTO t_p2600986_dish_list_category_w.admin_users (email, password_hash, name, role)
VALUES ('L2lisjar@yandex.ru', '$2b$10$rOzJqQZk9Y8XVzKqQZ8XVe8XVzKqQZ8XVe8XVzKqQZ8XVe8XV2', 'Admin', 'superadmin')
ON CONFLICT (email) DO NOTHING;

-- Insert default categories
INSERT INTO t_p2600986_dish_list_category_w.categories (name, slug, sort_order) VALUES
  ('Пицца', 'pizza', 1),
  ('Салаты', 'salads', 2),
  ('Шаурма', 'shawarma', 3),
  ('Вок', 'wok', 4),
  ('Супы', 'soups', 5),
  ('Роллы', 'rolls', 6),
  ('Суши', 'sushi', 7),
  ('Напитки', 'drinks', 8),
  ('Десерты', 'desserts', 9)
ON CONFLICT (slug) DO NOTHING;
