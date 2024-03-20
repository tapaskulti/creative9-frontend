import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { ArrowBack } from "@mui/icons-material";
import PortfolioCard from "../../components/PortfolioCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Portfolio = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { adminView } = useSelector((state) => state.user);

  const { portfolios } = useSelector((state) => state.category);

  console.log(portfolios, "portfolios")

  useEffect(() => {
    dispatch({
        type: "GET_PORTFOLIO_BY_CATEGORY",
        payload: {
            categoryId:id
        }
    })
  }, []);

  return (
    <>
      <div className="w-screen h-[100vh]">
        <Header />
        <div className="px-2 md:px-10 py-10">
          <Link to="/illustration">
            <ArrowBack className="" />
          </Link>
          <div className="flex items-center justify-between">
            <h2 className="py-3 font-sans text-2xl md:text-3xl text-center md:text-left font-bold tracking-wider text-stone-700">
              Portfolio
            </h2>
            {adminView && <Link
              to={`/Illustration/${id}/PortfolioImageUpload`}
              className="font-bold"
            >
              Upload Images
            </Link>}
          </div>
          <div className="h-[80vh] overflow-y-auto">
            <div className="mr-3 grid items-center justify-between gap-10 mb-32 place-content-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {portfolios.map((portfolio) => {
                return <PortfolioCard key={portfolio?._id} id={portfolio?._id} pictue={portfolio?.picture?.secure_url} price={portfolio?.price} path={`/Illustration/${id}?type=${portfolio.package}`} />
            }
            )}

            
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
