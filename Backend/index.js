//server creation code


var express = require ('express')
var path = require('path')
var mdb = require('mongoose')
var user = require('./models/users')
var cors=require('cors')
var app = express()
const PORT =3001
app.use(cors())
app.use(express.json())

mdb.connect('mongodb://localhost:27017/tutorial').then(()=>{ // if local  host is not recognised use "mongodb://127.0.0.1:27017/"
    console.log("Mongo DB connection successful");
}).catch(()=>{
    console.log("check your connnection string");
})


app.get('/',(req,res)=>{
    res.json("welcome to backend")
})

app.get('/volunteering',(req,res)=>{
    res.json({PORT:PORT,url:"localhost"})
})

app.get('/sendfile',(req,res)=>{
    // console.log(__dirname)
    res.sendFile(path.join(__dirname,'index.html'))
})



app.get('/getsignup',async(req,res)=>{
    try{

        var allSignupRecords = await user.find()
        res.json(allSignupRecords)
    }
    catch(err){
        console.log(err)
    }
    
})


app.post('/login',async(req,res)=>{
    var {email,password}=req.body
    try{
        var  existingUser=await user.findOne({email:email})
        console.log(existingUser)
        if(existingUser){
            if(existingUser.password!==password)
               
            {
                console.log(password)
                console.log(existingUser.password)
                res.json({message:"Invalid Credentials",isLoggedIn:false})}
            else{
                res.json({message:"Login successful",isLoggedIn:true})
            }

        }
        else{
            res.json({message:"Login failed",isLoggedIn:false})
        }
        
    }catch(err){
        console.log(err)
    }
})


app.post('/signup',(req,res)=>{
         var {firstName,lastName,email} =req.body
        console.log(firstName,lastName,email);
        try {
            // var newUser = new user({
            //     firstName:firstName,
            //     lastName:lastName,
            //     email:email
            // })   if there are many fields,then this is not a feasible solution to destructure


            var newUser = new user(req.body)
            console.log(req.body.password)
            newUser.save()
            console.log("user added ")
            res.status(200).send("user added successfully")
        }
        catch(err){
            console.log(err)
        }
})

app.listen(PORT,()=>{
    console.log("server started")})







