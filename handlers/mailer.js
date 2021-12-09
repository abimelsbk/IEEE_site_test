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
                from: '<'+process.env.MAIL_USER+'>',
                to: record.email,
                subject: "Confirmation Mail",
                html: "<span>Your Subject:" + record.subject +" Your msg: "+ record.msg +"<span>",
            });
            
            if(process.env.NODE_ENV!=="production"){
                console.log("Message sent: %s", info.messageId);        
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            }
            
           console.log("MAIL SENT");
            resolve(info.messageId);
        })
    }
}