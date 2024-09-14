'use server';

import { redirect } from 'next/navigation';

export async function createUser(prevState: any, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  
  const API_URL = 'https://api-v2.menica.pro/user/login';

  // Send email and password as payload
  const res = await fetch(API_URL, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await res.json();
//   const result = JSON.stringify(json, null, 2)

  if (!res.ok) {
    return { 
        message: 'Please enter a valid email or password' 
    };
  }else{
    return {
        message: json
    }
  }

  // Redirect to dashboard if login is successful
//   redirect('/dashboard');
}
