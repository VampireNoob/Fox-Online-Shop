import { useSelector } from 'react-redux';
import fox from '../../pics/fox.png';
import CartItem from './CartItem';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import StripeContainer from '../../Stripe/StripeContainer';
import { useState } from 'react';

const Cart = () => {
    const [showMyShop, setShowMyShop] = useState(false);
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return(
        <div className='cartItem'>
            <h3 className="box-close-title">Warenkorb <img src={ fox } height='35' alt="cart" /></h3>
            <hr className='horz' />
            {cartItems.map((cartItem, id) => <CartItem cartItem={ cartItem } key={ id } />)}
            <hr className='horz'/>
            <h3 className="totalPrice">{totalPrice === 0 ? 'Dein Warenkorb ist leer!' : `Gesamt: ${totalPrice.toFixed(2)} €`}</h3>
            <div>
            {showMyShop ? <StripeContainer /> :
                <button onClick={() => setShowMyShop(true)} className='checkOut border-0'>BEZAHLEN</button>}
            </div>
        </div>
    )
}

export default Cart;