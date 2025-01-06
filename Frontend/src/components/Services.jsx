import  { useEffect ,useState} from 'react'
import axios from 'axios'


export default function Services() {
  var [post,setpost]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
    console.log(res.data)
    setpost(res.data)})
    .catch((err)=>console.log(err))
    
  },[])
  return (
    <div>
      <h1>fetching the data from json placeholder API</h1>
      <h2>posts are</h2>  
      <ol>
        {/* {post.length}  */}
        {post.map((data)=>(  
          <li key = {data.userId}>{data.title}</li>
          ))}
      </ol>
    </div>
  )
}
