/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Header from "../components/Header";

const CancellationRefund = () => {
  return (
    <div>
      <div className="py-2">
        <Header />
      </div>

      <div className="h-[100vh] overflow-y-auto">
        <div className="mx-6 mt-32 md:mx-20 lg:mx-32 2xl:mx-60 font-sans mb-60">
          <h2 className="pb-10 text-4xl text-center uppercase text-slate-900">
            Cancellation and Refund
          </h2>

          <h2 className="py-2 text-2xl font-semibold font-sans text-slate-500">
            For Painting
          </h2>

          <h2 className="py-3 text-lg font-sans">
            1. We Accept the cancellation within 30 days of delivery.
          </h2>
          <h2 className="py-3 text-lg font-sans">
            2. After Received the cancelled painting from the shipping company
            we'll re-fund the money.
          </h2>
          <h2 className="py-3 text-lg font-sans">
            3. For the cancelled painting's Ruturn shipping charges is provide
            by the client.
          </h2>

          <h2 className="py-2 text-2xl font-semibold font-sans text-slate-500">
            For the Illustrations and Digital works:
          </h2>

          <h2 className="py-3 text-lg font-sans">
            1. We'll do a free sample according to all the client's
            requirements.
          </h2>
          <h2 className="py-3 text-lg font-sans">
            2. Client's can cancell the job Before made 3 illustrations.
          </h2>
          <h2 className="py-3 text-lg font-sans">
            3. After Deliver all the works of the project client's can't do
            cancel the job and Refund'll not accept by us.
          </h2>
        </div>
      </div>
      <div className="py-2">
        <Footer />
      </div>
    </div>
  );
};

export default CancellationRefund;
