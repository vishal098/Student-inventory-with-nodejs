const jwt = require('jsonwebtoken')
module.exports = function(Router,connect){
    delet.delete('/Ng_student/delete',(req,res)=>{
        let decode = jwt.verify(req.headers.authorization,'secret')
        connect('student_details')
            .where("email",decode.email).del()
            .then((result)=>{
                res.send("Your account has been deleted")
            })
            .catch((err)=>{console.log(err)})
    })



}