const express = require("express");
const swaggerUI = require("swagger-ui-express");

const apiDocumentation = require("./openapi.json");
const port = 3001;

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(apiDocumentation));
app.get("/", (req, res) => {
    res.send("Hello");
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})