import {
  addMonths as dateFnsAddMonths,
  subMonths as dateFnsSubMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isToday as dateFnsIsToday,
  isSameMonth as dateFnsIsSameMonth,
  format as dateFnsFormat,
} from 'date-fns';

export const addMonths = dateFnsAddMonths;
export const subMonths = dateFnsSubMonths;
export const isToday = dateFnsIsToday;
export const isSameMonth = dateFnsIsSameMonth;
export const format = dateFnsFormat;

export const getDaysInMonth = (date) => {
  const start = startOfWeek(startOfMonth(date));
  const end = endOfWeek(endOfMonth(date));

  return eachDayOfInterval({ start, end });
};
