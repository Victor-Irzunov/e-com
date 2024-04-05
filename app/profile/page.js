"use client"
import { MyContext } from "@/contexts/MyContextProvider";
import { Empty } from "antd";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useContext } from "react";


const page = observer(() => {
	const { user, dataApp } = useContext(MyContext);

	const handleLogout = () => {
		localStorage.removeItem('token_e_com');
		user.setUserData({})
		user.setIsAuth(false)
	};

	return (
		<section className="min-h-screen py-20">
			<div className='container mx-auto'>
				<h1 className='text-center sd:text-3xl xz:text-xl'>
					Ваш профиль
				</h1>
				{
					user.userData ?
						<div className='mt-12'>
							<p className=''>
								Ваша почта:	{user.userData.email}
							</p>

							<button
								className="btn btn-primary mt-9"
								onClick={handleLogout}
							>
								Выйти
							</button>
						</div>
						:
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
		</section>
	)
})

export default page;
