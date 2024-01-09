import Image from 'next/image'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'

const Header = () => {

    return (
        <header className="bg-orange-600">
            <div className="md:max-w-screen-xl md:mx-auto flex gap-2 md:gap-4">
                <div className="flex basis-24 md:basis-64 gap-2">
                    <Link
                        href="/"
                        className="md:max-w-40"
                    >
                        <Image
                            src="/img/toolbox-transparent.png"
                            alt="The Toolbox logo"
                            width={1000}
                            height={600}
                        />
                    </Link>
                    <div className="grid place-content-center">
                        <button
                            type="button"
                            className="hidden md:grid place-content-center py-1 px-2 rounded-full hover:bg-orange-700"
                        >
                            Categories
                        </button>
                    </div>
                </div>
                <div className="grow my-auto">
                    <form className="flex items-center gap-1 md:gap-2 h-7 md:h-14 w-full p-0.5 md:p-1 bg-white rounded-full">
                        <div className="grow px-0.5 md:px-1">
                            <label htmlFor="search" className="sr-only">Search for something</label>
                            <input
                                id="search"
                                type="text"
                                placeholder="Search"
                                className="w-full py-1 md:py-2 px-2 md:px-4 text-stone-400 text-xs md:text-lg font-light rounded-full bg-transparent"
                            />
                        </div>
                        <button
                            title="Search for something"
                            className="h-6 w-6 md:h-12 md:w-12 shrink-0 grid place-content-center bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow text-sm md:text-3xl"
                        >
                            <CiSearch />
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                </div>
                <div className="flex basis-24 md:basis-64">
                    <div>
                        Sign in
                    </div>
                    <div className="hidden md:block">
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