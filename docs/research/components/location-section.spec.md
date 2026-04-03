# LocationSection Specification

## Overview
- **Target file:** `src/components/LocationSection.tsx`
- **Screenshot:** `docs/design-references/location-section.png`
- **Interaction model:** static (map iframe) + click-driven (photo swiper dots)

## DOM Structure
```
section.copycenter-page (margin-top: 24px)
  div.container (padding: 0 24px, max-width: 1464px)
    h1.copycenter-page__title "Копицентр Москва-Сити 1"
    div.copycenter-page-grid (CSS grid)
      [area: map, row 1 full-width] div.copycenter-page-map (Yandex Map iframe)
      [area: slider, row 2 left] div.copycenter-page-swiper (photo carousel)
      [area: info, row 2 right] div.copycenter-page-info (contact card)
```

## Computed Styles

### section.copycenter-page
- margin-top: 24px
- width: 100%

### div.copycenter-page-grid
- display: grid
- grid-template-areas: "map map" "slider info"
- grid-template-columns: 1fr 1fr
- grid-template-rows: 440px 360px
- gap: 24px
- margin-top: 24px

### H1 (.copycenter-page__title)
- font-size: 36px
- font-weight: 600
- font-family: Inter, sans-serif
- line-height: 44px
- color: rgb(50, 53, 57)
- margin-bottom: 0

### Map area (.copycenter-page-map)
- grid-area: map
- height: 440px
- width: 100%
- border-radius: 12px (approximate)
- overflow: hidden
- Contains iframe from Yandex Maps (use static image or placeholder)

### Photo swiper (.copycenter-page-swiper)
- grid-area: slider
- height: 360px
- width: 100%
- border-radius: 12px
- overflow: hidden
- 3 slides with photos of the copy center
- Pagination: 4 dots below, active dot = filled yellow

### Contact info card (.copycenter-page-info__active)
- grid-area: info
- height: 358px
- width: 100% (676.5px)
- display: flex
- flex-direction: column
- align-items: flex-start
- gap: 38px
- border-radius: 20px
- border: 1px solid rgba(198, 184, 138, 0.24)
- padding: 12px

## Info Card Content

### Main content block
- display: flex, flex-direction: column, gap: 16px
- Row 1: "Москва-Сити 1" (location name, font-weight: 600)
         "2 минуты" (walk time from metro, with walk icon, color: muted gray)
- Row 2: Address: Пресненская набережная, 2
- Row 3: Phone: +7 (495) 125-28-02 (доб. 317)
- Row 4: Email: 317@copy.ru (with email icon, color: yellow link)
- Row 5: Hours: Без выходных 9:00 - 21:00
- Telegram icon (blue circle with paper plane, size ~38px)

### Buttons row
- display: flex, gap: 16px, align-items: center
- "Реквизиты" (secondary btn: border 1px solid rgb(229,229,231), bg transparent, borderRadius: 6px, padding: 10px 16px, font-size: 14px, font-weight: 600)
- "Проложить маршрут" (primary btn: bg rgb(253,195,5), same padding/font)

## Photo Slides
- Slide 1: public/images/copy-ru-moskvasiti.webp (alt: "Копицентр Москва-Сити 1 - картинка 1")
- Slide 2: public/images/copy-ru-moskvasiti_2.webp (alt: "Копицентр Москва-Сити 1 - картинка 2")
- Slide 3: public/images/copy-ru-moskvasiti_1.webp (alt: "Копицентр Москва-Сити 1 - картинка 3")
- Image dimensions: 696 × 390

## Map Placeholder
Since Yandex Maps requires API key, use a static screenshot or a styled placeholder:
- Show a map-like gray box with overlay text "Москва-Сити, Пресненская набережная, 2"
- OR use an OpenStreetMap embed: https://www.openstreetmap.org/export/embed.html?bbox=37.527,55.747,37.547,55.752&marker=55.7496,37.5368
- Height: 440px, full width, borderRadius: 12px

## Text Content (verbatim)
- H1: Копицентр Москва-Сити 1
- Location name: Москва-Сити 1
- Walk time: 2 минуты
- Address: Пресненская набережная, 2
- Phone: +7 (495) 125-28-02 (доб. 317)
- Email: 317@copy.ru
- Hours: Без выходных 9:00 - 21:00
- Buttons: Реквизиты | Проложить маршрут

## Responsive Behavior
- **Desktop (1440px)**: 2-column grid as described
- **Mobile (390px)**: Stack to single column (map → swiper → info)
- **Breakpoint**: ~768px
