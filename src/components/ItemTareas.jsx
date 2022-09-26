import React from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'

export const ItemTareas = () => {
  return (
    <ListGroup.Item className='d-flex justify-content-between '>Tarea 1 
      <Button variant='dark'>Borrar</Button>
    </ListGroup.Item>
  )
}
