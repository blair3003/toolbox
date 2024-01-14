import CartItems from '@/components/CartItems';
import ClearCartButton from '@/components/ClearCartButton';

export default function Cart() {

    return (
        <div>
            <h1>Cart</h1>
            <CartItems />
            <ClearCartButton />

        </div>
    )
}