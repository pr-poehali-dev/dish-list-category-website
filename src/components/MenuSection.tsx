import Icon from "@/components/ui/icon";

const PIZZA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/000adcc1-7517-4b5e-b72b-c1e0c4e0de46.jpg";
const SALAD_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/7a4ba731-3080-4aa6-9eb0-b7b3666d7b81.jpg";
const SHAWARMA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/1af0d2db-805b-4c04-acc3-3a14700ba39e.jpg";
const WOK_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/99e47631-7879-428e-87ba-41884de954c5.jpg";
const SOUP_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/57669875-fb74-471d-9c33-4464771b6cb7.jpg";
const TOM_YAM_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/5c077e97-098b-4cba-a884-8d22c09d781c.jpg";
const TOM_KHA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/cfac46b6-e31f-43fd-a12a-e94dec1a5ef8.png";
const SNACKS_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/8f14ed6d-5cf9-4f47-af1c-522029fb7a0f.jpg";
const ROLLS_TEMPURA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/0674aefd-3a70-407d-b82e-22023aab2a01.jpg";
const ROLLS_COLD_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/7420aeaa-d414-41a3-a581-c01ff9aee760.jpg";
const ROLLS_BAKED_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/83e7ab77-eba7-4bea-be71-fc69e53af61e.jpg";
const EBI_HRUST_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/2baf763d-ba50-40ae-9387-1ef76d73558b.jpg";
const KLASSIKA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/78d4560c-13c6-43eb-8dcb-7613ceae6a57.jpg";
const TEMPURA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/c20e997c-4530-4749-bb24-9bac88bd7b1f.jpg";
const MAKI_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/b89942cb-b1ed-48f3-b88b-1e9ce98b2677.jpg";
const MAKI_CUCUMBER_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/ac5146c7-e22e-4e3b-a6b1-5606ff4023eb.jpg";
const MAKI_TUNA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/4f033869-605c-41c9-b6b8-c7fe199074a1.jpg";
const MAKI_CRAB_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/f5f2beb5-250d-4a17-bc9a-7b8ddebea257.jpeg";
const MAKI_SHRIMP_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/6f3646db-1b8e-45ea-8e3c-8140051b66f1.jpg";
const FILADELFIYA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/65355c59-8fb8-4c64-b351-c1a1e741a31a.jpg";

export type MenuItem = {
  id: number;
  name: string;
  desc: string;
  price: number;
  weight: string;
  image: string;
  hot?: boolean;
  isNew?: boolean;
};

export type Category = {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
};

