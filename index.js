const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

//database connect

//middlewares
app.use(express.json());

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running mitesh bro....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

