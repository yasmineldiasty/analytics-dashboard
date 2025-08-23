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
    { date: '2025-08-22', users: 421 },  
    { date: '2025-08-21', users: 385 }, 
    { date: '2025-08-20', users: 398 },
    { date: '2025-08-19', users: 367 },  
    { date: '2025-08-18', users: 512 }, 
    { date: '2025-08-17', users: 538 }, 
    { date: '2025-08-16', users: 487 },  
    { date: '2025-08-15', users: 402 },
    { date: '2025-08-14', users: 376 },
    { date: '2025-08-13', users: 389 },
    { date: '2025-08-12', users: 354 },
    { date: '2025-08-11', users: 495 },
    { date: '2025-08-10', users: 523 },
    { date: '2025-08-09', users: 468 },
    { date: '2025-08-08', users: 412 },
    { date: '2025-08-07', users: 382 },
    { date: '2025-08-06', users: 395 },
    { date: '2025-08-05', users: 361 },
    { date: '2025-08-04', users: 508 },
    { date: '2025-08-03', users: 531 },
    { date: '2025-08-02', users: 476 },
    { date: '2025-08-01', users: 418 },
    { date: '2025-07-31', users: 388 },
    { date: '2025-07-30', users: 401 },
    { date: '2025-07-29', users: 372 },
    { date: '2025-07-28', users: 518 },
    { date: '2025-07-27', users: 542 },
    { date: '2025-07-26', users: 483 },
    { date: '2025-07-25', users: 425 },
    { date: '2025-07-24', users: 391 },
    { date: '2025-07-23', users: 404 },
  ],
  demographics: [
    { category: '18-24', count: 2450, percentage: 28.2 },
    { category: '25-34', count: 3120, percentage: 35.9 },
    { category: '35-44', count: 1780, percentage: 20.5 },
    { category: '45-54', count: 980, percentage: 11.3 },
    { category: '55+', count: 360, percentage: 4.1 },
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