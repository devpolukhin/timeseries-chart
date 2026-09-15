export type TimeSeriesData = {
  dates: (string | Date)[];
  series: {
    area: number[];
    spline: number[];
    line: number[];
    bar: number[];
  };
  labels?: {
    area?: string;
    spline?: string;
    line?: string;
    bar?: string;
  };
};

export type ChartDataPoint = {
  date: string;
  cost: number;
  cpa: number;
  roi: number;
  conversions: number;
};
