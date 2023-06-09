const exspress = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const path = require("path");
const cors = require("cors");
const initDatabase = require("./startUp/initDatabase");
const routes = require("./routes");

const app = exspress();
app.use(exspress.json());
app.use(cors());
app.use(exspress.urlencoded({ extended: false }));
app.use("/api", routes);

const PORT = config.get("port" ?? 8080);

if (process.env.NODE_ENV === "production") {
    app.use("/", exspress.static(path.join(__dirname, "client")));
    const indexPath = path.join(__dirname, "client", "index.html");
    app.get("*", (req, res) => {
        res.sendFile(indexPath);
    });
}
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
