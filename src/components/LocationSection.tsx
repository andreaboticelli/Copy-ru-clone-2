"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/images/copy-ru-moskvasiti.webp", alt: "Копицентр Москва-Сити 1 - картинка 1" },
  { src: "/images/copy-ru-moskvasiti_2.webp", alt: "Копицентр Москва-Сити 1 - картинка 2" },
  { src: "/images/copy-ru-moskvasiti_1.webp", alt: "Копицентр Москва-Сити 1 - картинка 3" },
];

function RouteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", marginRight: "6px", flexShrink: 0 }} aria-hidden="true">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
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

        <div
          className="copycenter-page-grid"
          style={{
            display: "grid",
            gridTemplateAreas: `"map map" "slider info"`,
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "440px 360px",
            gap: "24px",
            marginTop: "24px",
          }}
        >
          {/* Map area */}
          <div style={{ gridArea: "map", height: "440px", width: "100%", borderRadius: "12px", overflow: "hidden", position: "relative" }}>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=37.527%2C55.745%2C37.557%2C55.755&layer=mapnik&marker=55.7496%2C37.5368"
              style={{ width: "100%", height: "100%", border: 0, borderRadius: "12px" }}
              title="Карта Копицентр Москва-Сити"
            />
          </div>

          {/* Photo carousel */}
          <div style={{ gridArea: "slider", height: "360px", width: "100%", borderRadius: "12px", overflow: "hidden", position: "relative" }}>
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
            <div style={{ position: "absolute", bottom: "12px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "6px", alignItems: "center" }}>
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
                    backgroundColor: index === currentSlide ? "rgb(253, 195, 5)" : "rgba(255,255,255,0.9)",
                    transition: "background-color 0.2s ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Contact info card */}
          <div
            style={{
              gridArea: "info",
              height: "358px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "20px",
              border: "1px solid rgba(198, 184, 138, 0.24)",
              padding: "20px 24px",
              background: "white",
              boxSizing: "border-box",
            }}
          >
            {/* Main content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "rgb(151, 154, 160)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Информация
              </span>

              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ display: "flex", flexDirection: "row", gap: "8px", alignItems: "center" }}>
                    <span style={{ fontWeight: 600, fontSize: "16px", color: "rgb(50, 53, 57)" }}>
                      <span style={{ color: "rgb(220, 70, 50)", fontWeight: 700, fontSize: "13px", marginRight: "4px" }}>М</span>
                      Москва-Сити 1
                    </span>
                    <span style={{ fontSize: "14px", color: "rgb(151, 154, 160)", display: "flex", alignItems: "center", gap: "2px" }}>
                      <span aria-hidden="true">🚶</span>2 минуты
                    </span>
                  </div>
                  <div style={{ fontSize: "15px", color: "rgb(50, 53, 57)" }}>Пресненская набережная, 2</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", textAlign: "right", flexShrink: 0 }}>
                  <a href="tel:+74951252802317" style={{ fontSize: "14px", fontWeight: 600, color: "rgb(253, 195, 5)", textDecoration: "none" }}>
                    +7 (495) 125-28-02 (доб. 317)
                  </a>
                  <a href="mailto:317@copy.ru" style={{ fontSize: "14px", color: "rgb(253, 195, 5)", textDecoration: "none" }}>
                    317@copy.ru
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", marginTop: "8px" }}>
                <span style={{ fontSize: "14px", color: "rgb(50, 53, 57)" }}>Без выходных&nbsp;&nbsp;9:00 - 21:00</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/telegram2.svg" alt="Telegram" width={38} height={38} style={{ flexShrink: 0 }} />
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
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
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .copycenter-page-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
          }
          .copycenter-page-grid > div:nth-child(1) { height: 300px !important; width: 100% !important; }
          .copycenter-page-grid > div:nth-child(2) { height: 240px !important; width: 100% !important; }
          .copycenter-page-grid > div:nth-child(3) { height: auto !important; width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
