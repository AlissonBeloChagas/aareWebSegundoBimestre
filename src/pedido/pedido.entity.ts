import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToOne, Double } from "typeorm";
import { cliente } from "src/cliente/cliente.entity";

@Entity('pedido')
export class pedido{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'data', type: 'date'})
    data: Date;

    @Column({name: 'dataPrevEntrega', type: 'date'})
    dataPrevEntrega: Date;

    @Column({name: 'transportadora', type: 'varchar', length: 100})
    transportadora: string;

    @Column({name: 'valorTotal', type: 'decimal',})
    valorTotal: Double;

    @Column({name: 'valorProduto', type: 'decimal',})
    valorProduto: Double;

    @Column({name: 'valorDesconto', type: 'decimal',})
    valorDesconto: Double;

    @ManyToOne(type => cliente, cliente => cliente.pedido)
    @JoinTable({name: 'clienteId'})
    cliente: cliente;

    @Column({name: 'enderecoEntrega', type: 'varchar', length:300})
    enderecoEntrega: string;
}