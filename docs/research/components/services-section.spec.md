# ServicesSection Specification

## Overview
- **Target file:** `src/components/ServicesSection.tsx`
- **Screenshot:** `docs/design-references/services-section.png`
- **Interaction model:** static grid + hover on cards

## DOM Structure
```
section.services (padding: 40px 0)
  div.container (padding: 0 24px, flex column, gap: 24px)
    h2 "Популярные услуги"
    div.product-card-grid (4-column grid of service cards)
      [×12] div.product-card.product-card-grid
        div.product-card-title "Твёрдый переплет"
        img (service image, 400×256)
```

## Computed Styles

### section.services
- padding: 40px 0
- background-color: rgb(255, 255, 255)
- width: 100%

### .container.container--portfolio
- padding: 0px 24px
- display: flex
- flex-direction: column
- gap: 24px
- max-width: 1464px

### Section heading
- font-size: ~28px (estimated, check screenshot)
- font-weight: 600
- color: rgb(50, 53, 57)
- margin: 0

### Cards grid (.product-card-grid parent)
- display: grid
- grid-template-columns: repeat(4, 1fr)
- gap: 16px (estimated)

### Individual card (.product-card.product-card-grid)
- background-color: rgb(248, 249, 251)
- border-radius: 12px
- padding: 16px 20px
- padding-top: 16px
- padding-bottom: 16px
- width: 326.25px (auto with grid)
- height: 235.25px
- display: flex
- flex-direction: column
- justify-content: space-between
- gap: 8px
- cursor: pointer
- transition: border-color 0.3s, background-color 0.3s, box-shadow 0.3s

### Card title (.product-card-title)
- font-size: 18px
- font-weight: 600
- font-family: Inter
- line-height: 28px
- color: rgb(50, 53, 57)

### Card image
- width: 100%
- object-fit: contain
- height: ~160px
- max-height: 160px

## States & Behaviors

### Card hover
- **Trigger**: mouse hover on card
- **State A (default)**: background-color: rgb(248, 249, 251), box-shadow: none
- **State B (hover)**: background-color: rgb(240, 242, 246), box-shadow: rgba(113, 128, 150, 0.12) 0px 4px 16px 0px
- **Transition**: background-color 0.3s, box-shadow 0.3s

## Service Cards Data (all 12)
```
1. Твёрдый переплет → /catalog/pechat-i-pereplyot-diplomnyh-rabot/
   Image: public/images/pereplet-400x256.webp

2. Печать буклетов → /catalog/pechat-bukletov/
   Image: public/images/buklet-400x256.webp

3. Печать документов А3 / А4 → /catalog/pechat-dokumentov-a3-a4/
   Image: public/images/pechat-dokumentov-a3-i-a4-400x256.webp

4. Печать чертежей → /catalog/pechat-chertezhej/
   Image: public/images/pechat-chertezhej.webp

5. Печать визиток → /catalog/pechat-vizitok/
   Image: public/images/srochnaya-pechat-vizitok.webp

6. Печать листовок → /catalog/pechat-listovok/
   Image: public/images/listovka-400x256.webp

7. Печать открыток → /catalog/pechat-otkrytok/
   Image: public/images/otkrytka-400x256.webp

8. Печать наклеек → /catalog/pechat-nakleek/
   Image: public/images/naklejki.webp

9. Печать стикерпаков → /catalog/pechat-stikerpakok/
   Image: public/images/stikerpaki.webp (estimate filename)

10. Печать на кружках → /catalog/pechat-na-kruzhkah/
    Image: public/images/kruzhka.webp (estimate filename)

11. Печать на футболках → /catalog/pechat-na-futbolkah/
    Image: public/images/futbolka.webp (estimate filename)

12. Печать фотографий → /catalog/pechat-fotografij/
    Image: public/images/foto.webp (estimate filename)
```
Note: Use whatever downloaded images are in public/images/ matching these names.
If image file not found, use a gray placeholder (bg: rgb(248,249,251)).

## Responsive Behavior
- **Desktop (1440px)**: 4-column grid
- **Tablet (768px)**: 2-column grid
- **Mobile (390px)**: 2-column grid (smaller)
- **Breakpoint**: ~768px switches to 2 columns
