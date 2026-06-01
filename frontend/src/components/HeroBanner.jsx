import {
 FaGithub,
 FaLinkedin,
 FaEnvelope,
 FaReact,
 FaNodeJs
} from "react-icons/fa";

import {
 SiMongodb,
 SiExpress
} from "react-icons/si";
import heroImg from '../assets/hero-image2.png'
import toast from "react-hot-toast";



const HeroBanner = ({data}) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };
    const copyEmail = async () => {

  await navigator.clipboard.writeText(
    "jsumesh1998@gmail.com"
  );

  toast.success(
   "Email copied!"
  );
};

return (

<section
className="
h-screen
flex
flex-col
lg:flex-row
items-center
justify-between
px-8
lg:px-20
py-20
bg-[var(--background)]
relative
overflow-hidden
py-0
"
>

{/* LEFT */}

<div className="flex-1 z-10">

<p className="text-4xl mb-2 text-[var(--text-secondary)]">
{data?.intro}
</p>

<h1
className="
text-7xl
font-extrabold
text-[var(--primary)]
"
>
{data?.name}
</h1>

<h2
className="
text-5xl
font-bold
mt-4
text-[var(--text-secondary)]
"
>
{data?.role}
</h2>

<p
className="
text-[var(--text-secondary)]
mt-6
max-w-lg
leading-8
"
>
{data?.description}
</p>

<div className="flex gap-5 mt-8">

<button
className="
px-7
py-3
rounded-xl
bg-gradient-to-r
from-[var(--gradient-start)]
to-[var(--gradient-end)]
hover:scale-105
transition
"
onClick={()=>scrollToSection("projects")}
>
{data?.button1}
</button>

<button
className="
border
border-[var(--card-border)]
px-7
py-3
rounded-xl
text-[var(--text-secondary)]
"
onClick={()=>scrollToSection("contact")}
>
{data?.button2}
</button>

</div>

<div className="flex gap-5 mt-8 text-2xl">

   <a
    href={data.socials.github}
    target="_blank"
    rel="noopener noreferrer"
   >
    <FaGithub
    className="
    text-[var(--text-secondary)]
    text-3xl
    hover:text-[var(--primary)]
    transition
    "
    />
   </a>

   <a
    href={data.socials.linkedin}
    target="_blank"
    rel="noopener noreferrer"
   >
    <FaLinkedin
    className="
    text-[var(--text-secondary)]
    text-3xl
    hover:text-[var(--primary)]
    transition
    "
    />
   </a>

   <button
    href={data.socials.email}
    onClick={copyEmail}
   >
    <FaEnvelope
    className="
    text-[var(--text-secondary)]
    text-3xl
    hover:text-[var(--primary)]
    transition
    "
    />
   </button>

</div>

</div>


{/* RIGHT */}

<div
className="
flex-1
relative
flex
justify-center
items-center
mt-16
lg:mt-0
"
>

{/* Glow */}

<div
className="
absolute
w-[450px]
h-[450px]
bg-[var(--primary)]
opacity-20
blur-[120px]
rounded-full
"
/>

{/* Orbit */}

<div
className="
absolute
w-[500px]
h-[500px]
border
border-dashed
border-[var(--primary)]
opacity-30
rounded-full
"
/>

{/* Hero Image */}

<img
src={heroImg}
className="
relative
w-[900px]
z-10
"
/>

{/* Floating icons */}

<div
className="
absolute
top-10
left-5
bg-[var(--card-border)]
p-5
rounded-full
shadow-[0_0_15px_var(--primary)]
"
>
<SiMongodb
className="
text-6xl
text-[var(--mongodb-green)]
"
/>
</div>

<div
className="
absolute
bottom-28
left-0
bg-[var(--card-border)]
p-5
rounded-full
shadow-[0_0_15px_var(--primary)]
"
>
<FaReact
className="
text-6xl
text-[var(--react-cyan)]
"
/>
</div>

<div
className="
absolute
top-10
right-5
bg-[var(--card-border)]
p-5
rounded-full
shadow-[0_0_15px_var(--primary)]
"
>
<SiExpress
className="
text-6xl
text-white
"
/>
</div>

<div
className="
absolute
bottom-28
right-0
bg-[var(--card-border)]
p-5
rounded-full
shadow-[0_0_15px_var(--primary)]
"
>
<FaNodeJs
className="
text-6xl
text-[var(--node-green)]
"
/>
</div>

</div>

</section>

);

};

export default HeroBanner;