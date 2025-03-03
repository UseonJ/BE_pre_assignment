import { ShippingStatus } from '../enums/enums';

export class ShippingInfo {
    shippingID: string;
    orderID: string;
    shippingDate: Date;
    shippingStatus: ShippingStatus;
    shippingAddress: string;
}