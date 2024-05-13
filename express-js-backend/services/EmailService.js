const dotenv = require('dotenv');
dotenv.config();



let nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./public/templates/'),
        defaultLayout: false
    },
    viewPath: path.resolve('./public/templates/')
};


transporter.use('compile', hbs(handlebarOptions))


const sendEmail = async (from, to, subject, template, context) => {
    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        template: template,
        context: context
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


module.exports = sendEmail;



