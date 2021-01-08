const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// const connectDB = () => {
//   mongoose
//   .connect(db, {
// 			useNewUrlParser: true,
// 			useCreateIndex: true,
// 			useFindAndModify: false,
// 		})
// 		.then(() => console.log("MongoDB connected"))
// 		.catch((err) => {
// 			console.error(err.message);
// 			process.exit(1);
// 		});
// };

// ConnectDB with async await
const connectDB = async () => {
	try {
		//the call
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});
		// .then
		console.log("MongoDB connected...");
	} catch (err) {
		// .catch
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
