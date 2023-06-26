const cheerio = require("cheerio");
const axios = require("axios");
const Data = require("./data.js");

class Ktm extends Data {
  name = "";
  URL = "https://kathmandu.gov.np";

  saveData() {
    this.getData().then((html) => {
      let ktm_data = [];
      const $ = cheerio.load(html);
      const elements = $(".tab-content.current ul li ");
      elements.each((i, el) => {
        const heading =$(el).find('a').text();
        const links =$(el).find('a').attr('href');
        ktm_data.push({
          heading,
          links
          
          
        });
      });
      this.save(ktm_data, "ktm");
    });
  }
}

const ktm = new Ktm();
ktm.saveData();
