import image from '../assets/istockphoto-2167474861-1024x1024.jpg'

const AboutUs = () =>{
    return(
        <>
        <div className="w-screen h-[450px] sm:h-[370px] md:h-[270px] " style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className='w-full h-[450px] sm:h-[370px] md:h-[270px]  absolute  bg-[rgba(3,5,122,0.75)]'></div>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-4 absolute z-10 p-6 text-white '>
                <div className="gap-4 flex flex-col">
                    <h1 className="text-4xl leading-15">More than Shopping</h1>
                    <p>Welcome to ShopSphere Africa, your trusted online marketplace for premium lifestyle essentials that bring comfort, Style, innovation, freshness, and elegance into everyday living.</p>
                </div>

                <div className=''>
                    <div className='bg-[rgba(0,0,255,0.5)]  p-4 lg:p-8 shadow-lg'>
                        <h1 className='text-4xl my-2'>Our Mission</h1>
                        <div className='h-1.5 w-10 bg-white my-2'></div>
                        <p>To make premium products and innovative solutions accessible to individuals and businesses across Africa, while delivering a shopping experience built on trust, affordability, and convenience.</p>
                    </div>
                </div>
           </div>

        </div>
        
        </>
    )
}

export default AboutUs