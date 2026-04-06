function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

const steps = [
  {
    number: "1",
    title: "Пишете в Telegram",
    text: "Своими словами, без ТЗ — просто опишите задачу как есть",
  },
  {
    number: "2",
    title: "Мы делаем",
    text: "Принимаем файл, проверяем, правим при необходимости, печатаем",
  },
  {
    number: "3",
    title: "Результат на вашем этаже",
    text: "Бесплатная доставка внутри Сити, счёт после получения",
  },
];

const offers = [
  {
    badge: "Первый раз",
    title: "Первый экземпляр — бесплатно",
    text: "Напечатаем и доставим пробный экземпляр за наш счёт. Оцените качество перед заказом тиража.",
    cta: "Написать в Telegram →",
    href: "https://t.me/copyru_city",
    accent: true,
  },
  {
    badge: "Для команды",
    title: "Принт-депозит — скидка 20%",
    text: "Один счёт для всей команды. Прозрачная аналитика по сотрудникам. Деньги не сгорают. Скидка 20% на первое пополнение.",
    cta: "Узнать подробнее →",
    href: "https://t.me/copyru_city",
    accent: false,
  },
];

export function HowToStartSection() {
  return (
    <section style={{ padding: "48px 0 48px", backgroundColor: "white" }}>
      <div style={{ padding: "0 24px", maxWidth: "1464px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "rgb(50, 53, 57)",
            margin: "0 0 32px",
            fontFamily: "Inter, sans-serif",
            lineHeight: "40px",
          }}
        >
          Как начать
        </h2>

        {/* Steps row */}
        <div
          className="how-steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                backgroundColor: "rgb(248, 249, 251)",
                borderRadius: "14px",
                padding: "24px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "rgb(253, 195, 5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "18px",
                  color: "rgb(50, 53, 57)",
                  fontFamily: "Inter, sans-serif",
                  flexShrink: 0,
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "rgb(50, 53, 57)",
                  margin: 0,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "14px", color: "rgb(100, 104, 112)", margin: 0, lineHeight: "20px" }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Offer cards */}
        <div
          className="how-offers-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
          }}
        >
          {offers.map((offer) => (
            <div
              key={offer.title}
              style={{
                backgroundColor: offer.accent ? "rgb(253, 195, 5)" : "rgb(248, 249, 251)",
                borderRadius: "16px",
                padding: "28px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                border: offer.accent ? "none" : "1px solid rgb(229, 229, 231)",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: offer.accent ? "rgba(50,53,57,0.7)" : "rgb(151, 154, 160)",
                  alignSelf: "flex-start",
                  background: offer.accent ? "rgba(255,255,255,0.45)" : "white",
                  borderRadius: "6px",
                  padding: "3px 8px",
                }}
              >
                {offer.badge}
              </span>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "rgb(50, 53, 57)",
                  margin: 0,
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "28px",
                }}
              >
                {offer.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: offer.accent ? "rgb(60, 64, 70)" : "rgb(80, 84, 90)",
                  margin: 0,
                  lineHeight: "21px",
                  flex: 1,
                }}
              >
                {offer.text}
              </p>
              <div>
                <a
                  href={offer.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: offer.accent ? "rgb(50, 53, 57)" : "rgb(253, 195, 5)",
                    color: offer.accent ? "white" : "rgb(50, 53, 57)",
                    borderRadius: "8px",
                    padding: "11px 18px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    fontFamily: "inherit",
                    whiteSpace: "nowrap",
                  }}
                >
                  {offer.accent && <TelegramIcon />}
                  {offer.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .how-steps-grid {
            grid-template-columns: 1fr !important;
          }
          .how-offers-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
