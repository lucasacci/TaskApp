import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { ItemTareas } from './ItemTareas'

export const ListaTareas = ({arregloTareas, deleteTask}) => {


  return (
    <ListGroup>
      {
        arregloTareas.map((tarea,i) => {
        <ItemTareas key={i} nombreTarea={tarea} deleteTask={deleteTask}/>})

     
      }
  </ListGroup>
  )
}
