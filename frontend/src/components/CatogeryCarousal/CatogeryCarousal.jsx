import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { Button } from '../ui/button'

function CatogeryCarousal() {
    const category = [
        "backend developer",
        "frontend developer",
        ".Net developer",
        "Full Stack developer",
        "UI/UX Designer",
        ".Net developer",
        "Full Stack developer",
        "UI/UX Designer"
    ]
  return (
    <div>
        <Carousel className="w-full  max-w-xl mx-auto my-20">
            <CarouselContent>
                {
                   category.map((categry, index)=>(
                    <CarouselItem className="md:basic-1/3 lg-basic-1/3">
                        <Button className="px-10 py-1 ">{categry}</Button>
                    </CarouselItem>
                   ))
                }
            </CarouselContent>
        </Carousel>
    </div>
  )
}

export default CatogeryCarousal