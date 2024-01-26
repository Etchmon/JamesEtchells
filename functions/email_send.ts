type BodyType = {
  name: string
  email: string
  message: string
}

export default {
  async fetch(request: Request, env: any, ctx: FetchEvent) {
    const RESEND_API_KEY = env.RESEND_API_KEY
    const body: BodyType = await request.json()
    const { name, email, message } = body as BodyType

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `${name} <etch@jamesetchells.com>`,
        to: ["etch.rush@gmail.com"],
        subject: `New message from jamesetchells.com from ${name} at ${email}`,
        html: `${message}`,
      }),
    })

    const results = await gatherResponse(response)
    return new Response(results, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    /**
     * gatherResponse awaits and returns a response body as a string.
     * Use await gatherResponse(..) in an async function to get the response body
     * @param {Response} response
     */
    async function gatherResponse(response: Response) {
      const { headers } = response
      const contentType = headers.get("content-type") || ""
      if (contentType.includes("application/json")) {
        return JSON.stringify(await response.json())
      }
      return response.text()
    }
  },
}
