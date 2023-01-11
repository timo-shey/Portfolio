import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Strong problem-solving and communication skills, experience in
                developing and maintaining Java-based microservices,
                implementing REST APIs and designing database schemas.
                Proficient in agile methodologies and experience collaborating
                with teams to deliver software solutions on time, a quick
                learner with strong critical thinking skills. Good knowledge of
                various technologies such as Java, Spring Boot, React JS,
                Docker, and version control systems.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Spring Boot</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Hibernate</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>AWS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Docker</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
