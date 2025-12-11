import {db, schema} from 'hub:db'

export default defineEventHandler(async event =>{
    const { user } = await requireUserSession(event)
    return await db.select().from(schema.cars);
})
