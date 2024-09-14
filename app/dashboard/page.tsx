"use client"

import Link from "next/link"
import { useBearStore  } from "@/provider/store"
import { useRouter } from "next/navigation"

import {
  UserRoundPlus,
  ListCheck,
  DoorOpen,
  User2Icon,
  CalendarHeart, 
  ImagesIcon,
  ScrollText,
  GiftIcon,
  FileMusicIcon,
  PrinterCheckIcon,
  PencilLine,
  FileStackIcon, 
  Rabbit,
  Bird, 
  Turtle,
  PlusCircleIcon,
  StarIcon
} from "lucide-react"


import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import FormSample from "@/components/form-sample";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const Dashboard = () =>  {

    const router = useRouter();

    const iconUrl = 'https://dashboard.menica.pro/img/icons/isidata_new.svg';
    const words = [
        {
          text: "Welcome",
        },
        {
            text: "to",
          },
        {
          text: "Menica.",
          className: "text-green-700 dark:text-green-700",
        },
      ];

      const items = [
        { 
            key: 1, 
            name: 'Cover', 
            icon: <DoorOpen className="h-5 w-5 text-[#1c78aa]" />,
            background: '#f0f9ff',
            active: true,
            path: '/dashboard',
            role: 'user',
            resellerStatus: false
         },
        { 
            key: 2, 
            name: 'Mempelai', 
            icon: <User2Icon className="h-5 w-5 text-[#1c78aa]" />,
            background: '#f0f9ff', 
            active: true,
            path: '/dashboard/profil',
            role: 'user',
            resellerStatus: false
        },
        {   key: 3, 
            name: 'Acara', 
            icon: <CalendarHeart className="h-5 w-5 text-[#5f8926]" />,
            background: '#fefce8',
            active: true,
            path: '/dashboard/acara',
            role: 'user',
            resellerStatus: false
         },
        {   key: 4, 
            name: 'Galeri', 
            icon: <ImagesIcon className="h-5 w-5 text-[#a2640a]" />,
            background: '#fefce8',
            active: true,
            path: '/dashboard',
            role: 'user',
            resellerStatus: false
         },
        {   key: 5, 
            name: 'Kisah', 
            icon: <ScrollText className="h-5 w-5 text-[#5f8926]" />,
            background: '#fefce8',
            active: true,
            path: '/dashboard',
            role: 'user',
            resellerStatus: false
         },
        { 
          key: 6, 
          name: 'Hadiah', 
          icon: <GiftIcon className="h-5 w-5 text-[#5249ce]" />,
          background: '#eef2ff',
          active: true,
            path: '/dashboard/hadiah',
            role: 'user',
            resellerStatus: false
        },
        { 
          key: 7, 
          name: 'Musik', 
          icon: <FileMusicIcon className="h-5 w-5 text-[#b91c1c]" />,
          background: '#fee2e2',
          active: true,
            path: '/dashboard',
            role: 'user',
            resellerStatus: false
         },
        { 
          key: 8, 
          name: 'Buku Tamu', icon: <PrinterCheckIcon className="h-5 w-5 text-[#5249ce]" />,
          background: '#eef2ff',
          active: true,
            path: '/dashboard',
            role: 'user',
            resellerStatus: false
         },
        { 
          key: 9, 
          name: 'Turut Undang', icon: <PrinterCheckIcon className="h-5 w-5 text-[#5f8926]" />,
            background: '#fefce8',
            active: true,
            path: '/dashboard',
            role: 'user',
            resellerStatus: false
         },
         {
          key: 10,
          name: 'Template',
          icon: <img src={'https://www.svgrepo.com/show/501844/wallet-wallet.svg'} width="36" alt="undangan digital"/>,
          background: '#fefce8',
          active: true,
            path: '/dashboard',
            role: 'user',
            resellerStatus: false
         },
         {
          key: 11,
          name: 'Lorem',
          icon: <img src={'https://www.svgrepo.com/show/501821/toilet-paper.svg'} width="36" alt="undangan digital"/>,
          background: '#fee2e2',
          active: true,
            path: '/dashboard',
            role: 'user',
            resellerStatus: false
         },
      ];

      const store = useBearStore();

  return (
      <>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 bg-[#f9fbfd]">

      
          {
              false && <div className="w-full">
              <Card className="xl:col-span-2 p-6" x-chunk="dashboard-01-chunk-4">
                  <FormSample/>
              </Card>
              </div>
          }
          
          {
              false && <div className="w-full">
              <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                          <fieldset className="grid gap-6 rounded-lg border p-4">
                          <legend className="-ml-1 px-1 text-sm font-medium">
                              Settings
                          </legend>
                          <div className="grid gap-3">
                              <Label htmlFor="model">Model</Label>
                              <Select>
                              <SelectTrigger
                                  id="model"
                                  className="items-start [&_[data-description]]:hidden"
                              >
                                  <SelectValue placeholder="Select a model" />
                              </SelectTrigger>
                              <SelectContent>
                                  <SelectItem value="genesis">
                                  <div className="flex items-start gap-3 text-muted-foreground">
                                      <Rabbit className="size-5" />
                                      <div className="grid gap-0.5">
                                      <p>
                                          Neural{" "}
                                          <span className="font-medium text-foreground">
                                          Genesis
                                          </span>
                                      </p>
                                      <p className="text-xs" data-description>
                                          Our fastest model for general use cases.
                                      </p>
                                      </div>
                                  </div>
                                  </SelectItem>
                                  <SelectItem value="explorer">
                                  <div className="flex items-start gap-3 text-muted-foreground">
                                      <Bird className="size-5" />
                                      <div className="grid gap-0.5">
                                      <p>
                                          Neural{" "}
                                          <span className="font-medium text-foreground">
                                          Explorer
                                          </span>
                                      </p>
                                      <p className="text-xs" data-description>
                                          Performance and speed for efficiency.
                                      </p>
                                      </div>
                                  </div>
                                  </SelectItem>
                                  <SelectItem value="quantum">
                                  <div className="flex items-start gap-3 text-muted-foreground">
                                      <Turtle className="size-5" />
                                      <div className="grid gap-0.5">
                                      <p>
                                          Neural{" "}
                                          <span className="font-medium text-foreground">
                                          Quantum
                                          </span>
                                      </p>
                                      <p className="text-xs" data-description>
                                          The most powerful model for complex
                                          computations.
                                      </p>
                                      </div>
                                  </div>
                                  </SelectItem>
                              </SelectContent>
                              </Select>
                          </div>
                          <div className="grid gap-3">
                              <Label htmlFor="temperature">Temperature</Label>
                              <Input id="temperature" type="number" placeholder="0.4" />
                          </div>
                          <div className="grid gap-3">
                              <Label htmlFor="top-p">Top P</Label>
                              <Input id="top-p" type="number" placeholder="0.7" />
                          </div>
                          <div className="grid gap-3">
                              <Label htmlFor="top-k">Top K</Label>
                              <Input id="top-k" type="number" placeholder="0.0" />
                          </div>
                          </fieldset>
                          <fieldset className="grid gap-6 rounded-lg border p-4">
                          <legend className="-ml-1 px-1 text-sm font-medium">
                              Messages
                          </legend>
                          <div className="grid gap-3">
                              <Label htmlFor="role">Role</Label>
                              <Select defaultValue="system">
                              <SelectTrigger>
                                  <SelectValue placeholder="Select a role" />
                              </SelectTrigger>
                              <SelectContent>
                                  <SelectItem value="system">System</SelectItem>
                                  <SelectItem value="user">User</SelectItem>
                                  <SelectItem value="assistant">Assistant</SelectItem>
                              </SelectContent>
                              </Select>
                          </div>
                          <div className="grid gap-3">
                              <Label htmlFor="content">Content</Label>
                              <Textarea id="content" placeholder="You are a..." />
                          </div>
                          </fieldset>
              </form>
          </div>
          }
      
      <div className="w-full">
            <Card
              className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
            >
              <CardHeader className="flex flex-col sm:flex-row items-center">
                <div className="grid gap-2 text-center sm:text-left font-semibold "
                  style={{
                      fontFamily: 'Kanit'
                  }}
                >
                  <CardTitle className="text-base sm:text-2xl">Hi, Ryan {store.bears}</CardTitle>
                  <CardDescription className="text-slate-500 sm:mb-0 mb-2">
                    {/* Recent transactions from your store. */}
                    {/* <TypewriterEffectSmooth words={words} /> */}
                    {/* <StarIcon className="mr-2 text-yellow-500 text-xs h-5 w-5"/> */}
                    Paket Free
                  </CardDescription>
                </div>
                <div className="w-full sm:w-auto flex flex-row ml-auto gap-2 items-center justify-center sm:justify-start align-top sm:items-start"> 
                {/* <Button variant="outline" size="sm" className="mx-1 text-xs sm:text-base sm:flex-1 bg-[#f0f9ff]"
                  style={{
                      fontFamily: 'Kanit'
                  }}
                >
                  <PencilLine className="sm:h-4 sm:w-4 h-3 w-3" />

                  
              
                </Button> */}
              <div className="hidden">
              <TooltipProvider>
                  <Tooltip>
                      <TooltipTrigger asChild>
                      <Button size="sm" variant="secondary" className="bg-[#fefce8] text-xs mx-1"
                          style={{
                              fontFamily: 'Kanit'
                          }}
                      >
                          <PlusCircleIcon className="sm:h-4 sm:w-4 h-3 w-3 text-[#5f8926] font-extrabold" />
                      </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                      <p>Edit Link</p>
                      </TooltipContent>
                  </Tooltip>
              </TooltipProvider>
              </div>
              <TooltipProvider>
                  <Tooltip>
                      <TooltipTrigger asChild>
                      <Button size="sm" variant="outline" className="bg-[#f0f9ff] text-xs mx-1"
                          style={{
                              fontFamily: 'Kanit'
                          }}
                      >
                          <PencilLine className="sm:h-4 sm:w-4 h-3 w-3" />
                      </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                      <p>Edit Link</p>
                      </TooltipContent>
                  </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                  <Tooltip>
                      <TooltipTrigger asChild>
                      <Button size="sm" variant="outline" className="bg-[#f0f9ff] text-xs mx-1"
                          style={{
                              fontFamily: 'Kanit'
                          }}
                      >
                          <FileStackIcon className="sm:h-4 sm:w-4 h-3 w-3" />
                      </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                      <p>Copy Link</p>
                      </TooltipContent>
                  </Tooltip>
              </TooltipProvider>
                {/* <Button variant="outline" size="sm" className="mx-1 text-xs sm:text-base sm:flex-1 bg-[#f0f9ff]"
                  style={{
                      fontFamily: 'Kanit'
                  }}
                >
                  <FileStackIcon className="sm:h-4 sm:w-4 h-3 w-3" />
              
                </Button> */}
                <Button variant="outline" size="sm" className="mx-1 text-xs sm:text-base sm:flex-1"
                  style={{
                      fontFamily: 'Kanit'
                  }}
                >
                  <ListCheck className="sm:h-4 sm:w-4 h-3 w-3 mr-1" />
                  Account
                </Button>
                <Button asChild size="sm" className=" bg-green-700  text-xs sm:text-base sm:flex-1"
                  style={{
                      fontFamily: 'Kanit'
                  }}
                >
                  <Link href="#">
                    <UserRoundPlus className="sm:h-4 sm:w-4 h-3 w-3 mr-1" />
                    Invite
                  </Link>
                </Button>
                </div>
              </CardHeader>
              {/* <CardContent>
              </CardContent> */}
            </Card>
      </div>
        
      <div className="menus rounded-lg bg-gray-200 overflow-hidden divide-y divide-x sm:divide-y-0 sm:divide-x-0 shadow grid grid-cols-3 sm:grid-cols-3 sm:gap-px"
              style={{
                  fontFamily: 'Kanit'
              }}
          >
        {items.map((item, index) => (
          <div
            key={index}
            className="text-xs sm:text-base cursor-pointer hover:bg-green-100 transition-all duration-300 relative group text-center border-t border-l sm:border-t-0 sm:border-l-0 bg-white p-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pinky-500 shadow-sm"
            onClick={() => router.push(item.path)}
          >
            <div className="flex flex-col items-center mb-3">
              <div className="rounded-lg inline-flex p-2"
                  style={{
                      backgroundColor: item.background
                  }}
              >
              {item.icon}
              </div>
            </div>
            {item.name} 
          </div>
        ))}
        
      </div>
        </main>
      </>
  )
}

export default Dashboard;
