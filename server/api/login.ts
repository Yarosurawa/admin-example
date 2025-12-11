import { z } from 'zod'

const bodySchema = z.object({
    email: z.email(),
    password: z.string(),
})

export default defineEventHandler(async (event) => {
    const { email, password } = await readValidatedBody(event, bodySchema.parse)

    if (email === 'a@a.com' && password === 'password') {
        await setUserSession(event, {
            name: "Петро Порошенко"
        })
        return {}
    }
    throw createError({
        statusCode: 401,
        message: 'Bad credentials',
    })
})
