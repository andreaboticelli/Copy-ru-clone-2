"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/images/copy-ru-moskvasiti.webp", alt: "Копицентр Москва-Сити 1 - картинка 1" },
  { src: "/images/copy-ru-moskvasiti_2.webp", alt: "Копицентр Москва-Сити 1 - картинка 2" },
  { src: "/images/copy-ru-moskvasiti_1.webp", alt: "Копицентр Москва-Сити 1 - картинка 3" },
];

function RouteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", flexShrink: 0 }} aria-hidden="true">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

export function LocationSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section style={{ marginTop: "24px" }}>
      <div style={{ padding: "0 24px", maxWidth: "1464px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            lineHeight: "44px",
            color: "rgb(50, 53, 57)",
            marginBottom: "0px",
            marginTop: "0",
          }}
        >
          Копицентр Москва-Сити 1
        </h1>

        {/* Hero + Map grid */}
        <div
          className="hero-map-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 3fr",
            gap: "24px",
            marginTop: "24px",
            alignItems: "stretch",
          }}
        >
          {/* LEFT: Hero / Contact Card */}
          <div
            style={{
              borderRadius: "20px",
              border: "1px solid rgba(198, 184, 138, 0.24)",
              padding: "28px 28px",
              background: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "0",
              boxSizing: "border-box",
            }}
          >
            {/* Top block */}
            <div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "rgb(151, 154, 160)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Внешний отдел печати
              </span>

              <h2
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  lineHeight: "34px",
                  color: "rgb(50, 53, 57)",
                  margin: "12px 0 10px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Ваш внешний отдел&nbsp;печати в Москва-Сити
              </h2>

              <p
                style={{
                  fontSize: "14px",
                  color: "rgb(80, 84, 90)",
                  lineHeight: "21px",
                  margin: "0 0 20px",
                }}
              >
                Афимолл, Пресненская набережная, 2.{" "}
                Берём задачу в любом виде — доводим до результата и доставляем на ваш этаж.
              </p>

              {/* CTA row */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
                <a
                  href="https://t.me/copyru_city"
                  style={{
                    background: "rgb(253, 195, 5)",
                    color: "rgb(50, 53, 57)",
                    borderRadius: "8px",
                    padding: "11px 18px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "inherit",
                    whiteSpace: "nowrap",
                  }}
                >
                  <TelegramIcon />
                  Написать в Telegram →
                </a>
                <span
                  style={{
                    fontSize: "13px",
                    color: "rgb(151, 154, 160)",
                    fontWeight: 500,
                  }}
                >
                  Оплата по факту
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", backgroundColor: "rgb(229, 229, 231)", margin: "4px 0 16px" }} />

            {/* Address + Hours + Contacts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginBottom: "20px" }}>
              <div style={{ display: "flex", flexDirection: "row", gap: "8px", alignItems: "center" }}>
                <span style={{ fontWeight: 600, fontSize: "15px", color: "rgb(50, 53, 57)" }}>
                  <span style={{ color: "rgb(220, 70, 50)", fontWeight: 700, fontSize: "12px", marginRight: "4px" }}>М</span>
                  Москва-Сити 1
                </span>
                <span style={{ fontSize: "13px", color: "rgb(151, 154, 160)", display: "flex", alignItems: "center", gap: "3px" }}>
                  <span aria-hidden="true">🚶</span> 2 мин
                </span>
              </div>
              <div style={{ fontSize: "14px", color: "rgb(80, 84, 90)" }}>Пресненская набережная, 2, Афимолл</div>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "rgb(50, 53, 57)", marginTop: "4px" }}>
                <ClockIcon />
                <span>Без выходных&nbsp;&nbsp;9:00–21:00</span>
              </div>

              <a
                href="tel:+74951252802317"
                style={{ fontSize: "14px", fontWeight: 600, color: "rgb(253, 195, 5)", textDecoration: "none" }}
              >
                +7 (495) 125-28-02 (доб. 317)
              </a>
              <a
                href="mailto:317@copy.ru"
                style={{ fontSize: "14px", color: "rgb(253, 195, 5)", textDecoration: "none" }}
              >
                317@copy.ru
              </a>
            </div>

            {/* Bottom buttons */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button
                type="button"
                style={{
                  background: "transparent",
                  border: "1px solid rgb(229, 229, 231)",
                  borderRadius: "6px",
                  padding: "10px 16px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgb(50, 53, 57)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Реквизиты
              </button>
              <button
                type="button"
                style={{
                  background: "rgb(253, 195, 5)",
                  border: "none",
                  borderRadius: "6px",
                  padding: "10px 16px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgb(50, 53, 57)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <RouteIcon />
                Проложить маршрут
              </button>
            </div>
          </div>

          {/* RIGHT: Map */}
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              minHeight: "460px",
              position: "relative",
            }}
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=37.527%2C55.745%2C37.557%2C55.755&layer=mapnik&marker=55.7496%2C37.5368"
              style={{ width: "100%", height: "100%", border: 0, borderRadius: "12px", display: "block", minHeight: "460px" }}
              title="Карта Копицентр Москва-Сити"
            />
          </div>
        </div>

        {/* Photo carousel */}
        <div
          style={{
            marginTop: "24px",
            borderRadius: "12px",
            overflow: "hidden",
            height: "280px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {slides.map((slide) => (
              <div key={slide.src} style={{ minWidth: "100%", height: "100%", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={slide.src} alt={slide.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div
            style={{
              position: "absolute",
              bottom: "14px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "6px",
              alignItems: "center",
            }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Слайд ${index + 1}`}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  backgroundColor:
                    index === currentSlide ? "rgb(253, 195, 5)" : "rgba(255,255,255,0.9)",
                  transition: "background-color 0.2s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-map-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
