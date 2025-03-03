import { Module } from '@nestjs/common';
import { OrderController } from './order/controllers/order.controller';
import { OrderService } from './order/services/order.service';
import { OrderRepository } from './order/repositories/order.repository';

@Module({
    controllers: [OrderController],
    providers: [OrderService, OrderRepository],
})
export class AppModule {}