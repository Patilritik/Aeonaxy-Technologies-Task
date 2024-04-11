import React from 'react'
import Card from '../Components/Card'
import CardItem from '../Items/CardItems'

export default function Section3() {
    return (
        <div>
            <h1 className='font-bold text-xl md:mt-12 md:text-start sm:text-center pl-4'>Continue Learning</h1>

            <div class="container mx-auto p-8">
                <div class="flex flex-row flex-wrap -mx-2 border p-3 rounded ">
                    {
                        CardItem.map((items, index) => {
                            console.log(items.title);
                            return <Card key={index} title={items.title} image={items.image} subject={items.subject} />
                        })
                    }

                </div>
            </div>
        </div>
    )
}
