import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './SearchBar'
import { Suspense } from 'react'

const Header = () => {

    return (
        <header className="bg-orange-600">
            <div className="lg:max-w-screen-xl lg:mx-auto flex gap-2 lg:gap-4">
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
                    <div className="grid place-content-center">
                        <button
                            type="button"
                            className="hidden lg:grid place-content-center py-1 px-2 rounded-full hover:bg-orange-700"
                        >
                            Categories
                        </button>
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
                        Favorites
                    </div>
                    <div>
                        Cart
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header