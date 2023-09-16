import DropdownMenu from "./DropdownMenu";


const Hero = () =>
{
    return(
        <div className="flex flex-col justify-center items-center mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center lg:pt-32 bg-app">
            <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white">
                Income Tax Calculator
            </h1>
            <DropdownMenu></DropdownMenu>
            {/*<div className="relative mt-4">*/}
            {/*    <button className="relative pr-8 mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white cursor-default rounded-lg py-1.5 pl-3 pr-10 text-left  shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 "*/}
            {/*            id="headlessui-listbox-button-:R1l56:"*/}
            {/*            type="button"*/}
            {/*            aria-haspopup="listbox"*/}
            {/*            aria-expanded="false"*/}
            {/*            data-headlessui-state="">*/}
            {/*        <span className="block truncate">2023-2024</span>*/}
            {/*        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center ml-2 pr-2">*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-400">*/}
            {/*        <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd">*/}
            {/*        </path>*/}
            {/*        </svg>*/}
            {/*        </span>*/}
            {/*    </button>*/}
            {/*</div>*/}
            <p className="mx-auto mt-4 max-w-2xl text-md tracking-tight text-gray-200">Use the Income Tax Calculator for Pakistan to calculate your monthly income and the total amount of tax you'll need to pay. You can also learn more about the tax slabs and other important tax-related information specific to Pakistan.</p>

        </div>




    )
}
 export default Hero