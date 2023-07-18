const fs = require('fs')
function KeyCheck(ID,USER){
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY ] ✅ [ ALCAPA.AI [ PRO ] ]`);
  let Pro = []
  let Temporary = []
  let KeyPro = (fs.readFileSync("/home/debian/Github/AlcapaAiPro/code/asset/key/KeyPro.txt", "utf8"));
  let KeyTemporary = (fs.readFileSync("/home/debian/Github/AlcapaAiPro/code/asset/key/KeyTemporary.txt", "utf8"));
  Temporary.push(KeyTemporary.split("KeyTemporary@"));
  Pro.push(KeyPro.split("KeyPro@"));
  for (let i = 0; i < Pro[0].length; i++) {
    if (Pro[0][i]==ID) {
      console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY [ ALCAPA PRO ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);
      return "Sua é licença Alcapa PRO. ✅";
    }
  }
  for (let i = 0; i < Temporary[0].length; i++) {
    if (Temporary[0][i]==ID) {
      console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY [ TEMPORÁRIO ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);
      return "Sua é licença Temporária. ✅";
    }
}}
function KeyCheckPRO(ID,USER){
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY ] ✅ [ ALCAPA.AI [ PRO ] ]`);
  let Pro = []
  let Temporary = []
  let KeyPro = (fs.readFileSync("/home/debian/Github/AlcapaAiPro/code/asset/key/KeyPro.txt", "utf8"));
  let KeyTemporary = (fs.readFileSync("/home/debian/Github/AlcapaAiPro/code/asset/key/KeyTemporary.txt", "utf8"));
  Temporary.push(KeyTemporary.split("KeyTemporary@"));
  Pro.push(KeyPro.split("KeyPro@"));
  for (let i = 0; i < Pro[0].length; i++) {
    if (Pro[0][i]==ID) {
      console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY [ ALCAPA PRO ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);
      return true;
    }
  }
  for (let i = 0; i < Temporary[0].length; i++) {
    if (Temporary[0][i]==ID) {
      console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY [ TEMPORÁRIO ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);
      return true;
    }
}}
function KeyCheckCloud(ID,USER){
  console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY ] ✅ [ ALCAPA.AI [ PRO ] ]`);
  let Pro = []
  let Temporary = []
  let KeyPro = (fs.readFileSync("/home/debian/Github/AlcapaAiPro/code/asset/key/KeyPro.txt", "utf8"));
  let KeyTemporary = (fs.readFileSync("/home/debian/Github/AlcapaAiPro/code/asset/key/KeyTemporary.txt", "utf8"));
  Temporary.push(KeyTemporary.split("KeyTemporary@"));
  Pro.push(KeyPro.split("KeyPro@"));
  for (let i = 0; i < Pro[0].length; i++) {
    if (Pro[0][i]==ID) {
      console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY CLOUD [ ALCAPA PRO ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);
      return "Pro";
    }
  }
  for (let i = 0; i < Temporary[0].length; i++) {
    if (Temporary[0][i]==ID) {
      console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY CLOUD [ TEMPORÁRIO ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);
      return "Temporary";
    }
}}
module.exports = {KeyCheck,KeyCheckPRO,KeyCheckCloud}