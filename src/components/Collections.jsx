
import image1 from '../assets/WechatIMG10.jpg_t.jpg';
import image2 from '../assets/WechatIMG6.jpg_t.jpg';
import image3 from '../assets/WechatIMG9.jpg_t.jpg';

const categories = [
    {
        id: 1,
        title: "Ceramics",
        description: "Explore our exquisite collection of modern ceramics, perfect for adding a touch of elegance to your kitchen and dining experience.",
        imageUrl: image1,
        buttonText: "Shop Now"
    },
    {
        id: 2,
        title: "Solar",
        description: "Discover our range of eco-friendly solar solutions, designed to harness the power of the sun and bring sustainable energy to your home or business.",
        imageUrl: image2,
        buttonText: "Shop Now"
    },
    {
        id: 3,
        title: "Motorcycles",
        description: "Experience the thrill of electric mobility with our cutting-edge electric motorcycles, combining performance, style, and sustainability.",
        imageUrl: image3,
        buttonText: "Shop Now"
    }
]

const Collections = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-2 h-full w-screen">
       {categories.map((category) => {
        return(
            <div key={category.id} className="relative text-white">
                <div className='absolute z-10 p-4 flex flex-col gap-6 sm:gap-4 lg:gap-8'>
                    <div className='text-2xl'>{category.title}</div>
                    <span className='h-2 w-10 bg-orange-400'></span>
                    <div className=''>{category.description}</div>
                    <button className='p-2 cursor-pointer bg-orange-500'>{category.buttonText}</button>
                </div>
                
                <div className='w-full h-full absolute bg-[rgba(0,0,0,0.5)] '></div>
                <div>
                    <img src={category.imageUrl} alt={category.title} className=" w-full h-[250px]  sm:h-[350px] md:h-[300px] object-cover "/>
                </div>
            </div>
        )
       } )}
    </div>
  )
}

export default Collections;