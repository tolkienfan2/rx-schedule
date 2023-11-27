import { useState } from 'react';

const useYear = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const setYear = (year: string) => {
    setSelectedYear(year);
  };

  return { selectedYear, setYear };
};

export default useYear;