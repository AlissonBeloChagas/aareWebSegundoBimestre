import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Double } from "typeorm";
import { estoque } from "src/estoque/estoque.entity";

@Entity('produto')
export class produto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'nome', type: 'varchar', length: 100})
    nome: string;

    @Column({name: 'descricao', type: 'varchar', length: 100})
    descricao: string;

    @Column({name: 'preco', type: 'decimal'})
    preco: Double;

    //Validar Estoque

    @Column({name: 'datValidade', type: 'date'})
    datValidade: Date;

    @Column({name: 'unidadeMedia', type: 'varchar', length:100})
    unidadeMedia: string;
}