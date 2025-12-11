import {cars} from 'hub:db:schema'

export type Car = typeof cars.$inferSelect;
export type NewCar = typeof cars.$inferInsert;