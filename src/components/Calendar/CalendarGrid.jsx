import React from 'react';
import { getDaysInMonth, format, isToday, isSameMonth } from '../utils/dateUtil';

const CalendarGrid = ({ currentMonth, selectedDate, onSelectDate }) => {
    const days = getDaysInMonth(currentMonth);

    return (
        <div className="grid grid-cols-7 gap-1 p-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div
                    key={day}
                    className="text-center text-sm font-medium text-gray-500 py-2"
                >
                    {day}
                </div>
            ))}
            {days.map((date, index) => {
                const isSelected =
                    selectedDate &&
                    format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                const isCurrentMonth = isSameMonth(date, currentMonth);
                const isTodayDate = isToday(date);

                return (
                    <button
                        key={index}
                        onClick={() => onSelectDate(date)}
                        className={`
              h-10 rounded-full text-sm
              ${isCurrentMonth ? 'hover:bg-gray-100' : 'text-gray-400'}
              ${isSelected ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
              ${isTodayDate && !isSelected ? 'border border-blue-600' : ''}
            `}
                    >
                        {format(date, 'd')}
                    </button>
                );
            })}
        </div>
    );
};

export default CalendarGrid;
