import { IsString, IsNumber } from 'class-validator';

export class ProductInfo {
    @IsString()
    productID: string;
    @IsString()
    productName: string;
    @IsNumber()
    productPrice: number;
    @IsNumber()
    productQuantity: number;
}