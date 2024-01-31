import { Column, CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from "typeorm"

@Entity()
export class Cat {

    @Column({ primary: true, generated: true })
    id: number;
    
    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    breed: string;


    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;


    @DeleteDateColumn()
    deleteAt: Date;
}



