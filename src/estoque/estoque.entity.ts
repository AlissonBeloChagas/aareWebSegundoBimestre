import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, OneToOne, ManyToMany } from "typeorm";
import { produto } from "src/produto/produto.entity";

@Entity('estoque')
export class estoque{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => produto)
    @JoinTable({name: 'ProdutoEstoque'})
    produto: produto;

    @Column({name: 'descricao', type: 'varchar', length: 100})
    descricao: string;
}