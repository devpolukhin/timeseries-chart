import type { TimeSeriesData } from './types';

export const demoData: TimeSeriesData = {
  dates: [
    '2026-06-10',
    '2026-06-11',
    '2026-06-12',
    '2026-06-13',
    '2026-06-14',
  ],
  series: {
    area: [50.12, 45.23, 44.36, 55.65, 48.90],
    bar: [1.45, 1.32, 1.23, 0.79, 1.18],
    spline: [150.25, 120.30, 161.47, 56.33, 180.22],
    line: [25, 32, 36, 70, 58],
  },
  labels: {
    area: 'Cost',
    spline: 'ROI confirmed',
    line: 'Conversions',
    bar: 'CPA',
  },
};
