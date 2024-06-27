console.log("Hello Ava");

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

http
	.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		res.write(`<h1 style="color:red">Hello Ava~!</h1>`);
		res.write(`<p>I wonder what it shows...</p>`);

		if (req.url === "/leave") {
			res.write("Good Bye!");
		}
		res.end();
	})
	.listen(port, hostname, () => {
		console.log(`Server running.`);
	});
