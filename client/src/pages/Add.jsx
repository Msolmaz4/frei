import React, { useContext, useRef } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router';
import { ProContext } from '../Context/ProContext';


// formlarad veri tutumui siintili a,am auseref kullaniruy 
// useref ilk de deger vereiy 
//inputRef.current[name ] onmeli nokta zaorsak deger alamay
//usecontrx ve ve add buraya gtirdik
// burada add direk kullanmak yerine bir additem zapim daha temuiy olmasu icin 
//add (inputRef,current.name,inputref.current.price,inputref.current.cate) yazilabilri
const Add = ()=>{

    const inputRef = useRef({ name:'',price:'',category:''})

    const geri = useNavigate() 

    const {add} =useContext(ProContext)


    const hannChnage=(e)=>{
     
        
        const name =e.target.name
        inputRef.current[name]=e.target.value
    }

    const addItem = ()=>{
        const { name ,price,category} = inputRef.current
        add(name,price,category)
        geri('/')
    }



    return(
        <div className='add'> 
        <button onClick={()=>geri('/')}> baba cekilyoruz</button>
        <InputGroup>
        <InputGroup.Text>name</InputGroup.Text>
        <Form.Control name='name' onChange={hannChnage} />
        <InputGroup.Text>Price</InputGroup.Text>
        <Form.Control name='price' onChange={hannChnage}/>
        <Form.Select name='category'onChange={hannChnage} >
            <option value=""> sec </option>
            <option value=""> meyve</option>
            <option value=""> uemek</option>
            <option value="">sana</option>
        </Form.Select>
       
      </InputGroup>
      <button onClick={addItem}> ADD</button>
    
    
       
        </div>
    )
}
export default Add