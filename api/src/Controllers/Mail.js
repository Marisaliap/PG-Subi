const nodemailer = require("nodemailer");


const postMail = async (req,res,next) => {
  try {
      const { manejanteEmail, manejadoName, originName, destinyName } = req.body 

      //let testAccount = await nodemailer.createTestAccount();
      
      let transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
              user: "grupo10.soyhenry@gmail.com",//testAccount.user, 
              pass: "Jamiroquai#2",//testAccount.pass, 
            },
          tls:{
              rejectUnauthorized: false
          }
        });
        
        
        let info = await transporter.sendMail({
            from: 'grupo10.soyhenry@gmail.com', 
            to: manejanteEmail, 
            subject: "Gimme A Ride", 
            text: `El usuario ${manejadoName} se a incorporado a su viaje de ${originName} a ${destinyName}` , 
        });
        

      res.send(info)
        
    } catch(err) {
        next(err)
    }
  
}

module.exports = { postMail };