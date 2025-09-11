import nodemailer from 'nodemailer';

export default async function handler(req,res){
    if(req.method !=='POST'){
   return res.status(405).json({message:'POST method only'});
    }
    const { name, mail, subject, message } = req.body;
    const transporter =nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        auth:{
            user:'kavin.srkv@gmail.com',
            pass:'szks hjga mngr ojes',
        },
    })
    try{
        await transporter.sendMail({
        from: 'cloudheard.org',
        to:'cloudlabel@cloudheard.org',
        subject:subject ||`New message from ${name}`,
       text: `From: ${name} <${mail}>\n\n${message}`,
        });
    res.status(200).json({message:'Sent Successfully'});
    }
    catch(err){
    res.status(500).json({message: 'Sending failed'});
    }
}