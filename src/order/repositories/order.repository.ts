import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { OrderModel } from '../models/order.model';

@Injectable()
export class OrderRepository {
  async save(order) {
    const orders = JSON.parse(await readFile('orders.json', 'utf-8'));
    orders.push(order);
    await writeFile('orders.json', JSON.stringify(orders));
  }

  async findAll() {
    const orders = JSON.parse(await readFile('orders.json', 'utf-8'));
    return orders;
  }

  async findByOrderId(order_id) {
    const orders = JSON.parse(await readFile('orders.json', 'utf-8'));
    const filtered: OrderModel[] = orders.filter((order: OrderModel) => order.orderID === order_id);
    return filtered[0];
  }
  async findByCustomerId(customer_id) {
    const orders = JSON.parse(await readFile('orders.json', 'utf-8'));
    const filtered: OrderModel[] = orders.filter((order: OrderModel) => order.customerID === customer_id);
    return filtered;
  }
}