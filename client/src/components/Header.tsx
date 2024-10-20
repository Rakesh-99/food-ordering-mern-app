import { NavLink } from "react-router-dom"
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "./ui/sheet";
import { IoHomeOutline, IoCart } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { RxUpdate } from "react-icons/rx";

import { RiRestaurantFill } from "react-icons/ri";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { NavLinksTypes } from "../constants/dataTypes";





const Header = () => {

  // const [theme, setTheme] = useState("");

  const navlinks: NavLinksTypes[] = [

    {
      path: '/',
      label: 'Home',
      icon: IoHomeOutline
    },
    {
      path: '/profile',
      label: 'Profile',
      icon: ImProfile
    },
    {
      path: '/order',
      label: 'Order',
      icon: RxUpdate
    }
  ]



  // const [dropDown, setDropDown] = useState<DropDownTypes>({
  //   showStatusBar: true,
  //   showActivityBar: false,
  //   showPanel: false
  // });

  const admin = true;

  return (
    <>
      <div className="md:flex lg:flex sm:hidden hidden border-b relative py-4 items-center justify-between md:px-10 lg:px-10 sm:px-3 px-2">

        {/* App title  */}
        <div className="">
          <Link to={'/'} className="md:text-2xl lg:text-2xl sm:text-lg text-sm font-extrabold">Food Frenzy</Link>
        </div>


        {/* For larger screen devices - i.e lg and md */}
        <div className="flex gap-12 items-center">

          <div className="flex items-center gap-10">

            {/* Nvalinks  */}
            {
              navlinks.map((val: NavLinksTypes, idx: number): JSX.Element => {

                return (
                  <div className="" key={idx}>
                    <NavLink className='flex items-center gap-1 justify-center'
                      to={val.path}>
                      <span> <val.icon size={18} className="mb-1" />  </span>
                      <p className="font-[500]">{val.label}</p>
                    </NavLink>

                  </div>
                )
              })
            }


            {/* Dashboard */}
            {
              admin &&
              <div className="">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="py-1 px-2 text-sm">Dashboard</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">

                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem

                    >
                      <Link to={'/admin/restaurant'}>Restaurant</Link>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem

                    >
                      <Link to={'/admin/available-menu'}>Menu</Link>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem

                    >
                      <Link to={'/admin/order'}>Order</Link>
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            }

          </div>

          <div className="flex items-center gap-6 ">
            {/* Theme drop down menu  */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem >
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart  */}
            <div className="relative">
              <Link to={'/cart'}><IoCart size={22} /></Link>
              <span className="absolute -top-4 -right-2 bg-red-500 text-white rounded-full text-center w-5 font-semibold text-sm">
                {1}
              </span>
            </div>

            <div className="">
              <FaCircleUser size={22} />
            </div>

            <div className="">
              <button className="font-semibold bg-red-500 text-white py-2 px-3 rounded-sm">Logout</button>
            </div>
          </div>
        </div >
      </div>
      {/* For smaller screen devices  */}
      <div className="md:hidden lg:hidden flex ">
        <SmallerScreenHeader />
      </div>
    </>
  )
}

export default Header;




// Navbar for Smaller screen devices : 

export const SmallerScreenHeader = () => {


  const navlinks: NavLinksTypes[] = [

    {
      path: '/profile',
      label: 'Profile',
      icon: IoHomeOutline
    },
    {
      path: '/admin/order',
      label: 'Order',
      icon: RxUpdate
    },
    {
      path: '/cart',
      label: 'Cart',
      icon: IoCart
    },
    {
      path: '/admin/available-menu',
      label: 'Menu',
      icon: BiMenu
    },
    {
      path: '/admin/restaurant',
      label: 'Restaurant',
      icon: RiRestaurantFill

    },
    {
      path: '/restaurant-orders',
      label: 'Restaurant Orders',
      icon: RxUpdate
    }
  ]

  return (
    <>
      <div className="py-2 w-full shadow-sm">
        <Sheet>
          <SheetTrigger asChild className="">
            <div className="flex items-center justify-between mx-5 py-2">
              <Link to={'/'} className="text-xl font-extrabold ">Food Frenzy</Link>
              <Button variant="outline" className="">
                <BiMenu size={23} />
              </Button>
            </div>
          </SheetTrigger>



          <SheetContent className="flex flex-col gap-10">
            {/* Header  */}
            <SheetHeader className="border-b-2">
              <div className="flex items-center justify-between my-10">
                <Link to={'/'} className="text-xl font-extrabold">Food Frenzy</Link>

                {/* theme toggle  */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <MdOutlineWbSunny className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <LuSunMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem >
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem >
                      Dark
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </SheetHeader>

            <div className="flex flex-col gap-1 ">
              {
                navlinks.map((val: NavLinksTypes, idx: number): JSX.Element => {
                  return (
                    <SheetClose asChild className="flex my-3 gap-3" key={idx}>
                      <Link className="text-xl" to={val.path}>
                        <val.icon size={22} />
                        <p>{val.label}</p>
                      </Link>
                    </SheetClose>
                  )
                })
              }
            </div>


            <SheetFooter className="">
              <SheetClose asChild>
                <Button type="submit" className="bg-violet-500 font-semibold ">Logout</Button>
              </SheetClose>
            </SheetFooter>

          </SheetContent>
        </Sheet >
      </div >
    </>
  )
};


