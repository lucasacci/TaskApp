import React from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'

export const ItemTareas = ({tarea, deleteTask}) => {
  return (
    <ListGroup.Item className='d-flex justify-content-between '>{tarea}
      <Button variant='dark' onClick={() => deleteTask(tarea)} >Borrar</Button>
    </ListGroup.Item>
  )
}
