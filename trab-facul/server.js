var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/forms.html");
});

app.get("/fazer_login", function (req, res) {
  res.end(
    "O usuário: " +
      req.query.nome +
      "; com o email: " +
      req.query.email +
      "foi adicionasdo com sucesso"
  );
});

app.listen(3000);
