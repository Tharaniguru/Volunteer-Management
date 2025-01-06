import { useState } from 'react';
// import '../assets/CSS/Signup.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


 export default function MyForm() {
    const [email, setEmail] = useState("");
    const[password,setPassword]=useState("");
    var navigate=useNavigate();
    // const navigate=
    


    var handlesignup=async (event)=>{
        event.preventDefault()
        var req = await axios.post("http://localhost:3001/signup",{
            email:email,
            password:password,
        });
        console.log(req)
        navigate("/login")
    }


return (
    <div>
       <form onSubmit={handlesignup}>
      <label>Enter your Email:
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label><br></br>
      <label>Enter your Password:
        <input
          type="text" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label><br></br>
      <button type="submit">Signup</button>
    </form>
    </div>
  );
}
