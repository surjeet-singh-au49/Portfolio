import { BrowserRouter } from "react-router-dom"

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "../src/components";


const App = () => {
  return (
    <BrowserRouter>

    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-no-repeat bg-center">
        <Navbar />
        <Hero />

      </div>
      {/**these components are all sections */}
      <About />
      <Experience />
      <Tech/>
      <Works/>
      <Feedbacks/>
{/**we need this so that we can display our 3D stars object */}

      <div className="relative z-0" >
        <Contact />
        <StarsCanvas />
        
      </div>
      
    </div>
    </BrowserRouter>
  )
}


  

export default App
