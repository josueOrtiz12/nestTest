import { Column, CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from "typeorm";

@Entity()
export class Breed {

@Column({ primary: true, generated: true })
id: number;

@Column()
name: string;

@Column()
description?:string;

@CreateDateColumn()
created_at: Date;

@UpdateDateColumn()
updated_at: Date;

@DeleteDateColumn()
deletead_at: Date;

}
