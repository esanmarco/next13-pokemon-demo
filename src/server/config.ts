import { connect } from "@planetscale/database/dist";

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

const db = async (
  query: string,
  params: Array<string | number> | undefined = undefined
) => {
  const conn = connect(config);
  return await conn.execute(query, params);
};

export default db;
