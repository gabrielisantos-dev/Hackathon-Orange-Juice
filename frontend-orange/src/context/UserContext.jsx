import { createContext, useState } from "react";
import axios from "axios";


export const UserContext = createContext()

export const UserProvider = ({children}) => {

  const[mensagemLogin, setMensagemLogin] = useState('')
  const [redirCadastro, setRedirCadastro] = useState(false)
  const [erroUserList, setErroUserList] = useState(false)


  const [dadosDoUsuario, setDadosDoUsuario] = useState([])
  const [dadosProjetosDoUsuario, setDadosProjetosDoUsuario] = useState([])
  const reqRespostaBdUser = async (token) =>{    
    await axios.get('https://orange-9dj9.onrender.com/api/auth/user', {headers:{'Authorization':`${token}`}})
                .then((response) => {
                  setDadosDoUsuario(response.data)
                  if(response.status === 200 || response.status === 201){
                    // console.log(response)
                    setMensagemLogin('Cadastro feito com sucesso')
                  }
                  if(response.status !== 200) {
                    CompressOutlined.log(response)
                    setMensagemLogin('Erro no cadastro. Por favor, tente novamente.')
                  }
                  
                })  
                .catch((e)=>{ console.log(e)
                  setMensagemLogin('Erro na solicitação. Por favor, tente novamente.') })  
    };

  const reqRespostaBdUserList = async (token) =>{    
    await axios.get('https://orange-9dj9.onrender.com/project/list-userprojects',{ headers:{'Authorization':`${token}`}})    
                .then((response) => setDadosProjetosDoUsuario(response.data))  
                .catch((e)=> setErroUserList(e.response.data))  
    };

  return (

    <UserContext.Provider 
      value={{
        dadosDoUsuario,setDadosDoUsuario,reqRespostaBdUser,
        dadosProjetosDoUsuario,setDadosProjetosDoUsuario,reqRespostaBdUserList,mensagemLogin,redirCadastro,erroUserList }}
    >
      {children}
    </UserContext.Provider>
  )
}