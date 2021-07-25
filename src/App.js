import React from 'react';
import emojis from 'emojis';

function App() {

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const [textColour, setTextColour] = React.useState('text-black')

  return (
    <div className={isDarkMode ? "bg-black bg-opacity-60 " : " "}>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 ">
        <div className="w-full h-auto flex flex-wrap items-center rounded-lg">
          <div className={isDarkMode ? "w-full lg:w-2/5  mx-6 lg:mx-0 shadow-2xl h-full bg-black opacity-75 rounded-lg" :  "w-full lg:w-2/5  mx-6 lg:mx-0 shadow-2xl h-full bg-white opacity-75 rounded-lg" }>
            
          
            <div className="p-4 md:p-8 text-center lg:text-left">
             
              <h1 className={isDarkMode ? "text-3xl text-center font-bold pt-8 lg:pt-0 text-white" : "text-3xl text-center font-bold pt-8 lg:pt-0 text-black" }>Aidan Perera</h1>
              <div className="mx-auto w-full pt-3 border-b-2 border-blue-500 opacity-25"></div>

              <p className="pt-4 text-base flex items-center justify-center lg:justify-start">
                <div className="text-lg flex w-full justify-evenly">
                  <span>{emojis.unicode(' :coffee: ')}</span>
                  <span>{emojis.unicode(' :computer: ')}</span>
                  <span>{emojis.unicode(' :iphone: ')}</span>
                  <span>{emojis.unicode(' :movie_camera: ')}</span>
                  <span>{emojis.unicode(' :video_game: ')}</span>
                  <span>{emojis.unicode(' :beers: ')}</span>
                </div>
              </p>

              <div className="mx-auto w-full pt-3 border-b-2 border-blue-500 opacity-25"></div>
              
              <p className={"pt-4 text-base flex items-center justify-center lg:justify-start "+textColour} >
                <i class="fas fa-briefcase mr-4"></i>
                <div className="text-sm">
                  Web & Mobile Application Developer at <a href="https://fonsekainnovations.com" className="hover:text-blue-500" target="_blank">Fonseka Innovations</a>
                </div>
              </p>

            
              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <div className="flex space-x-6 md:order-2 justify-center text-xl">
                  <a href="https://raidan.com.au/contributors/aidan-perera" target="_blank" rel="noopener noreferrer"
                      className={"focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0 text-black hover:text-blue-500 "+textColour}>
                      <i className="fas fa-globe"></i>
                  </a>
                  <a href="https://raidan.com.au/contributors/aidan-perer" target="_blank" rel="noopener noreferrer"
                      className={" focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0 text-black hover:text-blue-500 "+textColour}>
                      <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/ruchaidandev" target="_blank" rel="noopener noreferrer"
                      className={" focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0 text-black hover:text-blue-500 "+textColour}>
                      <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.instagram.com/ruchaidan/" target="_blank" rel="noopener noreferrer"
                      className={" focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0  text-black hover:text-blue-500 "+textColour}>
                      <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/aidan_perera" target="_blank" rel="noopener noreferrer"
                      className={"focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0  text-black hover:text-blue-500 "+textColour}>
                      <i className="fab fa-twitter className="></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCPgkXrIkuc3zCMu7xY_as0Q" target="_blank"
                      rel="noopener noreferrer"
                      className={"focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0  text-black hover:text-blue-500 "+textColour}>
                      <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.pinterest.com.au/ruchaidan/" target="_blank" rel="noopener noreferrer"
                      className={" focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0  text-black hover:text-blue-500 "+textColour}>
                      <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
              

            </div>

          </div>
          
          <div className="w-full lg:w-3/5">
            <img src="https://raidan.com.au/images/apdev/aidan_perera.png" className="hidden lg:block rounded-lg" />
            
          </div>
        </div>
   
    
    
        <div className="absolute top-0 right-0 h-12 w-18 p-4">
          <button className="focus:outline-none" onClick={() => {setIsDarkMode(!isDarkMode); setTextColour( textColour === 'text-black' ? 'text-white' : 'text-black' )} }>
          {isDarkMode ? (
            <span>{emojis.unicode(' :sunny: ')}</span>
            ) : (
            <span>{emojis.unicode(' :full_moon: ')}</span>
          )}
          </button>
        </div>
  
      </div>
    </div>
  );
}

export default App;
