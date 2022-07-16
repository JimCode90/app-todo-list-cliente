import {TareaContext} from "../TareaContext";
import {useContext} from "react";

function RegistroTarea() {


    const { nombreTarea, setNombreTarea, registrarTareas } = useContext(TareaContext);

    const modalRegistro = () => {
        return (
            <>
                <div className="modal fade" id="modalAgregarTareas" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={(e) => registrarTareas(e)}>
                                <div className="modal-header">
                                    <h5 className="modal-title text-black" id="exampleModalLabel">Agregar Tarea</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"/>
                                </div>
                                <div className="modal-body">
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

    return (
        <>
            <div className="text-center bg-black text-white p-4">
                <h3>Administra tus tareas</h3>
                <div>
                    <i className="bi bi-gear fs-1"/>
                </div>
                <div>
                    <button
                        className="btn btn-success mt-3"
                        data-bs-toggle="modal" data-bs-target="#modalAgregarTareas"
                    >
                        <i className="bi bi-plus-circle-dotted"/> Agregar Tareas
                    </button>
                </div>
            </div>
            { modalRegistro() }

        </>
    )
}

export default RegistroTarea