import { Person } from "@mui/icons-material";
import PropTypes from "prop-types";

function SenderCard({ content, username, datetime }) {
  return (
    <div className="flex items-end">
      <div className="flex items-center space-x-2 bg-gray-300 px-3 py-3 my-3 rounded-l-2xl  rounded-tr-lg w-72 ">
        <div>
          <div className="">{content}</div>
          <div className="flex space-x-3 text-sm text-slate-500 items-center pt-2 justify-between">
            <div>{username}</div>
            <div className="text-sm text-slate-500 flex justify-end ">
              12.02.2023 3:00 pm {datetime}
            </div>
          </div>
        </div>
      </div>
      <Person className="w-3 h-3 " />
    </div>
  );
}

SenderCard.propTypes = {
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  datetime: PropTypes.any,
};
export default SenderCard;
