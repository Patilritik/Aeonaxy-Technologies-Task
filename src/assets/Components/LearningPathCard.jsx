
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function LearningPathCard(props) {
    return (
        <div>
            <div class="flex items-center justify-center  p-8">
                <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition border hover:shadow-lg">
                    <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 md:block max-[600px]:hidden sm:p-0 sm:m-0">
                        <img
                            src={props.details.image}
                            alt="image"
                            class="h-full w-full object-cover "
                        />
                    </div>
                    <div class="p-6">
                        <p class="mb-4 text-gray-600 block font-sans font-bold text-xs leading-relaxed   antialiased">
                            6 courses
                        </p>
                        <h4 class="mb-2 block text-black font-sans text-lg font-bold leading-snug tracking-normal  antialiased">
                            {props.details.title}
                        </h4>
                        <p class="mb-8 block font-sans text-base font-normal leading-relaxed  antialiased">
                            {props.details.discription}
                        </p>
                        <a class="inline-block" href="#">
                            <button
                                class="flex select-none items-center gap-2 px-3 py-2 text-center align-middle font-sans text-xs font-bold text-black bg-yellow-500 transition-all hover:bg-yellow-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg   duration-300"
                                type="button"
                            >
                               
                               <FontAwesomeIcon icon={faBookmark} />
                              In Progress

                            </button>
                        </a>
                    </div>
                </div>

            </div>

        </div>

    )
}
