import React from 'react'
// this will be used to tilt the card when hover.
import { Tilt } from 'react-tilt';
import {motion} from "framer-motion"

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import  SectionWrapper  from '../hoc';


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      {/**fadeIn("direction", "type", "delay","duration") */}
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75 )} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' 
      >

        <div options = {{
          max:45,
          scale: 1,
          speed: 450
        }} 
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' >

          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>
        </div>

      </motion.div>
      
    </Tilt>
  )
}


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText} >Introduction</p>
      <h2 className={styles.sectionHeadText} > Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' >

        I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Three.js, Scss and ChakraUI, TailwindCSS. I'm a quick learner and can create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!

    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10' >

      {
        services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))
      }

    </div>
    </>
  )
}

export default SectionWrapper(About,"about");