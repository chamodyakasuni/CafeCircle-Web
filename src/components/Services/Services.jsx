// eslint-disable-next-line no-unused-vars
import React from 'react'
import Img1 from '../../assets/Coffee2.png'
import Img2 from '../../assets/image2.png'

const ServicesData = [
    {
        id: 1,
        img:Img1,
        name:"Espresso",
        description:
        "Espresso is a coffee-making method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.",
        aosDelay: "100",
    },

    {
        id: 2,
        img: Img1,
        name: "Americano",
        description:
            "Americano or American is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee. ",
        aosDelay: "100",
    },

    {
        id: 3,
        img: Img1,
        name: "Cappuccino",
        description:
            "A cappuccino is an espresso-based coffee drink that originated in Italy and is traditionally prepared with steamed milk foam.",
        aosDelay: "100",
    },
    
];

const ServicesBeanData = [
    {
        id: 1,
        img: Img2,
        name: "Arabica coffee beans",
        description:
            "Arabica coffee beans are a type of coffee made from the beans of the Coffea arabica plant. Arabica originated in the southwestern highlands of Ethiopia and is the most popular kind of coffee worldwide.",
        aosDelay: "100",
    },

    {
        id: 2,
        img: Img2,
        name: "Excelsa coffee beans",
        description:
            "Excelsa coffee beans are a type of coffee made from the beans of the Coffea excelsa plant. Excelsa originated in Southeast Asia and is known for its tart and fruity flavor.",
        aosDelay: "100",
    },

    {
        id: 3,
        img: Img2,
        name: "Liberica coffee beans",
        description:
            "Liberica coffee beans are a type of coffee made from the beans of the Coffea liberica plant. Liberica originated in West Africa and is known for its unique and bold flavor.",
        aosDelay: "100",
    },

];

const Services = () => {
  return (
    <>
    <span id='services'></span>
    <div className='py-10'>
        <div className='container'>
              {/* coffee section */}
        {/* header title */}
        <div 
        data-aos='fade-up'
        className='text-center mb-20'>
        <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                Best Coffee for You</h1>
        </div>    
        {/* services Card section */}
        <div className='grid grid-cols-1 
        sm:grid-cols-2 md:grid-cols-3 
        gap-14 md:gap-5 place-items-center'>
        { ServicesData.map((data, index) =>{
                return(
                    <div 
                    data-aos='fade-up'
                    data-aos-delay={data.aosDelay}
                    key={index}
                    className='rounded-2xl bg-white 
                    hover:bg-primary hover:text-white 
                    shadow-xl duration-200 max-w-[300px] 
                    group relative'>
                    {/* img section */}
                        <div className='h-[122px]'>
                                <img src={data.img} alt=""
                                    className='max-w-[200px] block mx-auto 
                                    transform -translate-y-14 group-hover:scale-110 
                                    group-hover:rotate-6 duration-300' />
                        </div>
                        {/* text section */}
                        <div className='p-4 text-center'>
                            <h1 className='text-xl font-bold'>{data.name}</h1>
                            <p className='text-gray-500 group-hover:text-white 
                            duration-300 text-sm line-clamp-2'>{data.description}</p>
                        </div>
                    </div>
                );
            })
        }
            <div>
            </div>
        </div>
        {/* beans section */}
        {/* header title */}
              <div 
              data-aos='fade-up'
              className='text-center mb-20'>
                  <h1 className='text-4xl font-bold font-cursive text-gray-800 py-10'>
                     
                     Best Beans for You</h1>
              </div>
                {/* services Card section */}
              <div className='grid grid-cols-1 
             sm:grid-cols-2 md:grid-cols-3 
             gap-14 md:gap-5 place-items-center'>
                  {ServicesBeanData.map((data, index) => {
                      return (
                          <div
                              data-aos='fade-up'
                              data-aos-delay={data.aosDelay}
                              key={index}
                              className='rounded-2xl bg-white 
                    hover:bg-primary hover:text-white 
                    shadow-xl duration-200 max-w-[300px] 
                    group relative'>
                              {/* img section */}
                              <div className='h-[122px]'>
                                  <img src={data.img} alt=""
                                      className='max-w-[200px] block mx-auto 
                                    transform -translate-y-14 group-hover:scale-110 
                                    group-hover:rotate-6 duration-300' />
                              </div>
                              {/* text section */}
                              <div className='p-4 text-center'>
                                  <h1 className='text-xl font-bold'>{data.name}</h1>
                                  <p className='text-gray-500 group-hover:text-white 
                            duration-300 text-sm line-clamp-2'>{data.description}</p>
                              </div>
                          </div>
                      );
                  })
                  }
                  <div>
                  </div>
              </div>
        </div>
    </div>
    </>
  )
}

export default Services