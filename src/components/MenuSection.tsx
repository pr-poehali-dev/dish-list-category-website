import Icon from "@/components/ui/icon";

const PIZZA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/000adcc1-7517-4b5e-b72b-c1e0c4e0de46.jpg";
const SALAD_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/7a4ba731-3080-4aa6-9eb0-b7b3666d7b81.jpg";
const SHAWARMA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/1af0d2db-805b-4c04-acc3-3a14700ba39e.jpg";
const WOK_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/99e47631-7879-428e-87ba-41884de954c5.jpg";
const SOUP_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/57669875-fb74-471d-9c33-4464771b6cb7.jpg";
const TOM_YAM_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/0b136aae-bcf1-4290-aa99-5e33f023262a.jpg";
const TOM_KHA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/3f04b34a-2481-48cf-976d-1a89189ece60.png";
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
const FILADELFIYA_SHRIMP_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/17f12f7c-0ab0-4fd9-8b8d-f84ba5cdbd6f.jpg";
const FILADELFIYA_EEL_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/0cbbe17c-ae91-4e58-af40-9ce82f90e5cb.jpg";
const AKITA_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/8b01e4e6-bf4e-483f-abf3-d8ef8f99164f.png";

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
      { id: 0, name: "Четыре сезона", desc: "Фирменная пицца с четырьмя вкусными зонами: грибы, пиперине, фри с курочкой и моцарелла с копчёным сыром — всё объединено фирменным соусом", price: 0, weight: "", image: PIZZA_IMG, isNew: true },
      { id: 1, name: "Грибная", desc: "Нежная пицца на фирменном соусе с обильной шапкой ароматных грибов и расплавленным сыром — просто и безупречно вкусно", price: 480, weight: "", image: PIZZA_IMG },
      { id: 2, name: "Пармеджанно", desc: "Изысканная пицца с сочной куриной грудкой, нежными кабачками и щедрой посыпкой выдержанного сыра пармезан", price: 580, weight: "", image: PIZZA_IMG },
      { id: 3, name: "Бифф", desc: "Сытная пицца с мраморной говядиной, хрустящим красным луком, солёными огурчиками и тягучим сыром — настоящий мясной праздник", price: 650, weight: "", image: PIZZA_IMG },
      { id: 4, name: "Цезарь", desc: "Пицца по мотивам легендарного салата: сочная курочка, свежий айсберг, помидоры, сыр и фирменный соус Цезарь", price: 500, weight: "", image: PIZZA_IMG },
      { id: 5, name: "Мехико", desc: "Яркая пицца в мексиканском стиле: тунец, сладкая кукуруза, тягучий сыр, ароматная зелень и пикантный соус", price: 650, weight: "", image: PIZZA_IMG },
      { id: 6, name: "Салями", desc: "Классическая итальянская пицца с тонко нарезанной говяжьей салями, чёрными маслинами, спелыми помидорами и сыром", price: 500, weight: "", image: PIZZA_IMG },
      { id: 7, name: "Ветчина и грибы", desc: "Традиционная пицца с сочной говяжьей ветчиной, ароматными грибами, расплавленным сыром и фирменным соусом", price: 580, weight: "", image: PIZZA_IMG },
      { id: 8, name: "Морская", desc: "Премиальная пицца с нежным филе сёмги, тигровыми креветками, тягучим сыром и изысканным сливочным соусом", price: 800, weight: "", image: PIZZA_IMG },
      { id: 9, name: "Бургер", desc: "Пицца в стиле бургера: сочная курочка, хрустящий фри, двойной сыр (моцарелла + плавленый), бургерный и сливочный соус", price: 550, weight: "", image: PIZZA_IMG },
      { id: 10, name: "Пепперони", desc: "Огненная пицца с острой говяжьей пиперине, жгучим перцем чили, расплавленным сыром и фирменным острым соусом", price: 550, weight: "", image: PIZZA_IMG, hot: true },
      { id: 11, name: "С домашним цыплёнком и грибами", desc: "Уютная домашняя пицца с нежным цыплёнком, лесными грибами, расплавленным сыром и ароматным фирменным соусом", price: 570, weight: "", image: PIZZA_IMG },
      { id: 12, name: "Деревенская", desc: "Сытная пицца с болгарским перцем, свежими помидорами, кукурузой, курочкой, сыром и насыщенным фирменным соусом", price: 550, weight: "", image: PIZZA_IMG },
      { id: 13, name: "Курица BBQ", desc: "Ароматная пицца с куриной грудкой, дымным соусом BBQ, сочным болгарским перцем, красным луком и плавленым сыром", price: 520, weight: "", image: PIZZA_IMG },
      { id: 14, name: "Четыре сыра", desc: "Настоящий сырный рай: воздушная моцарелла, выдержанный пармезан, пикантный чеддер и благородный дор-блю на одной пицце", price: 520, weight: "", image: PIZZA_IMG },
      { id: 15, name: "Мясная", desc: "Пицца для настоящих мясоедов: говяжья колбаса, куриная грудка, сочная говядина, тягучий сыр и насыщенный фирменный соус", price: 550, weight: "", image: PIZZA_IMG },
      { id: 16, name: "С адыгейским сыром", desc: "Оригинальная пицца с трио сыров: нежный матэ, тягучая моцарелла и копчёный сыр с маринованными помидорами", price: 520, weight: "", image: PIZZA_IMG },
    ]
  },
  {
    id: "salads",
    label: "Салаты",
    emoji: "🥗",
    items: [
      { id: 17, name: "Цезарь с курицей", desc: "Классический Цезарь с хрустящим айсбергом, сочной куриной грудкой, томатами, гренками, сыром пармезан и фирменным соусом", price: 390, weight: "", image: SALAD_IMG },
      { id: 18, name: "Цезарь с креветками", desc: "Изысканный Цезарь с хрустящим айсбергом, тигровыми креветками, томатами, гренками, пармезаном и фирменным соусом", price: 490, weight: "", image: SALAD_IMG },
      { id: 19, name: "Греческий", desc: "Свежий средиземноморский салат из спелых томатов, огурцов, болгарского перца, нежной брынзы, маслин и красного лука", price: 430, weight: "", image: SALAD_IMG },
      { id: 20, name: "С хрустящими баклажанами", desc: "Оригинальный салат с обжаренными до хруста баклажанами, свежими томатами, нежной брынзой, соусом и ароматной кинзой", price: 380, weight: "", image: SALAD_IMG },
      { id: 21, name: "Оливье с курицей", desc: "Любимый праздничный оливье: картофель, морковь, яйцо, майонез, зелёный лук и нежное куриное филе вместо колбасы", price: 330, weight: "", image: SALAD_IMG },
      { id: 22, name: "Оливье с говяжьей ветчиной", desc: "Классический оливье с картофелем, морковью, яйцом, майонезом, зелёным луком и деликатесной говяжьей ветчиной", price: 360, weight: "", image: SALAD_IMG },
      { id: 23, name: "Оливье с говядиной", desc: "Сытный оливье с картофелем, морковью, яйцом, майонезом, зелёным луком и нежной отварной говядиной", price: 380, weight: "", image: SALAD_IMG },
    ]
  },
  {
    id: "shawarma",
    label: "Шаурма, сэндвич и бургер",
    emoji: "🌯",
    items: [
      { id: 24, name: "Шаурма Курица", desc: "Сочная куриная грудка, хрустящий коул слоу, маринованные огурчики, сыр, кетчуп, помидоры и фирменный соус в тонком лаваше", price: 360, weight: "", image: SHAWARMA_IMG },
      { id: 25, name: "Шаурма Курица кляр", desc: "Нежная курочка в золотистом кляре, коул слоу, маринованные огурчики, сыр, кетчуп, помидоры и соус в хрустящем лаваше", price: 390, weight: "", image: SHAWARMA_IMG },
      { id: 26, name: "Шаурма Говядина", desc: "Сочная говядина, хрустящий коул слоу, маринованные огурчики, сыр, кетчуп, спелые помидоры и фирменный соус в тонком лаваше", price: 460, weight: "", image: SHAWARMA_IMG },
      { id: 27, name: "Шаурма Говядина кляр", desc: "Говядина в хрустящем кляре, коул слоу, маринованные огурчики, сыр, кетчуп, помидоры и фирменный соус — уровень выше", price: 490, weight: "", image: SHAWARMA_IMG },
      { id: 28, name: "Шаурма Креветка", desc: "Тигровые креветки, хрустящий коул слоу, маринованные огурчики, сыр, кетчуп, томаты и фирменный соус — морской акцент в каждом укусе", price: 460, weight: "", image: SHAWARMA_IMG },
      { id: 29, name: "Шаурма Креветка кляр", desc: "Тигровые креветки в золотистом кляре, коул слоу, огурчики, сыр, кетчуп, помидоры и фирменный соус — хрустящее удовольствие", price: 490, weight: "", image: SHAWARMA_IMG },
      { id: 30, name: "Шаурма Креветка БУМ", desc: "Фирменная шаурма: креветка темпура, творожный сыр, свежий огурец, хрустящий айсберг, фирменный соус и сладкий чили", price: 500, weight: "", image: SHAWARMA_IMG },
      { id: 31, name: "Шаурма Креветка БУМ кляр", desc: "Фирменная БУМ-шаурма в хрустящем кляре: темпура из креветок, творожный сыр, огурец, айсберг, соус и сладкий чили", price: 530, weight: "", image: SHAWARMA_IMG },
      { id: 32, name: "Бургер Курица", desc: "Сочная куриная котлета, красный лук, хрустящий коул слоу, свежие томаты, зелень и фирменный соус в пышной булочке", price: 460, weight: "", image: SHAWARMA_IMG },
      { id: 33, name: "Бургер Говядина", desc: "Сочная говяжья котлета ручной лепки, красный лук, коул слоу, томаты, зелень и фирменный соус в поджаренной булочке", price: 500, weight: "", image: SHAWARMA_IMG },
      { id: 34, name: "Клаб Курица", desc: "Многослойный клаб-сэндвич с куриным филе, сыром, хрустящим айсбергом, томатами, огурцами и фирменным соусом", price: 450, weight: "", image: SHAWARMA_IMG },
      { id: 35, name: "Клаб Говядина", desc: "Сытный клаб-сэндвич с нежной говядиной, сыром, свежим айсбергом, томатами, огурцами и фирменным соусом", price: 550, weight: "", image: SHAWARMA_IMG },
      { id: 36, name: "Клаб Микс", desc: "Двойной клаб-сэндвич с куриным филе и говядиной, сыром, айсбергом, томатами, огурцами и фирменным соусом", price: 500, weight: "", image: SHAWARMA_IMG },
      { id: 100, name: "Хот дог с курицей", desc: "Сочная куриная сосиска в мягкой булочке: соус бургер, плавленый сыр, хрустящий лук, кетчуп и нежный сырный соус", price: 360, weight: "", image: SHAWARMA_IMG },
    ]
  },
  {
    id: "wok",
    label: "ВОК",
    emoji: "🍜",
    items: [
      { id: 37, name: "Удон с курицей", desc: "Густая лапша удон с сочной куриной грудкой, морковью, луком, кабачками, болгарским перцем, чесноком, кунжутом и зелёным луком в ароматном соусе", price: 420, weight: "", image: WOK_IMG },
      { id: 38, name: "Удон с говядиной", desc: "Густая лапша удон с нежной говядиной, морковью, луком, кабачками, болгарским перцем, чесноком, кунжутом и зелёным луком в насыщенном соусе", price: 480, weight: "", image: WOK_IMG },
      { id: 39, name: "Удон с креветками", desc: "Густая лапша удон с тигровыми креветками, морковью, луком, кабачками, болгарским перцем, чесноком, кунжутом и зелёным луком в соусе", price: 460, weight: "", image: WOK_IMG },
      { id: 40, name: "Теппан с курицей", desc: "Ароматный жареный рис теппан с куриной грудкой, морковью, луком, кабачками, болгарским перцем, чесноком, кунжутом и зелёным луком", price: 380, weight: "", image: WOK_IMG },
      { id: 41, name: "Теппан с говядиной", desc: "Ароматный жареный рис теппан с нежной говядиной, морковью, луком, кабачками, болгарским перцем, чесноком, кунжутом и зелёным луком", price: 460, weight: "", image: WOK_IMG },
      { id: 42, name: "Теппан с креветками", desc: "Ароматный жареный рис теппан с тигровыми креветками, морковью, луком, кабачками, болгарским перцем, чесноком, кунжутом и зелёным луком", price: 440, weight: "", image: WOK_IMG },
    ]
  },
  {
    id: "soups",
    label: "Супы",
    emoji: "🍲",
    items: [
      { id: 43, name: "Том Ям", desc: "Легендарный тайский острый суп с креветками, кальмаром, мидиями, шампиньонами, томатами, рисом, лимоном и ароматной кинзой на пасте том ям", price: 560, weight: "", image: TOM_YAM_IMG, hot: true },
      { id: 44, name: "Том Кха", desc: "Нежный тайский суп на кокосовой пасте том кха с лососем, креветками, курочкой, шампиньонами, томатами, рисом, кунжутом и зелёным луком", price: 440, weight: "", image: TOM_KHA_IMG },
    ]
  },
  {
    id: "snacks",
    label: "Закуски",
    emoji: "🥢",
    items: [
      { id: 45, name: "Хачапури по-аджарски", desc: "Традиционная грузинская лодочка из пышного теста с расплавленным сулугуни, свежим куриным желтком и кусочком сливочного масла", price: 350, weight: "", image: "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/abcf78f1-7895-4d97-94d2-3bd26f77d3f5.jpg" },
      { id: 46, name: "Картофель Фри", desc: "Золотистый хрустящий картофель фри — идеальный гарнир или самостоятельная закуска к любому соусу", price: 200, weight: "", image: SNACKS_IMG },
      { id: 47, name: "Сырные палочки (5 шт.)", desc: "Пять хрустящих палочек с тягучим расплавленным сыром внутри — горячая закуска, от которой невозможно оторваться", price: 280, weight: "", image: "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/5ede8570-f675-4e66-b215-0efdb7b0fa85.jpeg" },
      { id: 48, name: "Халюжи (2 шт.)", desc: "Две хрустящие закавказские лепёшки с нежным сырным наполнителем, обжаренные до золотистой корочки", price: 220, weight: "", image: "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/580f98b7-e27b-433b-9bd3-cd55fb6de9c8.jpg" },
      { id: 49, name: "Нагетсы (8 шт.)", desc: "Восемь сочных куриных наггетсов в хрустящей золотистой панировке — лёгкая закуска или дополнение к основному блюду", price: 280, weight: "", image: "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/3f6a96ba-7a7e-4467-b0d7-d900b24634dc.jpg" },
      { id: 50, name: "Креветки темпура (5 шт.)", desc: "Пять тигровых креветок в невесомом японском кляре темпура — хрустящие снаружи и сочные внутри, подаются со сладким чили", price: 380, weight: "", image: "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/bucket/013d5b9b-5c64-4eab-9c22-a8062d4bfe30.jpg" },
    ]
  },
  {
    id: "rolls-tempura",
    label: "Роллы темпура",
    emoji: "🔥",
    items: [
      { id: 51, name: "Краб темпура", desc: "Ролл из риса и нори с крабом и творожным сыром на огурцовой подушке, обжаренный в золотистом кляре темпура", price: 380, weight: "", image: TEMPURA_IMG },
      { id: 52, name: "Лосось темпура", desc: "Ролл из риса и нори с нежным лососем и творожным сыром на огурцовой подушке, обжаренный в хрустящем кляре темпура", price: 440, weight: "", image: TEMPURA_IMG },
      { id: 53, name: "Креветки темпура", desc: "Ролл из риса и нори с тигровыми креветками и творожным сыром на огурцовой подушке, обжаренный в невесомом кляре темпура", price: 410, weight: "", image: TEMPURA_IMG },
      { id: 54, name: "Угорь темпура", desc: "Ролл из риса и нори с деликатным угрём и творожным сыром на огурцовой подушке, обжаренный в хрустящем кляре темпура", price: 430, weight: "", image: TEMPURA_IMG },
    ]
  },
  {
    id: "rolls-cold",
    label: "Холодные роллы",
    emoji: "🍣",
    items: [
      { id: 57, name: "Спайси с креветкой", desc: "Острый ролл из риса и нори с тигровой креветкой и пикантным соусом спайси — для любителей острых ощущений", price: 360, weight: "", image: ROLLS_COLD_IMG, hot: true },
      { id: 58, name: "Спайси с лососем", desc: "Острый ролл из риса и нори с нежным лососем и жгучим соусом спайси — яркое и пряное сочетание", price: 380, weight: "", image: ROLLS_COLD_IMG, hot: true },
      { id: 59, name: "Маки с лососем", desc: "Традиционный японский маки: рис, нори и свежий лосось — лаконично, элегантно и безупречно вкусно", price: 230, weight: "", image: MAKI_IMG },
      { id: 60, name: "Маки с креветкой", desc: "Традиционный японский маки: рис, нори и сочная тигровая креветка — классика японской кухни", price: 230, weight: "", image: MAKI_SHRIMP_IMG },
      { id: 61, name: "Маки с тунцом", desc: "Традиционный японский маки: рис, нори и нежный тунец — лёгкий и изысканный вкус океана", price: 230, weight: "", image: MAKI_TUNA_IMG },
      { id: 62, name: "Маки с крабом", desc: "Традиционный японский маки: рис, нори и деликатный краб — утончённый вкус морской классики", price: 230, weight: "", image: MAKI_CRAB_IMG },
      { id: 63, name: "Маки с огурцом", desc: "Лёгкий вегетарианский маки: рис, нори и свежий хрустящий огурец — идеально для тех, кто ценит свежесть", price: 190, weight: "", image: MAKI_CUCUMBER_IMG },
      { id: 64, name: "Циба", desc: "Фирменный ролл с рисом, нори, творожным сыром, огурцом, майонезом, хрустящим картофелем, фирменным соусом и икрой масаго", price: 360, weight: "", image: ROLLS_COLD_IMG },
      { id: 65, name: "Тар-тар тунец", desc: "Изысканный ролл с рисом, нори, творожным сыром, огурцом, кунжутом, нежным тунцом, тигровой креветкой и зелёным луком", price: 440, weight: "", image: ROLLS_COLD_IMG },
      { id: 66, name: "УНАГИ", desc: "Деликатный ролл с рисом, нори, нежным угрём, хрустящим огурцом, кунжутом и ароматным соусом унаги", price: 420, weight: "", image: ROLLS_COLD_IMG },
      { id: 67, name: "Эбби хруст", desc: "Хрустящий ролл с рисом, нори, тигровой креветкой, творожным сыром, айсбергом, огурцом, кунжутом, майонезом и фирменным соусом", price: 420, weight: "", image: EBI_HRUST_IMG },
      { id: 68, name: "Блэк стар", desc: "Эффектный ролл в тёмных водорослях с нежным кальмаром, айсбергом, творожным сыром, огурцом и икрой масаго", price: 420, weight: "", image: ROLLS_COLD_IMG },
      { id: 69, name: "Чикаго", desc: "Фирменный ролл в водорослях с творожным сыром, тигровыми креветками, сёмгой, сухарями, огурцами, кунжутом и фирменным соусом", price: 460, weight: "", image: ROLLS_COLD_IMG },
      { id: 70, name: "Аризона", desc: "Оригинальный ролл в водорослях с творожным сыром, огурцами, зелёным сыром, кальмаром, зелёным луком и икрой масаго", price: 470, weight: "", image: ROLLS_COLD_IMG },
      { id: 71, name: "Калифорния с креветкой", desc: "Классическая Калифорния с рисом, нори, тигровой креветкой, творожным сыром, огурцами и яркой икрой масаго", price: 440, weight: "", image: ROLLS_COLD_IMG },
      { id: 72, name: "Калифорния с лососем", desc: "Классическая Калифорния с рисом, нори, нежным лососем, творожным сыром, огурцами и икрой масаго", price: 470, weight: "", image: ROLLS_COLD_IMG },
      { id: 73, name: "Калифорния с угрём", desc: "Деликатная Калифорния с рисом, нори, нежным угрём, творожным сыром, огурцами и икрой масаго", price: 450, weight: "", image: ROLLS_COLD_IMG },
      { id: 74, name: "Калифорния с семгой", desc: "Нежная Калифорния с рисом, нори, ароматной сёмгой, творожным сыром, огурцами и яркой икрой масаго", price: 460, weight: "", image: ROLLS_COLD_IMG },
      { id: 75, name: "Калифорния с тунцом", desc: "Изысканная Калифорния с рисом, нори, нежным тунцом, творожным сыром, хрустящими огурцами и икрой масаго", price: 450, weight: "", image: ROLLS_COLD_IMG },
      { id: 76, name: "Калифорния с крабом", desc: "Классическая Калифорния с рисом, нори, деликатным крабом, творожным сыром, огурцами и икрой масаго", price: 400, weight: "", image: ROLLS_COLD_IMG },
      { id: 77, name: "Филадельфия с креветкой", desc: "Нежная Филадельфия с рисом, нори, тигровой креветкой, шёлковым творожным сыром, огурцами и красным луком", price: 470, weight: "", image: FILADELFIYA_SHRIMP_IMG },
      { id: 78, name: "Филадельфия с лососем", desc: "Классическая Филадельфия с рисом, нори, свежим лососем, нежным творожным сыром, огурцами и красным луком", price: 470, weight: "", image: FILADELFIYA_IMG },
      { id: 79, name: "Филадельфия с угрём", desc: "Изысканная Филадельфия с рисом, нори, деликатным угрём, шёлковым творожным сыром, огурцами и красным луком", price: 470, weight: "", image: FILADELFIYA_EEL_IMG },
    ]
  },
  {
    id: "rolls-baked",
    label: "Запечённые роллы",
    emoji: "⭐",
    items: [
      { id: 82, name: "Тори маки", desc: "Запечённый ролл с рисом, нори, огурцами, творожным сыром, луком и тигровой креветкой под золотистой сырной шапкой", price: 410, weight: "", image: ROLLS_BAKED_IMG },
      { id: 83, name: "Акита", desc: "Запечённый ролл с рисом, нори, огурцами, творожным сыром и филе сёмги, покрытый нежным сырным замесом и фирменным соусом", price: 440, weight: "", image: AKITA_IMG },
      { id: 84, name: "БУМ", desc: "Фирменный запечённый ролл с рисом, нори, тигровой креветкой, лососем, икрой масаго, майонезом и зелёным луком — яркий взрыв вкуса", price: 440, weight: "", image: ROLLS_BAKED_IMG },
      { id: 85, name: "Миндальный шик", desc: "Изысканный запечённый ролл с рисом, нори, авокадо, нежной сёмгой, творожным сыром, хрустящим миндалём и фирменным соусом", price: 440, weight: "", image: ROLLS_BAKED_IMG },
      { id: 86, name: "Ойси", desc: "Ароматный запечённый ролл с рисом, нори, творожным сыром, огурцом и сёмгой под сырным замесом, икрой масаго и соусом терияки", price: 460, weight: "", image: ROLLS_BAKED_IMG },
      { id: 87, name: "Классика с лососем", desc: "Классический запечённый ролл с рисом, нори, нежным лососем, творожным сыром, огурцами и икрой масаго под золотистой сырной шапкой", price: 460, weight: "", image: KLASSIKA_IMG },
      { id: 88, name: "Классика с креветкой", desc: "Классический запечённый ролл с рисом, нори, тигровой креветкой, творожным сыром, огурцами и икрой масаго под хрустящей сырной шапкой", price: 470, weight: "", image: KLASSIKA_IMG },
      { id: 89, name: "Классика с мидиями", desc: "Классический запечённый ролл с рисом, нори, сочными мидиями, творожным сыром, огурцами и икрой масаго под расплавленной сырной шапкой", price: 420, weight: "", image: KLASSIKA_IMG },
      { id: 90, name: "Эби чиз", desc: "Лёгкий запечённый ролл с рисом, нори, тигровой креветкой, творожным сыром, огурцами и хрустящим жареным луком под сырной шапкой", price: 380, weight: "", image: ROLLS_BAKED_IMG },
      { id: 91, name: "Изыска", desc: "Изысканный запечённый ролл с рисом, нори, огурцами, творожным сыром, омлетом и крабовым замесом под соусом и икрой масаго", price: 440, weight: "", image: ROLLS_BAKED_IMG },
      { id: 92, name: "Бомбовый", desc: "Сочный запечённый ролл с рисом, нори, мидиями, нежным лососем, свежими огурцами и фирменным соусом — мощный вкусовой заряд", price: 430, weight: "", image: ROLLS_BAKED_IMG },
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
                        {item.price > 0 ? (
                          <span className="font-oswald text-xl font-bold text-primary">{item.price} ₽</span>
                        ) : (
                          <span className="font-oswald text-sm font-bold text-foreground/40">Цена уточняется</span>
                        )}

                        {item.price > 0 && (inCart ? (
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
                        ))}
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