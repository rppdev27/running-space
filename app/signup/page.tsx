'use client'

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquareShare } from "lucide-react";

// Validation schema
const formSchema = z.object({
  fullname: z
    .string()
    .min(1, { message: "Fullname is required" })
    .regex(/^[A-Za-z\s]+$/, { message: "Fullname can only contain letters and spaces" }),
  whatsapp: z
    .string()
    .min(1, { message: "Whatsapp is required" })
    .regex(/^(\+?\d{1,3}[- ]?)?\d{10}$/, { message: "Invalid Whatsapp number" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  confirmPassword: z
    .string()
    .min(6, { message: "Password confirmation is required" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"], // path of error field
});

// Type inference from zod schema
type FormValues = z.infer<typeof formSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between p-6 bg-gradient-to-r from-green-600 to-green-700"
      style={{
        fontFamily: "Kanit",
      }}
    >
      <div className="flex flex-col items-center mt-8 flex-1 justify-center mx-4">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-xl font-semibold">Sign Up</h2>
              <img
                src="https://ik.imagekit.io/vtvggda66/menicaid/webapp/menica_greenlogo.png?updatedAt=1708333173911"
                style={{
                  width: "80px",
                  height: "auto",
                }}
              />
            </div>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="fullname">Fullname</Label>
                  <Input id="fullname" placeholder="Max" {...register("fullname")} />
                  {errors.fullname && (
                    <p className="text-red-500 text-sm">{errors.fullname.message}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="whatsapp">Whatsapp</Label>
                  <Input id="whatsapp" placeholder="+1234567890" {...register("whatsapp")} />
                  {errors.whatsapp && (
                    <p className="text-red-500 text-sm">{errors.whatsapp.message}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" {...register("password")} />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirmPassword">Password Confirmation</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-yellow-500 text-slate-800 hover:bg-yellow-400"
                >
                  Create an account
                </Button>
              </div>
            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="#" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <footer className="text-center py-4 text-white text-sm">
        &copy; {new Date().getFullYear()} Menica. All rights reserved.
      </footer>

      <a
        href="https://wa.me/yourwhatsappnumber"
        className="fixed bottom-4 right-4 bg-yellow-400 text-white p-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageSquareShare className="text-xl text-slate-900" />
      </a>
    </div>
  );
};

export default LoginForm;
