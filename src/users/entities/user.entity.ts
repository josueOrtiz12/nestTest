import { Column, Entity,CreateDateColumn,DeleteDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

     @Column({primary:true, generated: true})
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email:string;

    @Column()
    password: string;

    @Column({default: 'user'})
    rol:string; 

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;


    @DeleteDateColumn()
    deleteAt: Date;
 

}
