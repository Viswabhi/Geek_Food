const Header = ()=>{
    return (
        <nav className="flex justify-between items-center h-[70px] w-100% bg-[rgb(17,24,39)] px-5 md:px-24">
            <span className="flex items-center gap-3">
                <img src="./sss.png" alt="Logo"/>
                <h1 className="text-white font-semibold text-2xl">GeekFoods</h1>
            </span>
            
            {/* Menu */}
            <span className="text-white font-semibold gap-8 hidden md:flex items-center">
                    <p>Home</p>
                    <p>Quote</p>
                    <p>Resturants</p>
                    <p>Foods</p>
                    <p>Contact</p>
                    
                </span>

            <span className="flex gap-5">

                

                {/* Get Started button */}
                <button
                    type="button"
                    className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                >
                    Get started
                </button>


                



                {/* Hamburger */}
                <label className="md:hidden">
                    <div
                        className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
                    >
                        <input className="hidden peer" type="checkbox" />
                        <div
                        className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
                        ></div>
                        <div
                        className="w-[50%] h-[2.5px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"
                        ></div>
                        <div
                        className="w-[50%] h-[2.5px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
                        ></div>
                    </div>
                </label>

            </span>    
        </nav>
    )
}

export default Header