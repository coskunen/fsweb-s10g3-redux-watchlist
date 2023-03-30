import { useDispatch } from "react-redux";
import { removeFav } from "./reducers/reducer";

export default function FavMovie({ title, id }) {
const dispatch = useDispatch();

 function handleRemoveClik ()  {
  dispatch(removeFav(id));
 } 
   
  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{title}</div>
      <button onClick={handleRemoveClik} className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100">
        Çıkar
      </button>
    </div>
  );
}
