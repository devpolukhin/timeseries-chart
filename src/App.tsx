import { TimeSeriesChart } from './TimeSeriesChart';
import { demoData } from './demoData';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Interactive Multi-Series Time-Series Chart</h1>
        <p className="subtitle">
          Hover over the chart to see detailed metrics for each date
        </p>
        <div className="chart-wrapper">
          <div className="chart-sidebar">
            <div className="sidebar-label">Tdy</div>
            <div className="sidebar-value">0%</div>
            <div className="sidebar-value">$0</div>
            <div className="sidebar-value">$0</div>
            <div className="sidebar-value">0</div>
            <div className="sidebar-value">0</div>
          </div>
          <div className="chart-container">
            <TimeSeriesChart data={demoData} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
