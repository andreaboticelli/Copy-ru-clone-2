"use client";

import { useState, useEffect } from "react";

function LogoSVG() {
  return (
    <svg viewBox="0 0 128 32" fill="none" width={128} height={32} aria-label="COPY.RU">
      <rect width="32" height="32" rx="6" fill="#FDC305" />
      {/* Paper airplane icon */}
      <path d="M6 16 L26 8 L18 26 L14 18 Z" fill="#323539" />
      <path d="M14 18 L17 15" stroke="#FDC305" strokeWidth="1.5" />
      <text x="38" y="22" fontFamily="Inter,sans-serif" fontWeight="700" fontSize="17" fill="#323539">COPY.RU</text>
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <rect x="1" y="1" width="6" height="6" rx="1" />
      <rect x="9" y="1" width="6" height="6" rx="1" />
      <rect x="1" y="9" width="6" height="6" rx="1" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}


export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 5,
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "rgba(113, 128, 150, 0.04) 0px 0px 1px 0px, rgba(113, 128, 150, 0.08) 0px 4px 8px 0px",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: scrolled ? "0px" : "50px",
          transition: "max-height 0.3s ease",
          borderBottom: scrolled ? "none" : "1px solid rgb(229, 229, 231)",
        }}
      >
        <div
          style={{
            maxWidth: "1464px",
            padding: "0 24px",
            margin: "0 auto",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "14px",
            color: "rgb(50, 53, 57)",
          }}
        >
          {/* City selector */}
          <a
            href="#"
            style={{
              color: "rgb(50, 53, 57)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              whiteSpace: "nowrap",
            }}
          >
            Москва
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </a>

          {/* Center links */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {[
              { text: "Сувениры с логотипом", href: "#" },
              { text: "Для бизнеса", href: "#" },
              { text: "Калькулятор", href: "#" },
            ].map((link) => (
              <a
                key={link.text}
                href={link.href}
                style={{ color: "rgb(50, 53, 57)", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}
              >
                {link.text} ↗
              </a>
            ))}
          </div>

          {/* Right: phone, email, login */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a href="tel:+74951252802" style={{ color: "rgb(50, 53, 57)", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>
              +7 (495) 125-28-02
            </a>
            <a href="mailto:print@copy.ru" style={{ color: "rgb(50, 53, 57)", textDecoration: "none", fontSize: "14px" }}>
              print@copy.ru
            </a>
            <a href="#" style={{ color: "rgb(50, 53, 57)", textDecoration: "none", fontSize: "14px", display: "flex", alignItems: "center", gap: "4px" }}>
              <PersonIcon />
              Войти
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div
        style={{
          maxWidth: "1464px",
          padding: "10px 24px",
          margin: "0 auto",
          height: "60px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <LogoSVG />
        </a>

        {/* Catalog button */}
        <button
          type="button"
          style={{
            backgroundColor: "rgb(253, 195, 5)",
            color: "rgb(50, 53, 57)",
            borderRadius: "6px",
            padding: "10px 16px",
            fontSize: "14px",
            fontWeight: 600,
            height: "40px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            whiteSpace: "nowrap",
            flexShrink: 0,
            fontFamily: "inherit",
          }}
        >
          <GridIcon />
          Каталог
        </button>

        {/* Search bar */}
        <div
          style={{
            flex: 1,
            height: "40px",
            border: "1px solid rgb(229, 229, 231)",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            gap: "8px",
          }}
        >
          <span style={{ color: "rgb(151, 154, 160)", display: "flex", alignItems: "center", flexShrink: 0 }}>
            <SearchIcon />
          </span>
          <input
            type="search"
            placeholder="Найдите изделие, категорию, оборудование, матер"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: "14px",
              color: "rgb(50, 53, 57)",
              background: "transparent",
              fontFamily: "inherit",
            }}
          />
          <button
            type="submit"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
              color: "rgb(50, 53, 57)",
              padding: "0 4px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Поиск"
          >
            →
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "20px", flexShrink: 0 }}>
          {[
            { text: "Вакансии", href: "#" },
            { text: "Информация", href: "#", hasDropdown: true },
            { text: "Портфолио", href: "#" },
            { text: "Контакты", href: "#" },
          ].map((link) => (
            <a
              key={link.text}
              href={link.href}
              style={{
                color: "rgb(50, 53, 57)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              {link.text}
              {link.hasDropdown && <span style={{ fontSize: "10px" }}>▾</span>}
            </a>
          ))}
        </nav>

        {/* Быстрый заказ */}
        <button
          type="button"
          style={{
            backgroundColor: "rgb(253, 195, 5)",
            color: "rgb(50, 53, 57)",
            borderRadius: "6px",
            padding: "10px 16px",
            fontSize: "14px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            whiteSpace: "nowrap",
            flexShrink: 0,
            fontFamily: "inherit",
          }}
        >
          Быстрый заказ
        </button>

        {/* Cart */}
        <a
          href="#"
          style={{
            border: "1px solid rgb(229, 229, 231)",
            borderRadius: "6px",
            padding: "10px 12px",
            fontSize: "14px",
            fontWeight: 600,
            color: "rgb(50, 53, 57)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          <CartIcon />
          Корзина
        </a>
      </div>
    </header>
  );
}
