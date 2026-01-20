# FSD Architecture - Fitness App

## Структура папок

```
/                                 # Корневая директория Figma Make
├── App.tsx                       # Главный компонент приложения (нельзя переместить)
├── Attributions.md               # Атрибуции (нельзя переместить)
│
├── dosc/                         # Документация проекта
│   └── STRUCTURE.md              # Этот файл - структура проекта
│
├── components/                   # Компоненты (только shadcn и Figma)
│   ├── ui/                       # UI компоненты shadcn (нельзя переместить)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   ├── badge.tsx
│   │   ├── switch.tsx
│   │   ├── checkbox.tsx
│   │   ├── progress.tsx
│   │   ├── avatar.tsx
│   │   ├── tabs.tsx
│   │   ├── skeleton.tsx
│   │   ├── dialog.tsx
│   │   ├── bottom-sheet.tsx
│   │   ├── separator.tsx
│   │   └── utils.ts
│   │
│   └── figma/                    # Защищенные компоненты Figma
│       └── ImageWithFallback.tsx # (нельзя изменять)
│
├── pages/                        # FSD: Страницы (композиция виджетов)
│
├── widgets/                      # FSD: Виджеты (композиция фичей)
│ 
├── features/                     # FSD: Фичи (бизнес-логика)
│ 
├── entities/                     # FSD: Сущности (бизнес-модели)
│ 
├── shared/                       # FSD: Общее
│ 
└── styles/
    └── globals.css               # Глобальные стили (нельзя переместить)
```