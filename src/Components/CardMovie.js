import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';
const CardMovie=({el,movies,setMovies})=>{
    const [showMore, setShowMore] = useState(false);
    const handleDelete=(a)=>{
      setMovies(movies.filter(el=> el.id != a))
    }
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.posterURL} style={{width:"286px",height:"406px"}} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            {
                showMore ? el.description : `${el.description.substring(0, 80)}`
            }
            <button className={showMore ? "bobo sred" : "bobo sgreen"} onClick={()=>setShowMore(!showMore)} >{showMore ? "Show Less" : "Show More"}</button>
            {/* {el.description} */}
          </Card.Text>
          <Rating name="read-only" value={el.rating} readOnly />
          <Button onClick={()=>handleDelete(el.id)} variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    )
}

export default CardMovie