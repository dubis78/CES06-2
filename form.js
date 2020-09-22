const { Router } = require("express");
const router = Router();
const fs = require("fs");

// leemos el archivo de manera asincrónica, haceindo uso del filesystem fs.
const datasFile = fs.readFileSync("./db.json", "utf-8");   //parametro1:nombre ruta de archivo, parametro2: se define codificac del archivo
let datas = JSON.parse(datasFile); //convertimos a un objeto.


router.post("/", (req, res) => {
  
  let { name, age, height } = req.body;
  newData={name,age,height};
  console.log(newData,datas);
  datas.push(newData);
  console.log(datas)
  const json_datas = JSON.stringify(datas);
  fs.writeFileSync("./db.json", json_datas, "utf-8");
  res.redirect('/form')
});

module.exports = router;