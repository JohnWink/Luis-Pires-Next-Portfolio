import { apiPost } from "./db/database";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, password, callSign } = body;
  const formData = new FormData();
  formData.append("symbol", callSign);
  formData.append("faction", "COSMIC");

  // const response = await fetch("https://api.spacetraders.io/v2/register", {
  //   method: "POST",
  //   headers: { "Content-type": " application/json" },
  //   body: formData,
  // });
  // console.log("response: ", response);
  // const query = `
  //      INSERT INTO articles(name, password, callSign, bearerToken)
  //      VALUES(?, ?, ?, ?)
  //    `;
  // const values = [name, password, callSign];

  // let status, respBody;
  // await apiPost(query, values)
  //   .then(() => {
  //     status = 200;
  //     respBody = { message: "Successfully created User" };
  //   })
  //   .catch((err) => {
  //     status = 400;
  //     respBody = err;
  //   });
  // return Response.json(respBody, {
  //   status,
  // });

  return Response.json(body, { status: 200 });
}
