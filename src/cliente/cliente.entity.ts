import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { pedido } from "src/pedido/pedido.entity";

@Entity('cliente')
export class cliente{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'nome', type: 'varchar', length: 100})
    nome: string;

    @Column({name: 'cpf', type: 'varchar', length: 11})
    cpf: string;

    @Column({name: 'rg', type: 'varchar', length: 9})
    rg: string;

    @Column({name: 'endereco', type: 'varchar', length: 300})
    endereco: string;

    @Column({name: 'bairro', type: 'varchar', length: 100})
    bairro: string;

    @Column({name: 'cidade', type: 'varchar', length: 100})
    cidade: string;

    @Column({name: 'cep', type: 'varchar', length: 8})
    cep: string;

    @OneToMany(type => pedido, pedido => pedido.cliente, {cascade: true, eager: true})
    pedido: Array<pedido>;
}