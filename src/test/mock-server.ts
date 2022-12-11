import { rest } from "msw";

export const server = [
	// rest.get("comments", async (req, res, ctx) => {
	// 	return res(ctx.status(200), ctx.json(comments));
	// }),
	// rest.post("comments", async (req, res, ctx) => {
	// 	const { text } = (await req.json()) as Pick<IComment, "text">;
	// 	const newComment: IComment = {
	// 		text,
	// 		id: nanoid(),
	// 		author: {
	// 			avatar_url:
	// 				"https://faroutmagazine.co.uk/static/uploads/2022/09/WhatsApp-Image-2022-09-04-at-5.19.45-PM-1.jpeg",
	// 			username: "admin",
	// 		},
	// 		created: new Date(),
	// 	};
	// 	comments = [newComment, ...comments];
	// 	return res(ctx.status(200), ctx.json(newComment));
	// }),
];
