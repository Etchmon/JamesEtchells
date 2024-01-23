import React, { ChangeEvent, FormEvent, useState } from "react"

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

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(formState)
    // Here you would typically send the form data to your server
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center flex-col gap-6 text-frost-3 mb-16"
    >
      <label className="flex flex-col w-1/2 gap-1">
        Full Name
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          className="rounded-sm p-1"
          placeholder="Name"
        />
      </label>
      <label className="flex flex-col w-1/2 gap-1">
        Email
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          className="rounded-sm p-1"
          placeholder="Email"
        />
      </label>
      <label className="flex flex-col w-1/2 gap-1">
        Message
        <textarea
          name="message"
          value={formState.message}
          onChange={handleInputChange}
          className="textarea textarea-primary rounded-sm p-1"
          placeholder="Message"
        />
      </label>
      <button
        type="submit"
        className="w-1/2 text-white-3 bg-aurora-1 round-sm p-1 uppercase font-extrabold tracking-widest"
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm
