import React, {useContext, useState } from 'react';
import Header from '../components/Header';
import { useGetImages, useGetImage } from '../api/pixaby';
import CardMaterial from '../components/CardMaterial';
import Footer from '../components/Footer';
import { CartContext } from '../contexts/CartContext';
import Info from '../components/Info';

const InitialPage = () => {
    const {addToCart, getRandomNumber} = useContext(CartContext);
    const {data : logo, isLoading : isLoadingLogo} = useGetImage("4343663");
    const {data : categoriasImages, isLoading : isLoadingCategoriasImages} = useGetImages("food+dish")   
    const {data : sobremesas, isLoading : isLoadingSobremesas} = useGetImages("desserts")
    const {data : saladas, isLoading : isLoadingSaladas} = useGetImages("vegan+dishes")
    const {data : carnes, isLoading : isLoadingCarnes} = useGetImages("dishes+with+meat")
    const {data : sopas, isLoading : isLoadingSopas} = useGetImages("soups")
    const {data : peixes, isLoading : isLoadingPeixes} = useGetImages("fish+dishes")
    const {data : sanduiches, isLoading : isLoadingSanduiches} = useGetImages("sandwiches")
    const [precos, setPrecos] = useState([getRandomNumber(15.2, 30.37), getRandomNumber(25.67, 67.80), getRandomNumber(30.12, 90.99), getRandomNumber(20.50, 30.99), getRandomNumber(20.35, 75.6), getRandomNumber(20.15, 37.6)])

    return <>
     {!isLoadingLogo && !isLoadingCategoriasImages && !isLoadingSobremesas && !isLoadingSaladas && !isLoadingCarnes  && !isLoadingSopas && !isLoadingPeixes && !isLoadingSanduiches ? <>         
         <div className='mb-5'>
          <Header logo={logo?.hits[0].previewURL}></Header>
         </div>
         
         <div className='custom-margin'>
          <Info></Info>
         </div>
         
         <h3>Categorias</h3>
         <div className='d-flex overflow-auto px-4 my-4'>
            
            <div className='col-12 col-sm-5 col-xl-2 p-2'>
                <CardMaterial material={{descricao : 'Sopas', urlImage : categoriasImages?.hits[0].previewURL }} clickButton={()=> console.log("filtrar por Diversos")} labelButton={"Filtrar"}></CardMaterial>
            </div>           
            <div className='col-12 col-sm-5 col-xl-2 p-2'>
                <CardMaterial material={{descricao : 'Carne', urlImage : carnes?.hits[3].previewURL}} clickButton={()=> console.log("filtrar por Aves")} labelButton={"Filtrar"}></CardMaterial>
            </div>          
            <div className='col-12 col-sm-5 col-xl-2 p-2'>
                <CardMaterial material={{descricao : 'Sobremesas', urlImage : sobremesas?.hits[3].previewURL}} clickButton={()=> console.log("filtrar por Sobremesas")} labelButton={"Filtrar"}></CardMaterial>
            </div>
            <div className='col-12 col-sm-5 col-xl-2 p-2'>
                <CardMaterial material={{descricao : 'Veganos', urlImage : categoriasImages?.hits[6].previewURL}} clickButton={()=> console.log("filtrar por Saladas")} labelButton={"Filtrar"}></CardMaterial>
            </div> 
            <div className='col-12 col-sm-5 col-xl-2 p-2'>
                <CardMaterial material={{descricao : 'Peixes', urlImage : categoriasImages?.hits[10].previewURL}} clickButton={()=> console.log("filtrar por Peixes")} labelButton={"Filtrar"}></CardMaterial>
            </div>
            <div className='col-12 col-sm-5 col-xl-2 p-2'>
                <CardMaterial material={{descricao : 'Sanduiches', urlImage : categoriasImages?.hits[11].previewURL}} clickButton={()=> console.log("filtrar por Sanduiches")} labelButton={"Filtrar"}></CardMaterial>
            </div>
            
         </div>
         <h3>Produtos</h3>         
         <div className='d-flex overflow-auto px-4 my-4'>
            {sobremesas?.hits.slice(0, 10).map((hit) => {
              return <div key={hit.id} className='col-12 col-sm-5 col-xl-2 p-2'>
                <CardMaterial material={{descricao : hit.tags.split(',')[0], urlImage : hit.previewURL, preco : precos[0] }} clickButton={()=> addToCart({descricao : hit.tags.split(',')[0], urlImage : hit.previewURL, preco : precos[0]})} labelButton={"Adicionar ao carrinho"} clickImage={()=> console.log("abrir modal")}></CardMaterial>
                </div>
            })
         }
         </div>
         <div className='d-flex overflow-auto px-4 my-4'>
            {saladas?.hits.slice(0, 10).map((hit) => {
              return <div key={hit.id} className='col-12 col-sm-5 col-xl-2 p-2'>
                <CardMaterial material={{descricao : hit.tags.split(',')[0], urlImage : hit.previewURL, preco : precos[1]}} clickButton={()=> addToCart({descricao : hit.tags.split(',')[0], urlImage : hit.previewURL, preco : precos[1]})} labelButton={"Adicionar ao carrinho"} clickImage={()=> console.log("abrir modal")}></CardMaterial>
                </div>
            })
         }
         </div>
         <div className='d-flex overflow-auto px-4 my-4'>
            {carnes?.hits.slice(0, 10).map((hit) => {
              return <div key={hit.id} className='col-12 col-sm-5 col-xl-2 p-2'>
                <CardMaterial material={{descricao : hit.tags.split(',')[0], urlImage : hit.previewURL, preco : precos[2]}} clickButton={()=> addToCart({descricao : hit.tags.split(',')[0], urlImage : hit.previewURL, preco : precos[2]})} labelButton={"Adicionar ao carrinho"} clickImage={()=> console.log("abrir modal")}></CardMaterial>
                </div>
            })
         }
         </div>
         <div className='d-flex overflow-auto px-4 my-4'>
            {sopas?.hits.slice(0, 15).map((hit) => {
              if(!hit.tags.split(',')[0].includes('soup'))
                return

              return <div key={hit.id} className='col-12 col-sm-5 col-xl-2 p-2'>
                <CardMaterial material={{descricao : hit.tags.split(',')[0], urlImage : hit.previewURL, preco : precos[3]}} clickButton={()=> addToCart({descricao : hit.tags.split(',')[0], urlImage : hit.previewURL, preco : precos[3]})} labelButton={"Adicionar ao carrinho"} clickImage={()=> console.log("abrir modal")}></CardMaterial>
                </div>
            })
         }
         </div>
         <div className='d-flex overflow-auto px-4 my-4'>
            {peixes?.hits.slice(0, 15).map((hit) => { 
              return <div key={hit.id} className='col-12 col-sm-5 col-xl-2 p-2'>
                <CardMaterial material={{descricao : hit.tags.split(',')[0], urlImage : hit.previewURL, preco : precos[4]}} clickButton={()=> addToCart({descricao : hit.tags.split(',')[0], urlImage : hit.previewURL, preco : precos[4]})} labelButton={"Adicionar ao carrinho"} clickImage={()=> console.log("abrir modal")}></CardMaterial>
                </div>
            })
         }
         </div>
         <div className='d-flex overflow-auto px-4 my-4'>
            {sanduiches?.hits.slice(0, 15).map((hit) => {
              return <div key={hit.id} className='col-12 col-sm-5 col-xl-2 p-2'>
                <CardMaterial material={{descricao : hit.tags.split(',')[0], urlImage : hit.previewURL, preco : precos[5]}} clickButton={()=> addToCart({descricao : hit.tags.split(',')[0], urlImage : hit.previewURL, preco : precos[5]})} labelButton={"Adicionar ao carrinho"} clickImage={()=> console.log("abrir modal")}></CardMaterial>
                </div>
            })
         }
         </div>
         
        </>
      : <h1>... loading</h1>}
       <Footer/>
    </>;
}

export default InitialPage;