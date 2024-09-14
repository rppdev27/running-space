"use client"

import Link from "next/link"
import { useBearStore  } from "@/provider/store"

import {
  UserRoundPlus,
  DoorOpen,
  UserRound,
  User2Icon,
  CalendarHeart, 
  ImagesIcon,
  ScrollText,
  GiftIcon,
  FileMusicIcon,
  UserRoundIcon,
  PrinterCheckIcon,
  PencilLine,
  FileStackIcon, 
  Trash2Icon
} from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
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
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const Dashboard = () =>  {

      const items = [
        { 
            key: 1, 
            name: 'Cover', 
            icon: <DoorOpen className="h-5 w-5 text-[#1c78aa]" />,
            background: '#f0f9ff',

         },
        { key: 2, name: 'Mempelai', icon: <User2Icon className="h-5 w-5 text-[#1c78aa]" />,
            background: '#f0f9ff', 
            

        },
        { key: 3, name: 'Acara', icon: <CalendarHeart className="h-5 w-5 text-[#5f8926]" />,
            background: '#fefce8',
         },
        { key: 4, name: 'Galeri', icon: <ImagesIcon className="h-5 w-5 text-[#a2640a]" />,
            background: '#fefce8',
         },
        { key: 5, name: 'Kisah', icon: <ScrollText className="h-5 w-5 text-[#5f8926]" />,
            background: '#fefce8',
         },
        { key: 6, name: 'Hadiah', icon: <GiftIcon className="h-5 w-5 text-[#5249ce]" />,
            background: '#eef2ff',
         },
        { key: 7, name: 'Musik', icon: <FileMusicIcon className="h-5 w-5 text-[#b91c1c]" />,
            background: '#fee2e2',
         },
        { key: 8, name: 'Buku Tamu', icon: <PrinterCheckIcon className="h-5 w-5 text-[#5249ce]" />,
            background: '#eef2ff',
         },
        { key: 9, name: 'Turut Undang', icon: <PrinterCheckIcon className="h-5 w-5 text-[#5f8926]" />,
            background: '#fefce8',
         }
      ];

      const store = useBearStore();

  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 bg-[#f9fbfd]">
          <div className="w-full">
          <div className="flex flex-row items-center p-0 pb-3 text-base sm:text-2xl font-semibold tracking-normal"
              style={{
                  fontFamily: 'Kanit'
              }}
          >
              
              <div className="text-lg sm:text-2xl flex-1">Profil</div>
              <div className="sm:w-auto flex flex-row ml-auto gap-2 items-center justify-center sm:justify-start align-top sm:items-start"> 
              
                <Button asChild size="sm" className=" bg-green-700  text-xs sm:text-base sm:flex-1"
                  style={{
                      fontFamily: 'Kanit'
                  }}
                >
                  <Link href="#">
                    <UserRoundPlus className="sm:h-4 sm:w-4 h-3 w-3 mr-1" />
                    Tambah
                  </Link>
                </Button>
                </div>
          </div>
            <Card
              className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
            >
              <CardHeader className="flex flex-col sm:flex-row items-center">
                <div className="grid gap-2 text-center sm:text-left"
                  style={{
                      fontFamily: 'Kanit'
                  }}
                >
                  <div className="flex flex-row items-center justify-center">
                    <Avatar className="mr-4">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">

                      <CardTitle className="text-base sm:text-xl">Ryan Pradipta Putra</CardTitle>
                      <CardDescription>
                        Anak ke-2 dari H. Subagio dan Ibu Sri
                      </CardDescription>

                    </div>
                  </div>
                  
                </div>

                <div className="w-full sm:w-auto flex flex-row ml-auto gap-2 items-center justify-center sm:justify-start align-top sm:items-start"> 
              
              <TooltipProvider>
                  <Tooltip>
                      <TooltipTrigger asChild>
                      <Button size="sm" variant="outline" className="bg-red-50 text-xs mx-1"
                          style={{
                              fontFamily: 'Kanit'
                          }}
                      >
                          <Trash2Icon className="sm:h-4 sm:w-4 h-3 w-3" />
                      </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                      <p>Hapus</p>
                      </TooltipContent>
                  </Tooltip>
              </TooltipProvider>
              <Dialog>
                  <DialogTrigger asChild>
                  <Button size="sm" variant="outline" className="bg-[#f0f9ff] text-xs mx-1"
                          style={{
                              fontFamily: 'Kanit'
                          }}
                      >

                      <PencilLine className="sm:h-4 sm:w-4 h-3 w-3" />

                  </Button>
                    
                  </DialogTrigger>
                  
                  <DialogContent 
                    className="sm:max-w-[425px] max-w-[80%] overflow-auto h-auto overflow-y-scroll max-h-[90vh] mb-5"
                    onInteractOutside={(e) => {
                      e.preventDefault();
                    }}
                    onOpenAutoFocus={e=>e.preventDefault()}
                  >
                      <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                          Make changes to your profile here.
                      </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                         {/* Name */}
                        <div className="grid gap-2">
                          <Label htmlFor="name" className="block text-left">
                            Name
                          </Label>
                          <Input id="name" defaultValue="" className="w-full" />
                        </div>

                         {/* Gender */}
                         <div className="grid gap-2">
                          <Label className="block text-left">Gender</Label>
                          <RadioGroup defaultValue="male" className="flex gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="male" id="male" />
                              <Label htmlFor="male">Male</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="female" id="female" />
                              <Label htmlFor="female">Female</Label>
                            </div>
                          </RadioGroup>
                        </div>


                        {/* Nickname */}
                        <div className="grid gap-2">
                          <Label htmlFor="nickname" className="block text-left">
                            Nickname
                          </Label>
                          <Input id="nickname" defaultValue="" className="w-full" />
                        </div>

                        {/* Parent's Name */}
                        <div className="grid gap-2">
                          <Label htmlFor="parentName" className="block text-left">
                            Nama Ayah
                          </Label>
                          <Input id="parentName" defaultValue="" className="w-full" />
                        </div>

                        {/* Parent's Name */}
                        <div className="grid gap-2">
                          <Label htmlFor="parentName" className="block text-left">
                            Nama Ibu
                          </Label>
                          <Input id="parentName" defaultValue="" className="w-full" />
                        </div>

                       
                        <div className="grid gap-2">
                          <Label htmlFor="bio" className="block text-left">
                            Bio
                          </Label>
                          <textarea
                            id="bio"
                            defaultValue=""
                            className="w-full h-24 p-2 border border-gray-300 rounded"
                          />
                        </div>

                        {/* Social Media */}
                        <div className="grid gap-2">
                          <Label className="block text-left">Social Media</Label>
                          <div className="grid grid-cols-2 gap-4">
                            <Input id="twitter" placeholder="Twitter" />
                            <Input id="instagram" placeholder="Instagram" />
                            <Input id="tiktok" placeholder="Tiktok" />
                            <Input id="facebook" placeholder="Facebook" />
                          </div>
                        </div>

                        {/* Profile Photo */}
                        <div className="grid gap-2">
                          <Label className="block text-left">Profile Photo</Label>
                          <Avatar className="w-24 h-24">
                            <AvatarImage src="" alt="Profile Photo" />
                            <AvatarFallback>
                              <FileStackIcon className="w-6 h-6" />
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      {/* <div className="grid gap-2">
                        <Label htmlFor="name" className="block text-left">
                          Name
                        </Label>
                        <Input
                          id="name"
                          defaultValue="Pedro Duarte"
                          className="w-full"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="fullname" className="block text-left">
                          Fullname
                        </Label>
                        <Input
                          id="fullname"
                          defaultValue=""
                          className="w-full"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="nickname" className="block text-left">
                          Nickname
                        </Label>
                        <Input
                          id="nickname"
                          defaultValue=""
                          className="w-full"
                        />
                      </div> */}
                      {/* <div className="grid gap-2">
                        <Label htmlFor="parent" className="block text-left">
                          Name of Parent
                        </Label>
                        <Input
                          id="parent"
                          defaultValue=""
                          className="w-full"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="mother" className="block text-left">
                          Mother
                        </Label>
                        <Input
                          id="mother"
                          defaultValue=""
                          className="w-full"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="father" className="block text-left">
                          Father (Son of)
                        </Label>
                        <Input
                          id="father"
                          defaultValue=""
                          className="w-full"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="instagram" className="block text-left">
                          Instagram Account
                        </Label>
                        <Input
                          id="instagram"
                          defaultValue=""
                          className="w-full"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="tiktok" className="block text-left">
                          Tiktok Account
                        </Label>
                        <Input
                          id="tiktok"
                          defaultValue=""
                          className="w-full"
                        />
                      </div> */}
                      
                    </div>



                      <DialogFooter>
                      <Button type="submit">Save changes</Button>
                      </DialogFooter>
                  </DialogContent>
              </Dialog>
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
                      <p>Duplicate</p>
                      </TooltipContent>
                  </Tooltip>
              </TooltipProvider>
                </div>
              </CardHeader>
              {/* <CardContent>
              </CardContent> */}
            </Card>
          </div>
          </main>
    </>
  )
}

export default Dashboard;
