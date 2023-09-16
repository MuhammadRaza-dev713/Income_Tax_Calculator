'use client'

import Image from 'next/image'
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero";
import Salary from "../../components/Salary";
import TaxSlabsInfo from "../../components/TaxSlabsInfo";
import Footer from "../../components/Footer";

export default function Home() {
  return (

      <main className='h-full font-sans' cz-shortcut-listen='true'>
        <div>
            <Navbar></Navbar>
        </div>
          <div>
              <Hero></Hero>
          </div>
          <div className="absolute bottom-60 left-0 w-full overflow-hidden" >
              <svg  data-name="Layer 1" fill="#F8FAFC" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="scale-x-150">
                  <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                        className="shape-fill fill-white"></path>
              </svg>
          </div>
          <div>
              <Salary/>
          </div>
          <div>
              <TaxSlabsInfo></TaxSlabsInfo>
          </div>
          <div>
              <Footer></Footer>
          </div>
      </main>

  )
}

