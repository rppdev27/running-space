import React from 'react';

const TemplateCategory: React.FC = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center py-16 bg-gray-50"
      style={{
        fontFamily: 'Kanit'
      }}
    >
      <header>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Pilih Desain <span className="text-green-700">Undanganmu</span>
        </h2>
      </header>

      <div className="flex justify-center sm:justify-around sm:w-full max-w-4xl sm:space-x-4 sm:mt-20 mt-8 flex-col sm:flex-row">
        {/* Standard Card */}
        <article className="relative flex flex-col items-center bg-green-100 p-10 rounded-3xl w-3/4 sm:w-full shadow-sm mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-[#4A4242]">Standard</h3>
          <figure className="mb-4">
            <img src="https://asset.menica.pro/image+20.svg" alt="Standard Design" />
            <figcaption>Standard Design Preview</figcaption>
          </figure>
          <figure>
            <img src="/standard-preview.png" alt="Standard Preview" />
            <figcaption>Preview of Standard Template</figcaption>
          </figure>
        </article>

        {/* Minisite Card */}
        <article className="relative flex flex-col items-center bg-yellow-100 p-10 rounded-3xl shadow-sm w-3/4 sm:w-full sm:mt-[-50px] mx-auto mt-14">
          <h3 className="text-2xl font-bold mb-4 text-[#4A4242]">Minisite</h3>
          <figure className="mb-4">
            <img src="https://asset.menica.pro/image+20.svg" alt="Minisite Design" />
            <figcaption>Minisite Design Preview</figcaption>
          </figure>
          <figure>
            <img src="/minisite-preview.png" alt="Minisite Preview" />
            <figcaption>Preview of Minisite Template</figcaption>
          </figure>
          <span className="absolute top-[-20px] right-0 bg-[#FBC317] text-[#8A6901] text-sm py-2 px-4 border-4 border-[#FBFBFB] shadow-md tracking-wide rounded-full font-bold">
            Best Seller
          </span>
        </article>

        {/* Fresh Card */}
        <article className="flex flex-col items-center bg-green-100 p-10 rounded-3xl w-3/4 sm:w-full shadow-sm  mx-auto mt-14 sm:mt-0">
          <h3 className="text-2xl font-bold mb-4 text-[#4A4242]">Fresh</h3>
          <figure className="mb-4">
            <img src="https://asset.menica.pro/image+20.svg" alt="Fresh Design" />
            <figcaption>Fresh Design Preview</figcaption>
          </figure>
          <figure>
            <img src="/fresh-preview.png" alt="Fresh Preview" />
            <figcaption>Preview of Fresh Template</figcaption>
          </figure>
        </article>
      </div>

      <button className="mt-8 bg-green-700 text-white py-2 px-6 rounded-full flex items-center font-bold">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        Preview Tema
      </button>
    </section>
  );
}

export default TemplateCategory;
