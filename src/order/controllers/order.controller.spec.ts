import { OrderController } from './order.controller';

describe('OrderController', () => {
    let orderController: OrderController;

    beforeEach(() => {
        orderController = new OrderController();
    });

    test('hello world!', () => {
        expect(1 + 1).toBe(2);
    });
});