import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div
      style={{
        padding: "12px 24px",
        maxWidth: "1464px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "14px",
          color: "rgb(50, 53, 57)",
          flexWrap: "wrap",
        }}
      >
        {items.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {i > 0 && (
              <span style={{ color: "rgb(151, 154, 160)" }}>/</span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                style={{
                  color: i === items.length - 1 ? "rgb(253, 195, 5)" : "rgb(50, 53, 57)",
                  textDecoration: "none",
                  fontWeight: i === items.length - 1 ? 600 : 400,
                }}
              >
                {i === 0 && (
                  <span style={{ marginRight: "4px" }}>🏠</span>
                )}
                {item.label}
              </Link>
            ) : (
              <span
                style={{
                  color: i === items.length - 1 ? "rgb(253, 195, 5)" : "rgb(50, 53, 57)",
                  fontWeight: i === items.length - 1 ? 600 : 400,
                }}
              >
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
