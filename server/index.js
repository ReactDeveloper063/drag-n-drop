const express = require('express')
const app = express();

const path = require('path');
const express= require('express');
app=express();
app.use(express.static('./dist'));
app.get('*', function(request,response) {
	response.sendFile(path.join(__dirname,"/../dist/index.html"));
});
app.listen(4000,()=>{

  console.log('server is running')
})
