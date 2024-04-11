import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCalendarDays, faEnvelope, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link ,NavLink } from 'react-router-dom'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <div className='font-poppins'>

            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
            <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 border border-b-gray-200  ">
                <div x-data="{ open: false }" class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div class="p-4 flex flex-row items-center justify-between">
                        <a href="#" class="text-lg  tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline font-thin" >BRILLIANT</a>

                        <button class="md:hidden block rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                                {
                                    open ?
                                        <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        :
                                        <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                                }

                            </svg>
                        </button>
                    </div>

                    <nav className={`xl:hidden sm:flex md:items-center p-3 ${open ? 'block' : 'hidden'}`}>
                        <div className="md:ml-auto"> {/* This div will align its children to the right */}
                            <Link to="/Home"  className="block mt-4 text-gray-900  p-1 rounded-md md:mt-0 md:ml-4 hover:bg-gray-200 hover:text-gray-900"><FontAwesomeIcon icon={faHouse} className='pr-1' />Home</Link>
                            <Link to="/Courses" className="block mt-4 text-gray-900  p-1 rounded-md md:inline-block md:mt-0 md:ml-4"><FontAwesomeIcon icon={faBook} className='pr-1' />Courses</Link>
                            <Link to="/Today" className="block mt-4 text-gray-900 p-1 rounded-md md:inline-block md:mt-0 md:ml-4"> <FontAwesomeIcon icon={faCalendarDays} className='pr-1' />
                                Today</Link>
                       
                        </div>
                    </nav>


                    <nav class=" flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-evenly md:flex-row " >
                        <Link to="/"   class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200  focus:shadow-outline " href="#" ><FontAwesomeIcon icon={faHouse} className='pr-1' />Home</Link>

                        <Link to='/Courses' class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"><FontAwesomeIcon icon={faBook} className='pr-1' />Courses</Link>
                        <Link to='/Today' class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                            <FontAwesomeIcon icon={faCalendarDays} className='pr-1' />
                            Today</Link>
                        <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent  md:mt-0 md:ml-4  " href="#">
                            <input type="text" className='border border-gray-200 rounded-md outline-gray-400 px-2 font-light' />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray-300 absolute p-1 focus:hidden' />
                        </a>
                        <Link to={'/'} class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                            <div className='flex  items-center '>
                                <p>
                                    5
                                </p>
                                <img src="/Images/thunder.png" alt="" className='w-4 h-4' />
                            </div>
                        </Link>
                        <button className='text-green-600  font-semibold px-10 rounded-md text-sm border border-green-600 hover:bg-green-600 hover:text-white  transition-all duration-300'>START TRAIL</button>
                    </nav>
                </div>
            </div>
        </div>
    )
}
