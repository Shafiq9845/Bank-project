import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarHeader = ({ currentMonth, onPrevMonth, onNextMonth }) => {
    return (
        <div className="flex items-center justify-between px-4 py-2">
            <button
                onClick={onPrevMonth}
                className="p-2 hover:bg-gray-100 rounded-full"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="font-semibold">
                {currentMonth.toLocaleString('default', {
                    month: 'long',
                    year: 'numeric',
                })}
            </h2>
            <button
                onClick={onNextMonth}
                className="p-2 hover:bg-gray-100 rounded-full"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default CalendarHeader;
