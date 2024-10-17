import React, { useEffect, useState } from 'react';

const RelogioNovo = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo); 
  }, []);

  return (
    <div>
      <h1>{hora}</h1>
    </div>
  );
};

export default RelogioNovo;
