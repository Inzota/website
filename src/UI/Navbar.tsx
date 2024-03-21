import { Button } from "@nextui-org/button";
import {
  Navbar as UINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";

export default function TestNav() {
  return (
    <UINavbar
      position="sticky"
      className="mb-[100px] bg-opacity-[26%] sm:px-[50px]"
    >
      <NavbarBrand>
        <img src="/Logo.png" className="h-10 aspect-auto" />
        <span className="text-2xl pl-4">inzota</span>
      </NavbarBrand>
      <NavbarItem className="sm:hidden">
        <Button className="border border-[#6b6b6b40] bg-[#ffffff13] h-min py-[1px] p-[5px] rounded-full">
          Login
        </Button>
      </NavbarItem>
      <NavbarMenuToggle className="sm:hidden" />
      <NavbarMenu className="bg-[#000] bg-opacity-50 text-[#fff]">
        <NavbarMenuItem className="bg-[#fff] bg-opacity-0 hover:bg-opacity-5 transition-all p-2">
          <a href="/">Home</a>
        </NavbarMenuItem>
        <NavbarMenuItem className="bg-[#fff] bg-opacity-0 hover:bg-opacity-5 transition-all p-2">
          <a href="/projects">Projects</a>
        </NavbarMenuItem>
        <NavbarMenuItem className="bg-[#fff] bg-opacity-0 hover:bg-opacity-5 transition-all p-2">
          <a href="/blogs">Blogs</a>
        </NavbarMenuItem>
        <NavbarMenuItem className="bg-[#fff] bg-opacity-0 hover:bg-opacity-5 transition-all p-2">
          <a href="/newsletter">Newsletter</a>
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <a href="/">Home</a>
        </NavbarItem>
        <NavbarItem>
          <a href="/projects">Projects</a>
        </NavbarItem>
        <NavbarItem>
          <a href="/blogs">Blogs</a>
        </NavbarItem>
        <NavbarItem>
          <a href="/newsletter">Newsletter</a>
        </NavbarItem>
        <NavbarItem>
          <Button className="border border-[#6b6b6b40] bg-[#ffffff13] h-min py-[1px] p-[5px] rounded-full">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </UINavbar>
  );
}
