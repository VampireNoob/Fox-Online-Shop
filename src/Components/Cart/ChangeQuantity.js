import left from '../../pics/left.png';
import right from '../../pics/right.png';

const ChangeQuantity = ({ quantity, setQuantity }) => {
    const removeQuantiy = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity)
    }

    const addQuantity = () => {
        const newQuantity = quantity +1;
        setQuantity(newQuantity)
    }

    return(
        <div className='changeBtn'>
            <button className='quantity' onClick={removeQuantiy}><img src={ left } alt="left" width='25px' /></button>
            <span>{ quantity }</span>
            <button className='quantity' onClick={addQuantity}><img src={ right } alt="right" width='25px' /></button>
        </div>
    )
}

export default ChangeQuantity;