import React from 'react';
export default function Sidebar({data,dropData,setDropData}){

  const onDragStart =(event,name) =>{
    event.dataTransfer.setData("id", name);
  }
  const onDragOver = (ev) => {
      ev.preventDefault();
  }

  const onDrop = (ev) => {
     let id = ev.dataTransfer.getData("id");
     let newData = dropData.filter((item)=> item.key !== id);
     setDropData((value)=> [...newData]);
  }

  return(<div style={{width:"100%"}}       onDragOver={(e)=>onDragOver(e)}
        onDrop={(e)=>onDrop(e)}>
        <div>
          <ul>
          {data.map((item,key)=>{
            return <li  onDragStart = {(e) => onDragStart(e,item.key)}

                        draggable
                        key={key}>{item.key}</li>
          })}
          </ul>
        </div>
        <div>
        <ul>

       <li  onDragStart = {(e) => onDragStart(e,"graph")} draggable>
          BarChart
      </li>

        </ul>
        </div>


    </div>)
}
