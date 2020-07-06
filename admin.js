const jwt = require('jsonwebtoken')
module.exports = function(Router,connect){


    admin.get('/Ng_student/admin/:id', (req, res) => {
        let decode = jwt.verify(req.headers.authorization,'secret')
        if(decode.email =='vishal19@navgurukul.org'){
            connect.select('*').from('student_details').where("id",req.params.id)
            .then((result)=>{
                if(result){
                    res.send(result)
                }else{
                    res.send("Student Data is not available")
                }
            }).catch((err)=>{console.log(err)})
        }else{
            res.send("You are not a ADMIN")
        }
    })


    admin.delete('/Ng_student/admin/delete/:id',(req,res)=>{
        console.log('hsdkj');
        let decode = jwt.verify(req.headers.authorization,'secret')
        if(decode.email == 'vishal19@navgurukul.org'){
            connect('student_details')
                .where("id",req.params.id).del()
                .then((result)=>{
                    res.send("Your account has been deleted")
                })
                .catch((err)=>{console.log(err)})
            }else{
                res.send("You are not a ADMIN");
                
            }
    })



    admin.put('/Ng_student/admin/update/:id',(req,res)=>{
        
        let edited = {
            "First_name":req.body.First_name,
            "Last_name":req.body.Last_name,
            "Password":req.body.Password,
            "Moblie_no":req.body.Moblie_no
        }
        let decode = jwt.verify(req.headers.authorization,'secret')
        if(decode.email == 'vishal19@navgurukul.org'){
            connect("student_details")
                .where("id",req.params.id).update(edited)
                .then((result)=>{
                    res.send("Your data has been updated")
                })
                .catch((err)=>{console.log(err)})
        }else{
            res.send("You are not a ADMIN")
        }
    })

}