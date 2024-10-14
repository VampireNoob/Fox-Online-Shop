import React, { useState } from 'react';
import './App.css';
import { Col, Container, Row, Breadcrumb, Image, Carousel, Nav, Alert, } from 'react-bootstrap';
import Games from './Components/GameComponents/Games';
import Login from './Login';
import Logout from './Logout';
import fox from './pics/fox.png';
import craft from './pics/craft.png';
import hedgehog from './pics/hedgehog.png';
import race from './pics/race.png';
import red from './pics/red.png';
import nerd from './pics/nerd.png';
import hut from './pics/hut.png';
import insta from './pics/insta.png';
import yutu from './pics/yutu.png';
import disc from './pics/discord.png';
import cart from './pics/cart.png';
import { useAuth0 } from "@auth0/auth0-react";
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import { useSelector } from 'react-redux'; // evtl entfernen 
import { getTotalArticles } from './redux/cartSlice'; // evtl entfernen

function Shop () {
    const { isLoading } = useAuth0();
    const [cartContainer, setCartContainer] = useState(false);
    const openCart = () => {
        setCartContainer(!cartContainer)
    } // wichtig für den warenkorb
    const totalItems = useSelector(getTotalArticles); // evtl entfernen 
    if (isLoading) return <span className='lds-heart'><div></div></span>
    return(
    <div className='bg'>
        <Container>
            <header className='my-3 heading'>
                <Row className='header'>
                    <Col md='1' xs='3'>
                        <Image src={ fox }
                        roundedCircle
                        height='50'
                        className='mr-2 mobileHeadImg' />
                    </Col>
                    <Col md='3' className='head mobileHead'>GamerFox</Col>
                    <Col md='8' xs='9'>
                        <Nav variant="pills" defaultActiveKey="/home" className='d-flex justify-content-end mobileLogin'>
                            <Nav.Item>
                                <Nav.Link><Login /> <Logout /></Nav.Link>
                            </Nav.Item>

                        <div>
                            <img onClick={() => openCart()} className='cartItem mobileCart' src={ cart } height='35' alt="cart" />
                            {totalItems > 0 && <span onClick={() => openCart()} className='totalItemsCart'>{totalItems}</span>} 
                            <div className={cartContainer ? 'container-cart-true' : 'container-cart-false'}>
                                <div className='box-close-cart'>
                                <button className='btn-close-cart' onClick={() => openCart()}>X</button>
                                    <hr className='horz' />
                                    <h3 className="box-close-title"><Cart /></h3>
                                    {/* <hr className='horz'/> */}
                                </div>
                            </div>
                        </div>
                        </Nav>
                    </Col>
                </Row>
            </header>

    <Alert className='danger border-0 text-dark mobileDanger'>
        Nur Heute 30% Rabbat auf alles!
    </Alert>

    <div className="contain marketing rounded">
        <div className="row featurette d-flex flex-wrap align-items-center justify-content-center py-2 px-4 grid">
            <div className="col-md-7 text-center">
                <h2 className="info featurette-heading fw-normal lh-1">Hallo kleine Füchse!</h2>
                <h3><span className="text-dark">Wir sind die gebrüder Fuchs und begrüßen euch in unsrem Gaming-Online-Shop für Kinder.</span></h3>
                <p className="lead text-muted">Wir sind schon seit dem Kindesalter dem Gaming-Fieber verfallen und sind bis heute der Thematik Treu geblieben.
                Bei uns findet Ihr die pasenden Games und die dazugehörigen Informationen.{'\n'}{'\n'}
                <h3 className="info">Gute Nachrichten:</h3>{'\n'}
                Es gibt jede Woche tolle Actionen und Angebote auf unsere Produkte mit einem kleinem Fuchs-Aufkleber, also haltet die Augen auf.</p>
            </div>
            <div className="col-md-5">
                <Image className="imgmobile" src={ fox } alt="GamerFox" width="500" height="500"/>
            </div>
        </div>
    </div>
<br />
    <Breadcrumb className='grey p-1'>
        <AllCategories />
    </Breadcrumb>

    <Games />

    <Carousel className='slide'>
                <Carousel.Item>
                    <Image className='d-block w-100'
                    src={ race }
                    alt='first slide' />
                    <Carousel.Caption>
                        <h3 className='slideText mobileSlideHeader'>Hallo kleine Füchse!</h3>
                        <p className='slideText mobileSlideText'>Bei uns findet ihr viele verschiedene und spanende Spiele, angefangen bei Action-Adventure bis hin zu Rennspielen für eure Kids.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className='d-block w-100'
                    src={ hedgehog }
                    alt='first slide' />
                    <Carousel.Caption>
                        <h3 className='slideText mobileSlideHeader'>Gaming Info Teil 1</h3>
                        <p className='slideText mobileSlideText'>Als erstes Videospiel, das nur zu Unterhaltungs-zwecken programmiert wurde, gilt "Tennis for Two" von 1958.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className='d-block w-100'
                    src={ craft }
                    alt='first slide' />
                    <Carousel.Caption>
                        <h3 className='slideText mobileSlideHeader'>Gaming Info Teil 2</h3>
                        <p className='slideText mobileSlideText'>Das Spiel bestand aus einem Monitor für ein Messgerät, auf dem zwei Personen einen Lichtpunkt hin und her spielen konnten.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
<br />
            <div className="cont px-4 py-3" id="featured-3">
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <Image className='feature-img' src={ red } alt="" width="100px" height="100px" />
                            <span className="ms-3 feature-stars">⭐⭐⭐⭐⭐</span>
                        </div>
                        <h2 className="feature-header">Mega Zufrieden!</h2>
                        <p className="feature-text">Klappt alles wie immer Super, hab nach paar Tagen mein Spiel erhalten und bin Hoch Zufrieden.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <Image className='feature-img' src={ nerd } alt="" width="100px" height="100px" />
                            <span className="ms-3 feature-stars">⭐⭐⭐⭐⭐</span>
                        </div>
                        <h2 className="feature-header">NfS Heat - PS 4.</h2>
                        <p className="feature-text">Lieferung und Abwicklung ist einfach und schnell, hatte nur das Game nach paar Std. durch!</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <Image className='feature-img' src={ hut } alt="" width="100px" height="100px" />
                            <span className="ms-3 feature-stars">⭐⭐⭐⭐⭐</span>
                        </div>
                        <h2 className="feature-header">Sehr Freundlich!</h2>
                        <p className="feature-text">Alle Spiele sind für Kinder geeignet und es gibt MEGA Aktionen wenn man ein Sparfuchs ist.😉</p>
                    </div>
                </div>
            </div>
<br />
            <footer className="footerColor d-flex flex-wrap justify-content-between align-items-center py-3 my-1 px-4">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted  text-decoration-none lh-1">
                    <Image src={fox} alt="" width="50" height="50"/>
                    </a>
                    <span className="mb-3 mb-md-0 footerText">Gamerstr 4a,
                    11111 GameTown,
                    Hotline: 000000 - 00 00 00</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="placeholder"><Image src={ insta } alt="instagram" width="24" height="24"/></a></li>
                    <li className="ms-3"><a className="text-muted" href="placeholder"><Image src={ yutu } alt="youtube" width="24" height="24"/></a></li>
                    <li className="ms-3"><a className="text-muted" href="placeholder"><Image src={ disc } alt="discord" width="24" height="24"/></a></li>
                </ul>
            </footer>
            <div class="mb-3 mb-md-0 footerSize footerText text-center">Alle Bilder / KI Bilder wurden aus offenen Informationsquellen https://www.pinterest.com/ - https://www.freepik.com/backgrounds zitiert und hier ausschließlich zu Informationszwecken präsentiert!</div>
        </Container>
    </div>
    );
}

export default Shop;