'use client'
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaExpand } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Loader from '../Loader/Loader';
import { FaInfoCircle } from "react-icons/fa";
import { FaList } from "react-icons/fa";



export default function Navbar({ toggle, children, breadcrumbs }) {

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }




    return (
        <nav className="bg-white w-full shadow-md sticky top-0 z-30 h-16">
            <div className="w-full flex items-center justify-between py-4 px-6">
                <div className='flex items-center space-x-4'>
                    <a href="#" className="cursor-pointer text-black hover:text-bold py-2 px-4 flex items-center">
                        <FaList className="mt-1" /><span className="ml-1 hidden sm:block"></span>
                    </a>

                    <a href="#" className="cursor-pointer text-black hover:text-bold py-2 px-4 flex items-center">
                        <FaInfoCircle className="mt-1" /><span className="ml-1 hidden sm:block"></span>
                    </a>
                </div>

                <div className='items-center text-sm font-semibold'>
                    <h1 className=''>Associação ARDSC de Gralhas</h1>
                </div>

                <div className="flex items-center space-x-4">
                    <a href="#" className="cursor-pointer text-black hover:text-bold py-2 px-4 flex items-center">
                        <FaShoppingCart className="mt-1" />
                    </a>

                    <a onClick={toggleFullScreen} className="cursor-pointer text-black hover:text-bold py-2 px-4 flex items-center">
                        <FaExpand className="mt-1" /><span className="ml-1 hidden sm:block"></span>
                    </a>
                </div>
            </div>
        </nav>
    );
}