import { IsString, IsNumber, IsNotEmpty, Length, IsPositive } from "class-validator";

export class CreateProductoDto {
  @IsString({message: 'El nombre debe ser una cadena'})
  @IsNotEmpty({message: 'El nombre no puede ir vacío'})
  @Length(2,100,{message: 'La longitud debe ser de al menos 2 caracteres'})
  nombre: string;

  @IsNumber({maxDecimalPlaces:2},{message: 'El precio debe ser un número válido.'})
  @IsPositive({message: 'Precio no válido.'})
  precio: number;
}