import Carousel from "react-bootstrap/Carousel";

import image_1 from "../assets/images/IMG_7431.jpeg";
import image_2 from "../assets/images/IMG_7484.jpeg";
import image_3 from "../assets/images/IMG_0298.jpeg";
import image_4 from "../assets/images/IMG_7349.jpeg";

export default function AboutMe() {
  return (
    <div className="container">
      <h2>About Me</h2>

      <p>
        As an emerging full stack software engineer with a unique background in
        construction, I was formerly immersed in the world of blueprints,
        designs, and details. I have since transitioned my skills and experience
        to crafting elegant code and solving intricate tech puzzles. I’m fueled
        by a passion for creativity and innovative solutions and dedicated to
        contributing my diverse experiences to the dynamic landscape of software
        development.
      </p>
      <p>
        I'm driven by a passion for unlocking the full potential of individuals,
        I excel in leveraging strong organizational and communication skills to
        empower others. Whether immersed in the world of sketching art or diving
        into the intricacies of application development, my strategic mindset,
        coupled with an unwavering commitment to honesty and integrity, ensures
        successful outcomes. My track record of consistently exceeding
        expectations and deadlines, along with loyalty and dedication have been
        integral to my professional journey. Transitioning from my former role
        in construction, I have successfully pivoted into the dynamic field of
        software engineering, where I continue to apply my strategic approach
        and drive for excellence.
      </p>

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
    </div>
  );
}
