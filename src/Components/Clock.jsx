import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const incrementHours = () => {
    setTime((prevTime) => new Date(prevTime.getTime() + 3600000)); 
  };

  const decrementHours = () => {
    setTime((prevTime) => new Date(prevTime.getTime() - 3600000)); 
  };

  const incrementMinutes = () => {
    setTime((prevTime) => new Date(prevTime.getTime() + 60000)); 
  };

  const decrementMinutes = () => {
    setTime((prevTime) => new Date(prevTime.getTime() - 60000)); 
  };

  const incrementSeconds = () => {
    setTime((prevTime) => new Date(prevTime.getTime() + 1000)); 
  };

  const decrementSeconds = () => {
    setTime((prevTime) => new Date(prevTime.getTime() - 1000)); 
  };

  return (
    <div>
      <h1>Saat: {time.toLocaleTimeString()}</h1>
      <div>
        <h2>Saat:</h2>
        <button onClick={incrementHours}>Artır</button>
        <button onClick={decrementHours}>Azalt</button>
      </div>
      <div>
        <h2>Dəqiqə:</h2>
        <button onClick={incrementMinutes}>Artır</button>
        <button onClick={decrementMinutes}>Azalt</button>
      </div>
      <div>
        <h2>Saniyə:</h2>
        <button onClick={incrementSeconds}>Artır</button>
        <button onClick={decrementSeconds}>Azalt</button>
      </div>
    </div>
  );
};

export default Clock;
