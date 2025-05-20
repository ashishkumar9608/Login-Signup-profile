const Button = ({
    onClick,
    text,
    className
}

) => {
    return (
        <button
            className={`px-8 py-2 bg-white w-full rounded-full cursor-pointer font-medium text-black ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;