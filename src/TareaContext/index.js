import {createContext, useEffect} from "react";
import {useState} from "react";
import {useFetch} from "../hooks/useFetch";

const TareaContext = createContext();

function TareaProvider({children}) {

    const [tareas, setTareas] = useState([]);
    const [nombreTarea, setNombreTarea] = useState("");
    const [idTarea, setIdTarea] = useState('');

    let urlMarcarTarea = `http://localhost:5000/api/tasks/marcar-tarea/${idTarea}`

    useEffect(() => {
        getTareas()
    }, []);

    const getTareas = () => {
        let url = `http://127.0.0.1:5000/api/tasks`
        fetch(url)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log({data})
                setTareas(data)
            })
    }

    const registrarTareas = async (e) => {
        e.preventDefault()
        console.log(e)
        try {
            let url = `http://localhost:5000/api/tasks`
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({nombre: nombreTarea}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setNombreTarea('')
            getTareas()
        } catch (e) {
            console.log(e);
        }
    }

    const actualizarTareas = async (e) => {
        e.preventDefault()
        console.log(e)
        try {
            let url = `http://localhost:5000/api/tasks`
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(
                    {
                        nombre: nombreTarea,
                        _id: idTarea
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            document.querySelector("#modalActualizarTareas .btn-close").click();
            getTareas()
        } catch (e) {
            console.log(e);
        }
    }

    const eliminarTareas = async (tarea) => {
        try {
            let url = `http://localhost:5000/api/tasks`
            const response = await fetch(url, {
                method: 'DELETE',
                body: JSON.stringify(
                    {
                        _id: tarea._id
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            getTareas()
        } catch (e) {
            console.log(e);
        }
    }

    const refrescarDatos = async () => {
        //console.log("refrescando datos")
        try {
            let url = `http://localhost:5000/api/tasks/refrescar-datos`
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const dataResponse = response.json()
            const data = dataResponse.data
            console.log({data})
            getTareas(data)
        } catch (e) {
            console.log(e);
        }
    }

    const marcarTarea = useFetch(urlMarcarTarea, idTarea, (res) => {
        setNombreTarea('')
        document.querySelector("#modalCompletarTarea .btn-close").click();
        getTareas()
    })


    return (
        <TareaContext.Provider value={{
            tareas,
            nombreTarea,
            setNombreTarea,
            idTarea,
            setIdTarea,
            registrarTareas,
            actualizarTareas,
            eliminarTareas,
            refrescarDatos,
            marcarTarea,
        }}>
            {children}
        </TareaContext.Provider>
    )
}


export {TareaContext, TareaProvider}