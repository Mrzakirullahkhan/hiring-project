import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";

function CatogeryCarousal() {
  const category = [
    "backend developer",
    "frontend developer",
    ".Net developer",
    "Full Stack developer",
    "UI/UX Designer",
    ".Net developer",
    "Full Stack developer",
    "UI/UX Designer",
  ];
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent className="flex   justify-center">
          {category.map((categry, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3 ">
              <Button variant="outline" className="px-10 py-1 rounded-full  border-green-100">
                {categry}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}

export default CatogeryCarousal;
