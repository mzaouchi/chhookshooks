import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
const CardMovie=({el})=>{
    const [showMore, setShowMore] = useState(false);
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
      
        </Card.Body>
      </Card>
    )
}

export default CardMovie