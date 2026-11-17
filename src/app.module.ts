import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module.js';
import { Producto } from './productos/entities/producto.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',       // Usuario por defecto de XAMPP
      password: '',           // XAMPP no tiene contraseña por defecto
      database: 'basededatos',
      entities: [Producto],
      synchronize: true,      // Crea la tabla automáticamente
    }),
    ProductosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}