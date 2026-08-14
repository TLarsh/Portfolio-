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
  host: "smtp.gmail.com",
//   port: 587,
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: subject,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Email error:", error)

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}