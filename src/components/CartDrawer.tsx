import Icon from "@/components/ui/icon";
import { CartItem, MenuItem } from "@/components/MenuSection";

type CartDrawerProps = {
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  orderOpen: boolean;
  setOrderOpen: (v: boolean) => void;
  orderSuccess: boolean;
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: number) => void;
  totalPrice: number;
  totalItems: number;
  form: { name: string; phone: string; address: string; comment: string };
  setForm: (form: { name: string; phone: string; address: string; comment: string }) => void;
  handleOrder: () => void;
  scrollToSection: (id: string) => void;
};

export default function CartDrawer({
  cartOpen,
  setCartOpen,
  orderOpen,
  setOrderOpen,
  orderSuccess,
  cart,
  addToCart,
  removeFromCart,
  totalPrice,
  totalItems,
  form,
  setForm,
  handleOrder,
  scrollToSection,
}: CartDrawerProps) {
  return (
    <>
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
    </>
  );
}
