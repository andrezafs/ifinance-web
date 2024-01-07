import { DatePicker } from 'antd';

import days from 'dayjs';

import { useMountAndYear } from '../hooks';

export function SelectMonthExpense() {
  const { setDate, getDate } = useMountAndYear();

  return (
    <DatePicker
      onChange={value => setDate(value?.toDate() as Date)}
      picker="month"
      value={days(getDate())}
      allowClear={false}
    />
  );
}
