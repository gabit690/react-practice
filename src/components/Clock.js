import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [timer, setTimer] = useState(null);

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    setTimer(setInterval(() => tick(), 1000));
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
      <h2>It's {date.toLocaleTimeString()}.</h2>
    </>
  )
}

export default Clock;
