# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/footer.png`
- **Interaction model:** static + hover on links

## DOM Structure
```
footer.section (bg: rgb(24,24,24), padding: 32px 0, height: 652px)
  div.container (padding: 0 24px, flex column, gap: 32px)
    nav.show-desktop.row (6-column nav, flex row, gap: 24px)
      [×6] div.nav-section (flex column, gap: 12px)
        span.nav-section__title (heading, color: rgb(151,154,160))
        [×N] a (link, color: white, font-size: 14px)
    hr.divider (border-top: 1px solid rgb(128,128,128))
    div.footer-middle.grid (3-column grid of promo cards, gap: 24px)
      div.footer-middle-item (bg: rgb(37,37,37), borderRadius: 12px, padding: 24px)
      div.footer-middle-item (bg: rgb(37,37,37), borderRadius: 12px, padding: 24px)
      div.footer-middle-item (bg: rgb(37,37,37), contains map placeholder)
    hr.divider
    div.footer-bottom.row (flex row, justify-between, align-center)
      a.footer-logo (SVG logo in white/light)
      div.social-links (flex row, gap: 8px, social icons)
      p.copyright "Все права защищены. © 2012 – 2026 COPY.RU"
      a "Разработка сайта ↗"
```

## Computed Styles

### footer.section
- background-color: rgb(24, 24, 24)
- padding: 32px 0
- width: 100%

### .container
- padding: 0px 24px
- max-width: 1464px
- display: flex
- flex-direction: column
- gap: 32px

### Nav row (6 columns)
- display: flex
- flex-direction: row
- gap: 24px
- width: 100%

### .nav-section
- display: flex
- flex-direction: column
- gap: 12px
- flex: 1

### .nav-section heading/title
- color: rgb(151, 154, 160)
- font-size: 16px
- font-weight: 600
- font-family: Inter

### Nav links (a elements)
- color: rgb(255, 255, 255)
- font-size: 14px
- font-weight: 600
- text-decoration: none
- hover: opacity 0.8 or color shift

### HR divider
- border-top: 1px solid rgb(128, 128, 128)
- margin: 0

### .footer-middle (promo cards grid)
- display: grid
- grid-template-columns: repeat(3, 1fr)
- gap: 24px
- height: 178px

### .footer-middle-item (dark card)
- background-color: rgb(37, 37, 37)
- border-radius: 12px
- padding: 24px
- display: flex
- flex-direction: column
- justify-content: space-between
- color: rgb(255, 255, 255)

### .footer-bottom
- display: flex
- flex-direction: row
- justify-content: space-between
- align-items: center
- gap: 24px
- height: 36px

### Copyright text
- color: rgb(151, 154, 160) (muted)
- font-size: 14px

## Footer Nav Content (verbatim)

### Информация
- Арендодателям
- Вакансии
- Публичная оферта
- Политика конфиденциальности
- Положение об обработке файлов cookies
- Согласие на обработку персональных данных

### О компании
- Написать директору
- О нас
- Управляющая компания
- Новости
- Блог

### Дополнительно
- Контакты
- Оплата и доставка
- Требования к макетам
- Клуб привилегий

### Полезное
- Портфолио
- Статус заказа
- Генератор QR
- Франшиза

### Контакты
- +7 (495) 125-28-02
- print@copy.ru
- Москва ▼ (with dropdown)

### Проекты
- Сувениры с логотипом ↗
- COPY.RU для бизнеса ↗
- Калькулятор ↗

## Footer Middle Cards Content

### Card 1: Клуб привилегий
- Title: "Присоединяйся к клубу привилегий"
- Body: "Копи баллы и оплачивай ими до 15% стоимости заказа. Получай персональные скидки и предложения. Оформить карту можно в копировальных центрах и онлайн."
- Button: "Подробнее →" (secondary style, white border)

### Card 2: Франшиза
- Title: "Франшиза: открой свой копицентр"
- Body: "Ты получишь все необходимое для запуска и развития собственного центра: от современного оборудования до маркетинговых стратегий."
- Button: "Подробнее →" (secondary style, white border)

### Card 3: Пункты копицентров
- Title: "Пункты копицентров" (overlay on map)
- Contains a map image/placeholder showing locations

## Footer Bottom Bar Content
- Logo: COPY.RU SVG (white version for dark background)
- Social icons: Telegram, YouTube, Facebook, Instagram, Pinterest, VKontakte, TikTok
  - Note: "Деятельность организаций Instagram и Facebook запрещены на территории РФ."
- Copyright: "Все права защищены. © 2012 – 2026 COPY.RU"
- Link: "Разработка сайта ↗"

## Responsive Behavior
- **Desktop (1440px)**: Full 6-column nav, 3 promo cards, footer bottom as described
- **Mobile (390px)**: Nav collapses, cards stack, footer bottom stacks
