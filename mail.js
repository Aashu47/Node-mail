const nodemailer = require("nodemailer");

async function sendEmail() {
  try {

    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com", 
      port: 587, 
      secure: false, 
      auth: {
        user: "aayushi.12005134@lpu.in",
        pass: "Aayush5134lpu.in", 
      },
    });

    let info = await transporter.sendMail({
      from: "aayushi.12005134@lpu.in", 
      to: "aashu.05134@gmail.com", 
      subject: "Hello from Node.js!", 
      text: "This is a test email sent from Node.js.", 
      html: "<b>This is a test email sent from Node.js.</b>", 
    });

    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error:", error);
  }
}

sendEmail();