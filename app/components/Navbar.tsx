import React from 'react'
import Image from "next/image"

const Navbar = () => {
    return (
        <div className={"w-full h-30 centered absolute"}>

            <div data-bg="dark" className={"gap-3 h-[62px] max-sm:h-[48px] px-md flex items-center  text-light-custom justify-between bg-green-custom rounded-full font-pp"}>

                <h5 className="padding cursor-pointer relative group">
                    <span className="relative z-10 group-hover:text-dark-green-custom transition-colors duration-300">Home</span>
                    <span className="absolute inset-0 bg-light-custom rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                </h5>

                <h5 className={"padding cursor-pointer relative group max-sm:hidden"}>
                    <span className="relative z-10 group-hover:text-dark-green-custom transition-colors duration-300">About</span>
                    <span className="absolute inset-0 bg-light-custom rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                </h5>
                <h5 className={"padding cursor-pointer relative group max-sm:hidden"}>
                    <span className="relative z-10 group-hover:text-dark-green-custom transition-colors duration-300">Stack</span>
                    <span className="absolute inset-0 bg-light-custom rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                </h5>
                <h5 className={"bg-orange-custom rounded-full padding cursor-pointer relative group"}>
                    <span className="relative z-10 group-hover:text-dark-green-custom transition-colors duration-300">Contact</span>
                    <span className="absolute inset-0 bg-light-custom rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                </h5>

            </div>

            <div className="absolute right-5 h-[62px] max-sm:h-[48px] flex items-center gap-3 justify-between bg-green-custom rounded-full font-pp overflow-hidden text-light-custom">
                <a
                    href="https://github.com/IbrahimAl-Bari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group w-[62px] h-[62px] max-sm:w-[48px] max-sm:h-[48px] flex items-center justify-center cursor-pointer"
                >
                    <Image
                        width={32}
                        height={32}
                        src="/github.png"
                        alt="GitHub"
                        className="relative z-10"
                    />

                    <span className="absolute inset-0 bg-light-custom rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center z-0" />
                </a>
            </div>

        </div>
    )
}
export default Navbar
