import NotificacionFormatos from "../NotificacionFormatos"

export const Notificaciones = () => {
  return (
    <div className="overflow-auto">
      <h1 className="font-bold text-4xl text-center">Notificaciones</h1>
      <div>
        <NotificacionFormatos mensaje={'El usuario con numero de tarjeta 152 ha tramitado un pase de salida'}/>
        <NotificacionFormatos mensaje={'El usuario con numero de tarjeta 25 ha tramitado un compensado'} />
        <NotificacionFormatos mensaje={'El usuario con numero de tarjeta 36 ha tramitado vacaciones'} />
        <NotificacionFormatos mensaje={'El usuario con numero de tarjeta 2569 ha tramitado un acuerdo'} />
      </div>
    </div>
  )
}
