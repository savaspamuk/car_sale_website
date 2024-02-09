import { useEffect, useState } from 'react';
import './CarListing.css';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/CommonSection/CommonSection';
import Cars from '../../components/UI/Cars/Cars';
import {
	useCarsContext,
} from '../../context/CarsProvider';

const CarListing = () => {
	const { cars } = useCarsContext();
	const [sorting, setSorting] = useState(undefined);
	const [sortedCars, setSortedCars] = useState([]);

	useEffect(() => {
		if (sorting === 'asc') {
			const sortedResult = [...cars].sort((a, b) => {
				const carAKey = `${a.year} ${a.make} ${a.model}`;
				const carBKey = `${b.year} ${b.make} ${b.model}`;

				return carAKey.localeCompare(carBKey);
			});
			setSortedCars(sortedResult);
		} else if (sorting === 'des') {
			const sortedResult = [...cars].sort((a, b) => {

				const carAKey = `${a.year} ${a.make} ${a.model}`;
				const carBKey = `${b.year} ${b.make} ${b.model}`;

				return carBKey.localeCompare(carAKey);
			});
			setSortedCars(sortedResult);
		} else {
			setSortedCars(cars);
		}
	}, [sorting, cars]);

	const handleSort = async (event) => {
		const selectedSort = event.target.value;
		if (selectedSort === 'asc' || selectedSort === 'des') {
			setSorting(selectedSort);
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
						<Cars cars={sortedCars} />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default CarListing;