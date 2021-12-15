const nodemailer = require("nodemailer");


const postMail = async (req,res,next) => {
  try {
      const { manejanteEmail, manejadoName, originName, destinyName, manejadoEmail, manejanteName } = req.body; 
      const { userName, userEmail } = req.body;
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

      if(userName) {
        const mailToUser = await transporter.sendMail({
          from: 'grupo10.soyhenry@gmail.com', 
          to: userEmail, 
          subject: "Gimme A Ride", 
          text: `Hola ${userName}!, te haz registrado exitosamente en nuestra aplicacion, ¡Disfruta nuestra pagina!` , 
        });
        res.send(mailToUser)
      }
      else{

        const mailToManejante = await transporter.sendMail({
          from: 'grupo10.soyhenry@gmail.com', 
          to: manejanteEmail, 
          subject: "Gimme A Ride", 
          text: `El usuario ${manejadoName} se a incorporado a su viaje de ${originName} a ${destinyName}` , 
        });
        
        const mailToManejado = await transporter.sendMail({
          from: 'grupo10.soyhenry@gmail.com', 
          to: manejadoEmail, 
          subject: "Gimme A Ride", 
          text: `Te haz incorporado al viaje de ${originName} a ${destinyName} del usuario ${manejanteName}` , 
        });
        
        res.send({mailToManejante,mailToManejado})
      }
    } catch(err) {
        next(err)
    }
  
}

module.exports = { postMail };