export const MENU: Category[] = [
  {
    id: "pizza",
    label: "Пицца",
    emoji: "🍕",
    items: [
      { id: 1, name: "Грибная", desc: "Пицца с ароматными грибами и сыром", price: 480, weight: "", image: PIZZA_IMG },
      { id: 2, name: "Пармеджанно", desc: "Пицца с пармезаном и нежной начинкой", price: 580, weight: "", image: PIZZA_IMG },
      { id: 3, name: "Бифф", desc: "Пицца с говядиной и овощами", price: 650, weight: "", image: PIZZA_IMG },
      { id: 4, name: "Цезарь", desc: "Пицца в стиле салата Цезарь с курицей", price: 500, weight: "", image: PIZZA_IMG },
      { id: 5, name: "Мехико", desc: "Пицца с тунцом", price: 650, weight: "", image: PIZZA_IMG },
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
      { id: 43, name: "Том Ям", desc: "Традиционный тайский острый суп с морепродуктами", price: 560, weight: "", image: TOM_YAM_IMG, hot: true },
      { id: 44, name: "Том Кха", desc: "Нежный тайский суп на кокосовом молоке", price: 440, weight: "", image: TOM_KHA_IMG },
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
      { id: 51, name: "Краб темпура", desc: "Ролл с крабом в хрустящем кляре темпура", price: 380, weight: "", image: TEMPURA_IMG },
      { id: 52, name: "Лосось темпура", desc: "Ролл с лососем в кляре темпура", price: 440, weight: "", image: TEMPURA_IMG },
      { id: 53, name: "Креветки темпура", desc: "Ролл с креветками в кляре темпура", price: 410, weight: "", image: TEMPURA_IMG },
      { id: 54, name: "Угорь темпура", desc: "Ролл с угрём в кляре темпура", price: 430, weight: "", image: TEMPURA_IMG },
      { id: 55, name: "Краб маки", desc: "Классический маки с крабом", price: 230, weight: "", image: MAKI_IMG },
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
      { id: 59, name: "Маки с лососем", desc: "Классический маки с лососем", price: 230, weight: "", image: MAKI_IMG },
      { id: 60, name: "Маки с креветкой", desc: "Классический маки с креветкой", price: 230, weight: "", image: MAKI_SHRIMP_IMG },
      { id: 61, name: "Маки с тунцом", desc: "Классический маки с тунцом", price: 230, weight: "", image: MAKI_TUNA_IMG },
      { id: 62, name: "Маки с крабом", desc: "Классический маки с крабом", price: 230, weight: "", image: MAKI_CRAB_IMG },
      { id: 63, name: "Маки с огурцом", desc: "Вегетарианский маки с огурцом", price: 190, weight: "", image: MAKI_CUCUMBER_IMG },
      { id: 64, name: "Циба", desc: "Фирменный ролл Циба", price: 360, weight: "", image: ROLLS_COLD_IMG },
      { id: 65, name: "Тар-тар тунец", desc: "Ролл с тунцом тар-тар", price: 440, weight: "", image: ROLLS_COLD_IMG },
      { id: 66, name: "УНАГИ", desc: "Ролл с угрём унаги", price: 420, weight: "", image: ROLLS_COLD_IMG },
      { id: 67, name: "Эбби хруст", desc: "Хрустящий ролл Эбби", price: 420, weight: "", image: EBI_HRUST_IMG },
      { id: 68, name: "Блэк стар", desc: "Ролл в чёрном рисе Блэк Стар", price: 420, weight: "", image: ROLLS_COLD_IMG },
      { id: 69, name: "Чикаго", desc: "Фирменный ролл Чикаго", price: 460, weight: "", image: ROLLS_COLD_IMG },
      { id: 70, name: "Оризона", desc: "Ролл Оризона с нежной начинкой", price: 470, weight: "", image: ROLLS_COLD_IMG },
      { id: 71, name: "Калифорния с креветкой", desc: "Классическая Калифорния с тигровой креветкой", price: 440, weight: "", image: ROLLS_COLD_IMG },
      { id: 72, name: "Калифорния с лососем", desc: "Калифорния с нежным лососем", price: 470, weight: "", image: ROLLS_COLD_IMG },
      { id: 73, name: "Калифорния с угрём", desc: "Калифорния с угрём унаги", price: 450, weight: "", image: ROLLS_COLD_IMG },
      { id: 74, name: "Калифорния с семгой", desc: "Калифорния с копчёной сёмгой", price: 460, weight: "", image: ROLLS_COLD_IMG },
      { id: 75, name: "Калифорния с тунцом", desc: "Калифорния с тунцом", price: 450, weight: "", image: ROLLS_COLD_IMG },
      { id: 76, name: "Калифорния с крабом", desc: "Классическая Калифорния с крабом", price: 400, weight: "", image: ROLLS_COLD_IMG },
      { id: 77, name: "Филадельфия с креветкой", desc: "Филадельфия со сливочным сыром и креветкой", price: 470, weight: "", image: FILADELFIYA_IMG },
      { id: 78, name: "Филадельфия с лососем", desc: "Классическая Филадельфия с лососем", price: 470, weight: "", image: FILADELFIYA_IMG },
      { id: 79, name: "Филадельфия с угрём", desc: "Филадельфия с угрём и сливочным сыром", price: 470, weight: "", image: FILADELFIYA_IMG },

    ]
  },
  {
    id: "rolls-baked",
    label: "Запечённые роллы",
    emoji: "⭐",
    items: [

      { id: 82, name: "Тори маки", desc: "Запечённый ролл с курицей", price: 410, weight: "", image: ROLLS_BAKED_IMG },
      { id: 83, name: "Акита", desc: "Запечённый ролл Акита", price: 440, weight: "", image: ROLLS_BAKED_IMG },
      { id: 84, name: "БУМ", desc: "Фирменный запечённый ролл БУМ", price: 440, weight: "", image: ROLLS_BAKED_IMG },
      { id: 85, name: "Миндальный шик", desc: "Запечённый ролл с миндальным акцентом", price: 440, weight: "", image: ROLLS_BAKED_IMG },
      { id: 86, name: "Ойси", desc: "Запечённый ролл Ойси", price: 460, weight: "", image: ROLLS_BAKED_IMG },
      { id: 87, name: "Классика с лососем", desc: "Классический запечённый ролл с лососем", price: 460, weight: "", image: KLASSIKA_IMG },
      { id: 88, name: "Классика с креветкой", desc: "Классический запечённый ролл с креветкой", price: 470, weight: "", image: KLASSIKA_IMG },
      { id: 89, name: "Классика с мидиями", desc: "Классический запечённый ролл с мидиями", price: 420, weight: "", image: KLASSIKA_IMG },
      { id: 90, name: "Эби чиз", desc: "Запечённый ролл с креветкой и сыром", price: 380, weight: "", image: ROLLS_BAKED_IMG },
      { id: 91, name: "Изыска", desc: "Изысканный запечённый ролл", price: 440, weight: "", image: ROLLS_BAKED_IMG },
      { id: 92, name: "Бомбовый", desc: "Бомбовый запечённый ролл", price: 430, weight: "", image: ROLLS_BAKED_IMG },
    ]
  },
];

export type CartItem = MenuItem & { qty: number };

type MenuSectionProps = {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: number) => void;
  scrollToSection: (id: string) => void;
};

export default function MenuSection({
  activeCategory,
  setActiveCategory,
  cart,
  addToCart,
  removeFromCart,
  scrollToSection,
}: MenuSectionProps) {
  return (
    <>
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
    </>
  );
}