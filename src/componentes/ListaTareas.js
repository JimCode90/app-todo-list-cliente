import ItemTarea from "./ItemTarea";
import './ListaTarea.css'
import {TareaContext} from "../TareaContext";
import {useContext} from "react";

function ListaTareas({tareas}) {

    const {refrescarDatos} = useContext(TareaContext);

    return (
        <>
            <div className="row mt-4">
                <div className="col-12 text-center">
                    <button
                        className="btn btn-warning"
                        onClick={() => refrescarDatos()}
                    >
                        <i className="bi bi-arrow-clockwise"/>
                        Refrescar</button>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h4 className="text-center p-3">Tareas por Realizar</h4>
                    <ul>
                        {
                            tareas.filter(el => el.state === false).map(tarea =>
                                <ItemTarea tarea={tarea} key={tarea._id}/>
                            )
                        }

                    </ul>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h4 className="text-center p-3">Tareas por Realizar</h4>
                    <ul>
                        {
                            tareas.filter(el => el.state === true).map(tarea =>
                                <ItemTarea tarea={tarea} key={tarea._id}/>
                            )
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}

export default ListaTareas