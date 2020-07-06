module.exports = function (Router, connect) {
    push.
        post('/sign',(req,res)=>{
            let user = {
                "First_name":req.body.First_name,
                "Last_name":req.body.Last_name,
                "Email":req.body.Email,
                "Password":req.body.Password,
                "Moblie_no":req.body.Mobile_no
                // "join_date":Date.now()
            }
            // console.log(user)
            connect('student_details').insert(user).then((result)=>{
                console.log(result)
                if(result){
                    res.send("your account has been created")
                }else{
                    res.send("something went wrong \n please try again")
                }
            })
        })
}