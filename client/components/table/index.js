import React,{useState,useEffect} from 'react';
import FileUploader from './fileUploader';
import FileData from './fileData';
import BarChart from './graph.js';

export default function Table(){

const [data,setData] = useState([])
const [sortData,setSetSortedData] = useState([])
const [dropData,setDropData] = useState([])

useEffect(()=>{
  if(data.length && !sortData.length){
    let abc = data.reduce((acc,crr,key)=>{
      if(key ===0){
        acc = crr.map((item)=>{
          return {key:item,value:[]}
        });
      }else{
        crr.map((item,key)=>{
          acc[key].value.push(item)
        })
      }
      return acc
    },[])
    setSetSortedData(abc)
  }

},[data,sortData])


  return(<div style={{width:"100%",height:"100vh"}}>
      <div style={{maxHeight:"20%",minHeight:"20%"}}>
      <FileUploader setData={setData} />
      </div>
      <div style={{maxHeight:"80%",minHeight:"80%"}}>
        <FileData data={sortData} dropData={dropData} setDropData={setDropData}/>
      </div>
    </div>)
}
