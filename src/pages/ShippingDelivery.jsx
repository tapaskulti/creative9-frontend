/* eslint-disable react/no-unescaped-entities */
import Header from "../components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="overflow-y-hidden">
      <div className="py-2">
        <Header />
      </div>

      <div className="h-screen overflow-y-auto">
        <div className="mx-6 mt-32 md:mx-20 lg:mx-32 2xl:mx-60 font-sans mb-60">
          <h2 className="pb-10 text-4xl text-center uppercase text-slate-900">
            Shipping and Delivery
          </h2>
          <h2 className="py-2 text-2xl font-semibold font-sans text-slate-500">
            (1) For Hand made painting
          </h2>
          <h2 className="py-3 text-lg font-sans">
            1. We Deliver paintings all over the world within 8 to 12 Business
            Days.
          </h2>
          <h2 className="py-3 text-lg font-sans">2. We use -</h2>
          <h2 className="py-1 font-sans">
            A) DTDC International Shipping company.
          </h2>
          <h2 className="py-1 font-sans">
            B) Blue Dart International courier service.
          </h2>
          <h2 className="py-3 text-lg font-sans">3. Shipping is free.</h2>
          <h2 className="py-1 text-lg font-sans">
            4. We'll send to the client of the courier receipt so client's can
            Track their Delivery.
          </h2>
          <h2 className="py-2 text-2xl font-semibold font-sans text-slate-500">
            (2) For Degital illustration:
          </h2>
          <h2 className="py-1 text-lg font-sans">A) For Digital files client's can direct download After make the
          payment from our website. <br />B) If client share their email id to send
          the final files. Then we'll send the final files in thir email id
          after make the payment.</h2>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
