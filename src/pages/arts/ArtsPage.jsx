import Header from "../../components/Header";
import { Dialog, Transition } from "@headlessui/react";
import ArtCard from "../../components/ArtCard";
import { useDispatch, useSelector } from "react-redux";
// import { Box, Modal, Typography } from "@mui/material";
import { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Chat from "../../components/Chat";
import Footer from "../../components/Footer";
// import { useSelector } from "react-redux";

function ArtsPage() {
  const dispatch = useDispatch();

  const { adminView } = useSelector((state) => state.user);
  const { arts } = useSelector((state) => state.art);
  const [openModal, setopenModal] = useState(false);

  useEffect(() => {
    dispatch({
      type: "GET_ALL_ART",
    });
  }, []);

  return (
    <>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setopenModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setopenModal(false);
                      }}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="">
        <div className="  overflow-y-hidden">
          <Header />
          <div className="pt-10">
            <div className="sm:flex sm:justify-between items-center mx-3 md:mx-10  mb-2 border-b">
              <div className="text-xl sm:text-2xl lg:text-3xl font-sans tracking-wider font-bold text-stone-700 pb-3">
                Explore Exclusive Paintings
              </div>
              <div className="w-52 mb-2">
                {adminView && (
                  <Link
                    to="/Painting/create"
                    className="rounded-md text-center bg-teal-600 text-white hover:bg-teal-700 px-2 py-1 cursor-pointer"
                  >
                    Upload New Paintings
                  </Link>
                )}
              </div>
            </div>
            <div className="h-[80vh] overflow-y-auto">
              <div className="px-2 mr-2 md:mr-0 md:px-10 pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-y-10">
                {arts?.map((art) => {
                  return (
                    <ArtCard
                      key={art._id}
                      id={art?._id}
                      title={art?.title}
                      artistName={art?.artistName}
                      image={art?.art[0]?.secure_url}
                      medium={art?.categoryMedium}
                      width={art?.width}
                      height={art?.height}
                      year={art?.year}
                      price={art?.price}
                    />
                  );
                })}
              </div>
              <div className="pt-10"><Footer /></div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtsPage;
