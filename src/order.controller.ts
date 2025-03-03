import { Controller, Get, Post } from '@nestjs/common';

@Controller('order')
export class OrderController {
    // @Get()
    // getExternalData() {
    //     return "Order data from the External API";
    // }

    @Get()
    getOrderData() {
        return "Order data from the Memory";
    }

    @Post()
    createOrder() {
        return "Order created";
    }
}