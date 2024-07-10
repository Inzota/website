import { Image, Divider } from "@nextui-org/react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  return (
    <div className="mt-[200px] rounded-t-3xl bg-[#60606015] pt-[50px]">
      <div className="flex flex-col items-center mb-10">
        <Image src="/Logo.png" width={70} />
        <span className="text-4xl">inzota</span>
        <span className="text-[#ffffff76]">
          Where Innovation meets excellence!
        </span>
      </div>
      <Divider />
      <div className="grid grid-cols-3 mx-[100px] my-[20px]">
        <div>
          <p className="text-center">
            <span className="text-md sm:text-xl">Links</span>
            <br />
            <a className="text-sm" href="projects">
              Projects
            </a>
            <br />
            <a className="text-sm" href="about">
              About Us
            </a>
          </p>
        </div>
        <div>
          <p className="text-center">
            <span className="text-md sm:text-xl">Projects</span>
            <br />
            <span className="text-sm">AmeuTutor</span>
            <br />
            <span className="text-sm">Rynth Labs</span>
            <br />
            <span className="text-sm">NuraNote</span>
          </p>
        </div>
        <div>
          <p className="text-center">
            <span className="text-md sm:text-xl">Get in touch</span>
            <br />
            <span className="text-sm">LinkedIn</span>
            <br />
            <span className="text-sm">Discord</span>
          </p>
        </div>
      </div>
      <br />
      <div className="flex flex-col items-center mb-10 gap-2">
        <span className="text-[#ffffff76]">
          Join our newsletter for free! No spam. Ever!
        </span>
        <div className="relative inline-flex gap-2">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Enter your e-mail"
            className="rounded-full bg-[#ffffff] p-2 h-[45px] px-[30px] w-[350px] sm:w-[500px] text-[#000]"
          />
          <button className="bg-[#924fff] text-sm p-2 rounded-tr-full rounded-br-full rounded-bl-full w-[100px] absolute top-0 right-0 border-none h-[45px]">
            subscribe
          </button>
        </div>
      </div>
      <Divider />
      <div className="flex items-center justify-center">
        <span className="m-8 text-sm sm:text-md text=[#ffffff76]">
          Inzota © 2024. All rights reserved
        </span>
      </div>
    </div>
  );
}
