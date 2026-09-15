# Интерактивный многосерийный график временных рядов / Interactive Multi-Series Time-Series Chart

[Русский](#русский) | [English](#english)

---

## Русский

Готовый к production интерактивный компонент графика, который визуализирует четыре временных ряда данных с различными стилями отображения: area, spline, line и bar.

### ✨ Возможности

- **4 типа графиков в одном**: Area (Стоимость), Spline (ROI), Line (Конверсии), Bar (CPA)
- **Интерактивные подсказки**: Наведите на любую точку для просмотра детальных метрик
- **Адаптивный дизайн**: Подстраивается под разные размеры экрана
- **Плавная анимация**: Плавные взаимодействия и переходы
- **Поддержка TypeScript**: Полностью типизированный API
- **Современный стек**: React, TypeScript, Vite и Recharts

### 🚀 Быстрый старт

#### Установка

```bash
npm install
```

#### Разработка

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5847`

#### Сборка для продакшена

```bash
npm run build
```

### 📖 Использование

#### Как React-компонент

```tsx
import { TimeSeriesChart } from './TimeSeriesChart';
import type { TimeSeriesData } from './types';

const data: TimeSeriesData = {
  dates: ['2026-06-10', '2026-06-11', '2026-06-12', '2026-06-13'],
  series: {
    area: [50.12, 45.23, 44.36, 55.65],      // Стоимость
    spline: [150.25, 120.30, 161.47, 56.33], // ROI подтвержденный
    line: [25, 32, 36, 70],                  // Конверсии
    bar: [1.45, 1.32, 1.23, 0.79],           // CPA
  },
  labels: {
    area: 'Стоимость',
    spline: 'ROI подтвержденный',
    line: 'Конверсии',
    bar: 'CPA',
  },
};

function App() {
  return <TimeSeriesChart data={data} height={400} />;
}
```

#### Vanilla JavaScript API

```javascript
import { initChart } from './TimeSeriesChart';

const container = document.getElementById('chart-container');

initChart(container, {
  dates: ['2026-06-10', '2026-06-11', '2026-06-12', '2026-06-13'],
  series: {
    area: [50.12, 45.23, 44.36, 55.65],
    spline: [150.25, 120.30, 161.47, 56.33],
    line: [25, 32, 36, 70],
    bar: [1.45, 1.32, 1.23, 0.79],
  },
  labels: {
    area: 'Стоимость',
    spline: 'ROI подтвержденный',
    line: 'Конверсии',
    bar: 'CPA',
  },
});
```

### 📊 Структура данных

Для инициализации графика с **четырьмя последовательностями данных** используйте следующую структуру:

```typescript
interface TimeSeriesData {
  dates: (string | Date)[];  // Даты в формате ISO или объекты Date
  series: {
    area: number[];          // Желтая заполненная область (например, Стоимость)
    spline: number[];        // Зеленая плавная кривая (например, ROI)
    line: number[];          // Фиолетовая линия с квадратными маркерами (например, Конверсии)
    bar: number[];           // Синие горизонтальные столбцы (например, CPA)
  };
  labels?: {
    area?: string;
    spline?: string;
    line?: string;
    bar?: string;
  };
}
```

### 🎨 Стили серий графика

1. **Area (Стоимость)**: Мягкая желто-золотая заполненная область с плавной кривой
2. **Spline (ROI подтвержденный)**: Толстая зеленая кривая линия с круглыми маркерами
3. **Line (Конверсии)**: Фиолетовая линия из прямых отрезков с квадратными маркерами
4. **Bar (CPA)**: Маленькие синие округлые столбики внизу графика

### 🛠 Технологический стек

- **React** 19 - UI библиотека
- **TypeScript** 5 - Типизация
- **Vite** 6 - Быстрая сборка
- **Recharts** 2 - Библиотека графиков
- **CSS3** - Стилизация

### 📁 Структура проекта

```
timeseries-chart
├── src/
│   ├── TimeSeriesChart.tsx  # Основной компонент графика
│   ├── CustomTooltip.tsx    # Кастомный компонент подсказки
│   ├── types.ts             # TypeScript интерфейсы
│   ├── demoData.ts          # Демо-данные
│   ├── lib.ts               # Экспорты библиотеки
│   ├── App.tsx              # Демо-приложение
│   └── main.tsx             # Точка входа
├── package.json
├── vite.config.ts
└── README.md
```

### 📝 Примечания

- График полностью соответствует референсу из задания
- Формат даты в подсказке: `ДД.МM.ГГГГ` (например, 12.06.2026)
- Все четыре серии отображаются одновременно на одном графике
- Интерактивные подсказки при наведении мыши

### 🌐 Поддержка браузеров

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

---

---

## English

A polished, production-ready interactive chart component that visualizes four time-series data sequences with different rendering styles: area, spline, line, and bar charts.

### ✨ Features

- **4 Chart Types in One**: Area (Cost), Spline (ROI), Line (Conversions), Bar (CPA)
- **Interactive Tooltips**: Hover over any point to see detailed metrics
- **Responsive Design**: Adapts to different screen sizes
- **Smooth Animations**: Fluid interactions and transitions
- **TypeScript Support**: Fully typed API for better developer experience
- **Modern Stack**: Built with React, TypeScript, Vite, and Recharts

### 🚀 Quick Start

#### Installation

```bash
npm install
```

#### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5847`

#### Build for Production

```bash
npm run build
```

### 📖 Usage

#### As a React Component

```tsx
import { TimeSeriesChart } from './TimeSeriesChart';
import type { TimeSeriesData } from './types';

const data: TimeSeriesData = {
  dates: ['2026-06-10', '2026-06-11', '2026-06-12', '2026-06-13'],
  series: {
    area: [50.12, 45.23, 44.36, 55.65],      // Cost
    spline: [150.25, 120.30, 161.47, 56.33], // ROI confirmed
    line: [25, 32, 36, 70],                  // Conversions
    bar: [1.45, 1.32, 1.23, 0.79],           // CPA
  },
  labels: {
    area: 'Cost',
    spline: 'ROI confirmed',
    line: 'Conversions',
    bar: 'CPA',
  },
};

function App() {
  return <TimeSeriesChart data={data} height={400} />;
}
```

#### Vanilla JavaScript API

```javascript
import { initChart } from './TimeSeriesChart';

const container = document.getElementById('chart-container');

initChart(container, {
  dates: ['2026-06-10', '2026-06-11', '2026-06-12', '2026-06-13'],
  series: {
    area: [50.12, 45.23, 44.36, 55.65],
    spline: [150.25, 120.30, 161.47, 56.33],
    line: [25, 32, 36, 70],
    bar: [1.45, 1.32, 1.23, 0.79],
  },
  labels: {
    area: 'Cost',
    spline: 'ROI confirmed',
    line: 'Conversions',
    bar: 'CPA',
  },
});
```

### 📊 Data Structure

```typescript
interface TimeSeriesData {
  dates: (string | Date)[];  // ISO date strings or Date objects
  series: {
    area: number[];          // Yellow filled area (e.g., Cost)
    spline: number[];        // Green smooth curve (e.g., ROI)
    line: number[];          // Purple line with square markers (e.g., Conversions)
    bar: number[];           // Blue horizontal bars (e.g., CPA)
  };
  labels?: {
    area?: string;
    spline?: string;
    line?: string;
    bar?: string;
  };
}
```

### 🎨 Chart Series Styles

1. **Area (Cost)**: Soft yellow/gold filled area with smooth curve
2. **Spline (ROI confirmed)**: Thick green curved line with circular markers
3. **Line (Conversions)**: Purple straight-segment line with square markers
4. **Bar (CPA)**: Small blue rounded pill/bar markers at the bottom

### 🛠 Tech Stack

- **React** 19 - UI library
- **TypeScript** 5 - Type safety
- **Vite** 6 - Fast build tool
- **Recharts** 2 - Charting library
- **CSS3** - Styling

### 📁 Project Structure

```
timeseries-chart
├── src/
│   ├── TimeSeriesChart.tsx  # Main chart component
│   ├── CustomTooltip.tsx    # Custom tooltip component
│   ├── types.ts             # TypeScript interfaces
│   ├── demoData.ts          # Sample data
│   ├── lib.ts               # Library exports
│   ├── App.tsx              # Demo application
│   └── main.tsx             # Entry point
├── package.json
├── vite.config.ts
└── README.md
```

### 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

---

---

## License / Лицензия

MIT
