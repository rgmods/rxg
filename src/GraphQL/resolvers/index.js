module.exports = {
  Query: {
    device: async(_, { id }, { dataSources }) => {
      let res = await dataSources.api.getDevice({ id })
      return res
    },
    devices: async(_, {}, { dataSources }) => {
      let res = await dataSources.api.getDevices()
      return res
    },
    account: async(_, { id }, { dataSources }) => {
      let res = await dataSources.api.getAccount({ id })
      return res
    },
    accounts: async(_, {}, { dataSources }) => {
      let res = await dataSources.api.getAccounts()
      return res
    },
    accountGroup: async(_, { id }, { dataSources }) => {
      let res = await dataSources.api.getAccountGroup({ id })
      return res
    },
    accountGroups: async(_, {}, { dataSources }) => {
      let res = await dataSources.api.getAccountGroups()
      return res
    },
    usagePlan: async(_, { id }, { dataSources }) => {
      let res = await dataSources.api.getUsagePlan({ id })
      return res
    },
    usagePlans: async(_, {}, { dataSources }) => {
      let res = await dataSources.api.getUsagePlans()
      return res
    }
  }
}