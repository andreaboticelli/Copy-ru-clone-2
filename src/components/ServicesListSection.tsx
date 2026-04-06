const serviceCategories = [
  {
    title: "Документы и офис",
    items: ["Печать ч/б и цветная А4/А3", "Копирование и сканирование", "Презентации пакетом"],
  },
  {
    title: "Инженерная печать",
    items: ["А0–А3, ч/б и цветная", "DWG/CDR, копирование чертежей", "Фальцовка"],
  },
  {
    title: "Финишинг",
    items: ["Ламинирование", "Переплёт на пружину (пластик/металл)", "Сшивка на скобу, твёрдый переплёт"],
  },
  {
    title: "Листовая продукция",
    items: ["Листовки, буклеты, открытки", "Бейджи, бланки, конверты", "Грамоты, сертификаты"],
  },
  {
    title: "Визитки",
    items: ["Эконом и стандарт", "Срочные", "Премиум-материалы, фольга"],
  },
  {
    title: "Широкоформат",
    items: ["Плакаты А2–А0", "Баннеры, роллапы", "Накатка на пенокартон и ПВХ, холст"],
  },
  {
    title: "Наклейки",
    items: ["На бумаге и плёнке", "Стикерпаки с плоттерной резкой"],
  },
  {
    title: "Мерч и фото",
    items: ["Кружки, футболки, шопперы", "Магниты, пазлы", "Фото от 10×15 до А0, на документы"],
  },
];

export function ServicesListSection() {
  return (
    <section style={{ padding: "48px 0 40px", backgroundColor: "rgb(248, 249, 251)" }}>
      <div style={{ padding: "0 24px", maxWidth: "1464px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "rgb(50, 53, 57)",
            margin: "0 0 8px",
            fontFamily: "Inter, sans-serif",
            lineHeight: "40px",
          }}
        >
          Что мы печатаем
        </h2>
        <p style={{ fontSize: "15px", color: "rgb(100, 104, 112)", margin: "0 0 28px", lineHeight: "22px" }}>
          От одного листа до тиража — без минимального заказа
        </p>

        <div
          className="services-list-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
        >
          {serviceCategories.map((cat) => (
            <div
              key={cat.title}
              style={{
                backgroundColor: "white",
                borderRadius: "14px",
                padding: "20px 20px",
                border: "1px solid rgb(229, 229, 231)",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "rgb(50, 53, 57)",
                  marginBottom: "10px",
                  fontFamily: "Inter, sans-serif",
                  borderBottom: "2px solid rgb(253, 195, 5)",
                  paddingBottom: "8px",
                }}
              >
                {cat.title}
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "5px" }}>
                {cat.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "13px",
                      color: "rgb(80, 84, 90)",
                      lineHeight: "19px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "6px",
                    }}
                  >
                    <span
                      style={{
                        color: "rgb(253, 195, 5)",
                        fontWeight: 700,
                        flexShrink: 0,
                        lineHeight: "19px",
                      }}
                      aria-hidden="true"
                    >
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .services-list-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .services-list-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
