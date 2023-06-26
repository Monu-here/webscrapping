const cheerio = require('cheerio');
const axios = require('axios');

const Ktm = require('./ktm');

class Scraper extends Ktm {
    name = "";
    URL = "https://kathmandupost.com/";

    async saveData() {
        try {
            const html = await this.getData();
            let ktm_post = [];
            const $ = cheerio.load(html);
            $('.container .col-sm-6 h3').each((i,el)=>{
                const head = $(el).text().trim();
                ktm_post.push({
                    head
                })
                
            });
            this.save(ktm_post, 'ktmPost');
        } catch (err) {
            console.error(err);
        }
    }
}

const scraper = new Scraper();
scraper.saveData();
