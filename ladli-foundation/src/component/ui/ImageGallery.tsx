import React from 'react'
type ImageGalleryProps ={
    imageUrls: string[];
  }
  const ImageGallery: React.FC<ImageGalleryProps> = ({ imageUrls }) => {
   
  return (
      <div className='w-full h-full flex flex-col gap-7 '>
        <div className='flex justify-center'>
        <div className='font-bold text-[35px] inline-block text-center bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent'>GLIMPSES</div>
        </div>
       <div className='flex justify-center'>
       <div className='flex-col gap-3 flex'>
          <div className='flex-col flex sm:flex-row gap-3 '>
            <div className=''>
              {imageUrls.slice(0, 1).map((imageUrl, index) => (
                <div key={index}>
                  <img src={imageUrl} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-1 '>
              {imageUrls.slice(1, 5).map((imageUrl, index) => (
                <div key={index} >
                  <img src={imageUrl} alt={`Image ${index + 2}`} className='w-full' />
                </div>
              ))}
            </div>
          </div>
          <div className='flex-col flex sm:flex-row gap-3'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
              {imageUrls.slice(5, 9).map((imageUrl, index) => (
                <div key={index}>
                  <img src={imageUrl} alt={`Image ${index + 6}`} className='w-full'/>
                </div>
              ))}
            </div>
            <div className='flex'>
              {imageUrls.slice(9, 10).map((imageUrl, index) => (
                <div key={index}>
                  <img src={imageUrl} alt={`Image ${index + 10}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
       </div>
      </div>
    );
  };
  
  export default ImageGallery;