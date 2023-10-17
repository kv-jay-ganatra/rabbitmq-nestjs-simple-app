// import decorators from typeORM
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
// decorator for creating an entity
@Entity()
export class Food {
// decorator to automatically generate an id for a newly created entity
    @PrimaryGeneratedColumn()
    id: number
@Column()
    name: string
@Column()
    price: number
}