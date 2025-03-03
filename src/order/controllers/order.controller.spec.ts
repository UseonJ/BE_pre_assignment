import { OrderController } from './order.controller';
import { OrderService } from '../services/order.service';
import { OrderRepository } from '../repositories/order.repository';
import * as fs from 'fs';
import * as path from 'path';

describe('OrderController', () => {
    let orderController: OrderController;
    let orderService: OrderService;

    beforeEach(() => {
        const orderRepository = new OrderRepository();
        orderService = new OrderService(orderRepository);
        orderController = new OrderController();
    });

    test('should return an array of orders', async () => {
        const ordersFilePath = path.join(__dirname, '../../../orders.json');
        const ordersData = JSON.parse(fs.readFileSync(ordersFilePath, 'utf8'));

        jest.spyOn(orderService, 'findAll').mockImplementation(async () => ordersData);

        expect(await orderController.getAllOrderDataList()).toBe(ordersData);
    });
});