import React from 'react'
import { logo } from "../assets/images";

import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='py-1 z-10 w-full'>
    <div className='flex justify-between items-center max-container' style={{boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>
    <img src={logo} alt="Logo" width={135} height={40}  className='ml-10 mt-2 ' />
    <ul className='flex justify-between gap-10 items-center max-lg:hidden'>
      {
        navLinks.map((item) => (
          <li key={item.label} className=' hover:bg-[#ff7300] rounded-[20px] p-3 hover:text-black '>
            <a href={item.href} className='text-lg text-black'>
              {item.label}
            </a>
          </li>
        ))
      }
    </ul>
    <div className='flex gap-2 text-lg items-center leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 hover:bg-[#ff7300] rounded-[20px] p-3 hover:text-black hover:text-xl'>
      <a href='/'>Sign in</a>
      <span>/</span>
      <a href='/'>Explore now</a>
    </div>
    <div className='hidden max-lg:block'>
    <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
             
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
       
      </div>
    </div>
  </div>
</nav>
    </div>
  </div>
  </header>
  )
}

export default Nav