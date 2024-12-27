import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import { addMonths, subMonths } from '../utils/dateUtil';

const Calendar = ({ selectedDate, onChange, className = '' }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const handlePrevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const handleSelectDate = (date) => {
        if (onChange) {
            onChange(date);
        }
    };

    return (
        <div className={`bg-white rounded-lg shadow ${className}`}>
            <CalendarHeader
                currentMonth={currentMonth}
                onPrevMonth={handlePrevMonth}
                onNextMonth={handleNextMonth}
            />
            <CalendarGrid
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                onSelectDate={handleSelectDate}
            />
        </div>
    );
};

export default Calendar;
