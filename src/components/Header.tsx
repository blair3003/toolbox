import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './SearchBar'
import CategoryMenu from './CategoryMenu'
import FavoritesLink from './FavoritesLink'
import CartLink from './CartLink'

const Header = async () => {

    return (
        <header className="bg-orange-600">
            <div className="lg:max-w-screen-xl lg:mx-auto flex gap-2 lg:gap-4 p-1">
                <div className="flex basis-1/5 shrink-0 gap-2 my-auto">
                    <Link
                        href="/"
                        className="lg:max-w-40"
                    >
                        <Image
                            src="/img/toolbox-transparent.png"
                            alt="The Toolbox logo"
                            width={1000}
                            height={600}
                            priority={true}
                        />
                    </Link>
                    <div className="hidden lg:grid place-content-center">
                        <CategoryMenu />
                    </div>
                </div>
                <div className="grow my-auto">
                    <SearchBar />
                </div>
                <div className="flex basis-1/5 shrink-0 gap-2 my-auto">
                    <div>
                        Sign in
                    </div>
                    <div className="hidden lg:block">
                        <FavoritesLink />
                    </div>
                    <div>
                        <CartLink />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header