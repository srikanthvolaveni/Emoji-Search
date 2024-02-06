import React,{useState,useEffect} from 'react'
import Emojidata from './emoji.json'
const App = () => {
  const [search,setSearch] = useState('')
  const [data,setData] = useState([])

  useEffect(()=>{
    const newData = Emojidata.filter(emoji => emoji.title.toLowerCase().includes(search))
    setData(newData)
  },[search])
  return (
    <div>
      <center>
      <h1>Emoji Search</h1>
      <input type="search" name="search" value={search} onChange={e=>setSearch(e.target.value)} /> <br/> <br/>
     </center>
     {data.map(emoji => <div>
      <div className="card mb-1" onClick={()=>{navigator.clipboard.writeText(emoji.symbol);alert("emoji copied")}}>
        <div className="card-body">
          {emoji.symbol} {emoji.title}
          </div>
        </div>
     </div>)}
    </div>
  )
}

export default App
