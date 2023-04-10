import { useState } from "react";
import { Button, Modal,Form } from "react-bootstrap";
import Rating from '@mui/material/Rating';
const AddMovie=({movies,setMovies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [posterURL,setPosterURL] = useState('')
    const [rating,setRating] = useState(0)
   
    const addMovie=()=> setMovies([...movies,{title,description,posterURL, rating ,id : Math.random()}])
    return(
        <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter title" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter description" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Picture</Form.Label>
        <Form.Control onChange={(e)=> setPosterURL(e.target.value)} type="text" placeholder="Enter picture" />       
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <Rating
   
   name="simple-controlled"
        onChange={(e)=>setRating(e.target.value)}
      />
      </Form.Group>


    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie();handleClose()}}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default AddMovie