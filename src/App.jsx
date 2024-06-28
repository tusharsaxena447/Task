// import { useState } from 'react'

import { useEffect, useState } from "react"
import Card from "./components/Card"
import { useDispatch, useSelector } from "react-redux"
import {fetchTodo} from './redux/todoSlicer.jsx'
import Pagination from "./components/Pagination.jsx"



function App() {
  const currentpage =useSelector((state) => state.todo.value)
  const [postperPage, setPostperPage] = useState(6)
  const dispatch = useDispatch()
  const data = useSelector(state => state.todo)
  useEffect(()=>{
    dispatch(fetchTodo())
  },[dispatch])

  const lastPost = currentpage * postperPage
  const firstPost = lastPost - postperPage
 const showData = data.data && data.data.slice(firstPost, lastPost)
  // setCurrentpage(useSelector((state) => state.todo.value))
  return (
    <>
    <div className="container flex flex-wrap gap-5 justify-center mt-4">
    {data.isLoading ? <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" alt="Loading..." /> : 
    showData && showData.map((element)=>(
      <Card key={element.id} title = {element.title} body= {element.body} image={element.image} id= {element.id}/>
    ))
    }  
    <Pagination totalPosts = {data.data && data.data.length} postperPage={postperPage} />
    </div>
    </>
  )
}

export default App
