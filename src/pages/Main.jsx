import React from 'react'
import { useContext } from 'react'
import { ProContext } from '../Context/ProContext'
import { useNavigate } from 'react-router-dom'
import ProductCart from '../components/ProductCart'



// butondan biryere gondermek  icib useNvigatekullaniriy
//mapdan sonra ? isateri uyunluk sifir olunca hata verir genelde koymak gerekir
const Main = () => {
    const {erst}= useContext(ProContext)
    const deli = useNavigate()

  return (
    <div>
  <button  onClick={()=>deli('/add')}> basalim baba</button>

    <div className='product'></div>
    {
      erst.map((er)=>(

      <ProductCart
      id={er.id}
      name={er.name}
      />
        
      ))
    }
    </div>
  )
}

export default Main