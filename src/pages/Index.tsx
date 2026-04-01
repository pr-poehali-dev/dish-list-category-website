import { useState } from "react";
import Header from "@/components/Header";
import MenuSection, { MENU, MenuItem, CartItem } from "@/components/MenuSection";
import CartDrawer from "@/components/CartDrawer";
import InfoSections from "@/components/InfoSections";

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
      <Header
        activeSection={activeSection}
        totalItems={totalItems}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setCartOpen={setCartOpen}
        scrollToSection={scrollToSection}
      />

      <MenuSection
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        scrollToSection={scrollToSection}
      />

      <InfoSections scrollToSection={scrollToSection} />

      <CartDrawer
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        orderOpen={orderOpen}
        setOrderOpen={setOrderOpen}
        orderSuccess={orderSuccess}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
        totalItems={totalItems}
        form={form}
        setForm={setForm}
        handleOrder={handleOrder}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}
