'use client';
import { useState, useEffect } from 'react';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { MessageSquareShare } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export default function WhatsappVerification() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })

    console.log(data);
  }

  const [countdown, setCountdown] = useState(60);
  const [newNumber, setNewNumber] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdown]);

  const handleResendClick = (e: any) => {
    e.preventDefault();
    alert('Kode telah dikirim ulang.');
    setCountdown(60); // Reset the countdown after resend
  };

  const handleNewNumberSubmit = () => {
    alert(`Nomor baru: ${newNumber}`);
    setIsModalOpen(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-grid-black/[0.05] p-6"
      style={{
        fontFamily: 'Kanit',
      }}
    >
      <div className="flex flex-col items-center mt-8 flex-1 justify-center">
        <h1 className="text-xl font-semibold mb-4">Verifikasi Nomor WhatsApp</h1>
        <p className="text-gray-700 text-center mb-6">
          Kami telah mengirimkan pesan WhatsApp ke nomor +628567637243
          <br />
          Silakan masukkan kode verifikasi Anda.
        </p>
        <div className="w-full max-w-xs flex justify-center">
          {/* <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP> */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Whatsapp Verification</FormLabel>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription>
                      Please enter the verification code sent to your phone.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        {/* when click verification trigger alert from InputOTP if empty alert too  */}
        {/* <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-8 mt-6 rounded-md">
          Verifikasi
        </button> */}
        <p className="text-gray-600 text-sm mt-4">
          Tidak menerima kode?{" "}
          <button
            onClick={handleResendClick}
            className="text-green-700"
            disabled={countdown > 0}
          >
            Kirim Ulang ({countdown > 0 ? countdown : 44})
          </button>
          <br />
          <a
            href="#"
            onClick={() => setIsModalOpen(true)}
            className="text-green-700"
          >
            Ganti dengan nomor lain
          </a>
        </p>
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

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger />
        <DialogContent>
          <DialogTitle>Ganti Nomor</DialogTitle>
          <div className="mt-4">
            <Input
              type="tel"
              placeholder="Masukkan nomor baru"
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button onClick={handleNewNumberSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
