import { rest } from "msw";

const baseURL = "https://first-rest-framework-api-f72d1788f2ab.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 2,
                username: "adam",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 2,
                profile_image:
                    "https://res.cloudinary.com/dsoty0rz1/image/upload/v1/media/images/picture00031_il0co7",
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];
