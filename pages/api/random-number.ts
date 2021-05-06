import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
    // it should not be a react component
    console.log(req.body)
    res.json({num:Math.random()})
}

