import SearchBar from '../components/SearchBar'
import CategoryMenu from '../components/CategoryMenu'
import FavoritesLink from '../components/FavoritesLink'
import CartLink from '../components/CartLink'
import AccountMenu from '../components/AccountMenu'
import HomeLink from '../components/HomeLink'

const Header = () => {

    return (
        <header className="bg-stone-800">
            <div className="lg:max-w-screen-xl lg:mx-auto flex gap-2 lg:gap-4 p-1">
                <div className="flex items-center justify-around gap-2 lg:gap-4 basis-1/5 shrink-0 my-auto">
                    <div className="p-1 max-w-40">
                        <HomeLink />
                    </div>
                    <div className="hidden lg:grid place-content-center">
                        <CategoryMenu />
                    </div>
                </div>
                <div className="grow my-auto">
                    <SearchBar />
                </div>
                <div className="flex items-center justify-around basis-1/5 shrink-0 my-auto">
                    <div className="grid place-content-center">
                        <AccountMenu />
                    </div>
                    <div className="hidden lg:grid place-content-center">
                        <FavoritesLink />
                    </div>
                    <div className="grid place-content-center">
                        <CartLink />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header