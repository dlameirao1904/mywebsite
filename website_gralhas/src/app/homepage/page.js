"use client"
import { Input, Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import SlideShow from "@/components/Eventos/SlideShow";
import React, { useState } from "react"
import { useRouter, usePathname } from "next/navigation";

const Homepage = () => {

    const pathname = usePathname();
    const router = useRouter();

    const thisYear = new Date().getFullYear();

    const cards = [
        { title: 'Evento 1', idEnvento: 1, data: "1/6/2024", hora: "17:00", imagem: "/images/eventos/evento1.jpg", descricao: "descricao evento 1" },
        { title: 'Evento 2', idEnvento: 2, data: "1/7/2024", hora: "17:00", imagem: "/images/eventos/evento2.jpg", descricao: "descricao evento 2" },
        { title: 'Evento 3', idEnvento: 3, data: "1/8/2024", hora: "17:00", imagem: "/images/eventos/evento3.jpg", descricao: "descricao evento 3" },
    ];

    const [isDropdownOpenEventos, setIsDropdownOpenEventos] = useState(false);
    const [isDropdownOpenAssociacao, setIsDropdownOpenAssociacao] = useState(false);
    const [isDropdownOpenContactar, setIsDropdownOpenContactar] = useState(false);
    const [isDropdownOpenAcoes, setIsDropdownOpenAcoes] = useState(false);

    const agir = () => {
        router.push(pathname + "/agir")
    }

    return (
        <>

            {/* Imagem principal */}
            <div className="">
                <div className="flex min-h-screen w-full justify-center bg-contain bg-center bg-no-repeat md:bg-cover items-center relative overflow-clip sm:overflow-hidden">
                    <img
                        src="/images/GralhasLaroucoSol.jpg"
                        alt="Gralhas"
                        className="absolute top-0 left-0 h-full w-full object-cover z-0"
                    />
                    <nav className="w-full bg-transparent absolute top-0 z-10">
                        <div className='flex justify-between'>
                            <div className='ml-2 mt-2 items-center'>
                                <img
                                    src={"/images/logo-gralhas.png"}
                                    width={150}
                                    height={150}
                                />
                            </div>

                            <div className='flex mr-2 mt-2 items-center space-x-1'>

                                <div>
                                    <Button
                                        className='text-sm font-bold text-white'
                                        variant='light'
                                        onMouseEnter={() => setIsDropdownOpenAssociacao(true)}
                                        onMouseLeave={() => setIsDropdownOpenAssociacao(false)}
                                    >
                                        Associação
                                    </Button>
                                    {isDropdownOpenAssociacao && (
                                        <div
                                            className="absolute mt-0 bg-white shadow-md rounded-md"
                                            onMouseEnter={() => setIsDropdownOpenAssociacao(true)}
                                            onMouseLeave={() => setIsDropdownOpenAssociacao(false)}
                                        >
                                            <div className="items-center">
                                                <div>
                                                    <Button
                                                        variant="light"
                                                        className="text-sm text-black font-semibold w-full"
                                                    >
                                                        A nossa história
                                                    </Button>
                                                </div>

                                                <div>
                                                    <Button
                                                        variant="light"
                                                        className="text-sm text-black font-semibold w-full"
                                                    >
                                                        A nossa missão
                                                    </Button>
                                                </div>

                                                <div>
                                                    <Button
                                                        variant="light"
                                                        className="text-sm text-black font-semibold w-full"
                                                    >
                                                        Gralhas
                                                    </Button>
                                                </div>

                                                <div>
                                                    <Button
                                                        variant="light"
                                                        className="text-sm text-black font-semibold w-full"
                                                    >
                                                        Equipa e Membros
                                                    </Button>
                                                </div>

                                                <div>
                                                    <Button
                                                        variant="light"
                                                        className="text-sm text-black font-semibold w-full"
                                                    >
                                                        Parceiros e Apoio
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>


                                <div>
                                    <Button
                                        variant='light'
                                        className='text-sm font-bold text-white'
                                        onMouseEnter={() => setIsDropdownOpenAcoes(true)}
                                        onMouseLeave={() => setIsDropdownOpenAcoes(false)}
                                    >
                                        As nossas Ações
                                    </Button>
                                    {isDropdownOpenAcoes && (
                                        <div
                                            className="absolute mt-0 bg-white shadow-md rounded-md"
                                            onMouseEnter={() => setIsDropdownOpenAcoes(true)}
                                            onMouseLeave={() => setIsDropdownOpenAcoes(false)}
                                        >
                                            <div className="items-center">
                                                <div>
                                                    <Button
                                                        variant="light"
                                                        className="text-sm text-black font-semibold w-full"
                                                    >
                                                        Luta contra o isolamento
                                                    </Button>
                                                </div>

                                                <div>
                                                    <Button
                                                        variant="light"
                                                        className="text-sm text-black font-semibold w-full"
                                                    >
                                                        Promover Gralhas
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>


                                <div>
                                    <Button
                                        variant='light'
                                        className='text-sm font-bold text-white'
                                        onMouseEnter={() => setIsDropdownOpenEventos(true)}
                                        onMouseLeave={() => setIsDropdownOpenEventos(false)}
                                    >
                                        Eventos
                                    </Button>
                                    {isDropdownOpenEventos && (
                                        <div
                                            className="absolute mt-0 bg-white shadow-md rounded-md"
                                            onMouseEnter={() => setIsDropdownOpenEventos(true)}
                                            onMouseLeave={() => setIsDropdownOpenEventos(false)}
                                        >
                                            <div className="items-center">
                                                <div>
                                                    <Button
                                                        variant="light"
                                                        className="text-sm text-black font-semibold w-full"
                                                    >
                                                        Foteca
                                                    </Button>
                                                </div>

                                                <div>
                                                    <Button
                                                        variant="light"
                                                        className="text-sm text-black font-semibold w-full"
                                                    >
                                                        Próximos Eventos
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <Button
                                        variant='light'
                                        className='text-sm font-bold text-white'
                                    >
                                        Atualidade
                                    </Button>
                                </div>

                                <div>
                                    <Button
                                        variant='light'
                                        className='text-sm font-bold text-white'
                                        onMouseEnter={() => setIsDropdownOpenContactar(true)}
                                        onMouseLeave={() => setIsDropdownOpenContactar(false)}
                                    >
                                        Contactar
                                    </Button>
                                    {isDropdownOpenContactar && (
                                        <div
                                            className="absolute mt-0 bg-white shadow-md rounded-md z-15"
                                            onMouseEnter={() => setIsDropdownOpenContactar(true)}
                                            onMouseLeave={() => setIsDropdownOpenContactar(false)}
                                        >
                                            <div className="items-center">
                                                <div>
                                                    <Button
                                                        variant="light"
                                                        className="text-sm text-black font-semibold w-full"
                                                    >
                                                        Enviar Mensagem
                                                    </Button>
                                                </div>

                                                <div>
                                                    <Button
                                                        variant="light"
                                                        className="text-sm text-black font-semibold w-full"
                                                    >
                                                        Contactos
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <Button
                                        color='success'
                                        className='text-sm font-bold text-white'
                                        onClick={agir}
                                    >
                                        Agir
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <footer className='bg-transparent absolute bottom-1 z-10 mb-2'>
                        <p className='text-3xl font-bold text-white flex justify-start'>
                            Associação ARDSC
                        </p>
                        <p className='text-3xl font-bold text-white flex justify-start'>
                            de Gralhas
                        </p>
                    </footer>

                </div>
            </div>

            {/* A nossa história */}
            <div>
                <div className="relative bg-gray-200 p-16 rounded-lg flex justify-between">

                    <div className="ml-4">
                        <p className='font-semibold text-2xl text-black'>
                            Descubra a nossa história
                        </p>
                    </div>

                    <div className="mr-4">
                        <Button className="text-white font-bold py-2 px-4 rounded" color="success">
                            Descubra a nossa história
                        </Button>
                    </div>
                </div>

            </div>

            {/* Cartao-Imagem /A Nossa Missao*/}
            <div>
                <div className='flex justify-between items-center  p-32'>
                    <div className='ml-16'>
                        <Image
                            width={500}
                            height={900}
                            alt="a nossa missão"
                            src="/images/gralhas_missao.jpg"
                        />

                    </div>

                    <div className='mr-16'>
                        <div className="text-center text-xl">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Nullam pulvinar risus non risus hendrerit venenatis.</p>
                            <p>Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
                        </div>

                        <div className="mt-4 items-center flex justify-center">
                            <Button
                                size="lg"
                                radius='none'
                                color='success'
                            >
                                Saiba Mais
                            </Button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Os nossos valores*/}
            <div className="bg-gray-200 p-48 rounded-lg">
                <p className="text-5xl -mt-20 text-black font-semibold mb-20">Os nossos Valores</p>
                <div className=" flex justify-between space-x-8">
                    <div className="">
                        <h1 className="text-2xl text-center font-bold text-black">Partilha</h1>

                        <div className="text-center text-xl mt-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Nullam pulvinar risus non risus hendrerit venenatis.</p>
                            <p>Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
                        </div>
                    </div>

                    <div className="">
                        <h1 className="text-2xl text-center font-bold text-black">Empatia</h1>

                        <div className="text-center text-xl mt-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Nullam pulvinar risus non risus hendrerit venenatis.</p>
                            <p>Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
                        </div>
                    </div>

                    <div className="">
                        <h1 className="text-2xl text-center font-bold text-black">Valores</h1>

                        <div className="text-center text-xl mt-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Nullam pulvinar risus non risus hendrerit venenatis.</p>
                            <p>Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Eventos */}
            <div className="p-40">
                <SlideShow cards={cards} />
            </div>

            {/* Footer final */}
            <footer className="w-full py-8 bg-gradient-to-t from-gray-400 to-transparent z-10">
                <div className="grid justify-items-center items-end">
                    <p className="text-xs font-semibold">Copyright © {thisYear} Site da Associação ARSDC de Gralhas by ARSDC.</p>
                </div>
            </footer>
        </>
    );
}

export default Homepage;
