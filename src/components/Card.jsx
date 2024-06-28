import { useDispatch } from "react-redux"
import { deleteTodo } from "../redux/todoSlicer"


export default function Card({title,body,id}) {
    const dispatch = useDispatch()
  return (
    <>
      

<div className="max-w-sm h-auto bg-white border border-gray-200 rounded-lg shadow ">
    <button onClick={() => dispatch(deleteTodo(id))} className="text-2xl relative left-[22rem] text-red-900">X</button>   
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-black dark:text-black">{body}</p>       
    </div>
    <div className="flex justify-center items-center">   
        <img className="w-[80%] rounded-t-lg " src= "https://flowbite.com/docs/images/blog/image-1.jpg"alt="image" />  
    </div>
</div>
    </>
  )
}
