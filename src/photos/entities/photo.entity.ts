import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PhotoEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column() filename: string;

    @Column('text', { nullable: true }) description: string;
}
