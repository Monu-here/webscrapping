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

    save(data){
        console.log("saving data");
        const jsonData = JSON.stringify(data,null, 2);
        const filePath =this.name+'.json';
        fs.writeFile(filePath,jsonData, 'utf-8',(err) =>{
            if (err){
                console.error('An error occur while writing to the file:', err);
        
            }else{
                console.log('Data has been successfully saved to the file.');
            }
        });
    }
}

module.exports=Data;