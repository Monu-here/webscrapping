const cheerio = require('cheerio');
const axios = require('axios');
const Data =  require('./data');

class Birgunj extends Data{
    name = ""
    URL="https://birgunjmun.gov.np/"
    saveData(){
        this.getData().then((html)=>{
            let birgunj_data = []
            const $ = cheerio.load(html);
            const elements = $('.region-sidebar-third .views-field-title .field-content');
            elements.each((i, el)=>{
                const heading = $(el).find('a').text();
                const link = $(el).find('a').attr('href');
                birgunj_data.push({
                    heading,
                    link:'https://birgunjmun.gov.np/'+link,
                    image:'',
                    topic:'समाचार',
                    catogery : 'समाचार'
                });
            });
            this.save(birgunj_data ,'birgunj');
        });
    }
}
const birgunj = new Birgunj();
birgunj.saveData(); 