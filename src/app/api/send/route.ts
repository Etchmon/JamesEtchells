import { EmailTemplate } from "../../email-template"
import { Resend } from "resend"
import { NextResponse } from "next/server"
import * as React from "react"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: any) {
  const { fullName, message } = req.body
  try {
    const { data, error } = await resend.emails.send({
      from: `${fullName} <etch@jamesetchells.com>`,
      to: ["etch.rush@gmail.com"],
      subject: "Test2",
      react: EmailTemplate({ fullName, message }) as React.ReactElement,
    })

    return NextResponse.json({ data, message: "Email sent" })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
