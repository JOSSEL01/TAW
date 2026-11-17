import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("productos")
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;
}