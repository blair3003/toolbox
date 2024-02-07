import Link from 'next/link'
import Image from 'next/image'

const HomeLink = () => {

    return (
        <Link
            href="/"
            className="block h-8 lg:h-12 aspect-[5/3]"
        >
            <Image
                src="/img/toolbox.png"
                alt="The Toolbox logo"
                width={1000}
                height={600}
                priority
            />
        </Link>
    )
}

export default HomeLink

