import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";

const options = [
  { value: "Basic", label: "Basic" },
  { value: "Standard", label: "Standard" },
  { value: "Premium", label: "Premium" },
];

const ImageUpload = () => {
  const {id} = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [images, setImages] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const [price, setprice] = useState()


  console.log(selectedOption, "selectedOption");

  const handleImageUpload = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList[0]);
    setImages(imageList);
    
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("portfolioImage", images[0].file);
    formData.append("package", selectedOption);
    formData.append("price", price);
    formData.append("category",id)
    dispatch({
      type: "CREATEPORTFOLIO",
      payload: {
       body: formData,
      },
    });

    navigate(`/Illustration/${id}/Portfolio`)
  }

  return (
    <div className="px-3 md:px-6 lg:px-10 py-16">
      <h2 className="text-base font-bold">Porfolio Image Upload</h2>
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={handleImageUpload}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <div className="xs:flex items-center mt-6 xs:space-x-3 md:space-x-5 space-y-2 xs:space-y-0">
                <input
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                  className="w-full xs:w-40 md:w-52 bg-gray-100 border border-gray-300 py-1.5 px-3 cursor-pointer rounded-[0.250rem]"
                  placeholder="Click or Drop here"
                />
                <div>
                  <Select
                    defaultValue={selectedOption}
                    onChange={(e) => {
                      //  console.log(e.value, "e.value");
                      setSelectedOption(e.value);
                    }}
                    options={options}
                    placeholder="Select Packages"
                    className="w-full xs:w-48 md:w-52"
                  />
                </div>
                <div>
                  <input
                  onChange={(e) => setprice(e.target.value)}
                    type="text"
                    placeholder="Input Price"
                    className="w-full xs:w-40 md:w-52 bg-white border border-gray-300 px-3 py-1.5 text-gray-900 rounded-[0.250rem]"
                  />
                </div>
                <button onClick={handleSubmit} className="w-24 xs:w-20 text-white bg-teal-700 px-2 py-1 rounded-md">
                 Save
                </button>
              </div>
              <div className="grid justify-between grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {imageList.map((image, index) => (
                  <div key={index} className="w-64 h-auto image-item">
                    <img src={image["data_url"]} alt="" className="w-64 mt-6" />
                    <div className="flex justify-between py-1 space-x-3 image-item__btn-wrapper">
                      <button
                        onClick={() => onImageUpdate(index)}
                        className="px-3 py-1 text-white bg-green-700 rounded-md"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => onImageRemove(index)}
                        className="px-3 py-1 text-white bg-red-700 rounded-md"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ImageUploading>
      </div>
    </div>
  );
};

export default ImageUpload;
