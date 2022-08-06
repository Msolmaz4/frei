import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


const ProductCart = ({id ,name}) => {
  return (
    <Card className='product-cart'>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Link to={`/detail/${id}`} style={{ color:'white'}}>
      <button> Details</button></Link>
    </Card>
  );
}

export default ProductCart;