import React from "react";
import { Container } from "./styles";

import pctsImage from "../../assets/images/pctsImage.jpg";
import pctsImage2 from "../../assets/images/LogoPCT.png";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel: React.FC = () => {  
    return (
      <Container>
        <div>  
            <div className='container-fluid' >  
              <Carousel>  
                <Carousel.Item style={{'height':"500px", 'width':"100%"}} >  
                  <img style={{'height':"500px", 'width':"100%"}} className="d-block w-100" src={pctsImage}  />  
                  <Carousel.Caption>  
                    <h3>First Demo </h3>  
                  </Carousel.Caption>  
                </Carousel.Item >  
                    <Carousel.Item style={{'height':"500px", 'width':"100%"}}>  
                      <img style={{'height':"500px", 'width':"100%"}} className="d-block w-100" src={pctsImage2}    />  
                          <Carousel.Caption>  
                        <h3>Second Demo</h3>  
                          </Carousel.Caption>  
                    </Carousel.Item>  
                      <Carousel.Item style={{'height':"500px", 'width':"100%"}}>  
                          <img style={{'height':"500px", 'width':"100%"}} className="d-block w-100" src={pctsImage}   />  
                        <Carousel.Caption>  
                          <h3>Third Demo</h3>  
                        </Carousel.Caption>  
                      </Carousel.Item>  
                </Carousel>  
              </div>  
          </div> 
        </Container> 
    )
};

export default MyCarousel;
