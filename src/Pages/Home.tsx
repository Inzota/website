import { Button } from "@nextui-org/button";
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
            <Button className="border border-[#818181] bg-[#606060] bg-opacity-20 rounded-full h-min py-[6px] px-[40px]">
              Invite
            </Button>
            <Button className="border border-[#818181] bg-[#606060] bg-opacity-20 rounded-full h-min py-[6px] px-[32px]">
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
    </>
  );
}
