const fs = require('fs');
const { default: axios } = require('axios');

class Data{
    name='';
    URL="";
    async getData(){
        try {
            const data= await axios.get(this.URL);
            return data.data;
            
        } catch (error) {
            
            throw error;
        }
    }

    transformData(data){
        return data;
    }

    save(data,_name=null){
        if(_name==null){
            _name=this.name;
        }
        console.log("Saving your data");
        const jsonData = JSON.stringify(data,null,2);
        const filePath = _name+'.json';
        fs.writeFile(filePath,jsonData,'utf-8',(err)=>{
        if (err) {
            console.error("An error occure while writing to the file");
        }else{
            console.log('Data has been save to the file');
        }
        });
    }
  }

module.exports=Data;






