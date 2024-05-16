const nodemailer = require('nodemailer');

// Create a transporter object
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ask4cutetemmy@gmail.com',
        pass: '12345'
    }
});

// Email options
let mailOptions = {
    from: 'ask4cutetemmy@gmail.com',
    to: 'ask4cutetemmy@gmail.com',
    subject: 'Test Email',
    text: 'Hello from Node.js'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
