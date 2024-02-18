import React, { useEffect, useState } from 'react';
import './CarDetails.css';
import Helmet from '../../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import CarForSale from '../../assets/images/car-for-sale.png';
import { useCarsContext } from '../../context/CarsProvider';

interface RouteParams {
	id: string;
	[key: string]: string;
}

const CarDetails: React.FC = () => {
	const { cars } = useCarsContext();
	const { id } = useParams<RouteParams>();
	const [currentCar, setCurrentCar] = useState<Car | undefined>(undefined);

	useEffect(() => {
		const currentCar = cars.find((item) => item.id.toString() === id);
		setCurrentCar(currentCar);
	}, [cars, id]);

	return currentCar ? (
		<Helmet title={currentCar.model}>
			<section>
				<Container>
					<Row>
						<Col lg='6' className='car__info-container'>
							<div>
								<img src={CarForSale} alt='Car Sale' />
							</div>
							<div className='car__info'>
								<h2>
									{`${currentCar.year}-${currentCar.make} ${currentCar.model}`}
								</h2>
								<div className='car__info-price'>
									<i className='ri-price-tag-3-fill'></i>
									<h6 className='sell__price'>${currentCar.price}</h6>
								</div>
								<div className='car__info-details'>
									<span>
										<i className='ri-palette-fill'></i> {currentCar.color}
									</span>
									<span>
										<i className='ri-route-line'></i> {currentCar.mileage} km
									</span>
									<span>
										<i className='ri-contrast-drop-2-fill'></i>
										{currentCar.fuelType}
									</span>
									<span>
										<i className='ri-settings-5-fill'></i>
										{currentCar.transmission}
									</span>
									<span>
										<i className='ri-artboard-2-fill'></i>
										{currentCar.engine}
									</span>
									<span>
										<i className='ri-dashboard-2-fill'></i>
										{currentCar.horsepower} hp
									</span>
									<span>
										<i className='ri-inbox-unarchive-fill'></i>
										{currentCar.features}
									</span>
									<span>
										<i className='ri-folder-user-fill'></i>
										{currentCar.owners} (Ex-owner)
									</span>
								</div>
								<button className='car__info-btn'>Buy this car</button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	) : (
		<div>No car found with the specified model.</div>
	);
};

export default CarDetails;
