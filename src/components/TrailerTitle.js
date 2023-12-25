import { PLAY_IMG } from "../utils/constants";

const TrailerTitle = ({title, overview}) => {
  return (
    <div className="pt-[25%] pl-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className="text-xl mt-4 w-1/4">{overview}</p>
      <div>
        <button className="bg-white bg-opacity-85 hover:bg-opacity-100 text-black px-8 py-4 rounded-md text-xl mt-8"><img className="inline" width="25" src={PLAY_IMG} /> Play</button>
        <button className="bg-gray-400 hover:bg-opacity-100 bg-opacity-75 px-8 py-4 rounded-md text-xl mt-4 ml-4 ">My List</button>
      </div>
    </div>
  );
}

export default TrailerTitle;