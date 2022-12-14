import { createContext ,useState} from "react";
import { nanoid } from "nanoid";

export const ProContext = createContext()

export const ProProvider = (props)=>{

    const [ erst ,setErste] = useState([
{
        id: nanoid(),
        name: " labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        
        id: nanoid(),
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      },
      {
        
        id: nanoid(),
        name: "odio adipisci rerum aut animi",
        email: "Nikita@garfield.biz",
        body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      },
      {
        
        id: nanoid(),
        name: "alias odio sit",
        email: "Lew@alysha.tv",
        body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      },
      {
        
        id: nanoid(),
        name: "vero eaque aliquid doloribus et culpa",
        email: "Hayden@althea.biz",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
      }

    ])


    const add =(name,price,catogry) =>{
      erst.push({
        id:nanoid(),
        name:name,
        body:price,
        email:catogry

      })
      setErste(erst)
    }

    const dele = (id) =>{
      const d = erst.find(er=>er.id !== id)
      setErste(d)
    }


    return(
        <ProContext.Provider value={{erst,add,dele}}>
            {props.children}
            </ProContext.Provider>
    )
}