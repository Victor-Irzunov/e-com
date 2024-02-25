"use client"
import LoginForm from "@/components/Form/FormLogin";
import RegistrationForm from "@/components/Form/RegistrationForm";
import { useState } from "react";


const page = () => {
	const [isActive, setIsActive] = useState(true)

	return (
		<section className="min-h-screen py-32 relative">
			<div className='container mx-auto'>

				{
					isActive ?
						<div className=''>
							<h1 className='text-2xl'>
								Войти
							</h1>
							<LoginForm setIsActive={setIsActive} />
						</div>
						:
						<div className=''>
							<h1 className='text-2xl'>
								Зарегистрироваться
							</h1>
							<RegistrationForm setIsActive={setIsActive} />
						</div>
				}


			</div>
		</section>
	)
}
export default page;