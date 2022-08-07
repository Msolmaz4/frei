import React from 'react'
//import { useContext } from 'react'
//import { ProContext } from '../Context/ProContext'
import { useNavigate } from 'react-router-dom'
import ProductCart from '../components/ProductCart'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


// butondan biryere gondermek  icib useNvigatekullaniriy
//mapdan sonra ? isateri uyunluk sifir olunca hata verir genelde koymak gerekir
const Main = () => {

  //databese bagliyacagim icin bu degiskeni sileriz
  // const {erst }= useContext(ProContext)

  //databese bagliyacam onun icin useSate 
  const [ erst,setErst] = useState([])
  const deli = useNavigate()
 
  

   // cagirma islemi disdrda yapip her herde kullaniriz
    // .then((res)=>console.log(res)) gormek icin once bunu denedim
  const getProduct = ()=>{
    axios.get('/products')
    .then((res)=>setErst(res.data.data))
  .catch(err => console.log(err))
  }

  useEffect(()=>{
  getProduct()
  },[])
// backende baglaninca _id geli dikkat
  return (
    <div>
  <button  onClick={()=>deli('/add')}> basalim baba</button>

    <div className='product'>
    {
      erst.map((er)=>(

      <ProductCart
      id={er._id}
      name={er.name}
      body={er.body}
      />
        
      ))
    }
    </div>
    </div>
  )
}

export default Main