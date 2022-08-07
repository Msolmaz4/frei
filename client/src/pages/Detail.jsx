import React ,{ useContext ,useState ,useEffect} from 'react'
//import { ProContext} from '../Context/ProContext'
import { Link, useNavigate, useParams} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios';




//id zakalamak icin useparams kullanitiy 
//{} icine alirsak direk kullariniy yPMAZSAK OBJE OLARAK GEELRT
const Detail = () => {
 
   //const { erst,dele } = useContext(ProContext)
   const {id }= useParams()
   const dp = useNavigate()
   
   
  const [ dete ,setExt] = useState({})

// useEffect (()=>{
//  const b = erst.filter(a=>a.id === id)
//   setExt(b[0]) 
//},[])

// .then(res=>console.log(res))
const getPro = ()=>{
  axios.get(`/product/${id}`)
  .then(res=>setExt(res.data.data))
  .catch(err => console.log(err))
}

useEffect(()=>{

  getPro()
},[])



//backende baglanamdasn once
  //const deleItem = ()=>{
  // dele(id)
  //  dp('/')
  //}

 const deleItem = ()=>{
   axios.delete(`/products/product/${id}`)
   .then(res =>dp('/'))
  .catch(err =>alert(err))
 }


  return (
    <div>

<Card className='product-cart'>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{dete.name}</Card.Title>
        <Card.Text>
          email:
         {dete.email}
        </Card.Text>
      </Card.Body>
      <Link to={`/update/${id}`}><button >update</button>
      </Link>
       
       <button onClick={deleItem}>delete</button>
      
    
    </Card>


    </div>
  )
}

export default Detail
