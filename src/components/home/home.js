import React from "react";

import { Row, Col, Card } from 'react-materialize';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HotelPraia from '../../images/home/hotel_praia.jpg';
import Restaurante from '../../images/home/restaurante.jpg';
import Pousada1 from '../../images/home/pousada1.jpg';
import Pousada2 from '../../images/home/pousada2.jpg';
import Pousada3 from '../../images/home/pousada3.jpg';
import ShowLolla from '../../images/home/showLolla.jpg';
import ShowRinR from '../../images/home/showRinR.jpg';
import ShowPlaneta from '../../images/home/showPlaneta.jpg';
import ParqueAcqua from '../../images/home/parqueAcqua.jpg';
import ParqueBeto from '../../images/home/parqueBeto.jpg';
import ParqueOki from '../../images/home/parqueOki.jpg';

import './home.css';


function Subtitle(props){
  return(
    <h4 className="subtitle" >{props.sub1}<span className="ponto">.</span>{props.sub2} </h4>
    );
}

function Stars(){
   return( 
      <div>
      <i className="glyphicon glyphicon-heart"></i>
      <i className="glyphicon glyphicon-heart"></i>
      <i className="glyphicon glyphicon-heart"></i>
      <i className="glyphicon glyphicon-heart"></i>
      </div>
    );
}

const Home = () => (
  <Row>
    <Col m={10} s={12}>
        <Subtitle sub1="Mais" sub2="recentes"/>
        <Card>
          <div className="content">
              <Col s={8} m={4} offset="s2" >
                <Link to="/compra/HotelPraia"> <img src={HotelPraia} className="responsive-img img1"/> </Link> 
              </Col>
            <h5>Hotel na praia</h5>
            <div><Stars quant="4"/></div>
            <p>Descrição do lugar com uma descrição bem discritiva descrevendo o lugar.</p>
          </div> 
          <hr/><br/>  
          <div className="content">
              <Col s={8} m={4} offset="s2" >
                <Link to="/compra/Restaurante"> <img src={Restaurante} className="responsive-img img1"/> </Link> 
              </Col>
            <h5>Restaurante Boulevart</h5>
            <div><Stars quant="5"/></div>
            <p>A mesma descrição do lugar com uma descrição bem discritiva descrevendo o lugar.</p>
          </div> 
          <hr/> 
        </Card>

        <br/>
        <br/>

        <Subtitle sub1="Pousadas" sub2=""/>
        <Card>
          <div className="divcont">

              <Col s={8} m={4} offset="s2" >
                <div className="content content2">
                    <Link to="/compra/Pousada1"> <img src={Pousada1} className="responsive-img img"/> </Link> 
                    <h5>Pousada Grande</h5>
                    <div><Stars quant="4"/></div>
                </div> 
              </Col>
              
              <Col s={8} m={4} offset="s2" >
                <div className="content content2">
                    <Link to="/compra/Pousada2"> <img src={Pousada2} className="responsive-img img"/> </Link> 
                    <h5>Conjunto Pousadas</h5>
                    <div><Stars quant="4"/></div>
                </div>  
              </Col>

              <Col s={8} m={4} offset="s2" >
                <div className="content content2">
                    <Link to="/compra/Pousada3"> <img src={Pousada3} className="responsive-img img"/> </Link> 
                    <h5>Pousada Resort</h5>
                    <div><Stars quant="4"/></div>
                </div>  
              </Col>

            </div>
        </Card>

        <br/>

        <Subtitle sub1="Shows" sub2=""/>
        <Card>
          <div className="divcont">

              <Col s={8} m={4} offset="s2" >
                <div className="content content2">
                    <Link to="/compra/ShowLolla"> <img src={ShowLolla} className="responsive-img img"/> </Link> 
                    <h5>Lollapalooza</h5>
                    <div><Stars quant="4"/></div>
                </div> 
              </Col>
              
              <Col s={8} m={4} offset="s2" >
                <div className="content content2">
                    <Link to="/compra/ShowRinR"> <img src={ShowRinR} className="responsive-img img"/> </Link> 
                    <h5>Rock in Rio</h5>
                    <div><Stars quant="4"/></div>
                </div>  
              </Col>

              <Col s={8} m={4} offset="s2" >
                <div className="content content2">
                    <Link to="/compra/ShowPlaneta"> <img src={ShowPlaneta} className="responsive-img img"/> </Link> 
                    <h5>Planeta Atlântida</h5>
                    <div><Stars quant="4"/></div>
                </div>  
              </Col>

            </div>
        </Card>

        <br/>

        <Subtitle sub1="Parques" sub2=""/>
        <Card>
          <div className="divcont">

              <Col s={8} m={4} offset="s2" >
                <div className="content content2">
                    <Link to="/compra/ParqueAcqua"> <img src={ParqueAcqua} className="responsive-img img"/> </Link> 
                    <h5>Acqua Lokos</h5>
                    <div><Stars quant="4"/></div>
                </div> 
              </Col>
              
              <Col s={8} m={4} offset="s2" >
                <div className="content content2">
                    <Link to="/compra/ParqueBeto"> <img src={ParqueBeto} className="responsive-img img"/> </Link> 
                    <h5>Beto Carrero</h5>
                    <div><Stars quant="4"/></div>
                </div>  
              </Col>

              <Col s={8} m={4} offset="s2" >
                <div className="content content2">
                    <Link to="/compra/ParqueOki"> <img src={ParqueOki} className="responsive-img img"/> </Link> 
                    <h5>Oktoberfest</h5>
                    <div><Stars quant="4"/></div>
                </div>  
              </Col>

            </div>
        </Card>

    </Col>
  </Row>
);

export default Home;