'use client'

import React, { useState } from 'react';
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
import { PencilLine } from 'lucide-react';

const gridItems = [
  { desc: 'Send as a group with friends or individually', borderColor: '#52225e', textColor: '#52225e', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-3', backgroundColor: 'bg-[#c3b2e7]', title: 'Cover' },
  { desc: 'Send as a group with friends or individually', borderColor: '#52225e', textColor: '#52225e', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-[#f682a5]', title: 'Profile Couple' },
  { desc: 'Send as a group with friends or individually', borderColor: '#574c23', textColor: '#574c23', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-[#fedf6f]', title: 'Groomsman & Bridesmaid' },
  { desc: 'Send as a group with friends or individually', borderColor: '#1b461e', textColor: '#1b461e', colSpan: 'lg:col-span-3', rowSpan: 'lg:row-span-2', backgroundColor: 'bg-[#c6d78d]', title: 'Gallery' },
  { desc: 'Send as a group with friends or individually', borderColor: '#184363', textColor: '#184363', colSpan: 'lg:col-span-3', rowSpan: 'lg:row-span-2', backgroundColor: 'bg-[#b8cedc]', title: 'Event' },
  { desc: 'Send as a group with friends or individually', borderColor: '#582614', textColor: '#582614', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-[#ee9c70]', title: 'Save The Date' },
  { desc: 'Send as a group with friends or individually', borderColor: '#52225e', textColor: '#52225e', colSpan: 'lg:col-span-6', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-[#c3b2e7]', title: 'Special Guest' },
  { desc: 'Send as a group with friends or individually', borderColor: '#582614', textColor: '#582614', colSpan: 'lg:col-span-6', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-[#f682a5]', title: 'Guestbook' },
];

const Page = () => {

  const [hoveredIndex, setHoveredIndex] = useState(-1);
    
  return (
    <div className='flex h-screen w-full p-4'
      style={{
        // fontFamily: 'Bebas Neue',
        fontFamily: 'Signika Negative'
      }}
    
    >
      {/* Fixed Menu */}
      <div className="fixed border border-slate-200 left-1/2 transform -translate-x-1/2 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-4 px-8 flex items-center z-50 w-[30%] md:w-[40%] rounded-lg bottom-3 overflow-x-auto whitespace-nowrap">
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



      {/* Sticky left side menu, hide when in mobile */}
      <div className="sticky top-0 h-full w-1/4 rounded-xl shadow-[box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;] min-h-[200px] p-4 my-4 hidden lg:block">
        Sticky Menu
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
                
                <div className='text-[#1b461e] text-2xl tracking-tight font-bold'
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
                    {item.desc} 
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
