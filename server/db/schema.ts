import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const cars = sqliteTable('cars', {
    id: integer().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    brand: text().notNull(),
    price: text().notNull(),
    status: text().notNull(),
})
