import Image from 'next/image';
import { reey, thunder, thunderB, generalSans, schabo, windsong,sansation, norwester, yellowTail, allura } from '@/app/style'

const WeddingCard = () => {
  return (
    <div className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/258421/pexels-photo-258421.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Wedding"
        //   width={400}
        //   height={800}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-6">
          <div className={`${reey.className} text-2xl mt-8 mb-6 text-[#fff]`}
          >
              Fahrana & Doni
          </div>
          <div className={`text-6xl tracking-tighter text-[#fff] leading-12 mb-4 font-extrabold ${norwester.className}`}
              style={{
              }}
          >
              OUR <br/>SPECIAL<br/> WEDDING
          </div>
          <div className="italic my-2 text-white"
              style={{
                  fontFamily: 'Livvic'
              }}
          >
              Love is composed of <br/>
              a single soul inhabiting two bodies.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCard;
