import { useEffect, useState } from 'react';

const format = () =>
  new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date());

// The current time in Kolkata, refreshed every 20 seconds.
export default function useKolkataTime() {
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 20000);
    return () => clearInterval(id);
  }, []);
  return time;
}
