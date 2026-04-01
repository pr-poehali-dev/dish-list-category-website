import Icon from "@/components/ui/icon";

const ROLLS_COLD_IMG = "https://cdn.poehali.dev/projects/23eaf61a-ab56-4238-a6b1-83974c0ffea5/files/7420aeaa-d414-41a3-a581-c01ff9aee760.jpg";

type InfoSectionsProps = {
  scrollToSection: (id: string) => void;
};

export default function InfoSections({ scrollToSection }: InfoSectionsProps) {
  return (
    <>
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
    </>
  );
}
