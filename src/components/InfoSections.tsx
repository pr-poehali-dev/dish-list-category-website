import Icon from "@/components/ui/icon";

type InfoSectionsProps = {
  scrollToSection: (id: string) => void;
};

export default function InfoSections({ scrollToSection }: InfoSectionsProps) {
  return (
    <>
      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-primary font-oswald tracking-widest text-sm mb-2">— ОТЗЫВЫ</p>
              <h2 className="font-oswald text-5xl font-bold text-foreground">Что говорят<br />наши гости</h2>
            </div>
            <div className="flex items-center gap-3 bg-background border border-border rounded-xl px-5 py-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <Icon key={s} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div>
                <div className="font-oswald text-2xl font-bold text-foreground leading-none">4.9</div>
                <div className="text-foreground/40 font-golos text-xs">более 3000 отзывов</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Анна К.",
                date: "март 2024",
                rating: 5,
                text: "Заказываю уже третий раз — всегда свежая пицца, горячая доставка. Тесто тонкое и хрустящее, именно такое как люблю. Рекомендую всем!",
                dish: "Пицца Маргарита",
              },
              {
                name: "Дмитрий В.",
                date: "февраль 2024",
                rating: 5,
                text: "Лучшая пицца в Майкопе, без вариантов. Привезли быстро, всё горячее. Порции большие, цена адекватная. Буду заказывать ещё!",
                dish: "Пицца Пепперони",
              },
              {
                name: "Екатерина М.",
                date: "январь 2024",
                rating: 5,
                text: "Очень вкусно! Тесто просто таёт во рту. Служба доставки работает чётко — привезли раньше обещанного времени. Спасибо команде!",
                dish: "Пицца 4 сыра",
              },
              {
                name: "Михаил Р.",
                date: "март 2024",
                rating: 5,
                text: "Брал на корпоратив несколько пицц — все остались довольны. Большой выбор, хороший сервис. Обязательно обратимся снова.",
                dish: "Ассорти пицц",
              },
              {
                name: "Ольга С.",
                date: "февраль 2024",
                rating: 5,
                text: "Наконец-то нашла место, где пицца как в Италии! Свежие ингредиенты, щедрая начинка. Дети в восторге, теперь заказываем каждую пятницу.",
                dish: "Пицца Карбонара",
              },
              {
                name: "Алексей Т.",
                date: "январь 2024",
                rating: 5,
                text: "Быстро, вкусно, недорого. Что ещё нужно? Пицца приехала горячей, упаковка аккуратная. Операторы вежливые. Всё на высшем уровне!",
                dish: "Пицца BBQ",
              },
            ].map((r) => (
              <div key={r.name} className="bg-background border border-border rounded-xl p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center">
                      <span className="font-oswald font-bold text-primary text-sm">{r.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-oswald font-bold text-foreground text-sm">{r.name}</div>
                      <div className="text-foreground/40 font-golos text-xs">{r.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <Icon key={s} name="Star" size={14} className={s <= r.rating ? "text-yellow-400 fill-yellow-400" : "text-foreground/20"} />
                    ))}
                  </div>
                </div>
                <p className="text-foreground/70 font-golos text-sm leading-relaxed flex-1">{r.text}</p>
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <Icon name="Pizza" size={13} className="text-primary" />
                  <span className="text-foreground/40 font-golos text-xs">{r.dish}</span>
                </div>
              </div>
            ))}
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

          <div className="bg-background border border-border rounded-xl p-6 mb-8 flex flex-col sm:flex-row items-center gap-5">
            <a
              href="https://www.instagram.com/boompizza_mkp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group w-full"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <Icon name="Instagram" size={22} className="text-white" />
              </div>
              <div>
                <div className="font-oswald text-lg font-bold text-foreground group-hover:text-primary transition-colors">@boompizza_mkp</div>
                <div className="text-foreground/50 font-golos text-sm">Подписывайтесь на наш Instagram</div>
              </div>
              <Icon name="ExternalLink" size={16} className="text-foreground/30 group-hover:text-primary ml-auto transition-colors" />
            </a>
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
    </>
  );
}