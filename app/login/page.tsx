'use client'
// app/auth/signin/page.tsx
import { signIn } from 'next-auth/react';
import { useState, FormEvent } from 'react';
import { z, ZodError } from 'zod';
import { MessageSquareShare } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Define a schema using Zod
const signInSchema = z.object({
    username: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
  });
  
  type SignInSchema = z.infer<typeof signInSchema>;
  
  export default function SignInPage() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [formErrors, setFormErrors] = useState<string[]>([]);
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();      
  
      try {
        // Validate inputs using Zod
        signInSchema.parse({ username, password });
        
        setFormErrors([]); // Clear any previous errors

        // console.log(username);
        // console.log(password);
  
        // Call signIn if validation passes
        const result = await signIn('credentials', {
          redirect: false,
          username,
          password,
        });
  
        if (result?.error) {
          setError(result.error);
        } else {
          // Redirect or update UI based on successful login
          window.location.href = '/test-nextauth';
        }
      } catch (err) {
        if (err instanceof ZodError) {
          // Extract and display validation errors
          const errors = err.errors.map(e => e.message);
          setFormErrors(errors);
        } else {
          // Handle unexpected errors
          setError("An unexpected error occurred.");
        }
      }
    };
  
    return (
      <div
      className="min-h-screen flex flex-col justify-between p-6 bg-gradient-to-r from-green-600 to-green-700"
      style={{
        fontFamily: 'Kanit',
      }}
    >
      <div className="flex flex-col items-center mt-8 flex-1 justify-center mx-4">
      <Card className="w-full max-w-sm mx-auto mt-10">
        <CardHeader>
          {/* <CardTitle className="text-2xl">Login</CardTitle> */}
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-semibold">Login</h2>
            <img src="https://ik.imagekit.io/vtvggda66/menicaid/webapp/menica_greenlogo.png?updatedAt=1708333173911"
                style={{
                    width: '80px',
                    height: 'auto'
                }}
            />
            </div>
          {/* <CardDescription>
            Enter your email and password below to login to your account.
          </CardDescription> */}
        </CardHeader>
        <CardContent className="grid gap-4">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {formErrors.length > 0 && (
              <div className="text-red-500">
                {formErrors.map((err, index) => (
                  <p key={index}>{err}</p>
                ))}
              </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
            <CardFooter>
              <Button type="submit" className="w-full bg-yellow-500 text-slate-800 hover:bg-yellow-400">Sign In</Button>
            </CardFooter>
          </form>
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
  }