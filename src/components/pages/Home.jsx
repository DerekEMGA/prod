import { useState } from "react";
import GraficaCircular from "../GraficaCircular";
export const Home = () => {
  const [valorActual, setValorActual] = useState(0);
  const [valorMaximo, setvalorMaximo] = useState(100);
  return (
    <div className="grid grid-flow-col auto-cols-max justify-around">
      <div>
      <h1 className="text-xl font-semibold text-center">
        Cantidad restante de Pases de Salida
      </h1>
        <GraficaCircular 
          valorActual={valorActual} 
          valorMaximo={valorMaximo}
          setValorActual={setValorActual}
        />
      </div>
      <div>
      <h1 className="text-xl font-semibold text-center">
        Cantidad restante de compensados
      </h1>
      <GraficaCircular 
          valorActual={valorActual} 
          valorMaximo={valorMaximo}
          setValorActual={setValorActual}
        />
      </div>
     
    </div>
  );
};
