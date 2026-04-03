const services = [
  { title: "Твёрдый переплет", img: "/images/pereplet-400x256.webp", href: "/catalog/pechat-i-pereplyot-diplomnyh-rabot/" },
  { title: "Печать буклетов", img: "/images/buklet-400x256.webp", href: "/catalog/pechat-bukletov/" },
  { title: "Печать документов А3 / А4", img: "/images/pechat-dokumentov-a3-i-a4-400x256.webp", href: "/catalog/pechat-dokumentov-a3-a4/" },
  { title: "Печать чертежей", img: "/images/pechat-chertezhej.webp", href: "/catalog/pechat-chertezhej/" },
  { title: "Печать визиток", img: "/images/srochnaya-pechat-vizitok.webp", href: "/catalog/pechat-vizitok/" },
  { title: "Печать листовок", img: "/images/listovka-400x256.webp", href: "/catalog/pechat-listovok/" },
  { title: "Печать открыток", img: "/images/otkrytka-400x256.webp", href: "/catalog/pechat-otkrytok/" },
  { title: "Печать наклеек", img: "/images/naklejki.webp", href: "/catalog/pechat-nakleek/" },
  { title: "Печать стикерпаков", img: "/images/oblozhka_stikerpak-400x256.webp", href: "/catalog/pechat-stikerpakok/" },
  { title: "Печать на кружках", img: "/images/frame-1-56-photoroom-400x256.webp", href: "/catalog/pechat-na-kruzhkah/" },
  { title: "Печать на футболках", img: "/images/frame-1-57-photoroom-1-400x256.webp", href: "/catalog/pechat-na-futbolkah/" },
  { title: "Печать фотографий", img: "/images/foto-400x256.webp", href: "/catalog/pechat-fotografij/" },
];

export function ServicesSection() {
  return (
    <section
      style={{
        padding: "40px 0",
        backgroundColor: "rgb(255, 255, 255)",
      }}
    >
      <div
        style={{
          padding: "0 24px",
          maxWidth: "1464px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "rgb(50, 53, 57)",
            fontFamily: "Inter, sans-serif",
            margin: 0,
          }}
        >
          Популярные услуги
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="service-card"
              style={{
                backgroundColor: "rgb(248, 249, 251)",
                borderRadius: "12px",
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s, box-shadow 0.3s",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "28px",
                  color: "rgb(50, 53, 57)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {service.title}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .service-card:hover {
          background-color: rgb(240, 242, 246) !important;
          box-shadow: rgba(113, 128, 150, 0.12) 0px 4px 16px 0px;
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
