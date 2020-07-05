import { Controller, Get, Param, Body, Post, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';

@Controller('pedido')
export class PedidoController {
    constructor(private readonly service: PedidoService) { }

    @Get() 
    async findAll() {
        return await this.service.findAll();
    } 
    
    @Get(":id")
    async findById(@Param() id: number) {
        return this.service.findById(id)
    }

    @Post()
    async create(@Body() cliente) {
        return await this.service.create(cliente)
    }

    @Delete(":id")
    async delete(@Param() id: number) {
        return this.delete(id);
    }
}
