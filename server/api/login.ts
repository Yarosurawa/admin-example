import { z } from 'zod'

const bodySchema = z.object({
    email: z.email(),
    password: z.string().min(8),
})

export default defineEventHandler(async (event) => {
    const { email, password } = await readValidatedBody(event, bodySchema.parse)

    if (email === 'petro@a.com' && password === 'password') {
        console.log('logged')
        await setUserSession(event, {
            user: {
                name: "Петро Порошенко",
            },
        })
        return {}
    }
    throw createError({
        statusCode: 401,
        message: 'Bad credentials',
    })
})
