import {useState} from "react"
import { Link } from "react-router-dom"
import axios from "axois"

function Login(){
    const [userName, setUserName] = useState('')
    const [password, setPassword]= useState('')

    const handleLogin = () =>{
        console.log(userName, password)
        axios.post ('https')
    }
     return (
        <div>
            <h1>LOGIN PAGE</h1>
            USERNAME-
            <input type= "text" value ={userName} onChange={(e)=>{ setUserName(e.target.value)
            }} /> <br /> <br/>
            PASSWORD -
            <input types = "text" onChange={(e)=> {
                setPassword(e.target.value)

            }}/> <br/> <br/>

            <button onClick={handleLogin}>SUMBIT</button>
            
        </div>
     )
}

export default Login