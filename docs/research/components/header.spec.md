# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/header-desktop.png`
- **Interaction model:** scroll-driven (top bar collapses on scroll ≥400px)

## DOM Structure
```
header.header (sticky, z-5, bg-white, box-shadow)
  div.header-top-container (collapsible on scroll, height: 44px → 0)
    div.container (grid layout)
      [LEFT] City links: Москва (active), Екатеринбург, Нижний Новгород, Санкт-Петербург, Сочи, Тюмень, Ярославль
      [CENTER] External links: Сувениры с логотипом ↗, Для бизнеса ↗, Калькулятор ↗
      [RIGHT] +7 (495) 125-28-02 | print@copy.ru | 👤 Войти
  div.header-middle (nav bar, height: 60px)
    div.container (flex row, gap: 10px, align-center)
      a.header-middle__logo (width: 128px, height: 32px) → SVG logo
      button.header-catalog__btn (Каталог, yellow, with grid icon)
      form.search-bar (flex, full-width, border)
        input[placeholder="Найдите изделие, категорию, оборудование, матер"]
        button[→ arrow]
      nav.header-nav (flex row, gap)
        a Вакансии
        div (Информация ▼ dropdown)
        a Портфолио
        a Контакты
      a.btn-primary (Быстрый заказ)
      a.basket (Корзина icon)
```

## Computed Styles

### header element
- position: sticky
- top: 0
- z-index: 5
- background-color: rgb(255, 255, 255)
- box-shadow: rgba(113, 128, 150, 0.04) 0px 0px 1px 0px, rgba(113, 128, 150, 0.08) 0px 4px 8px 0px
- height: 104px (when top bar visible) / 60px (when scrolled)

### .header-top-container (top bar)
- height: 44px
- max-height: 50px → 0px on scroll
- overflow: hidden
- transition: max-height 0.3s ease
- padding: 0px 24px
- font-size: 14px
- color: rgb(50, 53, 57)
- display: grid (3-column layout for left/center/right)
- border-bottom: 1px solid rgb(229, 229, 231)

### City links (top bar left)
- font-size: 14px
- font-weight: 600
- color: rgb(50, 53, 57)
- Active city (Москва): has dropdown chevron ▼
- Gap between cities: ~8px

### External links (top bar center: Сувениры с логотипом, Для бизнеса, Калькулятор)
- font-size: 14px
- font-weight: 600
- color: rgb(50, 53, 57)
- Has external link arrow icon ↗

### Top bar right (phone, email, login)
- +7 (495) 125-28-02 — font-weight: 600, font-size: 14px
- print@copy.ru — font-size: 14px
- Войти — with person icon, font-size: 14px

### .header-middle (nav bar)
- height: 60px
- padding: 10px 0px
- display: flex
- flex-direction: row
- align-items: center
- gap: 10px
- padding: 0px 24px

### Logo link (.header-middle__logo)
- width: 128px
- height: 32px
- SVG: COPY.RU logo (yellow paper airplane + "COPY.RU" text)

### Catalog button (.header-catalog__btn)
- background-color: rgb(253, 195, 5)
- color: rgb(50, 53, 57)
- border-radius: 6px
- padding: 10px 16px
- font-size: 14px
- font-weight: 600
- height: 40px
- Has a grid/menu icon on left

### Search bar
- display: flex
- flex: 1 (takes remaining space)
- border: 1px solid rgb(229, 229, 231)
- border-radius: 6px
- height: 40px
- padding: 0 12px
- Input: placeholder "Найдите изделие, категорию, оборудование, матер"
- Right side: arrow button → with color rgb(253, 195, 5) or similar

### Nav links (Вакансии, Информация, Портфолио, Контакты)
- font-size: 14px
- font-weight: 600
- color: rgb(50, 53, 57)
- No underline
- Gap: 16-20px between items
- "Информация" has chevron ▼ indicating dropdown

### Быстрый заказ button
- background-color: rgb(253, 195, 5)
- color: rgb(50, 53, 57)
- border-radius: 6px
- padding: 10px 16px
- font-size: 14px
- font-weight: 600

### Корзина
- Icon + text "Корзина"
- Outlined/ghost style

## States & Behaviors

### Top bar collapse on scroll
- **Trigger**: window scroll >= 400px
- **State A (initial)**: max-height: 50px, opacity: 1, header height: 104px
- **State B (scrolled)**: max-height: 0px, height: 0, header height: 60px
- **Transition**: max-height 0.3s ease, opacity 0.2s ease
- **Implementation**: useEffect + scroll event listener → toggle CSS class or inline style

## Assets
- Logo: SVG inline (yellow paper airplane + "COPY.RU" text in dark)
- See `public/images/logo.svg` if downloaded, otherwise recreate as SVG component

## Text Content (verbatim)
- Cities: Москва, Екатеринбург, Нижний Новгород, Санкт-Петербург, Сочи, Тюмень, Ярославль
- External links: Сувениры с логотипом ↗, Для бизнеса ↗, Калькулятор ↗
- Phone: +7 (495) 125-28-02
- Email: print@copy.ru
- Login: Войти
- Catalog button: Каталог
- Search placeholder: Найдите изделие, категорию, оборудование, матер
- Nav: Вакансии, Информация ▾, Портфолио, Контакты
- CTA: Быстрый заказ
- Cart: Корзина

## Responsive Behavior
- **Desktop (1440px)**: Full header with top bar + nav bar
- **Mobile (390px)**: Different mobile header (`.header_mobile`) — not implementing, show desktop only
- **Breakpoint**: ~768px (mobile header activates)
