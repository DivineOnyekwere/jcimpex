import { useState, useEffect  } from "react";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

import slide1 from '../assets/istockphoto-1043802376-1024x1024.jpg'
import slide2 from '../assets/istockphoto-1432161184-1024x1024.jpg'
import slide3 from '../assets/istockphoto-1864237344-1024x1024.jpg'

const slides = [
        { id: 1, 
          image: slide1, 
          title: 'Seamless Global Trade, Delivered with Nigerian Expertise', 
          description: 'We are your trusted gateway to the world. Specializing in import, export, and procurement solutions that bridge distances and unlock new opportunities for your business.',
          buttonText: 'Learn More' },
        { id: 2, 
          image: slide2, 
          title: 'From Global Sourcing to Your Doorstep. Effortlessly.', 
          description: 'Let JCIMPEX handle the complexities of international procurement, customs clearance, and logistics. We ensure your goods arrive safely, on time, and on budget.', 
          buttonText: 'Learn More' },
        { id: 3, image: slide3, 
          title: ' Beyond Logistics. We Are Your Strategic Partner for Growth.', 
          description: 'At JCIMPEX, we are committed to your success. We provide tailored, end-to-end supply chain solutions that drive efficiency and fuel your business expansion.' 
          , buttonText: 'Learn More' },
      ];


    const Herobanner = () => {


      const [currentSlide, setCurrentSlide] = useState(0);
       useEffect(() => {
        const slideInterval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 5 seconds

        return () => clearInterval(slideInterval);
       }, [currentSlide]);

      const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }

      const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      }
       return (
        <>
            <div className="overflow-hidden relative">
                <div className="flex" style={{ transform: `translateX(-${currentSlide * 100}%)` }} >
                {slides.map((slide,index) => {
                  return(
                    <div key={index} className="min-w-full h-full transition-transform duration-500 ease-in-out relative">
                     <div className="h-[500px] w-screen absolute bg-[rgba(0,0,0,0.56)]"></div>
                      <div className="h-1/2 w-1/2  flex flex-col top-1/5 left-1/5 absolute text-white gap-4"> 
                        <h1 className=" text-lg sm:text-2xl md:text-4xl ">{slide.title}</h1>
                        <p className="" >{slide.description}</p>
                        <button className="cursor-pointer w-30  p-2 bg-orange-500">{slide.buttonText}</button>
                      </div>
                      <img src={slide.image} alt={slide.id} className="w-screen h-[500px] object-cover"/>
                     
                    </div>
                  )})
                }
                </div>
            </div>
            <button className="p-4 bg-white rounded-full shadow-md absolute top-1/2 left-10 hover:cursor-pointer" onClick={prevSlide}>
              <FaAnglesLeft className="text-orange-500"/>
            </button>
            <button className="p-4 bg-white rounded-full shadow-md absolute top-1/2 right-10  hover:cursor-pointer" onClick={nextSlide}>
              <FaAnglesRight className="text-orange-500"/>
            </button>
        </>
       )
    };

    export default Herobanner;