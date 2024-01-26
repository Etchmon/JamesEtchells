import { EmailTemplate } from "../../email-template"
import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"
import * as React from "react"

const resend = new Resend(process.env.RESEND_API_KEY)
type BodyType = {
  name: string
  email: string
  message: string
}

export async function POST(req: NextRequest) {
  const body: BodyType = await req.json()
  const { name, email, message } = body as BodyType
  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <etch@jamesetchells.com>`,
      to: ["etch.rush@gmail.com"],
      subject: "New message from your website",
      react: EmailTemplate({
        name: name,
        email: email,
        message: message,
      }) as React.ReactElement,
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
