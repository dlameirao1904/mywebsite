"use client"
import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import {
    Card, CardHeader, CardBody, Button, CardFooter, Checkbox, Image,
    Modal, ModalBody, Input, ModalContent, ModalHeader, ModalFooter, useDisclosure
} from "@nextui-org/react";
import AreaAdministrativa from './areaAdministrativa';

const Administracao = () => {

    const [area, setArea] = React.useState(false);

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <Card
                    className='w-80 h-80'
                >
                    <CardHeader>
                        <h1 className="text-black text-xl font-semibold">
                            Área de Administração
                        </h1>
                    </CardHeader>

                    <CardBody
                        className='flex flex-col gap-4'
                    >
                        <Input type="text" label="Username" />
                        <Input type="password" label="Password"/>

                        <Button
                            color='primary'
                            className=''
                            onClick={() => {setArea(true)}}
                        >
                            Entrar
                        </Button>
                    </CardBody>

                </Card>
            </div>

            {area ? <AreaAdministrativa/> : null}

        </>
    );
}

export default Administracao;