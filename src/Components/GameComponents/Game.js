import { Row, Col, Card, Button } from 'react-bootstrap';
import '../../App.css';
import ChangeQuantity from '../Cart/ChangeQuantity';
import { useState } from 'react';
import { addItemToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Game = ({ game }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(
        <Row className='row d-flex justify-content-center'>
            {[0].map(item => (
            <Col className='col-md-6 my-4' xs='6' key={game.id}>
                <Card className='border-0 mobileCard'>
                    <Card.Img variant="top" src={`./${game.image}.jpg`} height='300' />
                    <Card.Body className='card-body'>
                        <Card.Title className='cart'>{ game.name }</Card.Title>
                    <Card.Text className='cart'>{ game.description }</Card.Text>
                    <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
                    <Card.Text className='cart-price'>{ game.price } €</Card.Text>
                        <Button className='text-dark btnCart border-0'
                        onClick={() => {dispatch(addItemToCart({game, quantity}))}}>In den Warenkorb</Button>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    );
}

export default Game;