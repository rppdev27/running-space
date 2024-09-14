'use client'

import React, { useEffect } from 'react';

// Define types for the API response
interface User {
  id: number;
  name: string;
}

interface ApiResponse {
  data: {
    user: User;
  };
}

const Page: React.FC = (): JSX.Element => {
  useEffect(() => {
    // Define an async function inside useEffect to use await
    const fetchData = async () => {
      try {
        const response = await fetch("https://graphqlzero.almansi.me/api", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            query: `{
              user(id: 1) {
                id
                name
              }
            }`
          })
        });
        
        const data: ApiResponse = await response.json();
        console.log(data.data.user); // Log the fetched data

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <section>
        <h1>Speechify Fullstack</h1>
        <article>
          {/* You can use the fetched data here */}
        </article>
      </section>
    </>
  );
};

export default Page;
