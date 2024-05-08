import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { handleInputChange, addTodo, toggelButton, updateTodo } from '../features/todo/TodoSlice';
import { useDispatch, useSelector } from 'react-redux';


function AddTodo() {
  const handleClose = () =>   dispatch(toggelButton(false));
  const handleShow = () => dispatch(toggelButton(true));
  const dispatch = useDispatch()
  const show= useSelector(state=>state.isModalOpen)

//   for handleInput
const currentTodo = useSelector((state) => state.currentTodo)
const  currentIndex= useSelector((state)=>state.currentIndex)


const addTodoList =()=> {
    const {id, title, description} = currentTodo;
    if (currentIndex !==null) {
        dispatch(updateTodo(currentTodo))
        
    }else{
        const newTodo = {id, title, description} //yha se humne yeh sab bhej diya
        dispatch (addTodo(newTodo))
    }
    handleClose()
}

  

  return (
    <>
      <Button className='my-2 mx-4 bg-sky-400 '  variant="primary" onClick={handleShow}>
         Create Todo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>To-Do List</Modal.Title>

        </Modal.Header>
         <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Task"
                name='title'
                value={currentTodo ? currentTodo.title:""}
                onChange={(e)=> dispatch(handleInputChange({name: 'title', value:e.target.value}))}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control type='text' 
               name='description'
               value={currentTodo ? currentTodo.description:""}
               onChange={(e) => dispatch(handleInputChange({name:'description', value: e.target.value})) }/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Remove
          </Button>
          <Button variant="primary" onClick={addTodoList}>
            AddTodo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTodo