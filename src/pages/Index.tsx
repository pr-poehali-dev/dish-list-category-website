import { useState } from "react";
import Icon from "@/components/ui/icon";

const PIZZA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/000adcc1-7517-4b5e-b72b-c1e0c4e0de46.jpg";
const SALAD_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/7a4ba731-3080-4aa6-9eb0-b7b3666d7b81.jpg";
const SHAWARMA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/1af0d2db-805b-4c04-acc3-3a14700ba39e.jpg";
const WOK_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/99e47631-7879-428e-87ba-41884de954c5.jpg";
const SOUP_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/57669875-fb74-471d-9c33-4464771b6cb7.jpg";
const SNACKS_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/8f14ed6d-5cf9-4f47-af1c-522029fb7a0f.jpg";
const ROLLS_TEMPURA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/0674aefd-3a70-407d-b82e-22023aab2a01.jpg";
const ROLLS_COLD_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/7420aeaa-d414-41a3-a581-c01ff9aee760.jpg";
const ROLLS_BAKED_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/83e7ab77-eba7-4bea-be71-fc69e53af61e.jpg";

type MenuItem = {
  id: number;
  name: string;
  desc: string;
  price: number;
  weight: string;
  image: string;
  hot?: boolean;
  isNew?: boolean;
};

type Category = {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
};

