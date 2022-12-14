import React, { useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import { ListaTareas } from "./ListaTareas";

export const Formulario = () => {
  const [tarea, setTarea] = useState("");

  const [arregloTareas, setArreglotareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setArreglotareas(...arregloTareas, tarea);
    setTarea('')
  };

  const deleteTask = (nombre) =>{
    let array = arregloTareas.filter((item) => item !== nombre);

    setArreglotareas(array);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            className="mx-2"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas arregloTareas={arregloTareas} deleteTask={deleteTask}/>
    </div>
  );
};
