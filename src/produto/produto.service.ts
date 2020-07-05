import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { produto } from './produto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {

    constructor(
        @InjectRepository(produto)
        private produtoRepository: Repository<produto>,
    ) { }

    async create(pedido: produto) {
        return this.produtoRepository.save(pedido);
    }

    async delete(id: number) {
        return this.produtoRepository.delete(id);
    }

    async findById(id: number) {
        return this.produtoRepository.findOne(id);
    }

    async findAll() {
        return this.produtoRepository.find();
    }
}
