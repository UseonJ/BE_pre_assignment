import { ProductInfo } from './product-info.dto';
import { IsString } from 'class-validator';

export class CreateOrderDto {
    @IsString()
    customerID: string;
    products: ProductInfo[];
}