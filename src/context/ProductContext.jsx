import { createContext,useState} from 'react'

export const ProContext = createContext()


export const ContextProvider =(props) =>{

  const [ erst ,setErst] =useState([
    {
      image:'',
      name:'ekmek',
      des:'lorem22'
    }
    ,
    {
      image:'',
      name:'balik',
      des:'ssssssssssssss'
    }
    ,
    {
      image:'',
      name:'meyve',
      des:'eeeeeeeeeeeeee'
    }
    ,
    {
      image:'',
      name:'sebze',
      des:'fffffffffffff'
    }

])
 

return (
  <ProContext.Provider value={{erst}}>
    {props.children}
  </ProContext.Provider>
)

}