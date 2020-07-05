import { Injectable } from '@nestjs/common';
import { movimentoEstoque } from './movimentoEstoque.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MovimentoEstoqueService {
    constructor(
        @InjectRepository(movimentoEstoque)
        private movimentoEstoqueRepository: Repository<movimentoEstoque>,
    ) { }

    async create(pedido: movimentoEstoque) {
        return this.movimentoEstoqueRepository.save(pedido);
    }

    async delete(id: number) {
        return this.movimentoEstoqueRepository.delete(id);
    }

    async findById(id: number) {
        return this.movimentoEstoqueRepository.findOne(id);
    }

    async findAll() {
        return this.movimentoEstoqueRepository.find();
    }
}
