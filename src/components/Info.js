import React, { useEffect, useState } from 'react';

const infos = {
    backgroundColor: '#f79859',
    color: 'white', 
  }
  
  const aInfoIcon = {
    textDecoration : 'none',
    color : 'white'
  }

  const modalColorText = {
    color : 'black'
  }

const agendaDeFuncionamento = [
  {dia : 'Segunda', de : "11:30", ate : "00:00"}, 
  {dia : 'Terça', de : "11:30", ate : "00:00"}, 
  {dia : 'Quarta', de : "11:30", ate : "00:00"}, 
  {dia : 'Quinta', de : "11:30", ate : "00:00"}, 
  {dia : 'Sexta', de : "11:30", ate : "00:00"}, 
  {dia : 'Sábado', de : "18:00", ate : "03:00"}, 
  {dia : 'Domingo', de : "11:30", ate : "00:00"}, 
]

const listStyle = {
  listStyleType : 'none'
}

function Info() {
    const [cliente, setCliente] = useState({
      nome : "Coffee Lovers",
      endereco : "R. do Catete, 153 - Catete",
      funcionamento : agendaDeFuncionamento,
      contatos: [
        {
        nome: "WhatSap",
        data: "(XX) XXXXX-XXXX"}, 
        {
          nome : "Facebook",
          data : "facebook@.com",
        },
        {
          nome :"Instagram",
          data: "@coffe"}
      ]})

    const [position, setPosition] = useState();

    useEffect(()=>{
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            console.log(position)
            console.log('Latitude: ', position.coords.latitude);
            console.log('Longitude: ', position.coords.longitude);
            console.log('acuracia: ', position.coords.accuracy )
            
           
          },
          (error) => {
            console.log('Error: ', error.message);
          }, 
          { enableHighAccuracy: true }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    }, [])

    const redirectToGoogleMaps = () => {  
      //const fromPoint = `${position.coords.latitude},${position.coords.longitude}`;
      const toPoint = encodeURIComponent(cliente.endereco);
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${toPoint}`;
      console.log(googleMapsUrl)
      window.open(googleMapsUrl, "_blank");
        
    };

    return <div className='row justify-content-center justify-content-xl-between px-xl-5 mt-5'>
    <div className="d-flex justify-content-between col-10 col-xl-3 px-xl-2 my-2" style={infos}>
      <span><i className="bi bi-telephone-fill" ></i> Contatos</span> <a href='#' data-bs-toggle="modal" data-bs-target="#contatosInfoModal" style={aInfoIcon}>Opções</a>
      <div className="modal fade" id="contatosInfoModal" aria-labelledby="contatosInfoModalLabel" aria-hidden="true" style={modalColorText}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contatosInfoModalLabel">Contatos</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <ul style={listStyle}>
                  {cliente.contatos.map(x => <li><h4>{x.nome} - {x.data}</h4></li>)}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-between col-10 col-xl-3 px-xl-2 my-2" style={infos}>
      <span><i className="bi bi-clock-fill" ></i> Funcionamento</span><a href='#' data-bs-toggle="modal" data-bs-target="#funcionamentoInfoModal" style={aInfoIcon}>Ver horários</a>
      <div className="modal fade" id="funcionamentoInfoModal" aria-labelledby="funcionamentoInfoModalLabel" aria-hidden="true" style={modalColorText}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="funcionamentoInfoModalLabel">Horários de Atendimento</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <ul style={listStyle}>
                  {cliente.funcionamento.map(x => <li><h4>{x.dia} - {x.de} às {x.ate}</h4></li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className="d-flex justify-content-between col-10 col-xl-3 px-2 my-2" style={infos}>
      <span><i className="bi bi-house-door-fill"></i> Endereço</span><a href='#' data-bs-toggle="modal" data-bs-target="#enderecoInfoModal" style={aInfoIcon}>Mapa</a>
      <div className="modal fade" id="enderecoInfoModal" aria-labelledby="enderecoInfoModalLabel" aria-hidden="true" style={modalColorText}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="enderecoInfoModalLabel">Endereço</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {cliente.endereco}
              <br></br>
              <a className='btn btn-success'  onClick={redirectToGoogleMaps}>Definir Rota</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Info;