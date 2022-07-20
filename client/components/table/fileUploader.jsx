import React,{useState} from 'react';
import * as XLSX from 'xlsx';

export default function FileUploader({setData}){

const [myFile,setFile] = useState('');

const handleFile=(e)=>{
  const file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var data = e.target.result;
    let readedData = XLSX.read(data, {type: 'binary'});
    const wsname = readedData.SheetNames[0];
    const ws = readedData.Sheets[wsname];
    /* Convert array to json*/
    const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
    setData(dataParse)
    setFile(e.target.files)
    //setFileUploaded(dataParse);
};
reader.readAsBinaryString(file)

}


return(<div>
  <input type="file" value={myFile} onChange={handleFile} />
  </div>)

}
