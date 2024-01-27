interface PaginationButtonProps {
    onClick: () => void
    label: string
    current?: boolean
    children: React.ReactNode
}

const PaginationButton = ({ onClick, label, current, children }: PaginationButtonProps) => {

    return (
        <button
            onClick={onClick}
            title={label}
            className={`w-8 h-8 py-1 px-2 grid place-content-center rounded-full shadow-2xl text-black bg-stone-300 hover:bg-stone-400 ${current ? "text-white bg-stone-800 hover:bg-stone-800" : ""}`}
        >
            {children}
        </button>
    )
}

export default PaginationButton