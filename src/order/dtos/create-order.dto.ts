import { ShippingInfo } from './shipping-info.dto';
import { PaymentInfo } from './payment-info.dto';

export class CreateOrderDto {
    orderID: string;
    customerID: string;
    orderDate: string;
    orderStatus: number;
    shippingInfo: ShippingInfo;
    paymentInfo: PaymentInfo;
}