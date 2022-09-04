import express from "express";
import bodyParser from "body-parser";
import { IndexRouter } from "./routes/index.router";

(async () => {
	const app = express();
	const port = process.env.PORT || 8000;
	app.use(bodyParser.json());
	app.use('/api/v0/', IndexRouter)

	app.get("/", async (req, res) => {
		res.send("try GET /filteredimage?image_url={{}}");
	});

	// Start the Server
	app.listen(port, () => {
		console.log(`server running http://localhost:${port}`);
		console.log(`press CTRL+C to stop server`);
	});
})();
