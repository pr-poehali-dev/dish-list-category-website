import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "menu", label: "Меню" },
  { id: "reviews", label: "Отзывы" },
  { id: "contacts", label: "Контакты" },
];

type HeaderProps = {
  activeSection: string;
  totalItems: number;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  setCartOpen: (v: boolean) => void;
  scrollToSection: (id: string) => void;
};

export default function Header({
  activeSection,
  totalItems,
  menuOpen,
  setMenuOpen,
  setCartOpen,
  scrollToSection,
}: HeaderProps) {
  return (
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
  );
}