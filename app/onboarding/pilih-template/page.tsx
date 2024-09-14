'use client'

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageSquareShare } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

const ThemeCard = ({ theme }: any) => (
  <div className="border rounded-lg overflow-hidden flex flex-col">
    <img src={theme.image} alt={theme.title} className="w-full h-32 object-cover" />
    <div className="p-2 flex flex-col flex-grow">
      <h3 className="text-base font-semibold truncate">{theme.title}</h3>
      <p className="text-xs text-gray-600 truncate">{theme.date}</p>
      <div className="mt-2 flex justify-between">
        <button className="text-blue-600 text-xs hover:underline">Lihat</button>
        <button className="bg-green-600 text-white px-2 py-1 text-xs rounded hover:bg-green-700">Pilih</button>
      </div>
    </div>
  </div>
);

const LoginForm = () => {
  const themes = [
    { id: 'One', title: 'Romeo & Juliet', date: 'Sunday, 14 February 2021', image: 'https://images.pexels.com/photos/11650091/pexels-photo-11650091.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'Two', title: 'Romeo & Juliet', date: 'Sunday, 14 February 2021', image: 'https://images.pexels.com/photos/11650091/pexels-photo-11650091.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'Three', title: 'ROMEO & JULIET', date: 'Sunday, 14 February 2021', image: 'https://images.pexels.com/photos/11650091/pexels-photo-11650091.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'Twelve', title: 'Juliet & Romeo', date: '14 February 2021', image: 'https://images.pexels.com/photos/11650091/pexels-photo-11650091.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'Five', title: 'Another Theme', date: '15 March 2021', image: 'https://images.pexels.com/photos/11650091/pexels-photo-11650091.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'Six', title: 'Yet Another Theme', date: '20 April 2021', image: 'https://images.pexels.com/photos/11650091/pexels-photo-11650091.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'Seven', title: 'Sample Theme', date: '25 May 2021', image: 'https://images.pexels.com/photos/11650091/pexels-photo-11650091.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'Eight', title: 'Test Theme', date: '30 June 2021', image: 'https://images.pexels.com/photos/11650091/pexels-photo-11650091.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 4;

  useEffect(() => {
    // Simulate loading state
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading time

    return () => clearTimeout(timer);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = themes.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(themes.length / itemsPerPage);

  return (
    <div
      className="min-h-screen flex flex-col justify-between p-4 bg-grid-black/[0.05]"
      style={{ fontFamily: 'Kanit' }}
    >
      <div className="flex flex-col items-center mt-4 flex-1 justify-center mx-4">
        <div className="container mx-auto p-4 bg-slate-50 rounded-lg shadow-md w-full md:w-1/2 h-auto">
        <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">Tema</h2>
            <img src="https://ik.imagekit.io/vtvggda66/menicaid/webapp/menica_greenlogo.png?updatedAt=1708333173911"
                style={{
                    width: '80px',
                    height: 'auto'
                }}
                className='mb-4'
            />
        </div>
          
          <div className="grid grid-cols-2 gap-4 h-auto">
            {loading ? (
              [...Array(itemsPerPage)].map((_, index) => (
                <Skeleton key={index} className="w-full h-48 rounded-lg" />
              ))
            ) : (
              currentItems.map((theme) => (
                <ThemeCard key={theme.id} theme={theme} />
              ))
            )}
          </div>
          <div className="mt-4 flex items-center justify-between flex-col sm:flex-row">
            <div className="flex items-center space-x-2 text-sm">
              <span>Per page</span>
              <select className="border rounded p-1 text-sm">
                <option>4</option>
              </select>
              <span>Show {indexOfFirstItem + 1}-{indexOfLastItem} of {themes.length}</span>
            </div>
            <div className="flex items-center space-x-2 my-2 sm:my-0">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <ChevronLeft size={20} />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-2 py-1 border rounded ${currentPage === index + 1 ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center py-2 text-white text-xs">
        &copy; {new Date().getFullYear()} Menica. All rights reserved.
      </footer>

      <a
        href="https://wa.me/yourwhatsappnumber"
        className="fixed bottom-4 right-4 bg-yellow-400 text-white p-2 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageSquareShare className="text-lg text-slate-900" />
      </a>
    </div>
  );
};

export default LoginForm;
