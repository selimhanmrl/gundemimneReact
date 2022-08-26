import {React } from "react";

export const HeroSection = () => {


    return (
        <div className="bg-gray-100 h-96" >
            {/* Code block starts */}
            <>
                <div className="bg-gray-100">
                    <div className="container mx-auto flex flex-col items-center py-10 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                                Kendi  
                                <span className="text-indigo-700"> Gündemlerini </span>
                                Seç
                            </h1>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center text-sm sm:text-lg">Yetişemediğin Gündemleri Öğren veya Hangi Gündemleri Takip Ettiğini Sosyal Medyada Paylaş</p>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-500 font-normal text-center text-sm sm:text-lg">Tek Yapman Gereken Gündemlerini Seçip Kopyalaya Basmak</p>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">Sonra Dilediğin Sosyal Medya Platformunda Paylaş</p>

                        </div>
                       
                    </div>
                </div>
            </>
            {/* Code block ends */}
        </div>

    );
}

export default HeroSection;

        
  