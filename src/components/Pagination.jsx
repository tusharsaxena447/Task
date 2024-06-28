import { useDispatch } from "react-redux"
import { addTodo } from "../redux/todoSlicer"

const Pagination = ({totalPosts,postperPage}) =>{
    const dispatch = useDispatch()
    let pages = []

    for (let i = 1; i< Math.ceil(totalPosts/postperPage); i++) {
        pages.push(i)
    }
   
  return (
    <div>
      {
        pages.map((page , index) => {
            return <button key={index} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => dispatch(addTodo(page))}>{page}</button>
        })
        
      }
    </div>
  )
}
 
export default Pagination