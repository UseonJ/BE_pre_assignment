import { PaymentStatus, PaymentMethod } from '../enums/enums';

export class PaymentInfo {
    paymentID: string;
    orderID: string;
    paymentDate: Date;
    paymentStatus: PaymentStatus;
    paymentMethod: PaymentMethod;
    paymentAmount: number;
}