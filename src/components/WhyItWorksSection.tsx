const reasons = [
  {
    heading: "Физически рядом",
    text: "Курьер ходит по башням Сити пешком. Доставка внутри Сити бесплатна. Опоздали на минуту — заказ за наш счёт.",
  },
  {
    heading: "Срочность без наценки",
    text: "Нет дополнительной логистики — нет дополнительных издержек. Срочно = по цене стандарта.",
  },
  {
    heading: "Любой файл",
    text: "В штате инженер-препресс. Перед каждой печатью бесплатно проверяет и правит критические ошибки. Принимаем Word, DWG, фото наброска на салфетке.",
  },
  {
    heading: "Цвет гарантирован",
    text: "Привозим реальный отпечаток вашего макета до запуска тиража. Вы утверждаете лично.",
  },
  {
    heading: "«Как в прошлый раз» работает",
    text: "У каждого клиента профиль: бумага, пантоны, параметры сшивки. Повторный заказ — 30 секунд.",
  },
  {
    heading: "Не понравился результат",
    text: "Переделываем без споров. «Мне не нравится» достаточно.",
  },
  {
    heading: "Без предоплаты до 15 000 ₽",
    text: "Заказ запускается по сообщению. Закрывающие документы по ЭДО после получения.",
  },
  {
    heading: "Один контакт",
    text: "Менеджер координирует всё сам. Один договор, один счёт.",
  },
];

export function WhyItWorksSection() {
  return (
    <section style={{ padding: "48px 0 40px", backgroundColor: "white" }}>
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
          Почему это выполнимо
        </h2>

        <div
          className="why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
        >
          {reasons.map((r, i) => (
            <div
              key={r.heading}
              style={{
                backgroundColor: "rgb(248, 249, 251)",
                borderRadius: "14px",
                padding: "20px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Number badge */}
              <span
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "16px",
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "rgba(253, 195, 5, 0.18)",
                  lineHeight: 1,
                  fontFamily: "Inter, sans-serif",
                  userSelect: "none",
                }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "rgb(50, 53, 57)",
                  margin: 0,
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "22px",
                  paddingRight: "32px",
                }}
              >
                {r.heading}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgb(100, 104, 112)",
                  margin: 0,
                  lineHeight: "19px",
                }}
              >
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
