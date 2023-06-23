const cheerio = require('cheerio');
const Data = require('./data');
const axios = require('axios');
const request = require('request');
class Scrap extends Data{
    name="brt_mahanagarpalika";
    URL="https://biratnagarmun.gov.np/";
    
    async saveData(){
        try {
            const html = await this.getData();
            let data =[];
            const $ = cheerio.load(html);
            const elelemnt=$('.col-md-5 ul .views-row');
            elelemnt.each((i,el)=>{
                const title = $(el).text().trim();
                const link  ="https://biratnagarmun.gov.np/"+$(el).find('a').attr('href');
                const image = $(el).find('img').attr('src');
               if('title'){
                data.push({
                    title,
                    link,
                    image,
                    topic:'mahanagarpalai',
                    category:"mahanagar_palika",
                });
               }
                // this.save(data,);
        this.save(data, 'mahanagar_palika');


            })
        } catch (err) {
            console.error(err);
        }
    }
}
const scrap = new Scrap();
scrap.saveData();



/*
request('url',(error,response,html)=>{
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        const heading =$("")
    }
})
*/