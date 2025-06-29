/* eslint-disable react/prop-types */
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Close, Save } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";

const IllustrationCreatePage = () => {
  let basicPayload = {
    description: "",
    daysOfDelivery: "",
    revisions: "",
    illustrationCount: "",
    characterCount: "",
    backgroundScene: false,
    colourIllusion: false,
    printReady: false,
    sourceFile: false,
    price: ""
  };

  let standardPayload = {
    description: "",
    daysOfDelivery: "",
    revisions: "",
    illustrationCount: "",
    characterCount: "",
    backgroundScene: false,
    colourIllusion: false,
    printReady: false,
    sourceFile: false,
    price: ""
  };

  let premiumPayload = {
    description: "",
    daysOfDelivery: "",
    revisions: "",
    illustrationCount: "",
    characterCount: "",
    backgroundScene: false,
    colourIllusion: false,
    printReady: false,
    sourceFile: false,
    price: ""
  };

  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedImages, setSelectedImages] = useState([]);
  const [images, setimages] = useState();
  const imageRef = useRef(null);
  const [basicFeatures, setbasicFeatures] = useState({});
  const [basicFeatureDetail, setbasicFeatureDetail] = useState(basicPayload);
  const [standardFetureDetail, setstandardFetureDetail] =
    useState(standardPayload);
  const [premiumFetureDetail, setpremiumFetureDetail] =
    useState(premiumPayload);

  const [basicPriceDetail, setbasicPriceDetail] = useState({
    currency: "USD",
    price: ""
  });
  const [standardPriceDetail, setstandardPriceDetail] = useState({
    currency: "USD",
    price: ""
  });
  const [premiumPriceDetail, setpremiumPriceDetail] = useState({
    currency: "USD",
    price: ""
  });
  const [description, setdescription] = useState();
  const [title, settitle] = useState();

  const formData = new FormData();

  const handleImageChange = (e) => {
    setimages(e.target.files);

    const files = Array.from(e.target.files);
    const images = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        images.push(reader.result);
        if (images.length === files.length) {
          setSelectedImages(images);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const createIllustration = () => {
    console.log("calling ");
    for (let i = 0; i < images?.length; i++) {
      formData.append("images", images[i]);
    }
    formData.append("title", title);
    formData.append("about", description);
    formData.append("basicDetails", JSON.stringify(basicFeatureDetail));
    formData.append("basicPrice", basicPriceDetail?.price);
    formData.append("basicPriceCurrency", basicPriceDetail?.currency);
    formData.append("standardPrice", standardPriceDetail?.price);
    formData.append("standardPriceCurrency", standardPriceDetail?.currency);
    formData.append("standardDetails", JSON.stringify(standardFetureDetail));
    formData.append("premiumPrice", premiumPriceDetail?.price);
    formData.append("premiumPriceCurrency", premiumPriceDetail?.currency);
    formData.append("premiumDetails", JSON.stringify(premiumFetureDetail));

    dispatch({
      type: "CREATE_SERVICE_SAGA",
      payload: {
        body: formData,
        categoryId: id
      }
    });
  };

  return (
    <>
      <div className="w-screen  ">
        {/* <div className=" px-20 pt-3 overflow-y-hidden">
          <Header />
        </div> */}
        <div className="">
          <div className="px-3 2md:px-5 pt-10 border-b flex justify-between">
            <div className="text-3xl font-sans "> Create New Illustration</div>
            <div className="flex space-x-5 items-center">
              <button
                className="flex space-x-2 btn btn-sm"
                onClick={createIllustration}
              >
                <Save className="text-[#0363af]/80" />
                <div>Save</div>
              </button>
              <Link to={`/Illustration/${id}/Portfolio`}>
                <IconButton size="50">
                  <Close />
                </IconButton>
              </Link>
            </div>
          </div>
          <div className="overflow-y-auto h-[85vh] space-y-3 pt-10">
            <div className="px-3 2md:px-5">
              <div>
                <div className="text-xl text-stone-500 font-sans">
                  Add Title
                </div>
                <input
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                  type="text"
                  className="border-b border-black w-full focus:outline-none"
                />
              </div>
              <div className="mt-5">
                <div className="text-xl text-stone-500 font-sans">
                  Add Description
                </div>
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={setdescription}
                />
              </div>
              <div className="text-xl text-stone-500 py-2 bg-stone-100 px-2">
                Add images
              </div>
              <div className="  ">
                {selectedImages.length === 0 && (
                  <div>
                    <button
                      onClick={() => {
                        imageRef.current.click();
                      }}
                      className="w-80 text-stone-500  cursor-pointer h-20 border-2 border-dotted   border-yellow-500  text-yellow-800 text-center justify-center flex items-center"
                    >
                      Add images
                    </button>

                    <input
                      ref={imageRef}
                      type="file"
                      multiple
                      hidden
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                )}

                {selectedImages.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 py-2 border-2 p-5 border-dotted   border-yellow-500">
                    {selectedImages.map((image, index) => (
                      <img key={index} src={image} alt={`Image ${index}`} />
                    ))}
                  </div>
                )}
                {selectedImages.length > 0 && (
                  <div
                    className="flex items-center px-2 space-x-2 cursor-pointer text-red-600"
                    onClick={() => {
                      setimages();
                      setSelectedImages([]);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faClose}
                      className="flex justify-end text-right"
                    />
                    <div>Delete</div>
                  </div>
                )}
              </div>
              <div className="px-3 2md:px-6 bg-stone-100 my-2 rounded-sm border-t-2 border-spacing-y-3">
                <table className="table-fixed w-full ">
                  <thead>
                    <tr>
                      <th className="text-start border-b  w-[30%]">
                        Service Title
                      </th>
                      <th className="text-start border px-2">Basic</th>
                      <th className="text-start border px-2">Standard</th>
                      <th className="text-start border border-r-0 px-2">
                        Premium
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="w-[40%]">
                      <td></td>
                      <td className="border px-2 bg-white ">
                        <textarea
                          placeholder="Basic Description"
                          className="border-b w-full focus:outline-none"
                          onChange={(e) => {
                            setbasicFeatureDetail({
                              ...basicFeatureDetail,
                              description: e.target.value
                            });
                          }}
                        />
                      </td>
                      <td className="border px-2 bg-white">
                        <textarea
                          placeholder="Standard Description "
                          className="border-b w-full focus:outline-none"
                          onChange={(e) => {
                            setstandardFetureDetail({
                              ...standardFetureDetail,
                              description: e.target.value
                            });
                          }}
                        />
                      </td>
                      <td className="border px-2 bg-white">
                        <textarea
                          placeholder="Premium Description"
                          className="border-b w-full focus:outline-none"
                          onChange={(e) => {
                            setpremiumFetureDetail({
                              ...premiumFetureDetail,
                              description: e.target.value
                            });
                          }}
                        />
                      </td>
                    </tr>

                    <tr className="w-[40%]">
                      <td className="border border-t-0 border-l-0">
                        Days of delivary
                      </td>
                      <td className="border px-2 bg-white h-20">
                        <input
                          type="number"
                          className="border-b w-full focus:outline-none"
                          placeholder="Enter your days of delivary"
                          onChange={(e) => {
                            setbasicFeatureDetail({
                              ...basicFeatureDetail,
                              daysOfDelivery: e.target.value
                            });
                          }}
                        />
                      </td>
                      <td className="border px-2 bg-white h-20">
                        <input
                          type="number"
                          className="border-b w-full focus:outline-none"
                          placeholder="Enter your days of delivary "
                          onChange={(e) => {
                            setstandardFetureDetail({
                              ...standardFetureDetail,
                              daysOfDelivery: e.target.value
                            });
                          }}
                        />
                      </td>
                      <td className="border px-2 bg-white h-20">
                        <input
                          type="number"
                          className="border-b w-full focus:outline-none"
                          placeholder="Enter your days of delivary "
                        />
                      </td>
                    </tr>
                    <IllustrationCreateRow
                      serviceTitle="Revisions"
                      isTextAreaBasic={false}
                      basicInputType="text"
                      basicPlaceHolder="Enter your revisions"
                      basicOnchange={(e) => {
                        setbasicFeatureDetail({
                          ...basicFeatureDetail,
                          revisions: e.target.value
                        });
                      }}
                      isTextAreaStandard={false}
                      standardInputType="text"
                      standardPlaceHolder="Enter your revisions"
                      standardOnchange={(e) => {
                        setstandardFetureDetail({
                          ...standardFetureDetail,
                          revisions: e.target.value
                        });
                      }}
                      isTextAreaPremium={false}
                      premiumInputType="text"
                      premiumPlaceHolder="Enter your revisions"
                      premiumOnchange={(e) => {
                        setpremiumFetureDetail({
                          ...premiumFetureDetail,
                          revisions: e.target.value
                        });
                      }}
                    />
                    <IllustrationCreateRow
                      serviceTitle="Illustration Count"
                      isTextAreaBasic={false}
                      basicInputType="number"
                      basicPlaceHolder="Enter your illustration count"
                      basicOnchange={(e) => {
                        setbasicFeatureDetail({
                          ...basicFeatureDetail,
                          illustrationCount: e.target.value
                        });
                      }}
                      isTextAreaStandard={false}
                      standardInputType="number"
                      standardPlaceHolder="Enter your illustration count"
                      standardOnchange={(e) => {
                        setstandardFetureDetail({
                          ...standardFetureDetail,
                          illustrationCount: e.target.value
                        });
                      }}
                      isTextAreaPremium={false}
                      premiumInputType="number"
                      premiumPlaceHolder="Enter your illustration count"
                      premiumOnchange={(e) => {
                        setpremiumFetureDetail({
                          ...premiumFetureDetail,
                          illustrationCount: e.target.value
                        });
                      }}
                    />
                    <IllustrationCreateRow
                      serviceTitle="Character Count"
                      isTextAreaBasic={false}
                      basicInputType="number"
                      basicPlaceHolder="Enter your character count"
                      basicOnchange={(e) => {
                        setbasicFeatureDetail({
                          ...basicFeatureDetail,
                          characterCount: e.target.value
                        });
                      }}
                      isTextAreaStandard={false}
                      standardInputType="number"
                      standardPlaceHolder="Enter your character count"
                      standardOnchange={(e) => {
                        setstandardFetureDetail({
                          ...standardFetureDetail,
                          characterCount: e.target.value
                        });
                      }}
                      isTextAreaPremium={false}
                      premiumInputType="number"
                      premiumPlaceHolder="Enter your character count"
                      premiumOnchange={(e) => {
                        setpremiumFetureDetail({
                          ...premiumFetureDetail,
                          characterCount: e.target.value
                        });
                      }}
                    />
                    <IllustrationCreateRow
                      serviceTitle="Background/ Scene"
                      isTextAreaBasic={false}
                      basicInputType="checkbox"
                      basicOnchange={(e) => {
                        setbasicFeatureDetail({
                          ...basicFeatureDetail,
                          backgroundScene: e.target.checked
                        });
                      }}
                      isTextAreaStandard={false}
                      standardInputType="checkbox"
                      standardOnchange={(e) => {
                        setstandardFetureDetail({
                          ...standardFetureDetail,
                          backgroundScene: e.target.checked
                        });
                      }}
                      isTextAreaPremium={false}
                      premiumInputType="checkbox"
                      premiumOnchange={(e) => {
                        setpremiumFetureDetail({
                          ...premiumFetureDetail,
                          backgroundScene: e.target.checked
                        });
                      }}
                    />
                    <IllustrationCreateRow
                      serviceTitle="Colour Illusion"
                      isTextAreaBasic={false}
                      basicInputType="checkbox"
                      basicOnchange={(e) => {
                        setbasicFeatureDetail({
                          ...basicFeatureDetail,
                          colourIllusion: e.target.checked
                        });
                      }}
                      isTextAreaStandard={false}
                      standardInputType="checkbox"
                      standardOnchange={(e) => {
                        setstandardFetureDetail({
                          ...standardFetureDetail,
                          colourIllusion: e.target.checked
                        });
                      }}
                      isTextAreaPremium={false}
                      premiumInputType="checkbox"
                      premiumOnchange={(e) => {
                        setpremiumFetureDetail({
                          ...premiumFetureDetail,
                          colourIllusion: e.target.checked
                        });
                      }}
                    />
                    <IllustrationCreateRow
                      serviceTitle="Print-ready"
                      isTextAreaBasic={false}
                      basicInputType="checkbox"
                      basicOnchange={(e) => {
                        setbasicFeatureDetail({
                          ...basicFeatureDetail,
                          printReady: e.target.checked
                        });
                      }}
                      isTextAreaStandard={false}
                      standardInputType="checkbox"
                      standardOnchange={(e) => {
                        setstandardFetureDetail({
                          ...standardFetureDetail,
                          printReady: e.target.checked
                        });
                      }}
                      isTextAreaPremium={false}
                      premiumInputType="checkbox"
                      premiumOnchange={(e) => {
                        setpremiumFetureDetail({
                          ...premiumFetureDetail,
                          printReady: e.target.checked
                        });
                      }}
                    />
                    <IllustrationCreateRow
                      serviceTitle="Source file"
                      isTextAreaBasic={false}
                      basicInputType="checkbox"
                      basicOnchange={(e) => {
                        setbasicFeatureDetail({
                          ...basicFeatureDetail,
                          sourceFile: e.target.checked
                        });
                      }}
                      isTextAreaStandard={false}
                      standardInputType="checkbox"
                      standardOnchange={(e) => {
                        setstandardFetureDetail({
                          ...standardFetureDetail,
                          sourceFile: e.target.checked
                        });
                      }}
                      isTextAreaPremium={false}
                      premiumInputType="checkbox"
                      premiumOnchange={(e) => {
                        setpremiumFetureDetail({
                          ...premiumFetureDetail,
                          sourceFile: e.target.checked
                        });
                      }}
                    />
                    <IllustrationCreateRow
                      serviceTitle="Price"
                      isTextAreaBasic={false}
                      basicInputType="number"
                      basicPlaceHolder="Enter your price"
                      basicOnchange={(e) => {
                        setbasicPriceDetail({
                          ...basicPriceDetail,
                          price: e.target.value
                        });
                      }}
                      isTextAreaStandard={false}
                      standardInputType="number"
                      standardPlaceHolder="Enter your price"
                      standardOnchange={(e) => {
                        setstandardPriceDetail({
                          ...standardPriceDetail,
                          price: e.target.value
                        });
                      }}
                      isTextAreaPremium={false}
                      premiumInputType="number"
                      premiumPlaceHolder="Enter your price"
                      premiumOnchange={(e) => {
                        setpremiumPriceDetail({
                          ...premiumPriceDetail,
                          price: e.target.value
                        });
                      }}
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IllustrationCreatePage;

const IllustrationCreateRow = ({
  serviceTitle,
  isTextAreaBasic,
  basicInputType,
  basicPlaceHolder,
  basicOnchange,
  isTextAreaStandard,
  standardInputType,
  standardPlaceHolder,
  standardOnchange,
  isTextAreaPremium,
  premiumInputType,
  premiumPlaceHolder,
  premiumOnchange
}) => {
  return (
    <tr className="w-[40%]">
      <td className="border border-t-0 border-l-0">{serviceTitle}</td>
      {/* basic */}
      <td className="border px-2 bg-white h-20">
        {!isTextAreaBasic ? (
          <input
            type={basicInputType}
            className="border-b w-full focus:outline-none"
            placeholder={basicPlaceHolder}
            onChange={basicOnchange}
          />
        ) : (
          <textarea
            placeholder={basicPlaceHolder}
            className="border-b w-full focus:outline-none"
            onChange={basicOnchange}
          />
        )}
      </td>
      {/* standard */}
      <td className="border px-2 bg-white h-20">
        {!isTextAreaStandard ? (
          <input
            type={standardInputType}
            className="border-b w-full focus:outline-none"
            placeholder={standardPlaceHolder}
            onChange={standardOnchange}
          />
        ) : (
          <textarea
            placeholder={standardPlaceHolder}
            className="border-b w-full focus:outline-none"
            onChange={standardOnchange}
          />
        )}
      </td>
      {/* Premium */}
      <td className="border px-2 bg-white h-20">
        {!isTextAreaPremium ? (
          <input
            type={premiumInputType}
            className="border-b w-full focus:outline-none"
            placeholder={premiumPlaceHolder}
            onChange={premiumOnchange}
          />
        ) : (
          <textarea
            placeholder={premiumPlaceHolder}
            className="border-b w-full focus:outline-none"
            onChange={premiumOnchange}
          />
        )}
      </td>
    </tr>
  );
};
