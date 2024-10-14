import { useDispatch } from "react-redux";
import dataGames from "../../data/dataGames";
import trash from '../../pics/delete.png';
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({ cartItem }) => {
    const games = dataGames.find(item => item.id === cartItem.gameId);
    const dispatch = useDispatch();
    return(
        <div className="cartBg">
            <img src={`../${games.image}.jpg`} alt="item" width='200px' />
            <br /><br />
            <p>{ games.name }</p>
            <p>Menge: { cartItem.quantity }</p>
            <p> Summe: { games.price.toFixed(2) * cartItem.quantity } €</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                <img src={ trash } alt="delete" width='17px' />
            </span>
        </div>
    )
}

export default CartItem;