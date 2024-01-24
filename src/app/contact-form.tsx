import React, { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-hot-toast"

interface FormState {
  name: string
  email: string
  message: string
}

function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formState = {
      fullName: (event.target as any).name.value,
      email: (event.target as any).email.value,
      message: (event.target as any).message.value,
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (response.status === 200) {
        setFormState({
          name: "",
          email: "",
          message: "",
        })
        toast.success(`${formState.fullName}, your message has been sent!`)
      } else {
        toast.error(`Error: ${(data as { message: string }).message}`) // Show an error message
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center flex-col gap-6 text-frost-3 mb-16"
    >
      <label className="flex flex-col w-3/4 gap-1">
        Full Name
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          className="rounded-sm p-1 bg-white-1"
          placeholder="Name"
        />
      </label>
      <label className="flex flex-col w-3/4 gap-1">
        Email
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          className="rounded-sm p-1 bg-white-1"
          placeholder="Email"
        />
      </label>
      <label className="flex flex-col w-3/4 gap-1">
        Message
        <textarea
          name="message"
          value={formState.message}
          onChange={handleInputChange}
          className="textarea textarea-primary rounded-sm p-1 bg-white-1"
          placeholder="Message"
        />
      </label>
      <button
        type="submit"
        className="w-3/4 text-white-3 bg-aurora-1 round-sm p-1 uppercase font-extrabold tracking-widest"
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm
