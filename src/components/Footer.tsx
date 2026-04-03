const navSections = [
  {
    heading: "Информация",
    links: [
      { text: "Арендодателям", href: "/landlord/" },
      { text: "Вакансии", href: "/vakansii/" },
      { text: "Публичная оферта", href: "/terms/" },
      { text: "Политика конфиденциальности", href: "/politika-konfidenczialnosti/" },
      { text: "Положение об обработке файлов cookies", href: "/polozhenie-ob-obrabotke-fajlov-cookies/" },
      { text: "Согласие на обработку персональных данных", href: "/soglasie-na-obrabotku-personalnyh-dannyh/" },
    ],
  },
  {
    heading: "О компании",
    links: [
      { text: "Написать директору", href: "/director/" },
      { text: "О нас", href: "/about/" },
      { text: "Управляющая компания", href: "/management/" },
      { text: "Новости", href: "/news/" },
      { text: "Блог", href: "/blog/" },
    ],
  },
  {
    heading: "Дополнительно",
    links: [
      { text: "Контакты", href: "/contacts/" },
      { text: "Оплата и доставка", href: "/payment/" },
      { text: "Требования к макетам", href: "/requirements/" },
      { text: "Клуб привилегий", href: "/club/" },
    ],
  },
  {
    heading: "Полезное",
    links: [
      { text: "Портфолио", href: "/portfolio/" },
      { text: "Статус заказа", href: "/status/" },
      { text: "Генератор QR", href: "/qr/" },
      { text: "Франшиза", href: "/franchise/" },
    ],
  },
  {
    heading: "Контакты",
    links: [
      { text: "+7 (495) 125-28-02", href: "tel:+74951252802" },
      { text: "print@copy.ru", href: "mailto:print@copy.ru" },
      { text: "Москва ▾", href: "#" },
    ],
  },
  {
    heading: "Проекты",
    links: [
      { text: "Сувениры с логотипом ↗", href: "#" },
      { text: "COPY.RU для бизнеса ↗", href: "#" },
      { text: "Калькулятор ↗", href: "#" },
    ],
  },
];

const promoCards = [
  {
    title: "Присоединяйся к клубу привилегий",
    body: "Копи баллы и оплачивай ими до 15% стоимости заказа. Получай персональные скидки и предложения. Оформить карту можно в копировальных центрах и онлайн.",
    btnText: "Подробнее →",
  },
  {
    title: "Франшиза: открой свой копицентр",
    body: "Ты получишь все необходимое для запуска и развития собственного центра: от современного оборудования до маркетинговых стратегий.",
    btnText: "Подробнее →",
  },
];

const socialLinks = [
  { label: "Telegram", symbol: "✈" },
  { label: "YouTube", symbol: "▶" },
  { label: "Facebook", symbol: "f" },
  { label: "Instagram", symbol: "◇" },
  { label: "Pinterest", symbol: "P" },
  { label: "ВКонтакте", symbol: "VK" },
  { label: "TikTok", symbol: "♪" },
];

function FooterLogoSVG() {
  return (
    <svg viewBox="0 0 128 32" fill="none" width={128} height={32} aria-label="COPY.RU">
      <rect width="32" height="32" rx="6" fill="#FDC305" />
      <path d="M6 16 L26 8 L18 26 L14 18 Z" fill="#323539" />
      <path d="M14 18 L17 15" stroke="#FDC305" strokeWidth="1.5" />
      <text x="38" y="22" fontFamily="Inter,sans-serif" fontWeight="700" fontSize="17" fill="white">COPY.RU</text>
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(24, 24, 24)", padding: "32px 0", color: "white" }}>
      <div
        style={{
          padding: "0 24px",
          maxWidth: "1464px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* 6-column nav */}
        <nav style={{ display: "flex", flexDirection: "row", gap: "24px", width: "100%" }}>
          {navSections.map((section) => (
            <div
              key={section.heading}
              style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}
            >
              <span style={{ color: "rgb(151, 154, 160)", fontSize: "16px", fontWeight: 600 }}>
                {section.heading}
              </span>
              {section.links.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    opacity: 1,
                    display: "block",
                  }}
                  className="footer-link"
                >
                  {link.text}
                </a>
              ))}
            </div>
          ))}
        </nav>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid rgb(128, 128, 128)", margin: 0 }} />

        {/* Promo cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {promoCards.map((card) => (
            <div
              key={card.title}
              style={{
                backgroundColor: "rgb(37, 37, 37)",
                borderRadius: "12px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "16px",
                minHeight: "178px",
              }}
            >
              <div>
                <p style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 12px 0", color: "white" }}>
                  {card.title}
                </p>
                <p style={{ fontSize: "14px", opacity: 0.8, margin: 0, lineHeight: "1.5", color: "white" }}>
                  {card.body}
                </p>
              </div>
              <button
                type="button"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "6px",
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "white",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  width: "fit-content",
                  fontFamily: "inherit",
                }}
              >
                {card.btnText}
              </button>
            </div>
          ))}

          {/* Map card */}
          <div
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              borderRadius: "12px",
              overflow: "hidden",
              minHeight: "178px",
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              padding: "16px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgb(50, 55, 60)",
                backgroundImage: "radial-gradient(circle at 30% 40%, rgb(60,65,70) 0%, rgb(40,45,50) 100%)",
              }}
            />
            <span
              style={{
                position: "relative",
                zIndex: 1,
                fontSize: "16px",
                fontWeight: 600,
                color: "white",
              }}
            >
              Пункты копицентров
            </span>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid rgb(128, 128, 128)", margin: 0 }} />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <FooterLogoSVG />
          </a>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                {s.symbol}
              </a>
            ))}
          </div>

          <p style={{ fontSize: "12px", color: "rgb(151, 154, 160)", margin: 0, textAlign: "center" }}>
            Деятельность организаций Instagram и Facebook запрещены на территории РФ.
          </p>

          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span style={{ fontSize: "14px", color: "rgb(151, 154, 160)" }}>
              Все права защищены. © 2012 – 2026 COPY.RU
            </span>
            <a href="#" style={{ fontSize: "14px", color: "rgb(151, 154, 160)", textDecoration: "none" }}>
              Разработка сайта ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover { opacity: 0.75 !important; }
        @media (max-width: 768px) {
          footer nav { flex-direction: column !important; gap: 24px !important; }
          footer .footer-promo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
