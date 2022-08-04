import React  ,{useContext}from 'react'

import { ProContext} from '../context/ProductContext'

const Product = ()=>{


    const {erst} = useContext(ProContext)

    return(
       <div className='yan'>
      {
        erst.map((ex)=>(
            <div className='Product'>
                <image> {ex.image} </image>
                <h1>{ex.name}</h1>
                <p> {ex.des}</p>
                <button> defe</button>
            </div>
        )
           
        )
      }

       </div>
    )
}

export default Product