import { rest } from "msw";
export const handlers = [
  rest.get("https://randomuser.me/api", (_req, res, ctx) => {
    return res(
      ctx.json({
          results: [
            {
              name: {
                first: "Laith",
                last: "Harb",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/59.jpg",
              },
              login: {
                username: "ThePhonyGOAT",
              },
            },
          ],
      })
    );
  }),
];
