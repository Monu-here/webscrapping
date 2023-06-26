const cheerio = require("cheerio");
const axios = require("axios");
const Data = require("./data.js");

class Pokhara extends Data {
  name = "";
  URL = "https://pokharamun.gov.np/";

  saveData() {
    this.getData().then((html) => {
      let pokhara_data = [];
      const $ = cheerio.load(html);
      const elements = $(".region-sidebar-third .views-field-title .field-content ");
      elements.each((i, el) => {
        const heading =$(el).find('a').text();
        const links =$(el).find('a').attr('href');
        pokhara_data.push({
          heading,
          links:'https://pokharamun.gov.np'+links,
          topic:"सूचना तथा समाचार",
          category:'pokhara सूचना तथा समाचार'
          
        });
      });
      this.save(pokhara_data, "pokhara");
    });
  }
}

const pokhara = new Pokhara();
pokhara.saveData();
