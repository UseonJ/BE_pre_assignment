import { ProductInfo } from '../models/product-info.model';
import { IsString } from 'class-validator';

export class CreateOrderDto {
    @IsString()
    customerID: string;
    products: ProductInfo[];
}