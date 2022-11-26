import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

const Sobre = () => {
    return (
        <div>
            <PageTitle title='Sobre nós' />
            
            <h1 className="text-center font-bold my-4 text-2xl"> Sobre Nós </h1>
            <p className="text-center mb-6"> Nosso restaurante surgiu em 1960 na cozinha da casa de nossa avó. </p> 
            <p className="text-center mb-6"> De acordo com o Dicionário da Língua Portuguesa, defini-se Restaurante como " uma casa onde servem-se refeições ao público, mediante pagamento". A partir dessa definição, os restaurantes são quase tão antigos como nossa civilização.</p>
            <p className="text-center mb-6"> Desde o princípio, a função dos restaurantes era de fornecer comida para  as pessoas que estavam distantes de seus lares. Durante muito tempo a laimentação fora de casa era comum apenas entre viajantes, e desta forma as estalagens foram os primeiros estabelecimentos de alimentos e bebidas a existir de forma regular em toda a Europa. Não existiam pratos refinados ou muitas escolhas nos cardápios e geralmente havia apenas o prato do dia. Logo em seguida surgiram paralelos aos restaurantes, as tavernas, meios de  hospedagem, que apesar de terem como principal atividade a venda de bebidas alcoólicas, também serviam algum tipo de alimento. Outro tipo de estabelecimento que passou a existir em seguida os cafés, onde os intelectuais se encontravam para discutir idéias e partilhar descobertas; permanecendo por horas nesses locais e logo passaram a ser servidos além do café, também outras bebidas e petiscos. os cafés como conhecemos hoje passaram a moda na Europa no século XVII.</p>
            <p className="text-center mb-6"> O surgimento de restaurantes modernos decorreu na França do  século XVIII, durante o período da revolução francesa. Foi em 1765 que Boulanger, um vendedor de sopas parisiense, abriu uma loja em que  afixou na porta uma placa que dizia " Boulanger serve restaurantes  preparados para deuses". No caso específico, a palavra restaurante era  para especificar as sopas oferecidas, que seriam para restaurar a energia dos clientes. E foi assim que nome passou a caracterizar todos os estabelecimentos que surgiram no período.</p> 
            <p className="text-center mb-6"> Dessa forma, surgiram várias casas com cardápios mais elaborados e ambientes com serviços requintados. O século XIX assistiu a disseminação e popularização dos resturantes por todo o mundo. O ato de comer fora de casa passou a ser cada vez mais comum em todos os países e culturas.</p>
            <p className="text-center mb-6"> Durante os últimos 200 anos da história dos restaurantes, várias inovações e mudanças ocorreram, dentre as quais podemos destacar algumas nos Estados Unidos, principalmente o surgimento dos restaurantes self service. Em seguida outra grande inovação americana foi a dos restaurantes especializados em um tipo de cozinha, como por exemplo as steak houses ( restaurantes de carnes); seafoods restaurants (especializados em frutos do mar).</p>
            <p className="text-center mb-6"> Nosso restaurante está sempre em busca por atender melhor os seus clientes. Por isso estamos sempre abertos a ouvir a sua opinião.</p>

        </div>
    )
}

export default Sobre 