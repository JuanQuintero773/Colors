import React, { useState } from 'react';


const App = () => {
  const [colorFondo, setColorFondo] = useState('#1E40AF'); // Azul oscuro inicial
  const [codigoHex, setCodigoHex] = useState('#1E40AF');
  const [colorTexto, setColorTexto] = useState('#FFFFFF'); // Color de texto inicial

  const generarColorAleatorio = () => {
    const randomDecimal = Math.floor(Math.random() * 16777215);

    let hex = randomDecimal.toString(16);

    while (hex.length < 6) {
      hex = '0' + hex;
    }

    const nuevoCodigoHex = '#' + hex.toUpperCase();

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const luminancia = (0.2126 * r + 0.7152 * g + 0.0722 * b);
    

    const nuevoColorTexto = luminancia < 128 ? '#FFFFFF' : '#1F2937'; 

    setColorFondo(nuevoCodigoHex);
    setCodigoHex(nuevoCodigoHex);
    setColorTexto(nuevoColorTexto);
  };

  return (
    <div 
      onClick={generarColorAleatorio}
      style={{ 
        backgroundColor: colorFondo, 
        height: '100vh', 
        width: '100vw', 
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 0.5s ease', // Transición suave
        fontFamily: 'Inter, sans-serif'
      }}
      className="p-4" 
    >
      <div className="text-center p-6 rounded-xl shadow-2xl transition duration-500 ease-in-out transform hover:scale-105"
           style={{
               backgroundColor: 'rgba(255, 255, 255, 0.1)', 
               backdropFilter: 'blur(10px)',
               WebkitBackdropFilter: 'blur(10px)' 
           }}
      >
        
        {/* Etiqueta de instrucción */}
        <p 
          style={{ color: colorTexto }} 
          className="text-xl sm:text-2xl font-semibold mb-4 opacity-80"
        >
          TOCA (o haz clic) EN CUALQUIER LUGAR
        </p>

        {/* Código Hexadecimal Principal */}
        <h1 
          style={{ color: colorTexto }} 
          className="text-5xl sm:text-8xl font-black tracking-wider transition duration-300 ease-in-out"
        >
          {codigoHex}
        </h1>
        
      </div>
    </div>
  );
};

export default App;