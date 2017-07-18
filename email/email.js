/**
 * Created by redsign77 on 2017. 07. 18.
 */
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'signred@gmail.com',
        pass: '' /* Your password insert here */
    }
});

var mailOptions = {
    from: 'signred@gmail.com',
    to: 'info@redsign.hu',
    subject: 'E-mail with Node.js',
    text: 'E-mail content here...'
};

transporter.sendMail(mailOptions, function(error, info){
   if (error) {
       console.log(error);
   } else {
       console.log('Email sent: ' + info.response);
   }
});