# Page Topology — copy.ru/copycenter/kopiczentr-moskva-siti-1/

## Page Title
"Копицентр и Типография у метро Москва-Сити | COPY.RU (Копи.Ру)"

## Section Order (top to bottom)

1. **Header** (sticky, position: sticky, z-index: 5, height: 104px → 60px on scroll)
   - TopBar (height: 44px → 0px on scroll ≥400px via max-height transition)
   - MainNav (height: 60px, always visible)

2. **Breadcrumb** (flow, height: ~20px, offsetTop: 144px)

3. **PageTitle** H1 (flow, offsetTop: ~168px)

4. **LocationSection** (flow, section.copycenter-page, height: 892px, offsetTop: ~188px)
   - Uses CSS Grid:
     - gridTemplateAreas: `"map map" "slider info"`
     - gridTemplateColumns: 676.5px 676.5px
     - gridTemplateRows: 440px 360px
     - gap: 24px
   - Row 1 (full-width): Yandex Map embed (1377px × 440px)
   - Row 2 left: Photo Swiper carousel (676px × 360px), 3 slides
   - Row 2 right: Contact Info Card (676px × 360px)

5. **ServicesSection** (flow, section.services, height: 898px, offsetTop: 1080px)
   - Heading: "Популярные услуги"
   - 4-column grid of service cards (12 cards total)
   - Each card: 326px × 235px, bg: rgb(248,249,251), borderRadius: 12px

6. **ReviewsSection** (flow, section.review, height: 120px, offsetTop: 1978px)
   - Simple heading "Отзывы", no reviews visible

7. **Footer** (flow, footer.section, height: 652px, offsetTop: 2138px)
   - bg: rgb(24, 24, 24)
   - 6-column nav (Информация, О компании, Дополнительно, Полезное, Контакты, Проекты)
   - HR divider
   - 3 promo cards (Клуб привилегий, Франшиза, Пункты копицентров map)
   - HR divider
   - Bottom bar: Logo + social icons + copyright

## Interaction Models
- Header: scroll-driven (max-height collapse at scroll ~400px)
- Photo swiper: click-driven (Swiper.js pagination dots)
- Service cards: hover state (bg + shadow change)
- Nav links: hover state

## Z-Index Layers
- Header: z-index 5 (sticky)
- Chat widget: floating (z-index ~9999)
- Back-to-top button: floating

## Responsive
- Desktop: 1440px viewport
- Mobile: header collapses to mobile version (`.header_mobile`, currently `display: none`)
