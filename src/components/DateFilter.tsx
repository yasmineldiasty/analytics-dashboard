import React from 'react';
import type { DateRange } from '../types';
import "../styles/DateFilter.css";

interface DateFilterProps {
  dateRange: DateRange;
  onDateChange: (dateRange: DateRange) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ dateRange, onDateChange }) => {
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = new Date(e.target.value);
    onDateChange({ ...dateRange, startDate: newStartDate });
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = new Date(e.target.value);
    onDateChange({ ...dateRange, endDate: newEndDate });
  };


  return (
    <div className="date-filter">
      <div className="filter-group">
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={dateRange.startDate.toISOString().split('T')[0]}
          onChange={handleStartDateChange}
          className="date-input"
        />
      </div>
      <div className="filter-group">
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={dateRange.endDate.toISOString().split('T')[0]}
          onChange={handleEndDateChange}
          className="date-input"
        />
      </div>
    </div>
  );
};

export default DateFilter;