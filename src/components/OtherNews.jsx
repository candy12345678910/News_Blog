import React from "react";
import Slider from "react-slick";


const OtherNews =()=>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const a=[1,2,3,4,5]
    return(

        <div className="h-[auto] w-[100vw] m-[20px] p-[3vmax]">
            <Slider {...settings}>
                {
                    a.map((i)=>{
                        return(
                            <div className="h-[50vh] w-[100vw] bg-slate-400 px-[10px] flex flex-col items-center justify-center rounded-full">
                                <p className="text-red text-center font-bold">{i}</p>
                                <p className="text-red text-center font-bold">Testing {i}</p>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default OtherNews