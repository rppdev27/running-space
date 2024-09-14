'use client'

import React from 'react';
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
  { colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-3', backgroundColor: 'bg-green-50', title: 'Cover' },
  { colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-blue-50', title: 'Profile Couple' },
  { colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-red-50', title: 'Groomsman & Bridesmaid' },
  { colSpan: 'lg:col-span-3', rowSpan: 'lg:row-span-2', backgroundColor: 'bg-yellow-50', title: 'Gallery' },
  { colSpan: 'lg:col-span-3', rowSpan: 'lg:row-span-2', backgroundColor: 'bg-blue-50', title: 'Event' },
  { colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-red-50', title: 'Save The Date' },
  { colSpan: 'lg:col-span-6', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-purple-50', title: 'Special Guest' },
  { colSpan: 'lg:col-span-6', rowSpan: 'lg:row-span-1', backgroundColor: 'bg-orange-50', title: 'Guestbook' },
];

const Page = () => {
  return (
    <div className='flex h-screen w-full p-4'
    //   style={{
    //     backgroundImage: "url('https://images.pexels.com/photos/12266030/pexels-photo-12266030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    //     backgroundAttachment: "fixed",
    //     backgroundSize: "cover",
    //   }}
    
    >
      {/* Sticky left side menu, hide when in mobile */}
      <div className="sticky top-0 h-full w-1/4 rounded-xl shadow-[box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;] min-h-[200px] p-4 my-4 hidden lg:block">
        Sticky Menu
      </div>

      {/* Grid layout */}
      <div className="h-full w-full lg:w-3/4 overflow-y-auto p-4">
        <div className="h-auto rounded-xl min-h-[200px]">
          <div className="grid h-full grid-cols-1 lg:grid-cols-10 grid-rows-auto lg:grid-rows-4 gap-10 p-0">
            {gridItems.map((item, index) => (
              <div
                key={index}
                className={`${item.colSpan} ${item.rowSpan} p-10 ${item.backgroundColor} flex justify-center rounded-xl shadow-[box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;] border min-h-[200px]`}
              >
                {item.title}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
