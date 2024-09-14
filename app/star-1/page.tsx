import { Motherday, mistrully} from '@/app/style'

export default function SaveTheDate() {
  return (
    <div className="h-[calc(100dvh)] sm:min-h-screen bg-[#F4EEE3] flex items-center justify-center">
  <div
    className="relative w-full sm:w-[31%]  min-h-screen mx-auto shadow-lg p-4 text-white text-center overflow-hidden"
    style={{
      backgroundImage: "url('https://ik.imagekit.io/vtvggda66/_3.jpg?updatedAt=1725901269966')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Color Overlay 85/100 */}
    <div className="absolute inset-0 bg-[#1f3148] opacity-85"></div>

      {/* TL */}
      <div className="absolute top-0 left-0 w-full h-20 bg-transparent">
        <img src='https://ik.imagekit.io/vtvggda66/Gold%20And%20Black%20Birthday%20Party%20Invitation%20Portrait(2)(1).svg?updatedAt=1725900807770' alt=''/>
      </div>
      
      {/* BR */}
      <div className="absolute bottom-0 right-0 w-full h-20 bg-red rotate-180">
        <img src='https://ik.imagekit.io/vtvggda66/Gold%20And%20Black%20Birthday%20Party%20Invitation%20Portrait(2)(1).svg?updatedAt=1725900807770' alt=''/>
      </div>

      {/* BL - 3 */}
      <div className="absolute bottom-[-7%] left-[-35%] w-full">
        <img src='https://ik.imagekit.io/vtvggda66/Gold%20And%20Black%20Birthday%20Party%20Invitation%20Portrait(4)(1).svg?updatedAt=1725902720558' alt=''/>
      </div>

      {/* BL - 1 */}
      <div className="absolute bottom-[-7%] left-[-60%] w-full">
        <img src='https://ik.imagekit.io/vtvggda66/Gold%20And%20Black%20Birthday%20Party%20Invitation%20Portrait(3).png?updatedAt=1725902935977' alt=''/>
      </div>

      {/* TR */}
      <div className="absolute top-[-5%] right-[-35%] w-full bg-transparent">
        <img src='https://ik.imagekit.io/vtvggda66/Gold%20And%20Black%20Birthday%20Party%20Invitation%20Portrait(4).png?updatedAt=1725903050304' alt=''/>
      </div>

      {/* Rose Small */}
      <div className="absolute inset-0 w-full h-full bg-transparent flex items-center justify-center">
        <img
          src="https://ik.imagekit.io/vtvggda66/Gold%20And%20Black%20Birthday%20Party%20Invitation%20Portrait(5).png?updatedAt=1725903668942"
          alt=""
          className="translate-x-10"
        />
      </div>


      {/* Peacock Rose */}
      {/* <div className="absolute bottom-[-5%] left-0 w-full"
        style={{
          width: '75%',
        }}
      >
        <img src='https://ik.imagekit.io/vtvggda66/Gold%20And%20Black%20Birthday%20Party%20Invitation%20Portrait(3)(1).svg?updatedAt=1725902332380' alt=''/>
      </div> */}

      {/* Just Peacock */}
      <div className="absolute bottom-[-5%] left-10 w-full"
        style={{
          width: '75%',
        }}
      >
        <img src='https://ik.imagekit.io/vtvggda66/Gold%20And%20Black%20Birthday%20Party%20Invitation%20Portrait(6).svg?updatedAt=1725927380789' alt=''/>
      </div>




        <div className="relative z-50 flex flex-col items-center justify-center min-h-screen"
          style={{
            fontFamily: 'Cinzel',
          }}
        >
          <p className="sm:text-lg text-base uppercase"
            style={{
              fontFamily: 'Cinzel',
            }}
          >The Wedding Of</p>
          <div className={`sm:text-7xl text-6xl font-bold my-8 ${mistrully.className}`}>Lia</div>
          <h1 className={`sm:text-7xl  text-6xl font-bold ${mistrully.className}`}>Fajar</h1>
          <p className="sm:text-lg text-base mt-4 text-[#ffbc60]">02 May, 2030</p>
          <p className="sm:text-lg text-base text-white">Sunday at 9:30 PM</p>
        </div>

        {/* Bottom Decorative Element */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-peacock-pattern"></div>
    </div>
    </div>

  );
}
