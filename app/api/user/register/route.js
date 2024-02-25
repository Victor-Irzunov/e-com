import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(req, res) {
	try {
		const body = await req.json()
		const { email, password, isAdmin } = body;
		console.log("🚀 🚀 🚀  _ file: route.js:12 _ POST _ body:", body)

		const userExists = await prisma.user.findFirst({
			where: { email },
		});

		if (userExists) {
			return new NextResponse('Пользователь уже зарегистрирован в системе', { status: 401 });
		}

		if (isAdmin) {
			const adminExists = await prisma.user.findFirst({
				where: { isAdmin: true },
			});

			if (adminExists) {
				return new NextResponse('Администратор уже существует', { status: 401 });
			}
		}

		const hashedPassword = await bcrypt.hash(password.toString(), 10);

		const userDB = await prisma.user.create({
			data: {
				email,
				password: hashedPassword,
				isAdmin,
			},
		});

		const token = jwt.sign(
			{ email: userDB.email, id: userDB.id, isAdmin: userDB.isAdmin },
			process.env.SECRET_KEY,
			{ expiresIn: '30 days' }
		);

		return NextResponse.json({ token }, { status: 200 });
	} catch (error) {
		console.error('Ошибка регистрации:', error);
		return new NextResponse('Ошибка регистрации!', { status: 500 });
	}
}
