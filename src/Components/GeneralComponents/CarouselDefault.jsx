import { Carousel } from "@material-tailwind/react";
import { useSelector } from "react-redux";

function CarouselDefault(props) {
  return (
    <>
<Carousel className="">
{props.car.map((car, index) => (
        <img
        src={car.image}
        alt={car.name}
        className="h-full w-full object-fill"
      />
        ))}
        </Carousel>
    </>
  )
}

export default CarouselDefault
