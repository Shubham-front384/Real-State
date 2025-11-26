import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { useState } from "react"

import "swiper/css"
import "swiper/css/navigation"
import "remixicon/fonts/remixicon.css"

import Bathroom from "/Img/Bathroom.png"

const cardData = [
  {
    id: 1,
    title: "Rustic Retreat Cottage",
    desc: "A peaceful 4-bedroom villa with a scenic hill view...",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1000",
    bed: "4-Bedroom",
    bath: "3-Bathroom",
    type: "Villa",
    price: "₹85,00,000",
  },
  {
    id: 2,
    title: "Skyline Luxury Apartment",
    desc: "Modern 3 BHK apartment on the 21st floor with a city skyline view...",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1000",
    bed: "3-Bedroom",
    bath: "2-Bathroom",
    type: "Apartment",
    price: "₹1,20,00,000",
  },
  {
    id: 3,
    title: "Urban Elite Penthouse",
    desc: "A top-floor penthouse with private terrace and jacuzzi...",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1000",
    bed: "4-Bedroom",
    bath: "3-Bathroom",
    type: "Penthouse",
    price: "₹3,50,00,000",
  },
  {
    id: 4,
    title: "Countryside Farmhouse",
    desc: "Farmhouse with open greenery and fresh air, ideal for vacations...",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000",
    bed: "3-Bedroom",
    bath: "3-Bathroom",
    type: "Farmhouse",
    price: "₹95,00,000",
  },
  {
    id: 5,
    title: "Lakeside Wooden Villa",
    desc: "Stunning villa located right beside a calm lake...",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1000",
    bed: "5-Bedroom",
    bath: "4-Bathroom",
    type: "Villa",
    price: "₹2,40,00,000",
  },
  {
    id: 6,
    title: "Modern City Condo",
    desc: "Compact and stylish 2 BHK with premium amenities...",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000",
    bed: "2-Bedroom",
    bath: "2-Bathroom",
    type: "Condo",
    price: "₹75,00,000",
  },
  {
    id: 7,
    title: "Prime Commercial Space",
    desc: "Large commercial office for startups and agencies...",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000",
    bed: "Studio",
    bath: "1-Bathroom",
    type: "Commercial",
    price: "₹1,80,00,000",
  },
  {
    id: 8,
    title: "Hilltop Glass House",
    desc: "A transparent glass-style house with mountain views...",
    image: "https://images.unsplash.com/photo-1472220625704-91e1462799b2?q=80&w=1000",
    bed: "3-Bedroom",
    bath: "3-Bathroom",
    type: "Villa",
    price: "₹2,95,00,000",
  },
  {
    id: 9,
    title: "Budget Friendly Flat",
    desc: "Affordable 1 BHK for small families or bachelors...",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1000",
    bed: "1-Bedroom",
    bath: "1-Bathroom",
    type: "Apartment",
    price: "₹32,00,000",
  },
  {
    id: 10,
    title: "Classic Heritage Bungalow",
    desc: "Old charm bungalow restored with modern amenities...",
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1000",
    bed: "4-Bedroom",
    bath: "4-Bathroom",
    type: "Bungalow",
    price: "₹1,65,00,000",
  },
  {
    id: 11,
    title: "Golf View Premium Villa",
    desc: "Luxury villa facing a lush golf course...",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1000",
    bed: "5-Bedroom",
    bath: "5-Bathroom",
    type: "Villa",
    price: "₹4,20,00,000",
  },
  {
    id: 12,
    title: "Beachfront Holiday Home",
    desc: "A cozy wooden home with direct access to beach...",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000",
    bed: "3-Bedroom",
    bath: "3-Bathroom",
    type: "Villa",
    price: "₹2,10,00,000",
  },
  {
    id: 13,
    title: "Smart Home Apartment",
    desc: "Fully equipped smart home with voice controls...",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000",
    bed: "2-Bedroom",
    bath: "2-Bathroom",
    type: "Apartment",
    price: "₹82,00,000",
  },
  {
    id: 14,
    title: "Luxury Resort-Style Villa",
    desc: "Villa with pool, garden, and private spa...",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1000",
    bed: "6-Bedroom",
    bath: "6-Bathroom",
    type: "Villa",
    price: "₹5,80,00,000",
  },
  {
    id: 15,
    title: "Corporate Office Floor",
    desc: "Complete office floor with cabins and workstations...",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1000",
    bed: "Studio",
    bath: "2-Bathroom",
    type: "Commercial",
    price: "₹3,30,00,000",
  },
  {
    id: 16,
    title: "Green Villa Retreat",
    desc: "Eco-friendly villa with solar panels and rainwater harvesting...",
    image: "https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=1000",
    bed: "4-Bedroom",
    bath: "4-Bathroom",
    type: "Villa",
    price: "₹1,90,00,000",
  },
  {
    id: 17,
    title: "Elegant Studio Loft",
    desc: "Compact loft with double-height ceiling and premium interiors...",
    image: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?q=80&w=1000",
    bed: "Studio",
    bath: "1-Bathroom",
    type: "Loft",
    price: "₹48,00,000",
  },
  {
    id: 18,
    title: "Royal Mansion Estate",
    desc: "Huge 8-bedroom mansion with private garden and pool...",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1000",
    bed: "8-Bedroom",
    bath: "8-Bathroom",
    type: "Mansion",
    price: "₹12,00,00,000",
  },
  {
    id: 19,
    title: "City Center 2BHK",
    desc: "Located in the heart of the city with all major facilities nearby...",
    image: "https://images.unsplash.com/photo-1512914881148-488d9731c9c8?q=80&w=1000",
    bed: "2-Bedroom",
    bath: "2-Bathroom",
    type: "Apartment",
    price: "₹68,00,000",
  },
  {
    id: 20,
    title: "Premium Row House",
    desc: "Elegant row house with private parking and rooftop space...",
    image: "https://images.unsplash.com/photo-1534531688091-a458257992cb?q=80&w=1000",
    bed: "3-Bedroom",
    bath: "3-Bathroom",
    type: "Row House",
    price: "₹1,25,00,000",
  },
];

