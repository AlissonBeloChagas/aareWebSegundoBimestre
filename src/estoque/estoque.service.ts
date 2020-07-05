import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { estoque } from './estoque.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstoqueService {
    constructor(
        @InjectRepository(estoque)
        private estoqueRepository: Repository<estoque>,
    ) { }

    async create(pedido: estoque) {
        return this.estoqueRepository.save(pedido);
    }

    async delete(id: number) {
        return this.estoqueRepository.delete(id);
    }

    async findById(id: number) {
        return this.estoqueRepository.findOne(id);
    }

    async findAll() {
        return this.estoqueRepository.find();
    }
}
