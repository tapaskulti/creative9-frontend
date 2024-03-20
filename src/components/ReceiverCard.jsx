import { Person } from "@mui/icons-material";

function ReceiverCard() {
  return (
    <div className="flex items-end">
      <Person className="w-3 h-3 " />

      <div className="flex items-center space-x-2 bg-gray-300 px-3 py-3 my-3 rounded-tl-lg  rounded-r-2xl w-72 ">
        <div>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            vel sint odit rerum nemo nulla laboriosam quasi
          </div>
          <div className="flex text-sm text-slate-500 items-center pt-2 justify-between">
            <div>Admin</div>
            <div className="text-sm text-slate-500 flex justify-end ">
              12.02.2023 2:00 pm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiverCard;
