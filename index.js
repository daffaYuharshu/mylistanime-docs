const express = require("express");
const swaggerUI = require("swagger-ui-express");
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.10/swagger-ui.min.css";


const apiDocumentation = require("./openapi.json");
const port = 3001;

const app = express();

app.use("/", swaggerUI.serve, swaggerUI.setup(apiDocumentation, {customCssUrl: CSS_URL}));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})