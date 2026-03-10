function Footer () {
    return (
        <>
        <h1 className="text-red-500 bg-red-100 text-center text-3xl p-4 font-bold underline">
        Footer
        </h1>
        
                <Link to = "/" className="text-crimson-600 hover:text-pink-600">inicio</Link>
                <Link to = "/sobre" className="text-crimson-600 hover:text-pink-600">sobre</Link>
                <Link to = "/sobre" className="text-crimson-600 hover:text-pink-600">contato</Link>
        </>
    )
}

export default Footer