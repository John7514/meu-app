import React, { useEffect, useState } from 'react';

const LetreiroNovo = () => {
  const texto = "Conheça a Fatec";
  const [textoAtual, setTextoAtual] = useState("");
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (indice < texto.length) {
        setTextoAtual((prev) => prev + texto[indice]);
        setIndice(indice + 1);
      } else {
       
        setTextoAtual("");
        setIndice(0);
      }
    }, 150); 

    return () => clearInterval(intervalo); 
  }, [indice]);

  return (
    <div>
      <h2>{textoAtual}</h2>
    </div>
  );
};

export default LetreiroNovo;