const MENU: Category[] = [
  {
    id: "pizza",
    label: "Пицца",
    emoji: "🍕",
    items: [
      { id: 1, name: "Грибная", desc: "Пицца с ароматными грибами и сыром", price: 480, weight: "", image: PIZZA_IMG },
      { id: 2, name: "Пармеджанно", desc: "Пицца с пармезаном и нежной начинкой", price: 580, weight: "", image: PIZZA_IMG },
      { id: 3, name: "Бифф", desc: "Пицца с говядиной и овощами", price: 650, weight: "", image: PIZZA_IMG },
      { id: 4, name: "Цезарь", desc: "Пицца в стиле салата Цезарь с курицей", price: 500, weight: "", image: PIZZA_IMG },
      { id: 5, name: "Мехико", desc: "Острая пицца с мексиканской начинкой", price: 650, weight: "", image: PIZZA_IMG, hot: true },
      { id: 6, name: "Салями", desc: "Классическая пицца с салями", price: 500, weight: "", image: PIZZA_IMG },
      { id: 7, name: "Ветчина и грибы", desc: "Сочная пицца с ветчиной и грибами", price: 580, weight: "", image: PIZZA_IMG },
      { id: 8, name: "Морская", desc: "Пицца с морепродуктами", price: 800, weight: "", image: PIZZA_IMG },
      { id: 9, name: "Бургер", desc: "Пицца в стиле бургера", price: 550, weight: "", image: PIZZA_IMG },
      { id: 10, name: "Пепперони", desc: "Пикантная пицца с пепперони", price: 550, weight: "", image: PIZZA_IMG, hot: true },
      { id: 11, name: "С домашним цыплёнком и грибами", desc: "Нежная пицца с цыплёнком и грибами", price: 570, weight: "", image: PIZZA_IMG },
      { id: 12, name: "Деревенская", desc: "Пицца с деревенской начинкой", price: 550, weight: "", image: PIZZA_IMG },
      { id: 13, name: "Курица BBQ", desc: "Пицца с курицей в соусе BBQ", price: 520, weight: "", image: PIZZA_IMG },
      { id: 14, name: "Четыре сыра", desc: "Пицца с четырьмя видами сыра", price: 520, weight: "", image: PIZZA_IMG },
      { id: 15, name: "Мясная", desc: "Пицца с ассорти мясной начинки", price: 550, weight: "", image: PIZZA_IMG },
      { id: 16, name: "С адыгейским сыром", desc: "Пицца с нежным адыгейским сыром", price: 520, weight: "", image: PIZZA_IMG },
    ]
  },
  {
    id: "salads",
    label: "Салаты",
    emoji: "🥗",
    items: [
      { id: 17, name: "Цезарь с курицей", desc: "Классический салат Цезарь с куриным филе", price: 390, weight: "", image: SALAD_IMG },
      { id: 18, name: "Цезарь с креветками", desc: "Салат Цезарь с тигровыми креветками", price: 490, weight: "", image: SALAD_IMG },
      { id: 19, name: "Греческий", desc: "Свежий греческий салат с брынзой", price: 430, weight: "", image: SALAD_IMG },
      { id: 20, name: "С хрустящими баклажанами", desc: "Салат с хрустящими жареными баклажанами", price: 380, weight: "", image: SALAD_IMG },
      { id: 21, name: "Оливье с курицей", desc: "Традиционный оливье с куриным филе", price: 330, weight: "", image: SALAD_IMG },
      { id: 22, name: "Оливье с говяжьей ветчиной", desc: "Оливье с нарезкой говяжьей ветчины", price: 360, weight: "", image: SALAD_IMG },
      { id: 23, name: "Оливье с говядиной", desc: "Оливье с отварной говядиной", price: 380, weight: "", image: SALAD_IMG },
    ]
  },
  {
    id: "shawarma",
    label: "Шаурма, сэндвич и бургер",
    emoji: "🌯",
    items: [
      { id: 24, name: "Шаурма Курица", desc: "Шаурма с куриным филе и свежими овощами", price: 360, weight: "", image: SHAWARMA_IMG },
      { id: 25, name: "Шаурма Курица кляр", desc: "Шаурма с курицей в кляре", price: 390, weight: "", image: SHAWARMA_IMG },
      { id: 26, name: "Шаурма Говядина", desc: "Шаурма с сочной говядиной", price: 460, weight: "", image: SHAWARMA_IMG },
      { id: 27, name: "Шаурма Говядина люкс", desc: "Премиум шаурма с говядиной", price: 490, weight: "", image: SHAWARMA_IMG },
      { id: 28, name: "Шаурма Креветка", desc: "Шаурма с тигровыми креветками", price: 460, weight: "", image: SHAWARMA_IMG },
      { id: 29, name: "Шаурма Креветка кляр", desc: "Шаурма с креветками в кляре", price: 490, weight: "", image: SHAWARMA_IMG },
      { id: 30, name: "Шаурма Креветка БУМ", desc: "Фирменная шаурма с креветками БУМ", price: 500, weight: "", image: SHAWARMA_IMG },
      { id: 31, name: "Шаурма Креветка БУМ кляр", desc: "Фирменная шаурма с креветками БУМ в кляре", price: 530, weight: "", image: SHAWARMA_IMG },
      { id: 32, name: "Бургер Курица", desc: "Сочный бургер с куриной котлетой", price: 460, weight: "", image: SHAWARMA_IMG },
      { id: 33, name: "Бургер Говядина", desc: "Классический бургер с котлетой из говядины", price: 500, weight: "", image: SHAWARMA_IMG },
      { id: 34, name: "Клаб Курица", desc: "Клаб-сэндвич с куриным филе", price: 450, weight: "", image: SHAWARMA_IMG },
      { id: 35, name: "Клаб Говядина", desc: "Клаб-сэндвич с говядиной", price: 550, weight: "", image: SHAWARMA_IMG },
      { id: 36, name: "Клаб Микс", desc: "Клаб-сэндвич с миксом начинок", price: 500, weight: "", image: SHAWARMA_IMG },
    ]
  },
  {
    id: "wok",
    label: "ВОК",
    emoji: "🍜",
    items: [
      { id: 37, name: "Удон с курицей", desc: "Лапша удон с куриным филе и овощами", price: 420, weight: "", image: WOK_IMG },
      { id: 38, name: "Удон с говядиной", desc: "Лапша удон с сочной говядиной", price: 480, weight: "", image: WOK_IMG },
      { id: 39, name: "Удон с креветками", desc: "Лапша удон с тигровыми креветками", price: 460, weight: "", image: WOK_IMG },
      { id: 40, name: "Теппан с курицей", desc: "Жареная лапша теппан с курицей", price: 380, weight: "", image: WOK_IMG },
      { id: 41, name: "Теппан с говядиной", desc: "Жареная лапша теппан с говядиной", price: 460, weight: "", image: WOK_IMG },
      { id: 42, name: "Теппан с креветками", desc: "Жареная лапша теппан с креветками", price: 440, weight: "", image: WOK_IMG },
    ]
  },
  {
    id: "soups",
    label: "Супы",
    emoji: "🍲",
    items: [
      { id: 43, name: "Том Ям", desc: "Традиционный тайский острый суп с морепродуктами", price: 560, weight: "", image: SOUP_IMG, hot: true },
      { id: 44, name: "Том Кха", desc: "Нежный тайский суп на кокосовом молоке", price: 440, weight: "", image: SOUP_IMG },
    ]
  },
  {
    id: "snacks",
    label: "Закуски",
    emoji: "🥢",
    items: [
      { id: 45, name: "Хачапури по-аджарски", desc: "Открытый хачапури с яйцом и сыром", price: 350, weight: "", image: SNACKS_IMG },
      { id: 46, name: "Картофель Фри", desc: "Хрустящий картофель фри", price: 200, weight: "", image: SNACKS_IMG },
      { id: 47, name: "Сырные палочки (5 шт.)", desc: "Хрустящие сырные палочки в панировке", price: 280, weight: "", image: SNACKS_IMG },
      { id: 48, name: "Халюжи (2 шт.)", desc: "Жареные сырные лепёшки", price: 220, weight: "", image: SNACKS_IMG },
      { id: 49, name: "Нагетсы (8 шт.)", desc: "Куриные наггетсы в хрустящей панировке", price: 280, weight: "", image: SNACKS_IMG },
      { id: 50, name: "Креветки темпура (5 шт.)", desc: "Креветки в нежном кляре темпура", price: 380, weight: "", image: SNACKS_IMG },
    ]
  },
  {
    id: "rolls-tempura",
    label: "Роллы темпура",
    emoji: "🔥",
    items: [
      { id: 51, name: "Краб темпура", desc: "Ролл с крабом в хрустящем кляре темпура", price: 380, weight: "", image: ROLLS_TEMPURA_IMG },
      { id: 52, name: "Лосось темпура", desc: "Ролл с лососем в кляре темпура", price: 440, weight: "", image: ROLLS_TEMPURA_IMG },
      { id: 53, name: "Креветки темпура", desc: "Ролл с креветками в кляре темпура", price: 410, weight: "", image: ROLLS_TEMPURA_IMG },
      { id: 54, name: "Угорь темпура", desc: "Ролл с угрём в кляре темпура", price: 430, weight: "", image: ROLLS_TEMPURA_IMG },
      { id: 55, name: "Краб маки", desc: "Классический маки с крабом", price: 230, weight: "", image: ROLLS_TEMPURA_IMG },
    ]
  },
  {
    id: "rolls-cold",
    label: "Холодные роллы",
    emoji: "🍣",
    items: [
      { id: 56, name: "Взрывной", desc: "Ролл со взрывным острым соусом", price: 380, weight: "", image: ROLLS_COLD_IMG, hot: true },
      { id: 57, name: "Спайси с креветкой", desc: "Острый ролл с тигровой креветкой", price: 360, weight: "", image: ROLLS_COLD_IMG, hot: true },
      { id: 58, name: "Спайси с лососем", desc: "Острый ролл с лососем", price: 380, weight: "", image: ROLLS_COLD_IMG, hot: true },
      { id: 59, name: "Маки с лососем", desc: "Классический маки с лососем", price: 230, weight: "", image: ROLLS_COLD_IMG },
      { id: 60, name: "Маки с креветкой", desc: "Классический маки с креветкой", price: 230, weight: "", image: ROLLS_COLD_IMG },
      { id: 61, name: "Маки с тунцом", desc: "Классический маки с тунцом", price: 230, weight: "", image: ROLLS_COLD_IMG },
      { id: 62, name: "Маки с крабом", desc: "Классический маки с крабом", price: 230, weight: "", image: ROLLS_COLD_IMG },
      { id: 63, name: "Маки с огурцом", desc: "Вегетарианский маки с огурцом", price: 190, weight: "", image: ROLLS_COLD_IMG },
      { id: 64, name: "Циба", desc: "Фирменный ролл Циба", price: 360, weight: "", image: ROLLS_COLD_IMG },
      { id: 65, name: "Тар-тар тунец", desc: "Ролл с тунцом тар-тар", price: 440, weight: "", image: ROLLS_COLD_IMG },
      { id: 66, name: "УНАГИ", desc: "Ролл с угрём унаги", price: 420, weight: "", image: ROLLS_COLD_IMG },
      { id: 67, name: "Эбби хруст", desc: "Хрустящий ролл Эбби", price: 420, weight: "", image: ROLLS_COLD_IMG },
      { id: 68, name: "Блэк стар", desc: "Ролл в чёрном рисе Блэк Стар", price: 420, weight: "", image: ROLLS_COLD_IMG },
      { id: 69, name: "Чикаго", desc: "Фирменный ролл Чикаго", price: 460, weight: "", image: ROLLS_COLD_IMG },
      { id: 70, name: "Оризона", desc: "Ролл Оризона с нежной начинкой", price: 470, weight: "", image: ROLLS_COLD_IMG },
      { id: 71, name: "Калифорния с креветкой", desc: "Классическая Калифорния с тигровой креветкой", price: 440, weight: "", image: ROLLS_COLD_IMG },
      { id: 72, name: "Калифорния с лососем", desc: "Калифорния с нежным лососем", price: 470, weight: "", image: ROLLS_COLD_IMG },
      { id: 73, name: "Калифорния с угрём", desc: "Калифорния с угрём унаги", price: 450, weight: "", image: ROLLS_COLD_IMG },
      { id: 74, name: "Калифорния с семгой", desc: "Калифорния с копчёной сёмгой", price: 460, weight: "", image: ROLLS_COLD_IMG },
      { id: 75, name: "Калифорния с тунцом", desc: "Калифорния с тунцом", price: 450, weight: "", image: ROLLS_COLD_IMG },
      { id: 76, name: "Калифорния с крабом", desc: "Классическая Калифорния с крабом", price: 400, weight: "", image: ROLLS_COLD_IMG },
      { id: 77, name: "Филадельфия с креветкой", desc: "Филадельфия со сливочным сыром и креветкой", price: 470, weight: "", image: ROLLS_COLD_IMG },
      { id: 78, name: "Филадельфия с лососем", desc: "Классическая Филадельфия с лососем", price: 470, weight: "", image: ROLLS_COLD_IMG },
      { id: 79, name: "Филадельфия с угрём", desc: "Филадельфия с угрём и сливочным сыром", price: 470, weight: "", image: ROLLS_COLD_IMG },
      { id: 80, name: "Манхеттен", desc: "Фирменный ролл Манхеттен", price: 440, weight: "", image: ROLLS_COLD_IMG },
    ]
  },
  {
    id: "rolls-baked",
    label: "Запечённые роллы",
    emoji: "⭐",
    items: [
      { id: 81, name: "Сапори", desc: "Запечённый ролл Сапори", price: 410, weight: "", image: ROLLS_BAKED_IMG },
      { id: 82, name: "Тори маки", desc: "Запечённый ролл с курицей", price: 410, weight: "", image: ROLLS_BAKED_IMG },
      { id: 83, name: "Акита", desc: "Запечённый ролл Акита", price: 440, weight: "", image: ROLLS_BAKED_IMG },
      { id: 84, name: "БУМ", desc: "Фирменный запечённый ролл БУМ", price: 440, weight: "", image: ROLLS_BAKED_IMG },
      { id: 85, name: "Миндальный шик", desc: "Запечённый ролл с миндальным акцентом", price: 440, weight: "", image: ROLLS_BAKED_IMG },
      { id: 86, name: "Ойси", desc: "Запечённый ролл Ойси", price: 460, weight: "", image: ROLLS_BAKED_IMG },
      { id: 87, name: "Классика с лососем", desc: "Классический запечённый ролл с лососем", price: 460, weight: "", image: ROLLS_BAKED_IMG },
      { id: 88, name: "Классика с креветкой", desc: "Классический запечённый ролл с креветкой", price: 470, weight: "", image: ROLLS_BAKED_IMG },
      { id: 89, name: "Классика с мидиями", desc: "Классический запечённый ролл с мидиями", price: 420, weight: "", image: ROLLS_BAKED_IMG },
      { id: 90, name: "Эби чиз", desc: "Запечённый ролл с креветкой и сыром", price: 380, weight: "", image: ROLLS_BAKED_IMG },
      { id: 91, name: "Изыска", desc: "Изысканный запечённый ролл", price: 440, weight: "", image: ROLLS_BAKED_IMG },
      { id: 92, name: "Бомбовый", desc: "Бомбовый запечённый ролл", price: 430, weight: "", image: ROLLS_BAKED_IMG },
    ]
  },
];

