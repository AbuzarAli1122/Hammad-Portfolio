import pic from '../assets/Disney-clone.jpg'
import shoe from '../assets/nike-shoe.png'
import organic from '../assets/organic.jpg'
import AiChatBot from '../assets/AirAi.jpg'
import GameTesting from '../assets/GameTesting.jpg'


const projects=[
    {
        id:1,
        name:"Huupe Mini",
        Technology:"Huupe Mini is a smart basketball hoop designed to enhance the basketball training experience.",
        image:pic,
        github:"https://github.com/AbuzarAli1122/Disney-Clone.git"
    },
    {
        id:2,
        name:"Project Management System (DMS) ",
        Technology:"1. Conducted functional and UI testing for the Project Management System, identifying and documenting bugs",
        image:organic,
        github:"https://github.com/AbuzarAli1122/EcommerceSneakers.git"
    },

    {
        id:3,
        name:"E-Commerce Website",
        Technology:"Conducted comprehensive functional testing to validate key features such as product search, cart operations, and checkout processes.",
        image:shoe,
        github:"https://github.com/AbuzarAli1122/Ecommerce-Store-.git"
    },

    {
        id:4,
        name:"Airi Ai chatbot",
        Technology:"Tested AIRI AI chatbot for performance, accuracy, and user interaction.Created and ran test cases to ensure functionality met specs.",
        image:AiChatBot,
        github:"https://github.com/AbuzarAli1122/Ecommerce-Store-.git"
    },

    {
        id:5,
        name:"Game Testing",
        Technology:"Experienced in testing web-based and mobile games, including functional testing, UI testing, and bug tracking. Proficient in identifying and resolving issues related to game performance and usability",
        image:GameTesting
    },
   
]
function Project() {
  return (
    <div className='bg-black text-white py-20 ' id='projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
         <h2 className=' text-4xl font-bold text-center mb-12'> My Projects</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map(item=>(
                <div key={projects.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg 
                transform transition-transform duration-300 hover:scale-110 ease-in-out'>
                    <img src={item.image} className='rounded-lg mb-4  w-full h-48 object-cover' />
                    <h2 className='text-2xl font-bold mb-2'>{item.name}</h2>
                    <p className='text-gray-400 mb-4'>{item.Technology}</p>
                    {/* <a href={item.github} target="_blank" rel="noopener noreferrer" className='inline-block bg-gradient-to-r
                    from-green-400 to-blue-500 text-white  px-4 py-2 rounded-full'>View on GitHub</a> */}
                </div>
            ))}

         </div>
         </div>
         </div>
  )
}

export default Project;
