import React from 'react'

const Navbar = () => {
    return (
        <div className={"w-full h-30 centered"}>

            <div className={"gap-3 h-[62px] px-md flex items-center text-light-custom justify-between bg-green-custom rounded-full font-pp"}>

                <h5 className="padding cursor-pointer relative group">
                    <span className="relative z-10 group-hover:text-dark-green-custom transition-colors duration-300">Home</span>
                    <span className="absolute inset-0 bg-light-custom rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                </h5>

                <h5 className={"padding cursor-pointer relative group"}>
                    <span className="relative z-10 group-hover:text-dark-green-custom transition-colors duration-300">About</span>
                    <span className="absolute inset-0 bg-light-custom rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                </h5>
                <h5 className={"padding cursor-pointer relative group"}>
                    <span className="relative z-10 group-hover:text-dark-green-custom transition-colors duration-300">Stack</span>
                    <span className="absolute inset-0 bg-light-custom rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                </h5>
                <h5 className={"bg-orange-custom rounded-full padding cursor-pointer relative group"}>
                    <span className="relative z-10 group-hover:text-dark-green-custom transition-colors duration-300">Contact</span>
                    <span className="absolute inset-0 bg-light-custom rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                </h5>

            </div>

        </div>
    )
}
export default Navbar
