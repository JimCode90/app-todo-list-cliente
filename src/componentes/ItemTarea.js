import './ItemTarea.css'
import {useContext} from "react";
import {TareaContext} from "../TareaContext";

function ItemTarea({ tarea }) {

    const {
        nombreTarea,
        setNombreTarea,
        idTarea,
        setIdTarea,
        actualizarTareas,
        eliminarTareas,
        marcarTarea
    } = useContext(TareaContext);

    const rellenarDatos = (tarea) => {
        console.log(tarea)
        setNombreTarea(tarea.nombre)
        setIdTarea(tarea._id)
    }
    const modalActualizar = () => {
        return (
            <>
                <div className="modal fade" id="modalActualizarTareas" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={(e) => actualizarTareas(e)}>
                                <div className="modal-header">
                                    <h5 className="modal-title text-black" id="exampleModalLabel">Actualizar Tarea</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"/>
                                </div>
                                <div className="modal-body">
                                    <input className="form-control" type="hidden" value={idTarea}/>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Tarea</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            placeholder="Ingrese la descripcion de la tarea"
                                            value={nombreTarea}
                                            onChange={(e) => setNombreTarea(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar
                                    </button>
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const modalCompletarTarea = () => {
        return (
            <>
                <div className="modal fade" id="modalCompletarTarea" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                marcarTarea()
                            }}>
                                <div className="modal-header">
                                    <h5 className="modal-title text-black" id="exampleModalLabel">Completar Tarea</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"/>
                                </div>

                                <div className="modal-body">
                                    <p className="text-center text-danger fw-bold">¿Desea completar la tarea?</p>
                                    <p className="text-center">{ nombreTarea }</p>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar
                                    </button>
                                    <button type="submit" className="btn btn-primary">Completar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    return (
        <>
            <li className="item">
                {
                    !tarea.state ? (
                        <span
                            className="icono icono-check icono-check-activo"
                            onClick={() => rellenarDatos(tarea)}
                            data-bs-toggle="modal" data-bs-target="#modalCompletarTarea"
                        >
                            <i className="bi bi-check-lg"/>
                        </span>
                    ) : (
                        <span className="icono icono-check icono-check-activo">
                           <i className="bi bi-emoji-smile"/>
                       </span>
                    )
                }

                <p className={`item-parrafo ${ tarea.state && 'item-parrafo-completado'}`}>
                    { tarea.nombre }
                </p>
                <span
                    className="icono icono-eliminar"
                    onClick={() => eliminarTareas(tarea)}
                >
                    <i className="bi bi-trash-fill"/>
                </span>
                {
                    !tarea.state ? (
                        <span
                            className="icono icono-editar"
                            onClick={() => rellenarDatos(tarea)}
                            data-bs-toggle="modal" data-bs-target="#modalActualizarTareas"
                        >
                            <i className="bi bi-pencil-fill"/>
                        </span>
                    ): (
                       <></>
                    )
                }

            </li>
            { modalActualizar() }
            { modalCompletarTarea() }
        </>
    )
}

export default ItemTarea