import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn({name: 'user_id'} )
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    lastName: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    phone: string;

    @Column()
    gender: string;

    @Column()
    role: string;

    @Column()
    password: string;

    @Column({default: true})
    isActive: boolean;







}
