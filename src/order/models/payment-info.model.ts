import { PaymentStatus, PaymentMethod } from '../enums/enums';
import { IsString, IsDateString, IsInt} from 'class-validator';

export class PaymentInfo {
    @IsString()
    paymentID: string;
    @IsString()
    orderID: string;
    @IsDateString()
    paymentDate: string; // Date 형식의 문자열
    paymentStatus: PaymentStatus;
    paymentMethod: PaymentMethod;
    @IsInt()
    paymentAmount: number;
}