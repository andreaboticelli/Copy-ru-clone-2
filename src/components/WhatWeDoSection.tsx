const features = [
  {
    icon: "🎨",
    title: "Образец на стол до тиража",
    body: "Привезём цветопробу вашего макета на этаж. Выберете бумагу и утвердите цвет вживую — или спуститесь к нам, мы в пяти минутах ходьбы.",
    examples: [
      "Нужна цветопроба перед тиражом каталогов → образец у вас через час",
      "Застрял поставщик роллапов → дозаказ сделаем, пока они ещё в пробке",
    ],
  },
  {
    icon: "📁",
    title: "Берём файл в любом виде",
    body: "Инженер-препресс принимает Word, сканы, DWG, PowerPoint, голосовое описание. Приводит в порядок и показывает результат на утверждение.",
    examples: [
      "Руководитель скинул набор файлов «собери брошюру» → собираем, верстаем, печатаем",
      "Онлайн-типография отклонила макет → принимаем, исправляем, запускаем",
    ],
  },
  {
    icon: "⚡",
    title: "Срочность без наценки",
    body: "Наш курьер идёт к вам пешком, а не едет через Москву. Поэтому срочный заказ стоит ровно столько же, сколько обычный.",
    examples: [
      "Презентацию переделали за час до вылета → два экземпляра уже готовы",
      "Тираж с браком, встреча через час → переделываем и доставляем",
    ],
  },
  {
    icon: "🔄",
    title: "Помним ваши стандарты",
    body: "При первом заказе фиксируем бумагу, цвета, параметры сшивки. Следующий раз — «как в прошлый раз», без объяснений.",
    examples: [
      "30 закрывающих документов в конце месяца → один счёт раз в квартал",
      "Welcome-pack поштучно выходит дорого → пишете имя новичка, мы собираем к его первому дню",
    ],
  },
];

export function WhatWeDoSection() {
  return (
    <section style={{ padding: "48px 0 40px", backgroundColor: "rgb(248, 249, 251)" }}>
      <div style={{ padding: "0 24px", maxWidth: "1464px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "rgb(50, 53, 57)",
              margin: "0 0 10px",
              fontFamily: "Inter, sans-serif",
              lineHeight: "40px",
            }}
          >
            Мы рядом — и это работает иначе
          </h2>
          <p style={{ fontSize: "15px", color: "rgb(100, 104, 112)", margin: 0, lineHeight: "22px", maxWidth: "620px" }}>
            Прежде чем запускать тираж — привезём образец на стол. Или спуститесь к нам — мы в пяти минутах ходьбы.
          </p>
        </div>

        {/* Feature cards 2x2 */}
        <div
          className="what-we-do-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px 28px",
                border: "1px solid rgb(229, 229, 231)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {/* Icon + title */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    fontSize: "28px",
                    lineHeight: 1,
                    flexShrink: 0,
                    background: "rgb(253, 195, 5)",
                    borderRadius: "10px",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-hidden="true"
                >
                  {f.icon}
                </span>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "rgb(50, 53, 57)",
                    margin: 0,
                    fontFamily: "Inter, sans-serif",
                    lineHeight: "24px",
                  }}
                >
                  {f.title}
                </h3>
              </div>

              {/* Body */}
              <p style={{ fontSize: "14px", color: "rgb(80, 84, 90)", margin: 0, lineHeight: "21px" }}>
                {f.body}
              </p>

              {/* Examples */}
              <div
                style={{
                  borderTop: "1px solid rgb(240, 241, 244)",
                  paddingTop: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                {f.examples.map((ex) => (
                  <div
                    key={ex}
                    style={{
                      fontSize: "13px",
                      color: "rgb(100, 104, 112)",
                      lineHeight: "19px",
                      paddingLeft: "12px",
                      borderLeft: "2px solid rgb(253, 195, 5)",
                    }}
                  >
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .what-we-do-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
