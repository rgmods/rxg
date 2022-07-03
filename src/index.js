const { ApolloServer } = require('apollo-server');

const typeDefs   = require('./graphql/schema/');
const resolvers  = require('./graphql/resolvers/');
const dataSource = require('./graphql/data/');
const { default: axios } = require('axios');

class rxgWrapper {
  constructor(wrapperConfig = {}) {
    console.assert(wrapperConfig, `MISSING CONFIG PARAMETER`);
    const { apiKey, domain } = wrapperConfig.rxgSettings;

    if(domain.startsWith('https://')) this.url = `${domain}/admin/scaffolds`;
    this.url = `https://${domain}/admin/scaffolds`,
    this.apiKey = apiKey;
  }

  create(table, new_record) {
    return new Promise((resolve, reject) => {
      let data = [];
      for(let prop in new_record) {
        let encodedKey   = encodeURIComponent(prop);
        let encodedValue = encodeURIComponent(new_record[prop]);

        data.push(`${encodedKey}=${encodedValue}`);
      }

      data = data.join('&');

      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data,
        url: `${this.url}/${table}/create?api_key=${this.apiKey}`
      }

      axios(options).then((res) => resolve(res));
    });
  }

  update(table, id, new_record) {
    return new Promise((resolve, reject) => {
      let data = [];
      for(let prop in new_record) {
        let encodedKey   = encodeURIComponent(prop);
        let encodedValue = encodeURIComponent(new_record[prop]);
        
        data.push(`${encodedKey}=${encodedValue}`);
      }

      data = data.join('&');

      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data,
        url: `${this.url}/${table}/update/${id}?api_key=${this.apiKey}`
      }

      axios(options).then((res) => resolve(res));
    });
  }

  delete(table, id) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        url: `${this.url}/${table}/destroy/${id}?api_key=${this.apiKey}`
      }

      axios(options).then((res) => resolve(res));
    });
  }

  execute(table, request) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded' 
        },
        url: `${this.url}/${table}/execute?api_key=${this.apiKey}`,
        body: {
          request
        }
      }

      axios(options).then((res) => resolve(res.data));
    });
  }

  list(table) {
    return new Promise(async(resolve, reject) => axios.get(`${this.url}/${table}/index.json?api_key=${this.apiKey}`).then(async(res) => resolve(res)));
  }

  show(table, object, key) {
    return new Promise(async(resolve, reject) => await axios.get(`${this.url}/${table}/index.json?api_key=${this.apiKey}&${object}=${key}`).then((res) => resolve(res)));
  }
}

module.exports = rxgWrapper