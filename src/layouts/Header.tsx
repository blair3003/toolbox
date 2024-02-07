import SearchBar from '../components/SearchBar'
import CategoryMenu from '../components/CategoryMenu'
import FavoritesLink from '../components/FavoritesLink'
import CartLink from '../components/CartLink'
import AccountMenu from '../components/AccountMenu'
import HomeLink from '../components/HomeLink'

const Header = () => {

    return (
        <header className="bg-stone-800 text-white">
            <div className="lg:max-w-screen-xl lg:mx-auto">
                <div className="h-10 lg:h-16 flex gap-2 p-2">
                    <div className="flex items-center justify-around gap-2">
                        <div className="">
                            <HomeLink />
                        </div>
                        <div className="hidden lg:block">
                            <CategoryMenu />
                        </div>
                    </div>
                    <div className="grow flex items-center">
                        <SearchBar />
                    </div>
                    <div className="flex items-center justify-around gap-2">
                        <div className="">
                            <AccountMenu />
                        </div>
                        <div className="hidden lg:block">
                            <FavoritesLink />
                        </div>
                        <div className="">
                            <CartLink />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header