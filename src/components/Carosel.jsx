/* eslint-disable react/prop-types */
const Carousel = ({ images }) => {
  return (
    <div className="flex items-center overflow-x-scroll">
      <div className="flex-none w-1/4">
        {/* Thumbnails */}
        {images.map((imageUrl, index) => (
          <div key={index} className="w-16 h-16 p-2 border cursor-pointer">
            <img src={imageUrl} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>
      <div className="flex-grow overflow-x-hidden relative">
        {/* Main Image Scrolling Section */}
        <div className="absolute inset-0 flex">
          {images.map((imageUrl, index) => (
            <div
              key={index}
              className="flex-none w-full h-full transition-transform duration-300 transform hover:scale-110"
            >
              <img src={imageUrl} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
