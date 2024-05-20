const express = require("express");
const path = require("path");
const swaggerUI = require("swagger-ui-express");

const apiDocumentation = require("./openapi.json");
const port = 3001;

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use("/", swaggerUI.serve, swaggerUI.setup(apiDocumentation));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})