import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

const Contato = () => {
    return(
        <div>
            <PageTitle title='Fale Conosco' />
            <h1> Contato </h1>
            <div>
                <Link href='/' legacyBehavior>
                    <a> Home </a>
                </Link>
            </div>
        </div>
    )
}

export default Contato