import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Some {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
}