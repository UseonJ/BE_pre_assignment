import { ShippingStatus } from '../enums/enums';
import { IsString, IsDateString, IsInt} from 'class-validator';

export class ShippingInfo {
    @IsString()
    shippingID: string;
    @IsString()
    orderID: string;
    @IsDateString()
    shippingDate: string;
    shippingStatus: ShippingStatus;
    @IsString()
    shippingAddress: string;
}