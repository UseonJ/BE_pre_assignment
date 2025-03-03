import { ShippingInfo } from './shipping-info.model';
import { PaymentInfo } from './payment-info.model';
import { ProductInfo } from './product-info.model';
import { IsString, IsDateString ,IsInt, IsArray } from 'class-validator';

export class OrderModel {
    @IsString()
    orderID: string;
    @IsString()
    customerID: string;
    @IsArray()
    products: ProductInfo[];
    @IsDateString()
    orderDate: string;
    @IsInt()
    orderStatus: number;
    shippingInfo: ShippingInfo;
    paymentInfo: PaymentInfo;
}