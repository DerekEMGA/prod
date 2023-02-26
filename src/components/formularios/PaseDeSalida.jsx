import { Form } from "react-router-dom"

const PaseDeSalida = () => {
  return (
    <div className="h-96 bg-slate-200 overflow-auto rounded-sm">
      <Form>
        <div className="flex mt-10 mx-4">
            <label className=" text-lg font-semibold">
              Nombre del solicitante:{" "}
            </label>
            <input
              className="indent-5 text-2xl font-semibold w-full bg-slate-500 text-white border-2 border-slate-700"
              type={"text"}
              placeholder={"Nombre del Empleado"}
            />
          </div>
        <div className="p-5 flex justify-between">
        
          <div className="mx-3 my-2">
            <label className="text-lg font-semibold">Fecha: </label>
            <input className="p-2 rounded bg-slate-500 text-white border-2 border-slate-700" type={'date'}/>
          </div>
          <div className="mx-3 my-2">
            <label className="text-lg font-semibold">Horario: </label>
            <input className="p-2 rounded bg-slate-500 text-white border-2 border-slate-700" type={'text'}/>
          </div>
          <div className="mx-3 my-2">
            <label className="text-lg font-semibold">Tipo de Pase: </label>
            <select className="p-2 rounded text-lg font-semibold text-center bg-slate-500 text-white border-2 border-slate-700">
              <option>--Seleccione un tipo de Pase--</option>
              <option>Particular</option>
              <option>Oficial</option>
              <option>Sindical</option>
            </select>
          </div>
        </div>
        
        <div className="mt-5">
          <div className="mt-3 flex justify-between">
            <div>
              <label className="p-3 text-lg font-semibold ml-5">Autorizaron Salida desde las: </label>
              <input className="p-3 text-xl font-semibold bg-slate-500 text-white border-2 border-slate-700" type={'time'}/>
            </div>
            <div>
              <label className="p-3 text-lg font-semibold ml-5">Hasta las: </label>
              <input className="p-3 text-xl font-semibold bg-slate-500 text-white border-2 border-slate-700" type={'time'}/>
            </div>
            <div className="mt-3">
              <label className="p-3 text-lg font-semibold ">Un total de: </label>
              <label className="p-3 text-lg font-semibold">X horas autorizadas </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-7">
          <input
              type={"submit"}
              className="bg-slate-600 w-1/2 p-3 text-white uppercase font-bold
                    hover:bg-slate-900 cursor-pointer transition-opacity duration-300 rounded-md"
              value={"Hacer Petición"}
            />
      </div>
      </Form>
    </div>
  )
}

export default PaseDeSalida