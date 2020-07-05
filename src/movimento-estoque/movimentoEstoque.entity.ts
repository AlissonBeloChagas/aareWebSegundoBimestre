import { Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToOne, JoinColumn } from "typeorm";
import { estoque } from "src/estoque/estoque.entity";

@Entity('movimentoEstoque')
export class movimentoEstoque{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => estoque)
    @JoinColumn({name: 'estoqueId'})
    estoque: estoque;

    // E - para entrada  | S - para saida
    @Column({name: 'tipoMovimentacao', type: 'varchar', length: 1})
    tipoMovimentacao: string;

    @Column({name: 'quantidade', type: 'numeric'})
    quantidade: number;
}
