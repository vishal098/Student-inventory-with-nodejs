const jwt = require('jsonwebtoken')
module.exports = function(Router ,connect){

    edit.put('/Ng_student/update',(req,res)=>{
        
        let edited = {
            "First_name":req.body.First_name,
            "Last_name":req.body.Last_name,
            "Password":req.body.Password,
            "Mobile_no":req.body.Mobile_no
        }
        let decode = jwt.verify(req.headers.authorization,'secret')
        connect('stduent_details')
            .where('email',decode.email).update(user)
            .then((result)=>{
                res.send("Your data has been updated")
            })
            .catch((err)=>{console.log(err)})
    })
}