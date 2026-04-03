# Behavior Bible — copy.ru/kopiczentr-moskva-siti-1/

## Scroll Behaviors

### Header Top Bar Collapse
- **Trigger**: scroll position ~400px (JS scroll listener sets max-height)
- **State A (scroll 0-400)**: header height 104px, top bar max-height: 50px, opacity: 1
- **State B (scroll 400+)**: header height 60px, top bar max-height: 0px
- **Transition**: CSS transition on max-height (smoothly collapses)
- **Class**: `.scroll-toggle` on `.header-top-container`
- **Implementation**: Listen to window scroll, toggle max-height CSS variable

### Back-to-top button
- Floating yellow button (`.btn--to_top`) appears on scroll
- Position: fixed bottom-right

## Click Behaviors

### Photo Swiper
- 3 slides of the copy center photos
- Pagination: 4 white dots below carousel, active dot is yellow/different
- Interaction model: click-driven (Swiper.js)

### Header Dropdowns
- "Информация" nav link has dropdown (chevron icon)
- Click reveals dropdown menu

## Hover States

### Service Cards (.product-card.product-card-grid)
- Default: background rgb(248, 249, 251), no shadow
- Hover: background rgb(240, 242, 246), boxShadow rgba(113,128,150,0.12) 0px 4px 16px 0px
- Transition: border-color 0.3s, background-color 0.3s, box-shadow 0.3s

### Buttons (.btn-primary)
- Default: background rgb(253, 195, 5)
- Hover: slightly darker yellow

### Nav links
- Hover: color change or underline

## Animations
- No scroll-driven animations detected
- No Lenis/Locomotive Scroll detected
- No parallax

## Responsive Breakpoints
- Desktop header: `.header--pc` (visible)
- Mobile header: `.header_mobile` (hidden on desktop)
- Cards: 4 columns on desktop
