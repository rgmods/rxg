const { RESTDataSource } = require("apollo-datasource-rest");
const { deviceReducer, accountReducer, accountGroupReducer }  = require('./reducers/index');

class dataSource extends RESTDataSource {
  constructor(config = {}) {
    super();
 
    const { domain, apiKey } = config;
    this.url = `https://${domain}/admin/scaffolds`,
    this.apiKey = apiKey;

    this.baseURL = this.url;
  }

  getDevice({ id }) {
    return new Promise(async(resolve, reject) => {
      let response = await this.get(`/devices/${id}.json?api_key=${this.apiKey}`);
      resolve(deviceReducer(this, response[0]));
    });
  }

  getAccounts() {
    return new Promise(async(resolve, reject) => {
      let response = await this.get(`/accounts/index.json?api_key=${this.apiKey}`);
      let data = [];

      await response.forEach(async(account) => {
        let parsedAccounts = await accountReducer(this, account);
        data.push(parsedAccounts);
      });

      resolve(data);
    });
  }

  getAccount({ id }) {
    return new Promise(async(resolve, reject) => {
      let response = await this.get(`/accounts/${id}.json?api_key=${this.apiKey}`);
      resolve(accountReducer(this, response[0]));
    });
  }

  getAccountGroups() {
    return new Promise(async(resolve, reject) => {
      let response = await this.get(`/account_groups/index.json?api_key=${this.apiKey}`)
      let data = []
  
      await response.forEach(async(account_group) => {
        let parsedAccountGroups = await accountGroupReducer(this, account_group);
        data.push(parsedAccountGroups);
      });
  
      resolve(data);
    });
  }

  getAccountGroup({ id }) {
    return new Promise(async(resolve, reject) => {
      let response = await this.get(`/account_groups/${id}.json?api_key=${this.apiKey}`);
      resolve(accountGroupReducer(this, response[0]));
    });
  }

  getUsagePlans() {
    return new Promise(async(resolve, reject) => {
      let response = await this.get(`/usage_plans/index.json?api_key=${this.apiKey}`);
      let data = []
  
      await response.forEach(async(usage_plan) => {
        let parsedUsagePlans = await usagePlanReducer(this, usage_plan);
        data.push(parsedUsagePlans);
      });
  
      resolve(data);
    });
  }

  getUsagePlan({ id }) {
    return new Promise(async(resolve, reject) => {
      let response = await this.get(`/usage_plans/${id}.json?api_key=${this.apiKey}`);
      resolve(usagePlanReducer(this, response[0]));
    });
  }
}

module.exports = dataSource