import React, { Component } from 'react';
import gam from '../images/gam.jpg';
import Card from './Card.jsx';

const CardsDesign = () => {
	return (
		<div className="designs">
			<Card imgurl={gam} boxtext="SMIT Global Alumni Meet 2020" />
			<Card imgurl={gam} />
			<Card imgurl={gam} />
			<Card imgurl={gam} />
			<Card imgurl={gam} />
			<Card imgurl={gam} />
			<Card imgurl={gam} />
			<Card imgurl={gam} />
		</div>
	);
};

export default CardsDesign;
