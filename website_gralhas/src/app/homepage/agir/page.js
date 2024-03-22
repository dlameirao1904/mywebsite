"use client"
import {
    Card, CardHeader, CardBody, Button, CardFooter,
    Modal, ModalBody, Input, ModalContent, ModalHeader, ModalFooter
} from "@nextui-org/react";

const Agir = () => {
    return (
        <>
            <div className="flex min-h-screen w-full justify-center bg-contain bg-center bg-no-repeat md:bg-cover items-center relative overflow-clip sm:overflow-hidden">
                <img
                    src="/images/Gralhas.jpg"
                    alt="Gralhas"
                    className="absolute top-0 left-0 h-full w-full object-cover z-0 opacity-70"
                />
                <div className="flex justify-between">

                    <div className="flex space-x-8">
                        <div className="w-68">
                            <Card
                                className="w-48"
                            >
                                <CardHeader>
                                    <h1 className="text-black text-xl font-semibold">Ser Sócio</h1>
                                </CardHeader>

                                <CardBody>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </CardBody>

                                <CardFooter className="items-center flex justify-center">
                                    <Button
                                        color="success"
                                    >
                                        Ser sócio
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="w-68">
                            <Card
                                className="w-48"
                            >
                                <CardHeader>
                                    <h1 className="text-black text-xl font-semibold">Doar</h1>
                                </CardHeader>

                                <CardBody>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </CardBody>

                                <CardFooter className="items-center flex justify-center">
                                    <Button
                                        color="success"
                                    >
                                        Doar
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Agir;