const { gql } = require('apollo-server')

const typeDefs = gql`
  type AccountGroup {
    id: Int!
    created_by: String!
    name: String!
    note: String!
    priority: Int!
    scratch: String!
    updated_by: String!
    created_at: String!
    updated_at: String!
    conference_id: Int!
    policy_id: Int!
  }

  type UsagePlan {
    id: Int!
    absolute_usage_lifetime: String!
    automatic_login: Boolean!
    automatic_provision: Boolean!
    base_price: String!
    created_by: String!
    currency: String!
    description: String!
    ips_are_static: Boolean!
    lock_devices: Boolean!
    max_dedicated_ips: Int!
    max_devices: Int!
    max_party_devices: Int!
    max_sessions: Int!
    name: String!
    no_usage_lifetime: Boolean!
    note: String!
    permit_unpaid_ar: Boolean!
    pms_guest_match_operator: String!
    prorate_credit: Boolean!
    recurring_day: Int!
    recurring_fail_limit: Int!
    recurring_lifetime_time: Int!
    recurring_lifetime_time_unit: String!
    recurring_method: String!
    recurring_retry_grace_minutes: Int!
    scratch: String!
    unlimited_devices: Boolean!
    unlimited_party_devices: Boolean!
    unlimited_recurring_lifetime: Boolean!
    unlimited_sessions: Boolean!
    unlimited_usage_lifetime: Boolean!
    updated_by: String!
    upnp_enabled: Boolean!
    usage_lifetime_time: Int!
    usage_lifetime_time_unit: String!
    validation_grace_minutes: Int!
    validation_method: String!
    variable_recurring_day: Boolean!
    created_at: String!
    updated_at: String!
    account_group_id: Int!
    conference_id: Int!
    pms_server_id: Int!
    quota_plan_id: Int!
    sms_gateway_id: Int!
    time_plan_id: Int!
  }

  type Account {
    id: Int!
    address1: String!
    address2: String!
    automatic_login: Boolean!
    automatic_provision: Boolean!
    bill_at: String!
    charge_attempted_at: String!
    city: String!
    company: String!
    country: String!
    created_by: String!
    crypted_password: String!
    email: String!
    email2: String!
    email_validated: Boolean!
    email_validation_code: String!
    email_validation_code_expires_at: String!
    first_name: String!
    guid: String!
    ips_are_static: Boolean!
    last_name: String!
    lock_devices: Boolean!
    lock_version: Int!
    logged_in_at: String!
    login: String!
    max_dedicated_ips: Int!
    max_devices: Int!
    max_party_devices: Int!
    max_sessions: Int!
    mb_down: Int!
    mb_up: Int!
    no_usage_expiration: Boolean!
    note: String!
    nt_password: String!
    phone: String!
    phone_validated: Boolean!
    phone_validation_code: String!
    phone_validation_code_expires_at: String!
    pkts_down: Int!
    pkts_up: Int!
    portal_message: String!
    pre_shared_key: String!
    region: String!
    relative_usage_lifetime: Int!
    salt: String!
    scratch: String!
    state: String!
    type: String!
    unlimited_devices: Boolean!
    unlimited_party_devices: Boolean!
    unlimited_sessions: Boolean!
    unlimited_usage_mb_down: Boolean!
    unlimited_usage_mb_up: Boolean!
    unlimited_usage_minutes: Boolean!
    updated_by: String!
    upnp_enabled: Boolean!
    usage_expiration: String!
    usage_mb_down: Int!
    usage_mb_up: Int!
    usage_minutes: Int!
    id: String!
    created_at: String!
    updated_at: String!
    account_group_id: Int!
    usage_plan_id: Int!
    account_group: AccountGroup!
    usage_plan: UsagePlan!
  }

  type Device {
    account: Account!
    id: Int!
    binat: Boolean!
    created_by: String!
    hidden_from_portal: Boolean!
    lock_version: Int!
    mac: String!
    name: String!
    note: String!
    scratch: String!
    updated_by: String!
    created_at: String!
    updated_at: String!
    account_id: Int!
    lan_party_id: Int! 
    static_ip_id: Int! 
  }

  type Query {
    device(id: Int!): Device
    devices: [Device]!
    account(id: Int!): Account
    accounts: [Account]!
    accountGroup(id: Int!): AccountGroup
    accountGroups: [AccountGroup]!
    usagePlan(id: Int!): UsagePlan
    usagePlans: [UsagePlan]!
  }
`

module.exports = typeDefs