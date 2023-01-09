import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../server/config";

type Response = string;
type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response | Error>
) {
  const postData = JSON.parse(req.body);

  if (!postData?.votedFor || !postData?.votedAgainst) {
    return res.status(400).send({ error: "Missing required param" });
  }

  const query =
    "INSERT INTO votes (created_at, votedFor, votedAgainst, votedForName, spriteUrl) VALUES (?, ?, ?, ?, ?)";

  const params = [
    new Date().toISOString().slice(0, 19).replace("T", " "),
    Number(postData.votedFor),
    Number(postData.votedAgainst),
    postData.name,
    postData.spriteUrl,
  ];
  await db(query, params);

  return res.status(200).send("OK");
}
