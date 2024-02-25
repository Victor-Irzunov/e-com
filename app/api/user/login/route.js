import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(req, res) {
	try {
		const body = await req.json()
    const { email, password } = body;
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new NextResponse('Такого пользователя не существует, проверьте email и пароль', { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return new NextResponse('Неправильный email или пароль', { status: 401 });
    }

   

    const token = jwt.sign(
      { email: user.email, id: user.id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: '30 days' }
    );

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error('Ошибка входа:', error);
    return new NextResponse('Ошибка входа!', { status: 500 });
  }
}
