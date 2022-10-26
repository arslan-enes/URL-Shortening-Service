const express = require("express");
const connectDb = require("./config/db");
const config = require("config");

const app = express()

// Veri tabanı bağlantısı
connectDb();

app.use(express.json({ extended: false }));

// Route'ların tanımlanması
app.use("/", require("./routes/url"));


const port = config.get("port");
app.listen(port, () => {
    console.log(`Service endpoint http://localhost:${port}`);
});