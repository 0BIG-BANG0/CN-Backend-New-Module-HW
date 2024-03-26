import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(data);

      // TODO: Store user query in "query.txt"
      fs.appendFile("queries.txt", `\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n`, (err) => {
        if (err) throw err;
        console.log("\nQuery Saved\n")
        console.log(`User name: ${name}\nQuery: ${message}\n`)
      })
      // TODO: Use Nodemailer to send confirmation email
      const mailOptions = {
        from: "codingninjas2k16@gmail.com",
        to: email,
        subject: "Query Confirmation",
        text: `Dear ${name},\nThank you for your query. We have received it successfully.`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending email:", error);
        }
        else {
          // console.log("Email sent:", info.response);
          // Emit "mailSent" event
          // TODO: Emit "mailSent" event
          customEvent.mailSent(email);
        }
      })

      res.end("Query received");
    });
  } else {
    res.end("Welcome to Coding Ninjas!");
  }
});

const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log(`custom event "mailSent" emitted`);
    console.log(
      `confirming that the email has been sent successfully to ${email}`
    );
  });
};

export default server;
export { server, CustomEvent, Solution };
