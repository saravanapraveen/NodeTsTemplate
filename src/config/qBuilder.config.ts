import knex, { Knex } from "knex"

const qBuilder: Knex = knex({
  client: "mysql",
})

export default qBuilder