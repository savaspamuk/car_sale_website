import { useEffect } from "react";
import { Col } from "reactstrap";
import CarForSale from "../../../assets/images/car-for-sale.png";
import { useCarsDispatch } from "../../../context/CarsProvider";
import { CarsActionType } from "../../../models/Car";
import "./Cars.css";
import orderBy from "lodash/orderBy";
import { Link } from "react-router-dom";

interface CarsProps {
  cars: Car[];
}

const Cars = ({ cars }: CarsProps) => {
  const dispatch = useCarsDispatch();

  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/cars")
      .then((response) => response.json())
      .then((data: any) => {
        if (data) {
          dispatch &&
            dispatch({
              type: CarsActionType.SET_CARS,
              payload: {cars: orderBy(data, ["make", "model"])},
            });
        }
      })
      .catch((error) => console.error("Unable to fetch cars data", error));
  }, []);

  return (
    <>
      {cars &&
        cars.map((car) => (
          <Col
            key={`${car.year} ${car.make} ${car.model}`}
            lg="4"
            md="4"
            sm="6"
            className="mb-5"
          >
            <div className="car__item">
              <div className="car__img">
                <img src={CarForSale} alt="Car" />
              </div>
              <div className="car__item-content">
                <h4 className="section__title">{`${car.year} ${car.make} ${car.model}`}</h4>
                <h6 className="car__price">€{car.price}</h6>
                <div className="car__item-info">
                  <span>
                    <i className="ri-palette-line"></i>
                    {` ${car.color}`}
                  </span>
                  <span>
                    <i className="ri-map-pin-range-line"></i>
                    {` ${car.mileage} km`}
                  </span>
                  <span>
                    <i className="ri-gas-station-line"></i>
                    {` ${car.fuelType}`}
                  </span>
                  <span>
                    <i className="ri-settings-2-line"></i>
                    {` ${car.transmission}`}
                  </span>
                </div>
                <div className="car__item-btn-box">
                  <Link to={`/car-details/${car.id}`}className="car__item-btn">See details</Link>
                  <button className="car__item-btn car__btn-details">
                    Buy this car
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
    </>
  );
};

export default Cars;
