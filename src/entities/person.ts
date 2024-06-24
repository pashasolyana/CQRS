import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person { 
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;
}
