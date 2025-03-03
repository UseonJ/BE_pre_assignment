import { ShippingInfo } from './shipping-info.dto';
import { PaymentInfo } from './payment-info.dto';
import { ProductInfo } from './product-info.dto';
import { IsString, IsDateString ,IsInt } from 'class-validator';

export class GetOrderDataDto {
    @IsString()
    orderID: string;
    @IsString()
    customerID: string;
    products: ProductInfo[];
    @IsDateString()
    orderDate: string;
    @IsInt()
    orderStatus: number;
    shippingInfo: ShippingInfo;
    paymentInfo: PaymentInfo;
}