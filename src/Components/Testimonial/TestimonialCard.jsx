import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { useState } from "react"

import "swiper/css"
import "swiper/css/navigation"
import "remixicon/fonts/remixicon.css"

const testimonials = [
  {
    id: 1,
    rating: 5,
    heading: "Exceptional Service",
    para: "Our experience with this real estate service was truly outstanding. The team helped us find our perfect home with complete transparency and professionalism.",
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Rohit Sharma",
    location: "Mumbai, India",
  },
  {
    id: 2,
    rating: 4,
    heading: "Highly Professional",
    para: "The staff was extremely helpful and guided us through every step. They understood our needs and delivered beyond our expectations.",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000",
    name: "Neha Verma",
    location: "Delhi, India",
  },
  {
    id: 3,
    rating: 5,
    heading: "Smooth Home Buying Experience",
    para: "Buying our first home felt easy and stress-free. The guidance provided was detailed and very informative. Excellent service!",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000",
    name: "Aman Gupta",
    location: "Bengaluru, India",
  },
  {
    id: 4,
    rating: 4,
    heading: "Very Trustworthy",
    para: "I really appreciate the honest suggestions and customer-first attitude. They helped us make the right investment at the right location.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000",
    name: "Pooja Nair",
    location: "Kochi, India",
  },
  {
    id: 5,
    rating: 5,
    heading: "Great Market Knowledge",
    para: "Their market understanding is exceptional. They provided insights that helped us make informed property decisions. Absolutely recommended!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000",
    name: "Siddharth Mishra",
    location: "Lucknow, India",
  },
  {
    id: 6,
    rating: 5,
    heading: "Quick and Reliable",
    para: "The entire process—from shortlisting properties to finalizing the deal—was quick and smooth. The team is very reliable!",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1000",
    name: "Ananya Singh",
    location: "Jaipur, India",
  },
  {
    id: 7,
    rating: 4,
    heading: "Outstanding Support",
    para: "We received end-to-end support throughout our property purchase journey. They patiently answered all our queries.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
    name: "Karan Patel",
    location: "Ahmedabad, India",
  },
  {
    id: 8,
    rating: 5,
    heading: "Value for Money",
    para: "They helped us find a great property at a great price. Truly value for money and extremely cooperative team.",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000",
    name: "Megha Kapoor",
    location: "Chandigarh, India",
  },
  {
    id: 9,
    rating: 4,
    heading: "Highly Recommended",
    para: "Their service quality is top-notch. We found exactly the type of home we were looking for. Definitely recommending to friends and family.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    name: "Rahul Mehta",
    location: "Pune, India",
  },
  {
    id: 10,
    rating: 5,
    heading: "Excellent Guidance",
    para: "They made sure we understood everything clearly before making the final decision. Super helpful and very polite team!",
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1000",
    name: "Shreya Iyer",
    location: "Hyderabad, India",
  },
];

const TestimonialCard = () => {

  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="text-white">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".custom-next-testimonial",
          prevEl: ".custom-prev-testimonial",
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = ".custom-prev-testimonial";
          swiper.params.navigation.nextEl = ".custom-next-testimonial";
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1);
        }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border-2 border-gray-400  rounded-2xl px-7 py-6 hover:border-[#333] transition flex flex-col gap-7 justify-center lg:gap-[40px] lg:p-[50px]">
              {/* Star Img */}
              <div className="star-img flex gap-2">
                {[...Array(item.rating)].map((_, index) => (
                  <i key={index} className="ri-star-s-fill text-amber-300 text-2xl px-3 py-2 border-2 rounded-full border-gray-400"></i>
                ))}
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold md:text-2xl lg:text-[24px]">
                  {item.heading}
                </h2>
                <p className="text-lg font-medium leading-[150%] md:text-lg lg:text-[18px]">
                  {item.para}
                </p>
              </div>
              

              {/* Profile */}
              <div className="flex gap-5 items-center">
                <div>
                  <img src={item.image} alt="user-img" className="w-15 h-15 rounded-full" />
                </div>
                <div>
                  <h5 className="font-medium">
                    <span className="text-lg md:text-xl lg:text-[20px]">
                      {item.name}
                    </span><br />
                    <span className="text-lg text-gray-400 lg:text-[18px]">
                      {item.location}
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Footer Section (Slide Count + View All) */}
      <div className="flex justify-between items-center px-2 mt-10 md:relative md:my-15">
        <button className="border-2 border-gray-400 px-5 py-2 rounded-lg text-sm flex items-center gap-2 tracking-wider capitalize md:hidden">
          view all testimonial
        </button>

        <div className="flex items-center gap-4 md:absolute md:right-0">
          <button className="custom-prev-testimonial p-3 rounded-full cursor-pointer">
            <i className="ri-arrow-left-line text-3xl border-2 border-gray-500 p-2.5 rounded-full"></i>
          </button>

          <p className="text-sm opacity-70">
            {String(currentSlide).padStart(2, "0")} of {String(testimonials.length).padStart(2, "0")}
          </p>

          <button className="custom-next-testimonial p-3 rounded-full cursor-pointer">
            <i className="ri-arrow-right-line text-3xl border-2 border-gray-500 p-2.5 rounded-full"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
