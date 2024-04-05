"use client"
import { MyContext } from "@/contexts/MyContextProvider";
import { Empty } from "antd";
import Link from "next/link";
import { useContext } from "react";

const page = () => {
	const { user, dataApp } = useContext(MyContext);

	return (
		<section className="py-20">
			<div className='container mx-auto'>
				<div className='text-center'>
					<h1 className='sd:text-3xl xz:text-xl'>
						Ваши заказы
					</h1>

					{
						!user.isAuth &&
						<div className='mt-16'>
							<p className='mb-7 text-center'>
								Отсутствуют данные. Вы не авторизованы.
							</p>
							<Empty />

							<div className='text-center mt-10'>
								<button className="btn btn-primary">
									<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/login`}>
										Авторизоваться
									</Link>
								</button>
							</div>
						</div>
					}
				</div>


			</div>
		</section>
	)
}
export default page;
