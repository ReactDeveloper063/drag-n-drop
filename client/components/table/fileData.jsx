import React,{useState} from 'react';
import Sidebar from './sidebar';
import BarChart from './graph';
export default function FileData({data,dropData,setDropData}){
  const test =[
    {
      name: 'kentcdodds',
      repos: 371
    },
    {
      name: 'sindresorhus',
      repos: 909
    },
    {
      name: 'developit',
      repos: 222
    },
    {
      name: 'getify',
      repos: 43
    },
    {
      name: 'btholt',
      repos: 56
    },
    {
      name: 'kyleshevlin',
      repos: 82
    }
  ]
const [graphData,setGraphData] = useState(<></>);

const onDragOver = (ev) => {
    ev.preventDefault();
}
const onDragStart =(event,name) =>{
  event.dataTransfer.setData("id", name);
}

const onDrop = (ev) => {
   let id = ev.dataTransfer.getData("id");
   let myTest = []
   if(id==='graph'){
     if(dropData.length >1){
       let value1 = dropData[0].value;
       let value2 = dropData[1].value;
       myTest = value1.map((item,key)=> {
         return {name:item,repos:value2[key]}
       })
     }
     setGraphData(<BarChart data={myTest}/>)

   }else{
     let newData = data.filter((item)=> item.key === id);
     setDropData((value)=> [...value,...newData]);
  }
}


return(<div style={{width:"100%",display:"flex",flexDirection:"row"}}>
  <div style={{flexBasis:"25%"}}>
    <Sidebar data={data} dropData={dropData} setDropData={setDropData}/>
  </div>
  <div style={{flexBasis:"75%"}}  onDragOver={(e)=>onDragOver(e)} onDrop={(e)=>onDrop(e)}>
    <div style ={{height:"100%"}}>
      <span className="task-header">DropArea</span>
      <div style={{display:"flex",flexDirection:"row",overflowY:"auto",height:"400px"}}>
         {dropData.map((item,key)=>
          <ul key={key} >
            <h5 onDragStart = {(e) => onDragStart(e,item.key)} draggable >{item.key}</h5>
            {item.value.map((value,idx)=>
              <li key={key}>{value}</li>
            )}
          </ul>

         )}
      </div>
      <div onDragStart = {(e) => onDragStart(e,"graph")} draggable>
      {graphData}

      </div>


    </div>
  </div>
</div>)


}
