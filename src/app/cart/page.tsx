import CartItems from '@/components/CartItems';
import ClearCartButton from '@/components/ClearCartButton';

export default function Cart() {

    return (
        <main>
            <div className="lg:max-w-screen-xl lg:mx-auto">
                <div>
                    <h1>Cart</h1>
                    <CartItems />
                    <ClearCartButton />
                </div>
            </div>
        </main>
    )
}