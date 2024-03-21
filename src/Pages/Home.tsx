import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Image, Chip } from "@nextui-org/react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="flex justify-start px-[100px] gap-[50px] mb-[100px]">
        <div className="flex flex-col gap-[40px]">
          <a href="https://www.linkedin.com/company/inzota">
            <FaLinkedin className="scale-150" />
          </a>
          <a href="https://www.youtube.com/@inzota">
            <FaYoutube className="scale-150" />
          </a>
          <a>
            <FaTwitter className="scale-150" />
          </a>
          <a>
            <FaFacebook className="scale-150" />
          </a>
        </div>
        <div>
          <p
            className="text-4xl bg-gradient-to-r from-[#ffffff_84.42%] to-[#ffffff30]"
            id="motoline-home"
          >
            Where Innovation meets
            <br />
            excellence!
          </p>
          <br />
          <br />
          <br />
          <span className="opacity-75 text-xl">
            Change your discord server!
          </span>
          <div className="flex mt-[50px] gap-[15px]">
            <Button className="border border-[#81818115] bg-[#606060] bg-opacity-20 rounded-full h-min py-[6px] w-[100px]">
              Invite
            </Button>
            <Button className="border border-[#81818115] bg-[#606060] bg-opacity-20 rounded-full h-min py-[6px] w-[100px]">
              Explore
            </Button>
          </div>
        </div>
      </div>
      <p className="text-center">
        <span className="text-3xl">Our Projects!</span>
        <br />
        <span className="text-[#ffffff90] text-lg">
          Almost all of our current projects are undergoing development.
          <br /> Stay tuned for Updates!
        </span>
      </p>
      <div className="relative h-[40vh]">
        <div className="absolute top-[30%] left-[10%]">
          <p className="text-center mb-4">
            <span className="border border-[#81818115] bg-[#606060] bg-opacity-20 rounded-full h-min py-[2px] p-[40px]">
              Soon!
            </span>
          </p>
          <Card className="bg-[#4edd4e] border border-[#ffffff45] overflow-hidden h-[162px] w-[281px] flex justify-center items-center" />
        </div>
        <div className="absolute top-[20%] left-[50%] translate-x-[-50%] z-20">
          <p className="text-center mb-4 z-[10000]">
            <span className="border border-[#81818115] bg-[#606060] bg-opacity-20 rounded-full h-min py-[2px] p-[30px]">
              AmeuTutor
            </span>
          </p>
          <Card className="bg-[#121826] border border-[#ffffff45] overflow-hidden h-[198px] w-[281px] flex justify-center items-center">
            <Image src="/ameututor.png" width={100} />
          </Card>
        </div>
        <div className="absolute top-[30%] left-[60%]">
          <p className="text-center mb-4">
            <span className="border border-[#81818115] bg-[#606060] bg-opacity-20 rounded-full h-min py-[2px] p-[30px]">
              Rynth labs
            </span>
          </p>
          <Card className="bg-[#ff514b] border border-[#ffffff45] overflow-hidden h-[162px] w-[281px] flex justify-center items-center">
            <Image src="/rynth_labs.png" width={50} />
          </Card>
        </div>
      </div>
      <p className="text-center text-xl">
        Join us in the journey of creating mind blowing apps, at our
        <br /> Discord Community where we talk about upcoming events,
        <br /> tech talks and more!
      </p>
      <div className="flex mt-[100px] justify-center gap-[40px] mb-[100px]">
        <a
          className="border border-[#ffffff45] bg-[#606060] bg-opacity-20 rounded-full py-[10px] w-[280px] text-center backdrop-blur-md"
          href="https://discord.gg/3VKzWshbVP"
        >
          Discord Server
        </a>
        <a className="border border-[#ffffff45] bg-[#606060] bg-opacity-20 rounded-full py-[10px] w-[280px] text-center backdrop-blur-md">
          Newsletter
        </a>
      </div>
      <p className="text-center">
        <span className="text-3xl">Meet out Team</span>
        <br />
        <span className="text-[#ffffff90] text-lg">
          We have a really awesome team, from talented web developers to
          <br />
          experienced backend developers!
        </span>
      </p>
      <div className="flex items-center justify-center mt-[100px]">
        <div className="rounded-3xl bg-[#60606035]">
          <div className="grid grid-cols-2">
            <Card className="w-[200px] rounded-3xl bg-[#00000030] m-10">
              <CardBody className="items-center">
                <div className="bg-[#0094ff] mb-4 w-[100px] aspect-square rounded-full" />
                <p className="mb-2 text-xl">Rupnil</p>
                <p className="text-[#ffffff60] text-sm mb-1">
                  Founder & co-CEO
                </p>
                <Chip size="sm" className="text-[11px]">
                  unavailable
                </Chip>
                <br />
              </CardBody>
            </Card>
            <Card className="w-[200px] rounded-3xl bg-[#00000030] m-10">
              <CardBody className="items-center">
                <div className="bg-[#00ff0a] mb-4 w-[100px] aspect-square rounded-full" />
                <p className="mb-2 text-xl">Tejaswa</p>
                <p className="text-[#ffffff60] text-sm mb-1">
                  Founder & co-CEO
                </p>
                <br />
              </CardBody>
            </Card>
            <Card className="w-[200px] rounded-3xl bg-[#00000030] m-10">
              <CardBody className="items-center">
                <div className="bg-[#00ff0a] mb-4 w-[100px] aspect-square rounded-full" />
                <p className="mb-2 text-xl">Luke</p>
                <p className="text-[#ffffff60] text-sm mb-1">
                  Managing Director
                </p>
                <br />
              </CardBody>
            </Card>
            <Card className="w-[200px] rounded-3xl bg-[#00000030] m-10">
              <CardBody className="items-center">
                <div className="bg-[#ffe600] mb-4 w-[100px] aspect-square rounded-full" />
                <p className="mb-2 text-xl">Ayan</p>
                <p className="text-[#ffffff60] text-sm mb-1">
                  Head Frontend Dev
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
