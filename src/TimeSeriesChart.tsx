import {
  ComposedChart,
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { CustomTooltip } from './CustomTooltip';
import type { TimeSeriesData } from './types';

interface TimeSeriesChartProps {
  data: TimeSeriesData;
  width?: string | number;
  height?: number;
}

interface ChartDataPoint {
  date: string;
  cost: number;
  cpa: number;
  roi: number;
  conversions: number;
}

const formatDate = (dateInput: string | Date): string => {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const prepareChartData = (data: TimeSeriesData): ChartDataPoint[] => {
  return data.dates.map((date, index) => ({
    date: formatDate(date),
    cost: data.series.area[index] || 0,
    cpa: data.series.bar[index] || 0,
    roi: data.series.spline[index] || 0,
    conversions: data.series.line[index] || 0,
  }));
};

const CustomDot = (props: any) => {
  const { cx, cy, stroke } = props;
  if (cx === undefined || cy === undefined) return null;
  
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={5}
        fill={stroke}
        stroke="white"
        strokeWidth={2}
      />
    </g>
  );
};

const CustomSquareDot = (props: any) => {
  const { cx, cy, stroke } = props;
  if (cx === undefined || cy === undefined) return null;
  
  return (
    <rect
      x={cx - 4}
      y={cy - 4}
      width={8}
      height={8}
      fill={stroke}
      stroke="white"
      strokeWidth={1.5}
    />
  );
};

const CustomActiveSquareDot = (props: any) => {
  const { cx, cy } = props;
  if (cx === undefined || cy === undefined) return null;
  
  return (
    <g>
      {/* Large semi-transparent halo */}
      <circle
        cx={cx}
        cy={cy}
        r={16}
        fill="rgba(155, 89, 182, 0.25)"
        stroke="none"
      />
      {/* Square marker */}
      <rect
        x={cx - 4}
        y={cy - 4}
        width={8}
        height={8}
        fill="#9B59B6"
        stroke="white"
        strokeWidth={1.5}
      />
    </g>
  );
};

const CustomBarShape = (props: any) => {
  const { x, y, width, height, fill } = props;
  const barHeight = 6;
  const barWidth = Math.min(width * 0.5, 16);
  const xOffset = (width - barWidth) / 2;
  const radius = barHeight / 2;
  
  return (
    <rect
      x={x + xOffset}
      y={y + height - barHeight}
      width={barWidth}
      height={barHeight}
      fill={fill}
      rx={radius}
      ry={radius}
    />
  );
};

export const TimeSeriesChart = ({ 
  data, 
  width = '100%', 
  height = 400 
}: TimeSeriesChartProps) => {
  const chartData = prepareChartData(data);
  
  const labels = {
    area: data.labels?.area || 'Cost',
    spline: data.labels?.spline || 'ROI confirmed',
    line: data.labels?.line || 'Conversions',
    bar: data.labels?.bar || 'CPA',
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width={width} height={height}>
        <ComposedChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="date"
            tick={false}
            tickLine={false}
            axisLine={{ stroke: '#e0e0e0' }}
            hide={true}
          />
          <YAxis
            tick={{ fontSize: 12, fill: '#999' }}
            tickLine={false}
            axisLine={{ stroke: '#e0e0e0' }}
          />
          <Tooltip
            content={<CustomTooltip labels={labels} />}
            cursor={false}
          />
          
          {/* Area chart for Cost (yellow/gold, smooth spline area) */}
          <Area
            type="monotone"
            dataKey="cost"
            fill="rgba(244, 208, 63, 0.35)"
            stroke="#F4D03F"
            strokeWidth={2}
            name={labels.area}
            dot={false}
            activeDot={false}
          />
          
          {/* Bar for CPA (blue, tiny semi-circles/bumps at bottom) */}
          <Bar
            dataKey="cpa"
            fill="#3498DB"
            name={labels.bar}
            shape={<CustomBarShape />}
            maxBarSize={40}
          />
          
          {/* Spline for ROI confirmed (green, smooth curve, no default markers) */}
          <Line
            type="monotone"
            dataKey="roi"
            stroke="#27AE60"
            strokeWidth={3}
            name={labels.spline}
            dot={false}
            activeDot={{ 
              r: 16, 
              fill: 'rgba(39, 174, 96, 0.2)', 
              stroke: 'none',
            }}
          />
          
          {/* Line for Conversions (purple, straight segments, with square markers) */}
          <Line
            type="linear"
            dataKey="conversions"
            stroke="#9B59B6"
            strokeWidth={2}
            name={labels.line}
            dot={<CustomSquareDot />}
            activeDot={<CustomActiveSquareDot />}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export const initChart = (
  container: HTMLElement,
  data: TimeSeriesData
): void => {
  import('react-dom/client').then(({ createRoot }) => {
    const root = createRoot(container);
    root.render(<TimeSeriesChart data={data} />);
  });
};
