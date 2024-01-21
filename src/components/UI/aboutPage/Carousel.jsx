import Carousel from "react-bootstrap/Carousel";

import image_1 from "../../../assets/images/IMG_7431.jpeg";
import image_2 from "../../../assets/images/IMG_7484.jpeg";
import image_3 from "../../../assets/images/IMG_0298.jpeg";
import image_4 from "../../../assets/images/IMG_7349.jpeg";

export default function CarouselPhotos() {
  return (
    <div className="d-flex justify-content-center">
      <Carousel fade className="col-md-6">
        <Carousel.Item>
          <img src={image_1} alt="Couple with Mountain Background" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image_2} alt="Pickle Ball" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image_3} alt="Family Snowboarding" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image_4} alt="Family in Car" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
