// import nodemailer from "nodemailer";

// interface ISendEmail {
//   email: string;
//   name: string;
//   msg: string;
// }

// async function sendEmail(props: ISendEmail) {
//   let transporter = nodemailer.createTransport({
//     host: import.meta.env.EMAIL_HOST,
//     port: Number(import.meta.env.EMAIL_PORT),
//     auth: {
//       user: import.meta.env.EMAIL,
//       pass: import.meta.env.EMAIL_PASS,
//     },
//   });

//   const { email, name, msg } = props;

//   let message = {
//     from: import.meta.env.EMAIL,
//     to: [import.meta.env.EMAIL, props.email],
//     subject: "PORTFOLIO ",
//     name: props.name,
//     html: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Package Booking Confirmation</title>
//     <style>
//      body {
//     font-family: Arial, sans-serif;
//     color: #333333;
//     background-color: #f9f9f9;
//     margin: 0;
//     padding: 0;
// }
// .email-container {
//     max-width: 600px;
//     margin: 0 auto;
//     padding: 20px;
//     background-color: #ffffff;
//     border: 1px solid #dddddd;
//     border-radius: 8px;
// }
// .header {
//     text-align: center;
//     padding: 20px 0;
// }
// .header h1 {
//     color: #FFA500; /* Dark orange */
//     margin: 0;
// }
// .package-info {
//     background-color: #FFE4B5; /* Light yellowish orange */
//     padding: 15px;
//     border-radius: 6px;
//     margin: 20px 0;
// }
// .package-info h2 {
//     color: #FFA500; /* Dark orange */
//     margin: 0;
//     font-size: 18px;
// }
// .package-details {
//     margin: 10px 0;
//     padding: 0 10px;
// }
// .package-details p {
//     margin: 5px 0;
//     font-size: 14px;
// }
// .footer {
//     text-align: center;
//     padding: 20px 0;
//     font-size: 12px;
//     color: #666666;
// }
// .footer a {
//     color: #FFA500; /* Dark orange */
//     text-decoration: none;
// }

//     </style>
// </head>
// <body>
//     <div class="email-container">
//         <!-- Header Section -->
//         <div class="header">
//             <h1>Thank You for Time and Trust in us</h1>
//             <p>We're excited to have you join us on this adventure!</p>
//         </div>

//         <!-- Package Info Section -->
//         <div class="package-info">
//             <h2>Booking Details</h2>
//             <div class="package-details">
//                 <p><strong>Package:</strong> ${name}</p>
//                 <p><strong>Duration:</strong> ${email}</p>
//                 <p><strong>Group Size:</strong> ${msg}</p>
//             </div>
//         </div>

//         <!-- Instructions Section -->
//         <p>Here’s what happens next:</p>
//         <ul>
//             <li>A team member will be in touch to confirm your time availbility and provide additional details.</li>
//             <li>If you have any questions, feel free to reply to this email or contact us at our support number.</li>
//         </ul>

//         <p>We look forward to providing you with an unforgettable experience!</p>

//         <!-- Footer Section -->
//         <div class="footer">
//             <p>&copy;  2024 HK. All rights reserved.</p>
//             <p><a href="mailto:khandayharoon@gmail.com">khandayharoon.com</a> | <a href="tel:+91 6005204853">+91 6005 204 853</a></p>
//         </div>
//     </div>
// </body>
// </html>`,
//   };
//   // todo

//   let info = await transporter.sendMail(message);
//   return info;
// }

// export { sendEmail };
