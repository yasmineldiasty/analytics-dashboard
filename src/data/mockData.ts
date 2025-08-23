import type { AnalyticsData } from '../types';

export const mockData: AnalyticsData = {
  dailyUsers: [
    { date: '2024-01-01', users: 120 },
    { date: '2024-01-02', users: 150 },
    { date: '2024-01-03', users: 180 },
    { date: '2024-01-04', users: 200 },
    { date: '2024-01-05', users: 170 },
    { date: '2024-01-06', users: 220 },
    { date: '2024-01-07', users: 250 },
    { date: '2024-01-08', users: 230 },
    { date: '2024-01-09', users: 210 },
    { date: '2024-01-10', users: 190 },
    { date: '2024-01-11', users: 280 },
    { date: '2024-01-12', users: 300 },
    { date: '2024-01-13', users: 270 },
    { date: '2024-01-14', users: 320 },
  ],
  demographics: [
    { category: '18-24', count: 1200, percentage: 25 },
    { category: '25-34', count: 1800, percentage: 37.5 },
    { category: '35-44', count: 1000, percentage: 20.8 },
    { category: '45-54', count: 600, percentage: 12.5 },
    { category: '55+', count: 200, percentage: 4.2 },
  ],
};

export const getFilteredData = (startDate: Date, endDate: Date) => {
  const filteredDailyUsers = mockData.dailyUsers.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate >= startDate && itemDate <= endDate;
  });

  return {
    dailyUsers: filteredDailyUsers,
    demographics: mockData.demographics, // Demographics remain the same for simplicity
  };
};