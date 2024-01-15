import Link from 'next/link'
import Image from 'next/image'

const HomeLink = () => {

    return (
        <Link href="/">
            <Image
                src="/img/toolbox.png"
                alt="The Toolbox logo"
                width={1000}
                height={600}
                priority={true}
            />
        </Link>
    )
}

export default HomeLink

