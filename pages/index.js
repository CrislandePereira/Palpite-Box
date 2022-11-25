import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const {data, error} = useSWR('/api/get-promo', fetcher)

    return (
        <div>
            <PageTitle title='Seja bem-vindo' />
            <p className='text-center mt-12 font-bold'> 
                Nosso restaurante está sempre em busca por atender melhor os seus clientes. <br/> 
                Por isso estamos sempre abertos a ouvir a sua opinião.
            </p>

            <div className='text-center my-12'>
                <Link href='/pesquisa' legacyBehavior>
                    <a className='hover:text-white bg-blue-500 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'> Dar opinião ou sugestão </a>
                </Link>
            </div>

            {!data && <p> Carregando... </p>}
            {!error && data && data.showCoupon &&
                <p className='text-center my-12'> 
                    {data.message}
                </p>
            }
        </div>
    )
}

export default Index