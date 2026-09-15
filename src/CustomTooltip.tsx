interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  labels: {
    area: string;
    spline: string;
    line: string;
    bar: string;
  };
}

export const CustomTooltip = ({ active, payload, labels }: CustomTooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;

  const data = payload[0].payload;

  return (
    <div
      style={{
        backgroundColor: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        minWidth: '200px',
      }}
    >
      <div
        style={{
          fontSize: '14px',
          fontWeight: '500',
          marginBottom: '8px',
          color: '#333',
        }}
      >
        {data.date}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#F4D03F',
            }}
          />
          <span style={{ fontSize: '13px', color: '#666' }}>
            {labels.area}: <strong style={{ color: '#333' }}>{data.cost.toFixed(2)}</strong>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#3498DB',
            }}
          />
          <span style={{ fontSize: '13px', color: '#666' }}>
            {labels.bar}: <strong style={{ color: '#333' }}>{data.cpa.toFixed(2)}</strong>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#27AE60',
            }}
          />
          <span style={{ fontSize: '13px', color: '#666' }}>
            {labels.spline}: <strong style={{ color: '#333' }}>{data.roi.toFixed(2)}</strong>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#9B59B6',
            }}
          />
          <span style={{ fontSize: '13px', color: '#666' }}>
            {labels.line}: <strong style={{ color: '#333' }}>{data.conversions}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
