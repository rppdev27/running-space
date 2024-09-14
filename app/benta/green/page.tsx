'use client'

import React, { useState } from 'react';
import { reey, thunder, thunderB, generalSans, schabo, windsong,sansation, norwester, yellowTail, allura } from '@/app/style'
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Send, Trash2, Image, Edit, ChevronDown, X, PencilLine, Grid2x2Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import One from '@/components/design/cover/one';
import Two from '@/components/design/cover/two';


const gridItems = [
  { desc: 'Send as a group with friends or individually', borderColor: '#E1E1E1', textColor: '#8D493A', colSpan: 'lg:col-span-6', rowSpan: 'lg:row-span-2', backgroundColor: 'bg-[#fff]', title: 'COUPLE' },
  { desc: 'Send as a group with friends or individually', borderColor: '#E1E1E1', textColor: '#8D493A', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-2', backgroundColor: 'bg-[#EAFAFF]', title: 'EVENT' },
  { desc: 'Send as a group with friends or individually', borderColor: '#E1E1E1', textColor: '#8D493A', colSpan: 'lg:col-span-6', rowSpan: 'lg:row-span-2', backgroundColor: 'bg-[#fff]', title: 'BRIDE & GROOM' },
  { desc: 'Send as a group with friends or individually', borderColor: '#E1E1E1', textColor: '#8D493A', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-[#C7253E]', title: 'GALLERY' },
  { desc: 'Send as a group with friends or individually', borderColor: '#E1E1E1', textColor: '#8D493A', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-[#EAFAFF]', title: 'EVENT' },
  { desc: 'Send as a group with friends or individually', borderColor: '#E1E1E1', textColor: '#8D493A', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-[#EAFAFF]', title: 'SAVE THE DATE' },
  { desc: 'Send as a group with friends or individually', borderColor: '#E1E1E1', textColor: '#8D493A', colSpan: 'lg:col-span-6', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-[#fff]', title: 'SPECIAL GUEST' },
  { desc: 'Send as a group with friends or individually', borderColor: '#E1E1E1', textColor: '#8D493A', colSpan: 'lg:col-span-10', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-[#EAFAFF]', title: 'GUESTBOOK' },
];

const options = [
  { value: 1, label: "Photo" },
  { value: 2, label: "Clean" },
  // { value: 3, label: "Three" }
];

const Page = () => {

  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [position, setPosition] = React.useState("bottom");
  const [cover, setCover] = useState(1);

  const handleOpenChange = (open: any) => {
    // if (open) {
    //   alert("Dropdown opened");
    // } else {
    //   alert("Dropdown closed");
    // }
    // console.log(open)
    setCover(open);
  };
    
  return (
    <div className='flex h-screen w-full p-4 flex-col sm:flex-row bg-grid-black/[0.05]'
      style={{
        // fontFamily: 'Bebas Neue',
        // fontFamily: 'Signika Negative'
        // fontFamily: 'Lalezar'
        fontFamily: 'Bebas Neue'
      }}
    
    >
      {/* Fixed Menu */}
      {
        false && <>

        <div className="fixed border border-slate-200 left-1/2 transform -translate-x-1/2 bg-[#F2F1F0] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-4 px-8 flex items-center z-50 w-[30%] md:w-[40%] rounded-lg bottom-3 overflow-x-auto whitespace-nowrap">
        <div className="flex gap-2 items-center">
            {gridItems.map((item, index) => (
            <div
                key={index}
                className="flex-none min-w-[100px] max-w-[150px] border-2 rounded-md text-center text-slate-800 p-2 text-xs shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
                {item.title}
            </div>
            ))}
        </div>
        </div>
        
        
        </>
      }
     

      {/* Sticky left side menu, hide when in mobile */}
      <div className="sm:sticky sm:top-0 h-auto w-full relative sm:w-1/4 rounded-xl shadow-[box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;] min-h-[200px] p-4 my-4 pt-0 inline">
        <div onMouseEnter={() => setIsPanelVisible(true)} className='hover:p-2 hover:bg-slate-100 rounded-lg transition-all duration-500'>

          { cover === 1 && <One />}
          { cover === 2 && <Two />}
          {/* { cover === 3 && <Three />} */}
          
          
        </div>

        { isPanelVisible && (
        <div className="text-white shadow-lg rounded-lg py-2 p-4 transition-all duration-500 mt-2 relative z-10 frosted-glass-green">
          {/* <button 
            onClick={() => setIsPanelVisible(false)}
            className="absolute top-2 right-2 text-white"
          >
            <X size={20} />
          </button> */}
          
          <div className="flex items-center justify-between">
            
              <DropdownMenu>
              {/* <DropdownMenu onOpenChange={handleOpenChange}> */}
                <DropdownMenuTrigger asChild>
                  {/* <Button variant="default" className='bg-yellow-500 text-slate-800'>Design</Button> */}
                  {/* <div className="text-slate-700 bg-yellow-500 p-2 rounded-lg shadow-lg">Design</div> */}
                  <div className="flex items-center text-white cursor-pointer py-2 px-3 hover:bg-green-950 bg-green-900 rounded-lg">
                    <Grid2x2Check size={20} />
                    <span>Design</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Change Design</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={position} onValueChange={handleOpenChange}>
                  {options.map((option: any) => (
                    <DropdownMenuRadioItem key={option.value} value={option.value}>
                      {option.label}
                    </DropdownMenuRadioItem>
                  ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            <div 
              onClick={() => setIsPanelVisible(false)}
              className="text-white p-2 bg-red-800 rounded-lg shadow-lg cursor-pointer hover:bg-red-700"
            >
              <X size={20} />
            </div>
          </div>
        </div>
        )}  
      </div>

      
      

      {/* Grid layout */}
      <div className="h-full w-full lg:w-3/4 overflow-y-auto p-4">
        <div className="h-auto rounded-xl min-h-[200px]">
          <div className="grid h-full grid-cols-1 lg:grid-cols-10 grid-rows-auto lg:grid-rows-4 gap-6 p-0">
            {gridItems.map((item, index) => (
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                key={index}
                className={`cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-x-2 hover:translate-y-2 hover:-rotate-1
                ${item.colSpan} ${item.rowSpan} p-4 ${item.backgroundColor} flex flex-col justify-start rounded-xl shadow-[box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;] border-2 min-h-[200px]`}
                style={{
                    filter: hoveredIndex !== -1 && hoveredIndex !== index ? 'blur(1px)' : 'none',
                    borderColor: item.borderColor
                }}
              >
                
                <div className={`text-[#1b461e] text-4xl tracking-normal font-normal ${schabo.className}`}
                    style={{
                        color: item.textColor
                    }}
                >
                    {item.title}
                </div>
                <div 
                    className="py-2 text-md"
                    style={{
                        color: item.textColor
                    }}
                >
                    {/* {item.desc}  */}
                </div>
                {
                    false && <>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline" className="bg-[#f0f9ff] text-xs mx-1">
                      <PencilLine className="sm:h-4 sm:w-4 h-3 w-3" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent 
                    className="sm:max-w-[425px]"
                    onInteractOutside={(e) => {
                        e.preventDefault();
                      }}
                    onOpenAutoFocus={e=>e.preventDefault()}
                  >
                    <DialogHeader>
                      <DialogTitle>Edit {item.title}</DialogTitle>
                      <DialogDescription>
                        Make changes to the {item.title.toLowerCase()} section here.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      {/* Customize the form based on the section */}
                      {item.title === 'Profile Couple' && (
                        <>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="fullname" className="text-right">
                              Fullname
                            </Label>
                            <Input id="fullname" defaultValue="John Doe" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="nickname" className="text-right">
                              Nickname
                            </Label>
                            <Input id="nickname" defaultValue="Johnny" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="instagram" className="text-right">
                              Instagram
                            </Label>
                            <Input id="instagram" defaultValue="@johnny" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="tiktok" className="text-right">
                              TikTok
                            </Label>
                            <Input id="tiktok" defaultValue="@johnnyT" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="bio" className="text-right">
                              Bio
                            </Label>
                            <Input id="bio" defaultValue="Loving life and coding!" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="parents" className="text-right">
                              Parents
                            </Label>
                            <Input id="parents" defaultValue="Mr. and Mrs. Doe" className="col-span-3" />
                          </div>
                        </>
                      )}

                      {item.title === 'Event' && (
                        <>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="eventName" className="text-right">
                              Name of Event
                            </Label>
                            <Input id="eventName" defaultValue="Wedding Ceremony" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="eventDate" className="text-right">
                              Date
                            </Label>
                            <Input id="eventDate" defaultValue="25th Dec 2024" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="location" className="text-right">
                              Location
                            </Label>
                            <Input id="location" defaultValue="Dreamy Beach" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="time" className="text-right">
                              Time
                            </Label>
                            <Input id="time" defaultValue="5:00 PM" className="col-span-3" />
                          </div>
                        </>
                      )}

                      {/* Add forms for other sections as needed */}
                      {item.title === 'Cover' && (
                        <>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="coverTitle" className="text-right">
                              Cover Title
                            </Label>
                            <Input id="coverTitle" defaultValue="Our Wedding" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="coverSubtitle" className="text-right">
                              Cover Subtitle
                            </Label>
                            <Input id="coverSubtitle" defaultValue="John & Jane" className="col-span-3" />
                          </div>
                        </>
                      )}

                      {item.title === 'Groomsman & Bridesmaid' && (
                        <>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="groomsman" className="text-right">
                              Groomsman
                            </Label>
                            <Input id="groomsman" defaultValue="Best Man - Mike" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="bridesmaid" className="text-right">
                              Bridesmaid
                            </Label>
                            <Input id="bridesmaid" defaultValue="Maid of Honor - Lily" className="col-span-3" />
                          </div>
                        </>
                      )}

                      {item.title === 'Gallery' && (
                        <>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="galleryTitle" className="text-right">
                              Gallery Title
                            </Label>
                            <Input id="galleryTitle" defaultValue="Memorable Moments" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="galleryDescription" className="text-right">
                              Description
                            </Label>
                            <Input id="galleryDescription" defaultValue="Our journey captured in photos" className="col-span-3" />
                          </div>
                        </>
                      )}

                      {item.title === 'Save The Date' && (
                        <>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="saveDate" className="text-right">
                              Date
                            </Label>
                            <Input id="saveDate" defaultValue="25th Dec 2024" className="col-span-3" />
                          </div>
                        </>
                      )}

                      {item.title === 'Special Guest' && (
                        <>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="specialGuest" className="text-right">
                              Special Guest Name
                            </Label>
                            <Input id="specialGuest" defaultValue="John's Best Friend - Mark" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="specialGuestRole" className="text-right">
                              Role
                            </Label>
                            <Input id="specialGuestRole" defaultValue="Best Friend" className="col-span-3" />
                          </div>
                        </>
                      )}

                      {item.title === 'Guestbook' && (
                        <>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="guestMessage" className="text-right">
                              Message
                            </Label>
                            <Input id="guestMessage" defaultValue="Write your message here" className="col-span-3" />
                          </div>
                        </>
                      )}
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                    
                    </>
                }
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
