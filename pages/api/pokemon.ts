import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  pokemon: object;
};
export default function handler2(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    pokemon: {
      name: "망뚜모해",
    },
  });
}
