import React , {useState, useRef} from 'react'
import SearchB from './components/searchbar'
import {TaskList} from './components/listelement'
import UpdateList from './components/update'
import {Link} from 'react-router-dom'
const Home = () => {
  const [tasks, appendList] = useState([])
  
  return (
  <>
    <div>
      <SearchB text='search for task' data={tasks} update={appendList}/>
      <TaskList data={tasks} update = {appendList} />
      <UpdateList list = {tasks} addList={appendList}/>
      <Link to='/about'>About</Link>
    </div>

  </>
)}

export default Home
