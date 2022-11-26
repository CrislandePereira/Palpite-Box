import React from "react";
import Image from 'next/image'

const Footer = () => {
    return (
        <div className="bg-gray-700 p-4">
            <div className="container mx-auto text-center text-white font-bold">
                Projeto Criado por: {'  '}
                <a className="hover:underline" href="https://linkedin.com.br/in/crislandepereira"> Cris Pereira </a> {' '} | {' '}
                <a className="hover:underline" href="https://github.com/CrislandePereira"> Github </a>

                <div className="mt-4"> 
                    <Image className="inline p-4" src="/logo_semana_fsm.png" width={150} height={300}/>
                    <Image className="inline p-4" src="/logo_devpleno.png" width={150} height={300}/>
                </div>
            </div>
        </div>
    )
}

export default Footer 