const PropertiesCard = () => {

  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="text-white">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = ".custom-prev";
          swiper.params.navigation.nextEl = ".custom-next";
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1);
        }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
        }}
      >
        {cardData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[#1a1a1a] rounded-2xl p-7 border border-[#222] hover:border-[#333] transition flex flex-col gap-4 md:gap-8">
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover rounded-xl" />

              <div className="flex flex-col">
                <h2 className="text-xl font-semibold md:text-2xl">{item.title}</h2>
                <p className="text-lg font-medium text-gray-400 md:text-lg">
                  {item.desc} <span className="text-white cursor-pointer underline">Read More</span>
                </p>
              </div>

              {/* Tags */}
              <div className="flex gap-3 flex-wrap">
                <div className="flex items-center gap-2 bg-[#242424] px-4 py-2 rounded-full text-sm">
                  <i className="ri-hotel-bed-fill text-2xl md:text-2xl"></i>
                  <span className="text-lg">
                    {item.bed}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#242424] px-4 py-2 rounded-full text-sm">
                  <img src={Bathroom} alt="bathroom-img" className="md:w-7" />
                  <span className="text-lg">
                    {item.bath}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#242424] px-4 py-2 rounded-full text-sm">
                  <i className="ri-building-2-fill text-2xl md:text-2xl"></i>
                  <span className="text-lg">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex gap-15 items-center">
                <p className="text-gray-400 text-lg font-medium">
                  Price <br />
                  <span className="text-white text-2xl font-semibold mt-1">
                    {item.price}
                  </span>
                </p>

                {/* Button */}
                <button className="font-medium w-full bg-purple-600 hover:bg-purple-700 transition text-white py-3 rounded-xl text-lg px-3.5">
                  View Property Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Footer Section (Slide Count + View All) */}
      <div className="flex justify-between items-center mt-10 px-2 md:relative md:my-15">
        <button className="border-2 border-gray-400 px-5 py-2 rounded-lg text-sm flex items-center gap-2 tracking-wider md:hidden">
          View All Properties
        </button>

        <div className="flex items-center gap-4 md:absolute md:right-0">
          <button className="custom-prev p-3 rounded-full cursor-pointer">
            <i className="ri-arrow-left-line text-3xl border-2 border-gray-500 p-2.5 rounded-full"></i>
          </button>

          <p className="text-sm opacity-70">
            {String(currentSlide).padStart(2, "0")} of {String(cardData.length).padStart(2, "0")}
          </p>

          <button className="custom-next p-3 rounded-full cursor-pointer">
            <i className="ri-arrow-right-line text-3xl border-2 border-gray-500 p-2.5 rounded-full"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
