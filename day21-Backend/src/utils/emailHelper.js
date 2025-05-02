const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "tanisha.engineer2005@gmail.com",
    pass: "bmxzlabcldizpzaw",
  },
});

const sendMail = async ({
    emails, subject, html
}) => {
    try {
        const info = await transporter.sendMail({
            from: '"Admin App" <likhilesh@gmail.com>', // sender address
            to: emails, // list of receivers
            subject: subject, // Subject line
            html: html, // html body
        });
    } catch (error) {
        console.log("-------------------------------");
        console.log("Could not send email to", emails);
        console.log(error.message);
        console.log("-------------------------------");
    }
}

const sendOtpMail = async ({otp, email}) => {
    await sendMail({
        subject: "Otp Verification @ Admin App",
        emails: [email],
        html: `
            <html>
                <body>
                    <div style="display: flex; align-items: center; justify-content: center; background: yellow">
                        <div style="padding: 2rem">
                            <h2>OTP Verification</h2>
                            <p>Your otp for verification is ${otp}</p>
                        </div>
                    </div>
                </body>
            </html>
        `
    })
}

module.exports = {
    sendOtpMail,
}