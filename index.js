const cheerio= require('cheerio');
const Data= require('./data')
class Loksewa extends Data{
    
    name="";
    URL="https://psc.gov.np/";
    
    
    
    saveData(){
        this.getData()
        .then((html)=>{
            let loksewa_Ads=[];
            let loksewa_permission=[];

            const $ =cheerio.load(html);
            $('div.uk-panel.text-panel').each((i,el)=>{
                const ele = $(el).find('span a');
                const date = ele.find('strong').text().trim();
                const title = ele.text().trim().replace(date,'');
                loksewa_permission.push({date,title})
                this.save(loksewa_permission,'loksewa_permission')
            });
            //loksewa_Ads start
            $('.table tbody tr').each((i, el) => {
                const Columns = $(el).find('td');
                const adsNo = $(Columns[0]).text().trim(); 
                const title = $(Columns[1]).text().trim();  
                const positionNumber = $(Columns[2]).text().trim(); 
                const lastDate = $(Columns[3]).text().trim();  
                const extendedData = $(Columns[4]).text().trim();  
                
                if (adsNo && title && positionNumber && lastDate && extendedData) {
                    loksewa_Ads.push({
                        adsNo,
                        title,
                        positionNumber,
                        lastDate,
                        extendedData 
                    });
                }
                this.save(loksewa_Ads,'loksewa Ads');
              
            });
            //end loksewa_Ads

          
            
        })
        .catch((err)=>{
            console.error(err);
        });
    }
}

const loksewa=new Loksewa();
loksewa.saveData();