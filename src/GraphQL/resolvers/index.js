module.exports = {
  Query: {
    device: async(_, { id }, { dataSources }) => {
      let res = await dataSources.dataSource.getDevice({ id })
      return res
    },
    devices: async(_, {}, { dataSources }) => {
      let res = await dataSources.dataSource.getDevices()
      return res
    },
    account: async(_, { id }, { dataSources }) => {
      let res = await dataSources.dataSource.getAccount({ id })
      return res
    },
    accounts: async(_, {}, { dataSources }) => {
      let res = await dataSources.dataSource.getAccounts()
      return res
    },
    accountGroup: async(_, { id }, { dataSources }) => {
      let res = await dataSources.dataSource.getAccountGroup({ id })
      return res
    },
    accountGroups: async(_, {}, { dataSources }) => {
      let res = await dataSources.dataSource.getAccountGroups()
      return res
    },
    usagePlan: async(_, { id }, { dataSources }) => {
      let res = await dataSources.dataSource.getUsagePlan({ id })
      return res
    },
    usagePlans: async(_, {}, { dataSources }) => {
      let res = await dataSources.dataSource.getUsagePlans()
      return res
    }
  }
}