type CartItem = MenuItem & { qty: number };

const NAV_ITEMS = [
  { id: "menu", label: "Меню" },
  { id: "about", label: "О нас" },
  { id: "contacts", label: "Контакты" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<string>("menu");
  const [activeCategory, setActiveCategory] = useState<string>("pizza");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", comment: "" });

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const item = prev.find(i => i.id === id);
      if (!item) return prev;
      if (item.qty === 1) return prev.filter(i => i.id !== id);
      return prev.map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i);
    });
  };

  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  const handleOrder = () => {
    setOrderSuccess(true);
    setCart([]);
    setForm({ name: "", phone: "", address: "", comment: "" });
    setTimeout(() => {
      setOrderSuccess(false);
      setOrderOpen(false);
    }, 3000);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-oswald text-2xl font-bold tracking-wider">
            <span className="text-gradient">БУМ</span>
            <span className="text-foreground/80 ml-1">ПИЦЦА</span>
          </div>

          <nav className="hidden md:flex gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-oswald text-sm tracking-widest px-4 py-2 rounded-md transition-all ${
                  activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-foreground/60 hover:text-foreground hover:bg-white/5"
                }`}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 bg-primary text-primary-foreground font-oswald tracking-wide px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all"
            >
              <Icon name="ShoppingCart" size={16} />
              <span className="hidden sm:inline">Корзина</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-foreground/60 hover:text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-fade-in">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-6 py-4 font-oswald tracking-widest text-sm border-b border-border/50 hover:bg-white/5 transition-colors"
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PIZZA_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary text-sm font-golos px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Доставка в течение 1 часа
            </div>
            <h1 className="font-oswald text-6xl md:text-8xl font-bold leading-none tracking-tight mb-6 animate-fade-in stagger-1">
              <span className="text-gradient">БУМ</span>
              <br />
              <span className="text-foreground">ПИЦЦА</span>
            </h1>
            <p className="text-foreground/60 text-lg md:text-xl font-golos leading-relaxed mb-10 animate-fade-in stagger-2">
              Пицца, роллы и бургеры с доставкой по городу.<br />
              Всегда горячо. Всегда атмосферно.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in stagger-3">
              <button
                onClick={() => scrollToSection("menu")}
                className="bg-primary text-primary-foreground font-oswald tracking-widest px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105"
              >
                СМОТРЕТЬ МЕНЮ
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="bg-white/5 border border-white/15 text-foreground font-oswald tracking-widest px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-all"
              >
                КОНТАКТЫ
              </button>
            </div>

            <div className="flex flex-wrap gap-8 mt-16 animate-fade-in stagger-4">
              {[
                { val: "9", label: "Категорий блюд" },
                { val: "90+", label: "Блюд в меню" },
                { val: "1 час", label: "Доставка" },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-oswald text-4xl font-bold text-primary">{stat.val}</div>
                  <div className="text-foreground/50 text-sm font-golos mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-primary font-oswald tracking-widest text-sm mb-2">— НАШЕ МЕНЮ</p>
            <h2 className="font-oswald text-5xl font-bold text-foreground">Выберите блюдо</h2>
          </div>

          <div className="flex gap-2 flex-wrap mb-10">
            {MENU.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 font-oswald tracking-wider text-sm px-4 py-2.5 rounded-lg transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground/60 hover:text-foreground hover:bg-white/10"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {MENU.filter(c => c.id === activeCategory).map(cat => (
            <div key={cat.id} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {cat.items.map((item, idx) => {
                const inCart = cart.find(i => i.id === item.id);
                return (
                  <div
                    key={item.id}
                    className="bg-card border border-border rounded-xl overflow-hidden card-hover animate-fade-in"
                    style={{ animationDelay: `${idx * 0.08}s`, opacity: 0 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {item.hot && (
                          <span className="bg-red-500/90 text-white text-xs font-golos font-semibold px-2 py-0.5 rounded-full">
                            🌶 Острое
                          </span>
                        )}
                        {item.isNew && (
                          <span className="bg-primary/90 text-primary-foreground text-xs font-golos font-semibold px-2 py-0.5 rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-3 right-3 text-foreground/50 text-xs font-golos">
                        {item.weight}
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-oswald text-lg font-semibold text-foreground mb-1">{item.name}</h3>
                      <p className="text-foreground/50 text-sm font-golos leading-relaxed mb-4 min-h-[40px]">{item.desc}</p>

                      <div className="flex items-center justify-between">
                        <span className="font-oswald text-xl font-bold text-primary">{item.price} ₽</span>

                        {inCart ? (
                          <div className="flex items-center gap-2 bg-secondary rounded-lg">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
                            >
                              <Icon name="Minus" size={14} />
                            </button>
                            <span className="font-oswald text-sm font-bold w-5 text-center">{inCart.qty}</span>
                            <button
                              onClick={() => addToCart(item)}
                              className="w-8 h-8 flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                            >
                              <Icon name="Plus" size={14} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(item)}
                            className="flex items-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground text-sm font-oswald tracking-wider px-4 py-2 rounded-lg transition-all"
                          >
                            <Icon name="Plus" size={14} />
                            В корзину
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-oswald tracking-widest text-sm mb-2">— О НАС</p>
              <h2 className="font-oswald text-5xl font-bold text-foreground mb-6">История<br />ресторана</h2>
              <p className="text-foreground/60 font-golos text-lg leading-relaxed mb-6">
                Tokyo Night открылся в 2018 году с одной идеей — объединить лучшее из японской, азиатской кухни и уличного фастфуда под одной крышей.
              </p>
              <p className="text-foreground/50 font-golos leading-relaxed mb-8">
                Наши шефы прошли стажировку в Токио и Сеуле, привезя с собой аутентичные рецепты и технологии. Каждый ролл — это баланс вкуса, текстуры и визуальной эстетики.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "Award", label: "6 лет опыта", sub: "На рынке с 2018 года" },
                  { icon: "ChefHat", label: "Шеф-повара", sub: "Стажировка в Японии" },
                  { icon: "Flame" as const, label: "Свежие продукты", sub: "Ежедневные поставки" },
                  { icon: "Star" as const, label: "4.9 рейтинг", sub: "Более 3000 отзывов" },
                ].map(f => (
                  <div key={f.label} className="flex gap-3 items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={f.icon} size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-oswald font-semibold text-foreground text-sm">{f.label}</div>
                      <div className="text-foreground/50 text-xs font-golos mt-0.5">{f.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={ROLLS_COLD_IMG} alt="Наш ресторан" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-5 rounded-xl shadow-2xl">
                <div className="font-oswald text-3xl font-bold">5000+</div>
                <div className="text-primary-foreground/80 text-sm font-golos">довольных гостей</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-primary font-oswald tracking-widest text-sm mb-2">— КОНТАКТЫ</p>
            <h2 className="font-oswald text-5xl font-bold text-foreground">Свяжитесь с нами</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-10">
            {[
              { icon: "Phone" as const, title: "Телефон", lines: ["+7 (918) 228-63-63", "+7 (918) 224-63-63"], sub: "Принимаем заказы по телефону" },
              { icon: "MapPin" as const, title: "Адрес", lines: ["г. Майкоп, ул. Промышленная 28И"], sub: "Пн–Вс 10:00–23:00 · Самовывоз" },
              { icon: "Clock" as const, title: "Часы работы", lines: ["Пн–Вс: 10:00 – 23:00"], sub: "Заказы принимаем с 10:00 до 22:30" },
            ].map(c => (
              <div key={c.title} className="bg-background border border-border rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={c.icon} size={22} className="text-primary" />
                </div>
                <h3 className="font-oswald text-xl font-bold text-foreground mb-3">{c.title}</h3>
                {c.lines.map(l => (
                  <p key={l} className="font-golos text-foreground/80 font-medium mb-1">{l}</p>
                ))}
                <p className="text-foreground/40 font-golos text-sm mt-3">{c.sub}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-oswald text-2xl font-bold text-foreground mb-1">Готовы сделать заказ?</h3>
              <p className="text-foreground/50 font-golos">Выберите блюда из меню и оформите доставку прямо сейчас</p>
            </div>
            <button
              onClick={() => scrollToSection("menu")}
              className="bg-primary text-primary-foreground font-oswald tracking-widest px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex-shrink-0"
            >
              ПЕРЕЙТИ К МЕНЮ
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-oswald text-xl font-bold">
            <span className="text-gradient">БУМ</span>
            <span className="text-foreground/50 ml-1">ПИЦЦА</span>
          </div>
          <p className="text-foreground/30 font-golos text-sm text-center">© 2024 БУМ Пицца · Доставка еды по городу</p>
          <div className="text-foreground/40 font-golos text-sm">+7 (999) 123-45-67</div>
        </div>
      </footer>

      {/* CART DRAWER */}
      {cartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="relative w-full max-w-md bg-card border-l border-border h-full flex flex-col animate-slide-in-right">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <h2 className="font-oswald text-2xl font-bold text-foreground">КОРЗИНА</h2>
              <button onClick={() => setCartOpen(false)} className="text-foreground/50 hover:text-foreground transition-colors">
                <Icon name="X" size={22} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="font-oswald text-xl font-semibold text-foreground mb-2">Корзина пуста</h3>
                <p className="text-foreground/40 font-golos text-sm">Добавьте блюда из меню</p>
                <button
                  onClick={() => { setCartOpen(false); scrollToSection("menu"); }}
                  className="mt-6 bg-primary text-primary-foreground font-oswald tracking-wider px-6 py-3 rounded-lg text-sm hover:bg-primary/90 transition-all"
                >
                  ПЕРЕЙТИ К МЕНЮ
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-3 items-center bg-secondary rounded-lg p-3">
                      <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-oswald font-semibold text-foreground text-sm truncate">{item.name}</div>
                        <div className="text-primary font-oswald text-base font-bold mt-0.5">{item.price * item.qty} ₽</div>
                      </div>
                      <div className="flex items-center gap-2 bg-card rounded-lg px-1">
                        <button onClick={() => removeFromCart(item.id)} className="w-7 h-7 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors">
                          <Icon name="Minus" size={12} />
                        </button>
                        <span className="font-oswald font-bold text-sm w-4 text-center">{item.qty}</span>
                        <button onClick={() => addToCart(item)} className="w-7 h-7 flex items-center justify-center text-primary hover:text-primary/80 transition-colors">
                          <Icon name="Plus" size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-5 border-t border-border space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/60 font-golos">Сумма заказа</span>
                    <span className="font-oswald text-xl font-bold text-foreground">{totalPrice} ₽</span>
                  </div>
                  {totalPrice < 1000 && (
                    <div className="text-xs text-foreground/40 font-golos bg-secondary rounded-lg p-3">
                      До бесплатной доставки: <span className="text-primary font-semibold">{1000 - totalPrice} ₽</span>
                    </div>
                  )}
                  <button
                    onClick={() => { setCartOpen(false); setOrderOpen(true); }}
                    className="w-full bg-primary text-primary-foreground font-oswald tracking-widest py-4 rounded-xl text-base font-semibold hover:bg-primary/90 transition-all"
                  >
                    ОФОРМИТЬ ЗАКАЗ — {totalPrice} ₽
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ORDER MODAL */}
      {orderOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => !orderSuccess && setOrderOpen(false)}
          />
          <div className="relative bg-card border border-border rounded-2xl w-full max-w-lg p-8 animate-scale-in">
            {orderSuccess ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-oswald text-3xl font-bold text-foreground mb-2">ЗАКАЗ ПРИНЯТ!</h3>
                <p className="text-foreground/60 font-golos">Мы позвоним вам в течение 5 минут для подтверждения</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-oswald text-2xl font-bold text-foreground">ОФОРМЛЕНИЕ ЗАКАЗА</h2>
                  <button onClick={() => setOrderOpen(false)} className="text-foreground/50 hover:text-foreground">
                    <Icon name="X" size={20} />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="font-golos text-sm text-foreground/60 mb-1.5 block">Ваше имя *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-golos text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-golos text-sm text-foreground/60 mb-1.5 block">Телефон *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-golos text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-golos text-sm text-foreground/60 mb-1.5 block">Адрес доставки *</label>
                    <input
                      type="text"
                      value={form.address}
                      onChange={e => setForm({ ...form, address: e.target.value })}
                      placeholder="ул. Примерная, д. 10, кв. 5"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-golos text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-golos text-sm text-foreground/60 mb-1.5 block">Комментарий</label>
                    <textarea
                      value={form.comment}
                      onChange={e => setForm({ ...form, comment: e.target.value })}
                      placeholder="Код домофона, пожелания..."
                      rows={2}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-golos text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center mb-5 p-4 bg-secondary rounded-lg">
                  <span className="font-golos text-foreground/60">Итого к оплате</span>
                  <span className="font-oswald text-2xl font-bold text-primary">{totalPrice} ₽</span>
                </div>

                <button
                  onClick={handleOrder}
                  disabled={!form.name || !form.phone || !form.address}
                  className="w-full bg-primary text-primary-foreground font-oswald tracking-widest py-4 rounded-xl text-base font-semibold hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  ПОДТВЕРДИТЬ ЗАКАЗ
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating cart */}
      {totalItems > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground font-oswald tracking-wider px-5 py-3.5 rounded-full shadow-2xl shadow-primary/30 flex items-center gap-3 text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-105 animate-fade-in"
        >
          <Icon name="ShoppingCart" size={18} />
          <span>{totalItems} блюд · {totalPrice} ₽</span>
        </button>
      )}
    </div>
  );
}