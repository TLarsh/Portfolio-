// import { NextResponse } from "next/server"
// import { Resend } from "resend"

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(request: Request) {
//   try {
//     const { name, email, subject, message } = await request.json()

//     if (!name || !email || !subject || !message) {
//       return NextResponse.json(
//         { error: "All fields are required" },
//         { status: 400 }
//       )
//     }

//     const { error } = await resend.emails.send({
//       from: "Portfolio <onboarding@resend.dev>",
//       to: process.env.CONTACT_EMAIL!,
//       replyTo: email,
//       subject: subject,
//       html: `
//         <h2>New message from your portfolio</h2>

//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Subject:</strong> ${subject}</p>

//         <h3>Message</h3>
//         <p>${message}</p>
//       `,
//     })

//     if (error) {
//       return NextResponse.json(
//         { error: "Failed to send email" },
//         { status: 500 }
//       )
//     }

//     return NextResponse.json({
//       message: "Email sent successfully",
//     })
//   } catch {
//     return NextResponse.json(
//       { error: "Something went wrong" },
//       { status: 500 }
//     )
//   }
// }



import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <h3>Message</h3>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    })

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Email sending error:", error)

    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    )
  }
}