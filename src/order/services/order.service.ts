import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../repositories/order.repository';

@Injectable()
export class OrderService {
  constructor(public orderRepository: OrderRepository) {}

  async save(order) {
    await this.orderRepository.save(order);
  }

  async findAll() {
    return await this.orderRepository.findAll();
  }

  async findByOrderId(order_id) {
    return await this.orderRepository.findByOrderId(order_id);
  }

  async findByCustomerId(customer_id) {
    return await this.orderRepository.findByCustomerId(customer_id);
  }
}