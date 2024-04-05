import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
	try {
		const formData = await req.formData();
		const orderData = JSON.parse(formData.get('orderData'));
		const orderItems = JSON.parse(orderData.orderItems);

		const order = await prisma.orderData.create({
			data: {
				user: { connect: { id: orderData.userId } },
				message: orderData.message,
				address: orderData.address,
				phone: orderData.phone,
				orderItems: { data: orderItems },
			},
		});

		const userData = await prisma.userData.create({
			data: {
				user: { connect: { id: orderData.userId } },
				name: orderData.name,
				surname: orderData.surname,
				address: orderData.address,
				phone: orderData.phone,
				orderId: order.id
			},
		});


		return new NextResponse("Заказ успешно сохранен", { status: 200 });
	} catch (error) {
		console.error('Ошибка при сохранении заказа:', error);
		return new NextResponse("Ошибка при сохранении заказа", { status: 500 });
	}
}
