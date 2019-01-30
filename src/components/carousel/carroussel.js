import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap';

import { Col} from 'react-materialize';

import ImagemCarousel1 from '../../images/fundoCarroussel/fundoCarroussel1.png';
import ImagemCarousel2 from '../../images/fundoCarroussel/fundoCarroussel2.png';
import ImagemCarousel3 from '../../images/fundoCarroussel/fundoCarroussel3.png';
import LogoSite from '../../images/logo/LogoSite.png';

import './carroussel.css';

function Container(props){
	return(
		<div className="blocoText">
	    	<h1 className="textConheca">conheça</h1>
	    	<div className="forma"> <h1 className="textForma"> {props.texto} </h1> </div>
		</div>
	);
}


class Carroussel extends Component {
  render() {
    return (
    	<Col s={12} m={12}>
	       <Carousel className="carouselH">
			  <Carousel.Item>
			  	<Container texto="lugares.novos"/>
			    <img width={2000} height={1500} src={ImagemCarousel1} />
			  </Carousel.Item>

			  <Carousel.Item>
			  	<Container texto="pessoas.novas"/>
			    <img width={2000} height={1500} src={ImagemCarousel2} />

			  </Carousel.Item>

			  <Carousel.Item>
			  	<div className="blocoText">
			    	<h1 className="textConheca">conheça</h1>
			    	<img src={LogoSite} className="responsive-img LogoSite"/> 
				</div>
			    <img width={2000} height={1500} src={ImagemCarousel3} />

			  </Carousel.Item>

			</Carousel>
		</Col>
    );
  }
}
export default Carroussel;