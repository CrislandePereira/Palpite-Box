import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

const Contato = () => {
    return(
        <div>
            <PageTitle title='Fale Conosco' />
            <h1 className="text-center font-bold my-4 text-2xl"> Fale Conosco </h1>
            <div className="w-1/5 mx-auto">
                <label className="font-bold"> Seu nome:</label>
                <input type='text' className="py-4 px-16 block shadow bg-blue-100 my-2 rounded" placeholder="Nome" name="Nome" />

                <label className="font-bold"> E-mail:</label>
                <input type='text' className="py-4 px-16 block shadow bg-blue-100 my-2 rounded" placeholder="Email" name="Email" />

                <label className="font-bold"> Whatsapp:</label> 
                <input type='text' className="text-left py-4 px-16 block shadow bg-blue-100 my-2 rounded" placeholder="Whatsapp" name="Whatsapp" />

                <input type='message' className="border py-20 px-16" />
                <button className='text-center hover:text-white hover:shadow bg-blue-500 px-16 py-4 my-2 font-bold rounded-lg shadow-lg hover:shadow'> Enviar </button>
            </div>
        </div>
    )
}

export default Contato