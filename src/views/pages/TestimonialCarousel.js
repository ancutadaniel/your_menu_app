import React  from 'react';
import { Carousel, Col, Image } from 'react-bootstrap'
import { tst_1, tst_2, tst_3, quat, quat_1, } from '../../images/index.js';

class TestimonialCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 1,
        direction: null,
        controls: true
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
           activeIndex={index}
           direction={direction} 
           onSelect={this.handleSelect} 
        >
        <Carousel.Item>
            <Col xs={12} md={4} className="testimonial">
                <Image className="homepage_middle_img" src={tst_1} alt="Trophy" />
                    <Col className="">                                           
                        <p className=""><Image className="quat" src={quat} alt=""/>
                            By far the best online service <br></br>out there... I recommend them to <br></br>every business owner I know.
                            <Image className="quat_sec" src={quat_1} alt=""/> 
                        </p>
                        <span className="testimonial_name">Frank, Napoli’s Pizzeria</span>
                        
                    </Col>
                </Col>                                
            <Col xs={12} md={4} className="testimonial">
                <Image className="homepage_middle_img" src={tst_2} alt="Trophy" />
                    <Col className="">
                        <p className=""><Image className="quat" src={quat} alt=""/> 
                            YourMenu.com has always been there<br></br> us with different marketing strategies<br></br> that have helped triple my business.
                            <Image className="quat_sec" src={quat_1} alt=""/>
                        </p>      
                        <span className="testimonial_name">Sam, Philippe Liquors</span>                                            
                    </Col>
            </Col>
            <Col xs={12} md={4} className="testimonial">
                <Image className="homepage_middle_img" src={tst_3} alt="Trophy" />
                <Col className="">
                        <p className=""><Image className="quat" src={quat} alt=""/>
                        YourMenu.com built a custom website <br></br>for my business, and the online presence <br></br>helped connect me to new customers. 
                        <Image className="quat_sec" src={quat_1} alt=""/>
                    </p>      
                        <span className="testimonial_name">Changmin, Lee’s Cleaners</span>                                           
                </Col>
            </Col>
        </Carousel.Item>
        <Carousel.Item>
            <Col xs={12} md={4} className="testimonial">
                <Image className="homepage_middle_img" src={tst_1} alt="Trophy" />
                    <Col className="">                                           
                        <p className=""><Image className="quat" src={quat} alt=""/>
                            By far the best online service <br></br>out there... I recommend them to <br></br>every business owner I know.
                            <Image className="quat_sec" src={quat_1} alt=""/> 
                        </p>
                        <span className="testimonial_name">Frank, Napoli’s Pizzeria</span>    
                    </Col>
            </Col>                                
            <Col xs={12} md={4} className="testimonial">
                <Image className="homepage_middle_img" src={tst_2} alt="Trophy" />
                    <Col className="">
                        <p className=""><Image className="quat" src={quat} alt=""/> 
                            YourMenu.com has always been there<br></br> us with different marketing strategies<br></br> that have helped triple my business.
                            <Image className="quat_sec" src={quat_1} alt=""/>
                        </p>      
                        <span className="testimonial_name">Sam, Philippe Liquors</span>                                            
                    </Col>
            </Col>
            <Col xs={12} md={4} className="testimonial">
                <Image className="homepage_middle_img" src={tst_3} alt="Trophy" />
                    <Col className="">
                        <p className=""><Image className="quat" src={quat} alt=""/>
                            YourMenu.com built a custom website <br></br>for my business, and the online presence <br></br>helped connect me to new customers. 
                            <Image className="quat_sec" src={quat_1} alt=""/>
                        </p>      
                        <span className="testimonial_name">Changmin, Lee’s Cleaners</span>                                           
                    </Col>
            </Col>    
        </Carousel.Item>
        </Carousel>
      );
    }
  }
  
  export default TestimonialCarousel;