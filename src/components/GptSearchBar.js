const GptSearchBar = () => {
  return (
    <div>
        <form className="flex justify-center items-center pt-24">
            <input autoFocus className="cursor-pointer rounded-l-lg p-4 w-1/2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Which movie do you want to watch today?" />
            <button className="px-8 rounded-r-lg bg-green-400  text-gray-800 font-bold p-4 uppercase border-green-600 border-t border-b border-r">Search</button>
        </form>
    </div>
  );
}

export default GptSearchBar;