import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';

@Module({
  providers: [ProdutoService],
  controllers: [ProdutoController]
})
export class ProdutoModule {}
