import Breadcrumbs from "@/components/Breadcrumbs";
import { dataCategory } from "@/lib/const/categoryData";
import Image from "next/image";
import Link from "next/link";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getData(category) {
	try {
		 const data = await prisma.product.findMany({
			  where: {
					category: category.toString(),
			  },
		 });
		 if (!data || data.length === 0) {
			  return null;
		 }
		 return data;
	} catch (error) {
		 console.error("Ошибки при запросе статей:", error);
		 throw error;
	}
}


export const metadata = {
	title: 'Купить игровой компьютер в Минске: мощные компьютеры недорого',
	description: 'Хотите купить компьютер в Минске? Сюда! Интернет магазин FK.BY: продажа компьютеров по недорогой цене с доставкой по всей Беларуси. Большой выбор, гарантия сервисного центра. Наличный и безналичный расчет. Бесплатная доставка по Минску. Низкая стоимость всех моделей.',
	keywords: "купить компьютер, купить ноутбук, игровой компьютер, игровой ноутбук, фабрика компьютеров, купить компьютер в минске, купить ноутбук в минске, доставка компьютеров по Беларуси",
	alternates: {
		canonical: ''
	},
	ogTitle: 'Купить игровой компьютер в Минске',
	ogDescription: 'Лучший магазин компьютеров, электроники и бытовой техники. Грамотные консультации, широкий ассортимент товаров и быстрая доставка.',
	ogImage: 'ссылка_на_изображение.jpg', // замените ссылку на фактическую ссылку на изображение
	twitterTitle: 'Купить игровой компьютер в Минске',
	twitterDescription: 'Лучший магазин компьютеров, электроники и бытовой техники. Грамотные консультации, широкий ассортимент товаров и быстрая доставка.',
	twitterImage: 'ссылка_на_изображение.jpg' // замените ссылку на фактическую ссылку на изображение
};



export default async function Kompyutery() {
	const data = await getData('kompyutery')


	const dataSubCategory = dataCategory.find(i => i.title === 'Компьютеры')
	return (
		<main className='pt-2 pb-10'>
			<div className='container mx-auto'>
				<Breadcrumbs />
				<h1 className='text-4xl font-bold mt-8'>
					Компьютеры
				</h1>

				<div className='mt-16 grid sd:grid-cols-4 xz:grid-rows-1 gap-4'>
					{dataSubCategory.children.map(el => {
						return (
							<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}${el.link}`} className="border bg-white rounded-md text-center p-2" key={el.id}>
								<Image src={el.img} alt={el.alt} width={200} height={200} className="mx-auto" />
								<h2 className=''>
									{el.name}
								</h2>
							</Link>
						)
					})}
				</div>

				<div className='mt-16'>
					<p className=''>
						Смартфоны способны выполнять куда больше функций, чем обычные мобильные телефоны. С их помощью можно выходить в интернет, смотреть видео в высоком разрешении, оплачивать покупки, создавать качественные фото, считать пройденные шаги, осуществлять GPS-навигацию и многое другое. Многочисленные приложения делают список их возможностей очень широким.
					</p>
					<p className=''>
						В интернет-магазине и салонах связи МТС представлен большой выбор смартфонов для пользователей с самыми разнообразными вкусами и потребностями. Купить мобильный телефон можно как за полную стоимость, так и в рассрочку. Доставка действует во все уголки Беларуси. Чтобы покупка приносила только радость, внимательно изучайте технические характеристики выбираемых моделей.
					</p>

					<h3 className='text-3xl font-semibold mt-5'>
						На что стоит обратить внимание при выборе смартфона?
					</h3>
					<ul className='list-disc mt-4 pl-5'>
						<li className='mb-2'>
							<p className=''>
								<span className="font-bold">Экран.</span>
								Наиболее высокую четкость картинки обеспечивают дисплеи с разрешением Full HD+ (2400×1080 точек) и выше. Лушее качество изображения – матрицы, изготовленные по технологиям IPS и OLED и их вариации (AMOLED, Super AMOLED…). Экран с повышенной частотой обновления 90-120 Гц гарантирует более плавное управление при прокрутке страниц и элементов меню смартфона.
							</p>
						</li>
						<li className='mb-2'>
							<p className=''>
								<span className="font-bold">Процессор.</span>
								Чем выше частота ядер процессора – тем быстрее он будет работать. Чем меньше размер каждого транзистора – тем современнее и энергоэффективнее.
							</p>
						</li>
						<li className='mb-2'>
							<p className=''>
								<span className="font-bold">Камера.</span>
								Самые качественные фото и видео позволят получать флагманские модели, независимо от количества камер и числа пикселей. Во всех прочих случаях можно смело придерживаться принципа: «чем больше, тем лучше».
							</p>
						</li>
						<li className='mb-2'>
							<p className=''>
								<span className="font-bold">Оперативная память.</span>
								От ее объема будет зависеть, как много приложений вы сможете запустить одновременно, прежде чем смартфон начнет «тормозить».
							</p>
						</li>
						<li className='mb-2'>
							<p className=''>
								<span className="font-bold">Батарея.</span>
								Автономность от 1,5 дней и выше чаще всего демонстрируют модели с батареей емкостью от 5000 мАч. Не забывайте и о поддержке быстрой зарядки, мощность которой измеряется в ваттах. При низких показателях мощности полного заряда придется ждать часами, а при высоких – будет достаточно и 40 минут.
							</p>
						</li>
						<li className='mb-2'>
							<p className=''>
								<span className="font-bold">Другие возможности.</span>
								Наличие модуля NFC позволит проводить бесконтактную оплату. Сканер отпечатков пальцев поможет защитить содержимое устройства от посторонних глаз. Не лишними будут также защита от воды, поддержка 5G-сетей и встроенный ИК-передатчик для управления бытовой техникой.
							</p>
						</li>
					</ul>

					<h4 className='text-4xl font-semibold mt-6'>
						10 причин, почему купить смартфон в нашем интернет-магазине выгодно
					</h4>

					<ul className='list-disc mt-4 pl-5'>
						<li className='mb-2'>
							Можно купить онлайн или получить консультацию в любое время суток;
						</li>
						<li className='mb-2'>
							Большой выбор моделей и аксессуаров к ним;
						</li>
						<li className='mb-2'>
							Представлены все ведущие производители: Apple, Samsung, Xiaomi, Huawei, Honor, realme;
						</li>
						<li className='mb-2'>
							Удобный каталог смартфонов с подробными описаниями и фильтрами для поиска по характеристикам;
						</li>
						<li className='mb-2'>
							Низкие цены на смартфоны и аксессуары;
						</li>
						<li className='mb-2'>
							Много акций и скидок, которые позволяют экономить;
						</li>
						<li className='mb-2'>
							Все модели доступны в рассрочку на 7, 12 и 24 месяца без первого взноса;
						</li>
						<li className='mb-2'>
							Доставка в любую точку республики за 1-2 дня при покупке в интернет-магазине;
						</li>
						<li className='mb-2'>
							Компетентные и дружелюбные продавцы-консультанты;
						</li>
					</ul>
				</div>
			</div>
		</main>
	)
}