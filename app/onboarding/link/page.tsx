'use client';
import { useState, useEffect } from 'react';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { MessageSquareShare } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function WhatsappVerification() {
    const [linkName, setLinkName] = useState('');
    const [error, setError] = useState('Link not available blabla');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Link name submitted:', linkName);
    };  
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-grid-black/[0.05] p-6"
      style={{
        fontFamily: 'Kanit',
      }}
    >
      <div className="flex flex-col items-center mt-8 flex-1 justify-center mx-4 p-6">
        <h1 className="text-xl font-semibold mb-4"> Nama Link</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-green-500">
                <span className="px-3 py-2 bg-gray-100 text-gray-500 whitespace-nowrap">
                menica.id/invi/
                </span>
                <input
                type="text"
                value={linkName}
                onChange={(e) => setLinkName(e.target.value)}
                placeholder="input nama link"
                className="flex-grow px-3 py-2 focus:outline-none"
                />
            </div>
            </div>
            {error && (
                <p className="text-red-500 text-sm mb-4">{error}</p>
                )}
            <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
            Simpan
            </button>
        </form>
      </div>

      <footer className="text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Menica. All rights reserved.
      </footer>

      <a
        href="https://wa.me/yourwhatsappnumber"
        className="fixed bottom-4 right-4 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageSquareShare className="text-xl" />
      </a>
    </div>
  );
}
