import React from 'react'
import solar from '../assets/solar.gif'
import Carousel from 'react-bootstrap/Carousel';
import solarli from '../assets/SOLARLI.gif'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const Home = () => {
  var Style={backgroundColor:'white'}
  return (
    <div style={Style}>
      <div className="carousel">
<Carousel>
      <Carousel.Item interval={1000}>
        <img src='https://media.licdn.com/dms/image/D4D12AQGn__JnMTzsLw/article-cover_image-shrink_720_1280/0/1698663926418?e=2147483647&v=beta&t=MHmAfsjcZx6fSE2HA-G1s9HsHuwjdjaU6qt7hx4JL34' text="First slide" style={{width:'100%',height:'700px'}} />
        <Carousel.Caption>
          <h3>TO THE SPACE</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src='https://images.fastcompany.com/image/upload/f_webp,c_fit,w_1920,q_auto/wp-cms/uploads/2024/02/How_space_exploration_boosts_the_global_economy.jpg' style={{width:'100%',height:'50Opx'}} text="Second slide" />
        <Carousel.Caption>
          <h3>TO THE SPACE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < img src='https://orbitaltoday.com/wp-content/uploads/2021/12/Spaceflight-and-Space-exploration-effects-on-the-environment-900x600-1.jpg'style={{width:'100%',height:'700px'}} text="Third slide" />
        <Carousel.Caption>
          <h3>TO THE SPACE</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
      <div className="col-md-4"></div>
      <div className="col-md-4 d-flex">
      <img src={solarli} alt=""  style={{width:'80%',alignItems:'center'}} className='Solarli mt-5'/>
      <img src={solar} alt=""  style={{width:'70%', height:'70%',alignItems:'center'}} className='Solar mt-5'/>
      </div>
      <div className="col-md-4">
     
      </div>
<p className='para mt-4'>
The universe is all of space and time[a] and their contents.[10] It comprises all of existence, any fundamental interaction, physical process and physical constant, and therefore all forms of matter and energy, and the structures they form, from sub-atomic particles to entire galactic filaments. Since the early 20th century, the field of cosmology establishes that space and time emerged together at the Big Bang 13.787±0.020 billion years ago[11] and that the universe subsequently expanded. Today, the universe has expanded into an age and size that is only partially observable from Earth; while the spatial size of the entire universe is unknown, the smaller observable universe is approximately 93 billion light-years in diameter at present.[3]
</p>
<div className="Card">
  <div className="row mt-5 ms-5">
    <div className="col-md-4">
    <Card style={{ width: '18rem', height:'30rem' ,border:'0'}}>
      <Card.Img variant="top" src="https://images.nature.com/lw1200/magazine-assets/d41586-024-02191-1/d41586-024-02191-1_27293496.jpg" />
      <Card.Body>
        <Card.Title>Space Rocket</Card.Title>
        <Card.Text>
        A rocket is a vehicle that uses jet propulsion to accelerate without using any surrounding air. A rocket engine produces thrust by reaction to exhaus
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://en.wikipedia.org/wiki/Rocket">View More</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4">
    <Card style={{ width: '18rem', height:'30rem',border:'0' }}>
      <Card.Img variant="top" src="https://metropolismag.com/wp-content/uploads/2021/07/iss042e136065_0.jpg" />
      <Card.Body>
        <Card.Title>Space Station</Card.Title>
        <Card.Text>
        The International Space Station Program brings together international flight crews, multiple launch vehicles, globally distributed launch and flight operations, ...
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://www.nasa.gov/international-space-station/">View More</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4">
    <Card style={{ width: '18rem', height:'30rem',border:'0' }}>
      <Card.Img variant="top" src="https://www.vsledclothes.com/pic/big/341_0.jpg" className='imgBook' />
      <Card.Body>
        <Card.Title>Space Suite</Card.Title>
        <Card.Text>
        A space suit (or spacesuit) is an environmental suit used for protection from the harsh environment of outer space, mainly from its vacuum as a highly specialized pressure suit, 
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="https://en.wikipedia.org/wiki/Space_suit">View More</Card.Link>
      </Card.Body>
    </Card>
    </div>
  </div>

</div>

<div className="">
  <h2 className='text-center Camp'>Space Campign</h2>
  <p className='paraSpace'>Space Camp has been helping inspire the next generation of explorers for more than 42 years. 
    This internationally known program with more than one million alumni is based on NASA astronaut training and 
    focuses on teamwork and leadership skills. Launched in 1982, Space Camp has inspired and motivated young people from 
    around the country, and later the world, with attendees from all 50 states, U.S. territories, and 150 foreign countries.
     We offer space, aviation and robotics camps to children between the ages of 9 to 18,
     adults of all ages, families, and educators.</p>
</div>
<div className="row1">
  <div className="col-md4 ms-5 mt-5 ">
  <Card style={{ width: '18rem', height:'35rem' ,border:'',backgroundColor:'wheat',marginLeft:'35%'}}>
      <Card.Img variant="top" src="https://www.rocketcenter.com/sites/default/files/2023-05/spacecamp.png" />
      <Card.Body>
        <Card.Title>Space Camp</Card.Title>
        <Card.Text>
          <button className='border border-2'>Age 9-11</button> <br/>
        Suit up for a mission to the International Space Station or train for a landing on the moon! 
        Space Camp® is the ultimate educational experience that illuminates real-world applications of science, 
        technology, engineering and mathematics. Students…
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Link to='/register'><button className='btn btn-primary'>Book Now!</button></Link>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md4 mt-5 ms-5">
  <Card style={{ width: '18rem', height:'35rem' ,border:'',backgroundColor:'wheat',marginLeft:'30%'}}>
      <Card.Img variant="top" src="https://www.rocketcenter.com/sites/default/files/2023-05/saaelite2.png" />
      <Card.Body>
        <Card.Title>Advanced Space Academy</Card.Title>
        <Card.Text>
          <button className='border border-2'>Age 25-32</button> <br/>
          Get Ready to Take Your Giant Leap!Space Academy® for Leading Students in Alabama (SALSA) is a program funded by the State of Alabama Legislature that awards a male and female student between the ages of 12 to 14 from every legislative district in…
        </Card.Text>
      </Card.Body>
      <Card.Body>
      <Link to='/register'><button className='btn btn-primary'>Book Now!</button></Link>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md4 ms-5 mt-5">
  <Card style={{ width: '18rem', height:'35rem' ,border:'',backgroundColor:'wheat',marginLeft:'30%'}}>
      <Card.Img variant="top" src="https://www.rocketcenter.com/sites/default/files/2023-05/SALSA.png" />
      <Card.Body>
        <Card.Title>Space Academy for Leading Students in Alabama</Card.Title>
        <Card.Text>
          <button className='border border-2'>Age 19-26</button> <br/>
          Get Ready to Take Your Giant Leap!Space Academy® for Leading Students in Alabama (SALSA) is a program funded by the State of Alabama Legislature that awards a male and female student between the ages of 12 to 14 from every legislative district in…
        </Card.Text>
      </Card.Body>
      <Card.Body>
      <Link to='/register'><button className='btn btn-primary'>Book Now!</button></Link>
      </Card.Body>
    </Card>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Home