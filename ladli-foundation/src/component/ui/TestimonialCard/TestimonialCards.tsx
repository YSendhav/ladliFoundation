import React from "react";
import ATMFlippableCard from "../../atoms/ATMFlippableCard/ATMFlippableCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'react-multi-carousel/lib/styles.css';
type Props = {
  testimonialName: string;
  testimonialPositon: string;
  testimonialImage: string;
  testimonialDescription: string;
};
type TestimonialProps = {
  testimonialData: Props[];
};
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3, // Show 4 slides on super large desktop
        slidesToSlide: 5, // Move 4 slides at a time
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3, // Show 4 slides on desktop
        slidesToSlide: 5, // Move 4 slides at a time
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2, // Show 2 slides on tablet
        slidesToSlide: 2, // Move 2 slides at a time
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1, // Show 1 slide on mobile
        slidesToSlide: 1, // Move 1 slide at a time
        itemClass: "p-[5px]",
      },
};
const TestimonialCards = ({ testimonialData }: TestimonialProps) => {
  return (
    <div className=" ">
      <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
    //   centerMode={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      rewindWithAnimation={true}
      autoPlay={false}   
      arrows={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="transform 400ms ease-in-out" // You can adjust this as needed
      transitionDuration={400} // You can adjust this as needed
    //   rewind={true}
      sliderClass="w-screen h-screen  carousel-item-1" 
      containerClass="w-full h-full " 
      itemClass="p-[35px] "
      >
        {testimonialData.map((testimonial) => {
          return (
            <div className="testimonial-items">
              <ATMFlippableCard
                children1={
                  <div className="p-3 custom-shadow text-center testimonial-item">
                    <img
                      src={testimonial.testimonialImage}
                      alt=""
                      className="p-2"
                    />
                    <div className="py-2">
                      <h1 className="font-medium text-black ">
                        {testimonial.testimonialName}
                      </h1>
                      <p className="text-gray-600 text-[12px] font-medium">
                        {testimonial.testimonialPositon}
                      </p>
                    </div>
                  </div>
                }
                children2={
                  <div className="p-2">
                    <div className="flex gap-4 py-2">
                      <img
                        src={testimonial.testimonialImage}
                        alt=""
                        className="w-[65px] h-[65px] rounded-full"
                      />
                      <div className="flex-1">
                        <h1 className="font-medium text-black text-[14px]">
                          {testimonial.testimonialName}
                        </h1>
                        <p className="text-gray-600 text-[10px] font-medium">
                          {testimonial.testimonialPositon}
                        </p>
                      </div>
                    </div>
                    <div className=" p-4 text-justify text-[#333] text-[16px]">
                      {testimonial.testimonialDescription}
                    </div>
                  </div>
                }
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TestimonialCards;
