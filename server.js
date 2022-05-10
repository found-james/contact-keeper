const express = require("express");
const app = express();
const PORT = process.env.PORT || 1010;

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

app.listen(PORT, () => console.log( `live on ${PORT}`));