import React from "react";

import { Row, Col, Card, Button } from 'react-materialize';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Calendar from 'react-calendar';

import Hotel_Praia from '../../images/home/hotel_praia.jpg';
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

import './compra.css';

const Compra = ({ match }) => (
	<Route path={`${match.path}/:topicId`} component={Topic} />

);

const content = {
	HotelPraia: {
		titulo:"Hotel na praia",
		desc:"Descrição do lugar com uma descrição bem discritiva descrevendo o lugar.",
		quantS:4,
		imageUrl:"Hotel_Praia"
	},
	Restaurante: {
		titulo:"Restaurante Boulevart",
		desc:"A mesma descrição do lugar com uma descrição bem discritiva descrevendo o lugar.",
		quantS:4,
		imageUrl:"Restaurante"
	},
	Pousada1: {
		titulo:"Pousada Grande",
		desc:"Descrição do lugar com uma descrição bem discritiva descrevendo o lugar.",
		quantS:4,
		imageUrl:"Pousada1"
	},
	Pousada2: {
		titulo:"Conjunto Pousadas",
		desc:"Outra descrição do lugar com uma descrição bem discritiva descrevendo o lugar.",
		quantS:4,
		imageUrl:"Pousada2"
	},
	Pousada3: {
		titulo:"Pousada Resort",
		desc:"Descrição de outro lugar com uma descrição bem discritiva descrevendo o lugar.",
		quantS:4,
		imageUrl:"Pousada3"
	},
	ShowLolla: {
		titulo:"Lollapalooza",
		desc:"Descrição do show com uma descrição bem discritiva descrevendo o lugar.",
		quantS:4,
		imageUrl:"ShowLolla"
	},
	ShowRinR: {
		titulo:"Rock in Rio",
		desc:"Descrição do lugar com uma descrição bem discritiva descrevendo o lugar.",
		quantS:4,
		imageUrl:"ShowRinR"
	},
	ShowPlaneta: {
		titulo:"Planeta Atlântida",
		desc:"Descrição do lugar com uma descrição bem discritiva descrevendo o lugar.",
		quantS:4,
		imageUrl:"ShowPlaneta"
	},
	ParqueAcqua: {
		titulo:"Acqua Lokos",
		desc:"Descrição do lugar com uma descrição bem discritiva descrevendo o lugar.",
		quantS:4,
		imageUrl:"ParqueAcqua"
	},
	ParqueBeto: {
		titulo:"Beto Carrero",
		desc:"Descrição do lugar com uma descrição bem discritiva descrevendo o lugar.",
		quantS:4,
		imageUrl:"ParqueBeto"
	},
	ParqueOki: {
		titulo:"Oktoberfest",
		desc:"Descrição do lugar com uma descrição bem discritiva descrevendo o lugar.",
		quantS:4,
		imageUrl:"ParqueOki"
	},
};

function Stars(){
   return( 
      <div className="estrelas">
      <i className="glyphicon glyphicon-heart"></i>
      <i className="glyphicon glyphicon-heart"></i>
      <i className="glyphicon glyphicon-heart"></i>
      <i className="glyphicon glyphicon-heart"></i>
      </div>
    );
}

function Content(props){
	return(
		<Row>
		    <Col m={12} s={12}>
		        <Card>
		          <div className="contentCompra">
		              <Col s={10} m={8} offset="s2" >
		                	<div>{props.imagem}</div>
		                	<h5>{props.local.titulo}</h5>
				            <div><Stars quant={props.local.quantS}/></div>
				            <p className="descricao">{props.local.desc}</p>
		              </Col>
		              <Col s={10} m={4} offset="s2" >
		                	<Calendar selectRange="true" color="red"/>
				            <Button waves='light' className="btnReserva">Reservar</Button>
		              </Col> 
		          </div> 
		          <hr/><br/>  
		        </Card>
		    </Col>
		</Row>
	);
}


function Topic({match}) {
	var loc = ""+match.params.topicId;
	var result;
	var img;

	if(loc == "HotelPraia"){
		result = content.HotelPraia;
		img = <img src={Hotel_Praia} className="responsive-img"/>
	}
	else if(loc == "Restaurante"){
		result = content.Restaurante;
		img = <img src={Restaurante} className="responsive-img"/>
	}
	else if(loc == "Pousada1"){
		result = content.Pousada1;
		img = <img src={Pousada1} className="responsive-img"/>
	}
	else if(loc == "Pousada2"){
		result = content.Pousada2;
		img = <img src={Pousada2} className="responsive-img"/>
	}
	else if(loc == "Pousada3"){
		result = content.Pousada3;
		img = <img src={Pousada3} className="responsive-img"/>
	}
	else if(loc == "ShowLolla"){
		result = content.ShowLolla;
		img = <img src={ShowLolla} className="responsive-img"/>
	}
	else if(loc == "ShowRinR"){
		result = content.ShowRinR;
		img = <img src={ShowRinR} className="responsive-img"/>
	}
	else if(loc == "ShowPlaneta"){
		result = content.ShowPlaneta;
		img = <img src={ShowPlaneta} className="responsive-img"/>
	}
	else if(loc == "ParqueAcqua"){
		result = content.ParqueAcqua;
		img = <img src={ParqueAcqua} className="responsive-img"/>
	}
	else if(loc == "ParqueOki"){
		result = content.ParqueOki;
		img = <img src={ParqueOki} className="responsive-img"/>
	}
	else if(loc == "ParqueBeto"){
		result = content.ParqueBeto;
		img = <img src={ParqueBeto} className="responsive-img"/>
	}

	return (
		<Content local={result} imagem={img} />
	);
}



export default Compra;