import {MailtrapClient} from 'mailtrap'

const client = new MailtrapClient({token: process.env.MAILTRAP_API_KEY})

const senderDetails = {
  name: process.env.MAITRAP_SENDER_NAME,
  email: process.env.MAILTRAP_SENDER_EMAIL_ADDRESS,
}

export const SendMail = (recipient, emailMessage, emailSubject) =>
  client.send({
    category: 'Mail Client',
    from: senderDetails, // sender address
    to: [
      {
        name: recipient.name,
        email: recipient.email,
      },
    ],
    subject: `${emailSubject}`, // Subject line
    html: `${emailMessage}`, // html body
  })

// attachments: [
//   {
//     filename: 'Alaghodaro Invitaton.pdf',
//     content: fs.readFileSync(m.path),
//   },
// ],
