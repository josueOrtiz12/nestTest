import { Cat } from "src/cats/entities/cat.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, UpdateDateColumn } from "typeorm";

@Entity()
export class Breed {

@Column({ primary: true, generated: true })
id: number;

@Column()
name: string;

@Column()
description?:string;

@OneToMany(()=> Cat, (cat)=> cat.breed)
cats: Cat[];


@CreateDateColumn()
created_at: Date;

@UpdateDateColumn()
updated_at: Date;

@DeleteDateColumn()
deletead_at: Date;



}
