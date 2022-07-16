import React, {useContext} from 'react';
import './App.css';
import ListaTareas from "./componentes/ListaTareas";
import {TareaContext} from "./TareaContext";
import RegistroTarea from "./componentes/RegistroTarea";


function App() {

    const {tareas} = useContext(TareaContext);

    return (
        <>
            <div className="container">
                <div className="row">
                    <RegistroTarea/>
                    <ListaTareas tareas={tareas} />
                </div>
            </div>
        </>
    );
}

export default App;
