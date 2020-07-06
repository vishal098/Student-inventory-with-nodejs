const jwt = require('jsonwebtoken')
module.exports = function (Router, connect) {
    login.post('/login',(req,res)=>{
        var user_email = true
        var user_pass = true        
        connect.select('*').from('student_details').then((result)=>{
            for(i of result){
                // console.log(i.email);
                if(i.email == req.body.email){
                    user_email=false
                    if(i.password == req.body.password){
                        user_pass=false
                        var token = jwt.sign({"email":req.body.email},'secret')
                    }
                }
            }if(user_email){
                res.send("Invalid Email")
            }else if(user_pass){
                res.send("Inavlid Password")
            }else{
                res.status(200).json({massage:'Login succesfull',"token":token})
            }
        })
        .catch((err)=>{console.log(err)})
    })
}