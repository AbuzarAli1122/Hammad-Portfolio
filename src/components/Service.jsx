

const services=[
    
    {
        id: 1,
        title:"Manual Testing",
        description:"I specialize in manual testing to ensure application functionality, usability, and reliability. My focus is on finding critical bugs and ensuring smooth user interactions."
    },
    {
        id: 2,
        title:"Api Testing",
        description:"Proficient in testing RESTful APIs, I validate response accuracy, performance, and security using tools like Postman to guarantee seamless backend communication."
    },
    {
        id: 3,
        title:"Automation Using Cypress",
        description:"I use Cypress to create efficient end-to-end automated test cases, reducing regression time and improving overall test coverage."
    },
    {
        id: 4,
        title:"Web Application",
        description:"I have tested a wide range of applications including web, mobile, games, and desktop platforms, ensuring a consistent and bug-free user experience across all devices."
    },
    {
        id: 5,
        title:"Mobile Application",
        description:"I have tested a wide range of applications including web, mobile, games, and desktop platforms, ensuring a consistent and bug-free user experience across all devices."
    },
    {
        id: 6,
        title:"Games/Desktop Application",
        description:"I have tested a wide range of applications including web, mobile, games, and desktop platforms, ensuring a consistent and bug-free user experience across all devices."
    },
    
]
function Service() {
  return (
    <>
    <div className='bg-black text-white py-20 ' id='service'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
         <h2 className=' text-4xl font-bold text-center mb-12'>Services</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map(item=>(
                <div
                className='bg-gray-800 px-8 pb-6 rounded-lg hover:shadow-lg transform
                transition-transform  duration-300 hover:scale-105'>
                    <div className='text-right text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-500 to-blue-400'>
                        
                    </div>
                    <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-500 to-blue-400'>{item.title}</h3>
                    <p className='mt-2 text-gray-300'>{item.description}</p>
                    <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>
                </div>
            ))}
         </div>
    </div>
    </div>
    </>
  )
}

export default Service
