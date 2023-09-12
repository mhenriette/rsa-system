import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const transport = nodemailer.createTransport({
  service: 'gmail',
  /* 
      setting service as 'gmail' is same as providing these setings:

      host: "smtp.gmail.com",
      port: 465,
      secure: true
      
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
});


export const sendMailPromise = (email:string, subject:string, message:string) =>{
  const mailOptions: Mail.Options = {
    from: process.env.MAIL_ADDRESS,
    to: email,
    subject: subject,
    text: message,
  };
  
  return new Promise<string>((resolve, reject) => {
    transport.sendMail(mailOptions, function (err) {
      if (!err) {
        resolve('Email sent');
      } else {
        reject(err.message);
      }
    });
  });
}
  

