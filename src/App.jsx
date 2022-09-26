
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Formulario } from './components/Formulario';
import { ListaTareas } from './components/ListaTareas';
import './style.css'

function App() {


  return (
    <Container className='my-5 text-center'>
        <h1>Lista de tareas</h1>
        <hr />
        <Formulario/>
    </Container>
  )
}

export default App
