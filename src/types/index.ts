export interface DailyUserData {
  date: string;
  users: number;
}

export interface DemographicData {
  category: string;
  count: number;
  percentage: number;
}

export interface AnalyticsData {
  dailyUsers: DailyUserData[];
  demographics: DemographicData[];
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
}