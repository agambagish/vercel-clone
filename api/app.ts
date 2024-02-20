import express, { Request, Response } from "express";
import { ReqSchema } from "./schemas/req-schema";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.post("/", (req: Request, res: Response) => {
  const result = ReqSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).send({ error: result });
  }

  return res.send({ result });
});

app.listen(PORT, () =>
  console.log(`Api server running on http://localhost:${PORT}`)
);
