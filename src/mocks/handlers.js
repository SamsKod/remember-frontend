import { rest } from "msw";

const baseURL = "https://flax-57c52c223cc2.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 4,
        username: "Erik",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 4,
        profile_image: 
          "https://res.cloudinary.com/due4uu8h3/image/upload/v1/media/../default_profile_xfzqhr.jpg",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];