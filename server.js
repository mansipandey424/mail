import nodemailer from 'nodemailer';
import express from 'express';

const app = express();
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mansipandey424',
      pass: 'mgwp xghv wiuy nzcq'
    }
  });
  
  let mailOptions = {
    from: 'mansipandey424@gmail.com',
    to: 'pallavipatil0266@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  app.listen(6000, (req, res) => {
    console.log('port is running on 6000')
  })