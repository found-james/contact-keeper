const express = require("express");
const app = express();
const PORT = process.env.PORT || 1010;


app.listen(PORT, () => console.log( `live on ${PORT}`));