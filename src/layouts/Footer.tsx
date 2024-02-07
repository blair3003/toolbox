const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-stone-950 text-white">
            <div className="lg:max-w-screen-xl lg:mx-auto">
                <div className="text-center p-2 lg:p-4">
                    <span>© {currentYear} Toolbox, Inc.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer