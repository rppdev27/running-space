'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { createUser } from '@/app/action';

const initialState: any = {
  message: '',
};

const Signup = () => {
  const [state, formAction] = useFormState(createUser, initialState);

  // Trigger useEffect when the message state changes
  useEffect(() => {
    if (state.message) {
      console.log("Message updated:", state.message.data.token); // Log or perform any other action with the message
      localStorage.setItem('token', state.message.data.token);
      // You could show a success modal, clear the form, etc.
      alert(state.message.data.token); // Example of showing an alert with the message
    }
  }, [state.message]); // Dependency array to watch for changes in state.message

  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />

      <label htmlFor="password">Password</label>
      <input type="text" id="password" name="password" required />

      {/* Display the message from the state */}
      {/* <p aria-live="polite">{state?.message}</p> */}

      <button>Sign up</button>
    </form>
  );
};

export default Signup;
