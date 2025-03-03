import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { GetOrderDataDto } from './dtos/get-order-data.dto';


@Controller('order')
export class OrderController {
    // @Get()
    // getExternalData() {
    //     return "Order data from the External API";
    // }

    @Get()
    getAllOrderDataList(): GetOrderDataDto[] {
        return [{
            orderID: "orderID",
            customerID: "customerID",
            products: [{
                productID: "productID",
                productName: "productName",
                productPrice: 10000,
                productQuantity: 1
            }],
            orderDate: "2021-01-01",
            orderStatus: 1,
            shippingInfo: {
                shippingID: "shippingID",
                orderID: "orderID",
                shippingDate: "2021-01-01",
                shippingStatus: 1,
                shippingAddress: "shippingAddress"
            },
            paymentInfo: {
                paymentID: "paymentID",
                orderID: "orderID",
                paymentDate: "2021-01-01",
                paymentStatus: 1,
                paymentMethod: 1,
                paymentAmount: 10000
            }
        }];
    }

    @Get('/:orderID')
    getOrderDataByID(@Param('orderID') orderID: string): GetOrderDataDto {
        console.log(`Order ID: ${orderID}`);
        const order_data: GetOrderDataDto = {
            orderID: orderID,
            customerID: "customerID",
            products: [{
                productID: "productID",
                productName: "productName",
                productPrice: 10000,
                productQuantity: 1
            }],
            orderDate: "2021-01-01",
            orderStatus: 1,
            shippingInfo: {
                shippingID: "shippingID",
                orderID: orderID,
                shippingDate: "2021-01-01",
                shippingStatus: 1,
                shippingAddress: "shippingAddress"
            },
            paymentInfo: {
                paymentID: "paymentID",
                orderID: orderID,
                paymentDate: "2021-01-01",
                paymentStatus: 1,
                paymentMethod: 1,
                paymentAmount: 10000
            }
        };
        return order_data;
    }

    @Get('/:customerID')
    getOrderDataListByCustomerID(@Param('customerID') customerID: string) {
        console.log(`Customer ID: ${customerID}`);
        const order_data_list: GetOrderDataDto[] = [
            {
                orderID: "orderID",
                customerID: customerID,
                products: [{
                    productID: "productID",
                    productName: "productName",
                    productPrice: 10000,
                    productQuantity: 1
                }],
                orderDate: "2021-01-01",
                orderStatus: 1,
                shippingInfo: {
                    shippingID: "shippingID",
                    orderID: "orderID",
                    shippingDate: "2021-01-01",
                    shippingStatus: 1,
                    shippingAddress: "shippingAddress"
                },
                paymentInfo: {
                    paymentID: "paymentID",
                    orderID: "orderID",
                    paymentDate: "2021-01-01",
                    paymentStatus: 1,
                    paymentMethod: 1,
                    paymentAmount: 10000
                }
            }
        ]
        return order_data_list;
    }

    @Post()
    createOrder(@Body() body: CreateOrderDto) {
        console.log(body);
        return "Order created";
    }
}