const exspress = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const initDatabase = require("./startUp/initDatabase");
const routes = require("./routes");

const app = exspress();
app.use(exspress.json());
app.use(exspress.urlencoded({ extended: false }));
app.use("/api", routes)

const PORT = config.get("port" ?? 8080);

// if(process.env.NODE_ENV === "production"){
//     console.log("Production");
// } else {
//     console.log("Development");
// }
async function start() {
    try {
        mongoose.connection.once("open", () => {
            initDatabase();
        });

        await mongoose.connect(config.get("mongoUri"));
        console.log(chalk.green("MongoDB connected."));
        app.listen(PORT, () =>
            console.log(
                chalk.green(`Server has been started on port ${PORT}...`)
            )
        );
    } catch (e) {
        console.log(chalk.red(e.massage));
        process.exit(1);
    }
}
start();