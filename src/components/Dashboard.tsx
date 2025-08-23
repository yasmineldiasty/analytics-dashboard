import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import DateFilter from './DateFilter';
import { getFilteredData } from '../data/mockData';
import type { DateRange, AnalyticsData } from '../types';
import "../styles/Dashboard.css";

const Dashboard: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), 
    endDate: new Date(),
  });

  const [filteredData, setFilteredData] = useState<AnalyticsData>({
    dailyUsers: [],
    demographics: [],
  });

  useEffect(() => {
    const data = getFilteredData(dateRange.startDate, dateRange.endDate);
    setFilteredData(data);
  }, [dateRange]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Analytics Dashboard</h1>
        <DateFilter dateRange={dateRange} onDateChange={setDateRange} />
      </header>

      <div className="charts-grid">
        <div className="chart-item">
          <BarChart
            data={filteredData.dailyUsers}
            title="Daily Active Users"
          />
        </div>
        
        <div className="chart-item">
          <PieChart
            data={filteredData.demographics}
            title="User Demographics by Age Group"
          />
        </div>
      </div>

      <div className="dashboard-summary">
        <h2>Summary</h2>
        <div className="summary-cards">
          <div className="summary-card">
            <h3>Total Users</h3>
            <p>{filteredData.dailyUsers.reduce((sum, item) => sum + item.users, 0).toLocaleString()}</p>
          </div>
          <div className="summary-card">
            <h3>Average Daily Users</h3>
            <p>{filteredData.dailyUsers.length > 0 
              ? Math.round(filteredData.dailyUsers.reduce((sum, item) => sum + item.users, 0) / filteredData.dailyUsers.length).toLocaleString()
              : 0
            }</p>
          </div>
          <div className="summary-card">
            <h3>Date Range</h3>
            <p>{dateRange.startDate.toLocaleDateString()} - {dateRange.endDate.toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;