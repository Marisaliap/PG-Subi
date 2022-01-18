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
          html: `<body>
            <img src="https://res.cloudinary.com/dlwobuyjb/image/upload/v1639598355/logo/logo_eymkyo.png" alt="logo" width=300/>
            <hr></hr>
            <p>Hola <strong> ${userName}!</strong>, te registraste exitosamente en nuestra aplicación, ¡Disfruta nuestra página!</p>
            <p> Saludos de todo el Equipo de <a href="https://givemearide.vercel.app/"><strong>GIMME A RIDE ®</strong></a> </p>
            <hr></hr>
            <p>Hello <strong> ${userName}!</strong>, you have successfully registered on our application, enjoy our site!</p>
            <p> Greetings from all the <a href="https://givemearide.vercel.app/"><strong>GIMME A RIDE ®</strong></a> </p>
            </body>`, 
        });
        res.send(mailToUser)
      }
      else{

        const mailToManejante = await transporter.sendMail({
          from: 'grupo10.soyhenry@gmail.com', 
          to: manejanteEmail, 
          subject: "Gimme A Ride", 
          html: `<body>
            <img src="https://res.cloudinary.com/dlwobuyjb/image/upload/v1639598355/logo/logo_eymkyo.png" alt="logo" width=300 height=42/>
            <hr></hr>
            <p>El usuario <strong>${manejadoName}</strong> se a incorporado a su viaje de <strong></strong>${originName}</strong> a <strong></strong>${destinyName}</strong></p>
            <p> Sauldos de todo el Equipo de <a href="https://givemearide.vercel.app/"><strong>GIMME A RIDE ®</strong></a> </p>
            <hr></hr>
            <p>The user <strong>${manejadoName}</strong> has been incorporated into his or her <strong></strong>${originName}</strong> a <strong></strong>${destinyName}</strong></p>
            <p>Greetings from all the <a href="https://givemearide.vercel.app/"><strong>GIMME A RIDE ®</strong></a> </p>
            </body>`,
          
        });
        
        const mailToManejado = await transporter.sendMail({
          from: 'grupo10.soyhenry@gmail.com', 
          to: manejadoEmail, 
          subject: "Gimme A Ride",
          html: `<body>
          <img src="https://res.cloudinary.com/dlwobuyjb/image/upload/v1639598355/logo/logo_eymkyo.png" alt="logo" width=300 height=42/>
          <hr></hr>
          <p>Te has incorporado al viaje de <strong>${originName}</strong> a <strong>${destinyName}</strong> del usuario <strong>${manejanteName}</strong></p>
          <p> Sauldos de todo el Equipo de <a href="https://givemearide.vercel.app/"><strong>GIMME A RIDE ®</strong></a> </p>
          <hr></hr>
          <p>You have joined the journey of  <strong>${originName}</strong> a <strong>${destinyName}</strong> user's <strong>${manejanteName}</strong></p>
          <p>Greetings from all the <a href="https://givemearide.vercel.app/"><strong>GIMME A RIDE ®</strong></a> </p>
          </body>`,
          // text: `` , 
        });
        
        res.send({mailToManejante,mailToManejado})
      }
    } catch(err) {
        next(err)
    }
  
}

module.exports = { postMail };