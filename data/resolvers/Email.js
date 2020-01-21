import nodemailer from 'nodemailer'


// email sender function
export const sendEmail = (remitente,asunto,mensaje) => {




    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'wavesinfractal@gmail.com',
          pass: 'yoshicolocho'
        }
      });
      
      
      
      var mailOptions = {
        from: 'wavesinfractal@gmail.com',
        to: remitente.toString(),
        subject: asunto.toString(),
        text: mensaje.toString()
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
      });



};