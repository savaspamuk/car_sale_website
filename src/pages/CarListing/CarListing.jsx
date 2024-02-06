import { useEffect } from 'react';
import './CarListing.css';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/CommonSection/CommonSection';
import Cars from '../../components/UI/Cars/Cars';
import {
	useCarsContext,
	useCarsDispatch,
	CarsActionType,
} from '../../context/CarsProvider';

const CarListing = () => {
	const { cars } = useCarsContext();
	const dispatch = useCarsDispatch();

	const handleSort = async (event) => {
		const selectedSort = event.target.value;
		try {
			const response = await fetch(
				`https://freetestapi.com/api/v1/cars?sort=name&order=${selectedSort}`
			);
			const data = await response.json();
			if (data) {
				dispatch({ type: CarsActionType.SET_CARS, payload: data });
			}
		} catch (error) {
			console.error('Error fetching sorted data:', error);
		}
	};

	return (
		<Helmet title='Cars'>
			<CommonSection title='Car Listing' />
			<section>
				<Container>
					<Row>
						<Col lg='12'>
							<div className='car__listing-sort'>
								<span>
									<i className='ri-sort-asc'></i> Sort By Model Name
								</span>
								<select className='car__listing-select' onChange={handleSort}>
									<option>Select</option>
									<option value='asc'>A to Z</option>
									<option value='des'>Z to A</option>
								</select>
							</div>
						</Col>
						<Cars cars={cars} />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default CarListing;
