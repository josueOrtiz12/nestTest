import { Breed } from "src/breeds/entities/breed.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, UpdateDateColumn } from "typeorm"

@Entity()
export class Cat {

    @Column({ primary: true, generated: true })
    id: number;
    
    @Column()
    name: string;

    @Column()
    age: number;


    @ManyToOne( ()=> Breed  , (breed)=> breed.id , {
        eager: true, // para que traiga las raza al hacer un findOne
    })
    breed: Breed;


    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;


    @DeleteDateColumn()
    deleteAt: Date;


}



