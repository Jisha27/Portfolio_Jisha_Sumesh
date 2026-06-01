import React from "react";
import { User, MapPin, Mail, Phone } from "lucide-react";
import profileImg from "../assets/me2.png";

export const About = ({ data }) => {

  return (
    <div className="border-[var(--card-border)] border-1 max-w-[90%] mx-auto text-white p-5 my-5  rounded-xl flex flex-col md:flex-row gap-10">
      {/* image */}
      <div className='w-full max-w-[350px] shrink-0 mx-auto lg:mx-0 overflow-hidden rounded-xl'>
        <img
          src={data.image ? data.image : profileImg}
          className="w-full h-auto rounded-xl object-cover border-[var(--primary)] border-1 scale-125"
        />
      </div>
      {/* about */}
      <div className="flex-1 flex flex-col gap-5">
        <span className="flex flex-row gap-3 text-[var(--primary)] items-center ">
          <User />
          <span className="text-2xl">{data?.title}</span>
        </span>
        <p className="w-full max-w-[600px] text-[var(--secondary)]">
          {data?.description}
        </p>
        <span className="flex flex-wrap justify-between w-full max-w-[600px] gap-2">
          <span className="flex flex-row text-[10px] items-center border-[var(--primary)] border-1 rounded-3xl p-1 px-3 gap-2 ">
            <MapPin className="w-[10px] text-[var(--primary)0" />
            {data?.personalInfo?.location}
          </span>
          <span className="flex flex-row  text-[10px] items-center border-[var(--primary)] border-1 rounded-3xl p-1 px-3 gap-2 ">
            <Mail className="w-[10px] text-[var(--primary)0" />
            {data?.personalInfo?.email}
          </span>
          <span className="flex flex-row  text-[10px] items-center border-[var(--primary)] border-1 rounded-3xl p-1 px-3 gap-2 ">
            <Phone className="w-[10px] text-[var(--primary)0" />
            {data?.personalInfo?.phone}
          </span>
        </span>
      </div>
    </div>
  );
};
