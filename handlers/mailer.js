"use strict";
const nodemailer = require("nodemailer");
const transporterData = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    },
    tls:{
        rejectUnauthorized:false
    }
};

module.exports= {
    sendMail: function (record){
        return new Promise(async(resolve, reject)=>{
            let transporter = nodemailer.createTransport(transporterData);
            let info = await transporter.sendMail({
                from: '<testIKSINTERNS@example.com',
                to: record.email,
                subject: "Confirmation Mail",
                html: "<span>Your Subject:" + record.subject +" Your msg: "+ record.msg +"<span>",
            });
            /*
            console.log("Message sent: %s", info.messageId);        
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            */
           console.log("MAIL SENT");
            resolve(info.messageId);
        })
    }
}