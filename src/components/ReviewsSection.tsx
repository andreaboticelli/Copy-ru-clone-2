export function ReviewsSection() {
  return (
    <section
      style={{
        padding: "40px 0",
        backgroundColor: "rgb(255, 255, 255)",
      }}
    >
      <div
        style={{
          maxWidth: "1464px",
          padding: "0 24px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "rgb(50, 53, 57)",
            margin: "0 0 24px 0",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Отзывы
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "rgb(151, 154, 160)",
            margin: 0,
          }}
        >
          Отзывов пока нет.
        </p>
      </div>
    </section>
  );
}
