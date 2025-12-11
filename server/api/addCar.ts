import {db, schema} from 'hub:db'
import {NewCar} from "#shared/types/db";

export default defineEventHandler(async event =>{
    const { user } = await requireUserSession(event)

    const body = await readBody<NewCar>(event);
    return await db.insert(schema.cars).values({...body, status: "Added"}).returning();
})
