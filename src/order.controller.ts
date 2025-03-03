import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('order')
export class OrderController {
    // @Get()
    // getExternalData() {
    //     return "Order data from the External API";
    // }

    @Get()
    getAllOrderDataList() {
        return "All order data list from the Memory";
    }

    @Get('/:orderID')
    getOrderDataByID(@Param('orderID') orderID: string) {
        console.log(`Order ID: ${orderID}`);
        return "Order data by ID";
    }

    @Get('/:customerID')
    getOrderDataListByCustomerID(@Param('customerID') customerID: string) {
        console.log(`Customer ID: ${customerID}`);
        return "Order data list by Customer ID";
    }

    @Post()
    createOrder(@Body() body: any) {
        console.log(body);
        return "Order created";
    }
}