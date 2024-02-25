"use client"
import Link from "next/link";
import { useContext } from "react";
import { observer } from 'mobx-react-lite'
import { MyContext } from "@/contexts/MyContextProvider";

import {
    RiHandbagFill, RiShoppingBag3Fill,
    RiMenu4Fill, RiSearchLine, RiShoppingBasket2Fill,
    RiUser3Fill, RiLoginCircleFill
} from "react-icons/ri"

const Header = observer(() => {
    const { user, dataApp } = useContext(MyContext)
    return (
        <header className="border-b border-b-gray-300 bg-white">
            <div className='container mx-auto'>
                <nav className='xz:hidden sd:block'>
                    <div className="navbar bg-base-100 py-0 layout-w">
                        <div className="navbar-start">
                            <Link href={"/"} className="flex items-center gap-2 text-secondary text-xl font-semibold">
                                <RiShoppingBasket2Fill fontSize={30} />
                                <span className="pt-0.5">Basket</span>
                            </Link>
                        </div>
                        <div className="navbar-center">
                            <div className="join w-[30rem]">
                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    placeholder="Поиск товара..."
                                    className="w-full join-item input  input-bordered input-sm"
                                />
                                <button className="btn btn-sm btn-secondary join-item rounded-r-lg capitalize">Поиск</button>
                            </div>
                        </div>


                        <div className="navbar-end gap-1">
                            {
                                !user.isAuth ?
                                    <Link
                                        href='/login'
                                        className="flex flex-col items-center text-gray-500 rounded-lg p-2 min-w-[4rem] gap-1 hover:opacity-80 transition-opacity"
                                    >
                                        <div className="indicator">
                                            <RiLoginCircleFill fontSize={20} />
                                        </div>
                                        <span className="text-xs">
                                            Вход
                                        </span>
                                    </Link>
                                    :
                                    <Link
                                        href='/profile'
                                        className="flex flex-col items-center text-gray-500 rounded-lg p-2 min-w-[4rem] gap-1 hover:opacity-80 transition-opacity"
                                    >
                                        <div className="indicator">
                                            <RiUser3Fill fontSize={20} />
                                        </div>
                                        <span className="text-xs">
                                            Профиль
                                        </span>
                                    </Link>
                            }

                            <Link
                                href='/zakazy'
                                className="flex flex-col items-center text-gray-500 rounded-lg p-2 min-w-[4rem] gap-1 hover:opacity-80 transition-opacity"
                            >
                                <div className="indicator">
                                    <RiHandbagFill fontSize={20} />
                                </div>
                                <span className="text-xs">
                                    Заказы
                                </span>
                            </Link>

                            <Link
                                href='/korzina'
                                className="flex flex-col 
                                items-center text-gray-500 rounded-lg
                                 p-2 min-w-[4rem] gap-1 hover:opacity-80 
                                 transition-opacity"
                            >

                                <div className="indicator">
                                    {
                                        dataApp.dataKorzina.length ?
                                            <span className="indicator-item px-1 text-xs font-semibold badge badge-secondary">
                                                { dataApp.dataKorzina.length}
                                            </span>
                                            :
                                            null
                                    }

                                    <RiShoppingBag3Fill fontSize={20} />
                                </div>
                                <span className="text-xs">
                                    Корзина
                                </span>
                            </Link>
                        </div>
                    </div>
                </nav>
                <nav className='xz:block sd:hidden'>
                    <div className="navbar bg-base-100 py-0 layout-w">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="pr-1 pt-1">
                                        <RiMenu4Fill fontSize={35} />
                                    </div>
                                    <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-center">
                            <div className="join w-[4.5rem]">
                                <Link href={"/"} className="flex items-center gap-2 text-secondary text-xl font-semibold">
                                    <RiShoppingBasket2Fill fontSize={30} />
                                </Link>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <RiSearchLine className="m-2" fontSize={30} onClick={() => document.getElementById('my_modal_2').showModal()} />
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box">
                                    <div className="join w-[20rem]">
                                        <input
                                            type="text"
                                            name="search"
                                            id="search"
                                            placeholder="Поиск товара..."
                                            className="w-full join-item input  input-bordered input-sm"
                                        />
                                        <button className="btn btn-sm btn-secondary join-item rounded-r-lg capitalize">Поиск</button>
                                    </div>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                        {
                            !user.isAuth ?
                                <Link
                                    href='/login'
                                    className="flex flex-col items-center text-gray-500 rounded-lg p-2 min-w-[3rem] gap-1 hover:opacity-80 transition-opacity"
                                >
                                    <div className="indicator">
                                        <RiLoginCircleFill fontSize={30} />
                                    </div>
                                </Link>
                                :
                                <Link
                                    href='/profile'
                                    className="flex flex-col items-center text-gray-500 rounded-lg p-2 min-w-[3rem] gap-1 hover:opacity-80 transition-opacity"
                                >
                                    <div className="indicator">
                                        <RiUser3Fill fontSize={30} />
                                    </div>
                                </Link>
                        }

                        <Link
                            href='/zakazy'
                            className="flex flex-col items-center text-gray-500 rounded-lg p-2 min-w-[3rem] gap-1 hover:opacity-80 transition-opacity"
                        >
                            <div className="indicator">
                                <RiHandbagFill fontSize={30} />
                            </div>
                        </Link>

                        <Link
                            href='/korzina'
                            className="flex flex-col items-center text-gray-500 rounded-lg p-2 min-w-[3rem] gap-1 hover:opacity-80 transition-opacity"
                        >
                            <div className="indicator">
                                {
                                     dataApp.dataKorzina.length ?
                                        <span className="indicator-item px-1 text-xs font-semibold badge badge-secondary">
                                            { dataApp.dataKorzina.length}
                                        </span>
                                        :
                                        null
                                }
                                <RiShoppingBag3Fill fontSize={30} />
                            </div>
                        </Link>
                    </div>
                </nav>
            </div >
        </header >
    )
})

export default Header;
