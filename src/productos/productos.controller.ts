import { Controller, Get, Post, Patch, Delete, HttpCode, HttpStatus, Param, Body } from '@nestjs/common';
import { ProductosService } from './productos.service.js';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';
import { Producto } from './entities/producto.entity.js';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  findAll(): Promise<Producto[]> { return this.productosService.findAll(); }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Producto> { return this.productosService.findOne(+id); }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProductoDto: CreateProductoDto): Promise<Producto> { return this.productosService.create(createProductoDto); }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto): Promise<Producto> {
    return this.productosService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string): Promise<Object> { return this.productosService.remove(+id); }
}