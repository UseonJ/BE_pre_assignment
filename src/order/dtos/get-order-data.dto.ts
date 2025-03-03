import { OrderModel } from '../models/order.model';
import { ShippingInfo } from '../models/shipping-info.model';
import { PaymentInfo } from '../models/payment-info.model';
import { ProductInfo } from '../models/product-info.model';

export class GetOrderDataDto extends OrderModel{
        orderID: string;
        customerID: string;
        products: ProductInfo[];
        orderDate: string;
        orderStatus: number;
        shippingInfo: ShippingInfo;
        paymentInfo: PaymentInfo;
}