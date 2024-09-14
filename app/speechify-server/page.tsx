import React from 'react';

// Define types for the API response
interface User {
  id: string; // Change to string based on the actual data
  name: string;
}

interface ApiResponse {
  data: {
    user: User;
  };
}

const Page: React.FC = async () => {
 
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

    return (
        <>
            <section className='flex justify-end flex-col w-full'>
                <h1>Speechify Server</h1>
                <article>
                {data.data.user.name}
                </article>
            </section>
        </>
    );
};

export default Page;
