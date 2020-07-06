const jwt = require('jsonwebtoken')
module.exports = function (Router, connect) {


    get.get('/', (req, res) => {
        res.send("<h1/>Welcome to navgurukul<h1>")
    });


    get.get('/Ng_student', (req, res) => {
        connect.select('*').from('student_details').then((result)=>{
            if(result){
                res.send(result)
            }else{
                res.send("Student Data is not available")
            }
        }).catch((err)=>{console.log(err)})
    });

    get.get('/Ng_student/user', (req, res) => {
        let decode = jwt.verify(req.headers.authorization,'secret')
        // console.log(decode.email)
        connect.select('*').from('student_details').where("email",decode.email)
        .then((result)=>{
            if(result){
                res.send(result)
            }else{
                res.send("Student Data is not available")
            }
        }).catch((err)=>{console.log(err)})
    })

}