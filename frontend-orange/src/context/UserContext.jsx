import { createContext, useState } from "react";
import axios from "axios";


export const UserContext = createContext()

export const UserProvider = ({children}) => {

  const [dadosDoUsuario, setDadosDoUsuario] = useState([])
  const [dadosProjetosDoUsuario, setDadosProjetosDoUsuario] = useState([])
  const reqRespostaBdUser = async (token) =>{    
    await axios.get('https://orange-9dj9.onrender.com/api/auth/user', {headers:{'Authorization':`${token}`}})
                .then((response) => setDadosDoUsuario(response.data))  
                .catch((e)=> console.log(e))  
    };

  const reqRespostaBdUserList = async (token) =>{    
    await axios.get('https://orange-9dj9.onrender.com/project/list-userprojects',{ headers:{'Authorization':`${token}`}})    
                .then((response) => setDadosProjetosDoUsuario(response.data))  
                .catch((e)=> console.log(e))  
    };

  return (

    <UserContext.Provider 
      value={{
        dadosDoUsuario,setDadosDoUsuario,reqRespostaBdUser,
        dadosProjetosDoUsuario,setDadosProjetosDoUsuario,reqRespostaBdUserList
      }}
    >
      {children}
    </UserContext.Provider>
  )
}