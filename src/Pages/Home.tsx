import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Image, Chip } from "@nextui-org/react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="flex justify-start px-[20px] sm:px-[100px] gap-[25px] sm:gap-[50px] my-[35vh] w-full">
        <div className="flex flex-col gap-[20px] sm:gap-[40px]">
          <a href="https://www.linkedin.com/company/inzota">
            <FaLinkedin className="scale-125 sm:scale-150" />
          </a>
          <a href="https://www.youtube.com/@inzota">
            <FaYoutube className="scale-125 sm:scale-150" />
          </a>
          <a>
            <FaTwitter className="scale-125 sm:scale-150" />
          </a>
          <a>
            <FaFacebook className="scale-125 sm:scale-150" />
          </a>
        </div>
        <div>
          <p
            className="text-5xl sm:text-7xl bg-gradient-to-r from-[#ffffff_84.42%] to-[#ffffff30]"
            id="motoline-home"
          >
            Where Innovation meets excellence!
          </p>
          <br />
          <span className="opacity-75 text-xl sm:text-2xl">
            Endure the realm of the future
          </span>
          <div className="flex mt-[50px] gap-[15px]">
            <Button className="border border-[#81818115] bg-[#606060] bg-opacity-20 rounded-full h-min py-[6px] w-[150px] text-md sm:text-lg">
              Invite
            </Button>
            <Button className="border border-[#81818115] bg-[#606060] bg-opacity-20 rounded-full h-min py-[6px] w-[150px] text-md sm:text-lg">
              Explore
            </Button>
          </div>
        </div>
      </div>
      <p className="text-center">
        <span className="text-xl sm:text-3xl">Our Projects!</span>
        <br />
        <span className="text-[#ffffff90] text-md sm:text-lg p-2">
          Almost all of our current projects are undergoing development.
          <br /> Stay tuned for Updates!
        </span>
      </p>
      <div className="relative h-[350px]">
        <div className="absolute top-[29%] right-[60%]">
          <p className="text-center mb-4">
            <span className="border border-[#81818115] bg-[#606060] bg-opacity-20 rounded-full text-md sm:text-lg h-min py-[2px] p-[20px] sm:p-[30px] sm:py-[2px]">
              NuraNote
            </span>
          </p>
          <Card className="bg-[#ffce4e] border border-[#ffffff45] overflow-hidden h-[100px] w-[140px] sm:h-[162px] sm:w-[281px] flex justify-center items-center">
            <Image src="/nuranote.png" width={100} />
          </Card>
        </div>
        <div className="absolute top-[20%] sm:top-[19%] left-[50%] translate-x-[-50%] z-20">
          <p className="text-center mb-4 z-[10000]">
            <span className="border border-[#81818115] bg-[#606060] bg-opacity-20 rounded-full text-md sm:text-lg h-min py-[2px] p-[20px] sm:p-[30px] sm:py-[2px]">
              AmeuTutor
            </span>
          </p>
          <Card className="bg-[#121826] border border-[#ffffff45] overflow-hidden h-[134px] w-[160px] sm:h-[198px] sm:w-[281px] flex justify-center items-center">
            <Image src="/ameututor.png" width={100} />
          </Card>
        </div>
        <div className="absolute top-[29%] left-[60%]">
          <p className="text-center mb-4">
            <span className="border border-[#81818115] bg-[#606060] text-md sm:text-lg bg-opacity-20 rounded-full h-min py-[2px] p-[20px] sm:p-[30px] sm:py-[2px]">
              Rynth labs
            </span>
          </p>
          <Card className="bg-[#ff514b] border border-[#ffffff45] overflow-hidden h-[100px] w-[140px] sm:h-[162px] sm:w-[281px] flex justify-center items-center">
            <Image src="/rynth_labs.png" width={50} />
          </Card>
        </div>
      </div>
      <p className="text-center text-md sm:text-xl px-5">
        Join us in the journey of creating mind blowing apps, at our Discord
        Community where we talk about upcoming events, tech talks and more!
      </p>
      <div className="flex mt-[100px] justify-center gap-[20px] sm:gap-[40px] mb-[100px]">
        <a
          className="border border-[#ffffff45] bg-[#606060] bg-opacity-20 rounded-full text-sm py-[10px] w-[180px] sm:w-[280px] sm:text-md text-center backdrop-blur-md"
          href="https://discord.gg/3VKzWshbVP"
        >
          Discord Server
        </a>
        <a className="border border-[#ffffff45] bg-[#606060] bg-opacity-20 rounded-full py-[10px] w-[180px] sm:w-[280px] sm:text-md text-center backdrop-blur-md">
          Newsletter
        </a>
      </div>
      <p className="text-center">
        <span className="text-2xl sm:text-3xl">Meet out Team</span>
        <br />
        <span className="text-[#ffffff90] text-md sm:text-lg">
          We have a really awesome team, from talented web developers to
          <br />
          experienced backend developers!
        </span>
      </p>
      <div className="flex items-center justify-center mt-[100px]">
        <div className="rounded-3xl bg-[#60606035]">
          <div className="grid grid-cols-2">
            <Card className="w-[150px] sm:w-[200px] rounded-3xl bg-[#00000030] m-5 sm:m-10">
              <CardBody className="items-center">
                <div className="bg-[#0094ff] mb-4 w-[80px] sm:w-[100px] aspect-square rounded-full" />
                <p className="mb-2 text-md sm:text-xl">Rupnil</p>
                <p className="text-[#ffffff60] text-sm mb-1">
                  Founder & co-CEO
                </p>
              </CardBody>
            </Card>
            <Card className="w-[150px] sm:w-[200px] rounded-3xl bg-[#00000030] m-5 sm:m-10">
              <CardBody className="items-center">
                <div className="bg-[#00ff0a] mb-4 w-[80px] sm:w-[100px] aspect-square rounded-full" />
                <p className="mb-2 text-md sm:text-xl">Tejaswa</p>
                <p className="text-[#ffffff60] text-sm mb-1">
                  Founder & co-CEO
                </p>
                <br />
              </CardBody>
            </Card>
            <Card className="w-[150px] sm:w-[200px] rounded-3xl bg-[#00000030] m-5 sm:m-10">
              <CardBody className="items-center">
                <div className="bg-[#00ff0a] mb-4 w-[80px] sm:w-[100px] aspect-square rounded-full" />
                <p className="mb-2 text-md sm:text-xl">Luke</p>
                <p className="text-[#ffffff60] text-sm mb-1">
                  Managing Director
                </p>
                <br />
              </CardBody>
            </Card>
            <Card className="w-[150px] sm:w-[200px] rounded-3xl bg-[#00000030] m-5 sm:m-10">
              <CardBody className="items-center">
                <div className="bg-[#ffd700] mb-4 w-[80px] sm:w-[100px] aspect-square rounded-full" />
                <p className="mb-2 text-md sm:text-xl">Ayan</p>
                <p className="text-[#ffffff60] text-sm mb-1">
                  Head Frontend dev
                </p>
                <br />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
