import React from 'react'
import { User } from 'lucide-react'

export const About = () => {
  return (
    <div className='border-[var(--card-border)] border-1 max-w-[90%] mx-auto text-white p-5 my-5  rounded-xl'>
        {/* image */}
     <div>

     </div>
     {/* about */}
     <div>

     <span>
        <User />
        <span>About me</span>
     </span>
     <p>I am a Front-End Developer with over 4 years of experience building responsive, user-friendly, and scalable web applications, primarily using React.js. Throughout my professional journey, I have focused on creating intuitive user experiences while maintaining clean, maintainable, and efficient code.</p>
     <p>Over time, I have expanded my expertise beyond front-end development and developed strong knowledge of backend technologies through hands-on work on personal projects. This has given me a broader understanding of full-stack application development, including API integration, server-side logic, databases, and application architecture.</p>
     </div>
    </div>
  )
}
