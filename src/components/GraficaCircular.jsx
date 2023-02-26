import { CircularProgressbar} from "react-circular-progressbar";


const GraficaCircular = ({valorMaximo,valorActual,setValorActual}) => {

  return (
    <div className="w-80 h-80">
      <CircularProgressbar
        minValue={0}
        maxValue={valorMaximo}
        value={valorActual}
        styles={{
          // Customize the root svg element
          root: {},
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: `rgb(88, 28, 135)`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",
            // Customize transition animation
            transition: "stroke-dashoffset 1s ease 0.5s",
            // Rotate the path
            transformOrigin: "center center",
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: "rgb(129 140 248)",
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "rounded",
            // Rotate the trail
            transformOrigin: "center center",
          },
          // Customize the text
          text: {
            // Text color
            fill: "#000",
            // Text size
            fontSize: "20px",
          },
        }}
      />
      <label
        className="text-4xl font-semibold"
        htmlFor="valorActual"
      >{`${valorActual}% utilizado`}</label>

      <input type="number" onChange={(e) => setValorActual(e.target.value)} />
    </div>
  );
};

export default GraficaCircular;
