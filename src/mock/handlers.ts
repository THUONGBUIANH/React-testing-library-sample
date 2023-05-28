import { rest } from "msw";
export const handlers = [
  rest.get("https://randomuser.me/api", (_req, res, ctx) => {
    console.log('data1 1212')
    return res(
      ctx.json({
        data: {
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
        },
      })
    );
  }),
];
