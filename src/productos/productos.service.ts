import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';
import { Producto } from './entities/producto.entity.js';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto) 
    private repositorio: Repository<Producto>
  ) {}

  async findAll(): Promise<Producto[]> {
    return await this.repositorio.find();
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.repositorio.findOneBy({id});
    if (!producto) throw new NotFoundException(`Producto ${id} no existe`);
    return producto;
  }

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    return await this.repositorio.save(createProductoDto);
  }

  async update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const producto = await this.findOne(id);
    Object.assign(producto, updateProductoDto);
    return await this.repositorio.save(producto);
  }

  async remove(id: number): Promise<object> {
    const resultado = await this.repositorio.delete(id);
    if (resultado.affected == 0) throw new NotFoundException(`Producto ${id} no encontrado`);
    return {mensaje: 'Producto eliminado'};
  }
}