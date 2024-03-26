// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  // Write your code here

  //Create a readline interface to get the input

  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  async function sendMail(recipientEmail) {
    // 1. Create am email transporter
    // SMTp (Simple Mail transfer Protocol)

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'codingninjas2k16@gmail.com',
        pass: 'slwvvlczduktvhdj',
      },
    });
    //2 .Configure Email Content

    const mailOptions = {
      from: 'codingninjas2k16@gmail.com',
      to: recipientEmail,
      subject: 'Coding Ninjas',
      text: 'The world has enough coders; be a coding ninja!'
    };

    // 3. Send the email.   use try catch if the mail is not correct you can know that

    try {
      const result = await transporter.sendMail(mailOptions);
      console.log("Success: Email sent to ", recipientEmail);
    } catch (err) {
      console.log('Email sent failed with error', +err);
    }

  }
  //Promt the user for the recepients email address
  r1.question("please enter your mail ", (recipientEmail) => {
    sendMail(recipientEmail);
  })

};

export default Solution;
