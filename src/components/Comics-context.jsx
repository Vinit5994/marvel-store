import react , { createContext, useEffect, useState } from "react"


const comicContext = createContext({
  result:[]
})

const ComicContextProvider =(p)=>{
// const [des , setdes] = useState()
// const [title , setTitle] = useState()
// const [price, setPrice]  =useState()

const [result,setResult] = useState()
const [totalarr,settotalarr]=useState()
const [page,setpage]=useState(1)
 
    const img = async()=>{
try{
        fetch('https://gateway.marvel.com/v1/public/comics?'
       + new URLSearchParams({
        "ts": 1,
        "apikey": "126b42d08761843dfd92f29c64f3706c",
        "hash": "beb893f02123f2ff40983dbdeec1d280",
        // "limit":"80"
       }
       )
       ).then((res)=>{
      return res.json();
       }).then((data)=>{
        console.log(data.data)
        setpage(data.data)
        const tempData=[]
        for(var i=0;i<data.data.results.length;i++){
            tempData.push(data.data.results[i])
        }
        console.log(tempData.length)
        setResult(tempData)

       })
    }catch(e){
    console.log(e)
    }
}
    useEffect(()=>{
        img();
    },[])


    return(
        
        <comicContext.Provider value={{result}}>
        {p.children}
        </comicContext.Provider>
    )
}




export default comicContext
export {ComicContextProvider}