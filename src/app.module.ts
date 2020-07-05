import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import { cliente } from './cliente/cliente.entity';
import { pedido } from './pedido/pedido.entity';
import { produto } from './produto/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteController } from './cliente/cliente.controller';
import { ProdutoController } from './produto/produto.controller';
import { PedidoController } from './pedido/pedido.controller';
import { ClienteService } from './cliente/cliente.service';
import { ProdutoService } from './produto/produto.service';
import { PedidoService } from './pedido/pedido.service';
import { estoque } from './estoque/estoque.entity';
import { EstoqueService } from './estoque/estoque.service';
import { movimentoEstoque } from './movimento-estoque/movimentoEstoque.entity';
import { MovimentoEstoqueService } from './movimento-estoque/movimento-estoque.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'loja',
      entities: [
        cliente, pedido, produto, estoque, movimentoEstoque
      ],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([ cliente, pedido, produto, estoque, movimentoEstoque])
  ],
  controllers: [AppController, ClienteController, ProdutoController, PedidoController],
  providers: [AppService, ClienteService, ProdutoService, PedidoService, EstoqueService, MovimentoEstoqueService],
})
export class AppModule {}
