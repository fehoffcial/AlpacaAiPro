const GetDate = new Date();
const fs = require('fs');
const {KeyCheckCloud} = require("../key/KeyCheck");
const month = GetDate.toLocaleString('default', { month: 'long' });
const day = GetDate.toLocaleString("default",{ day: "numeric"});
const year = GetDate.toLocaleString("default",{ year: "numeric"});
function CreateCloud(ID,USER) {
  let TemporaryorPRO = KeyCheckCloud(ID,USER);
  const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  const CreateCloud = `/home/debian/Github/AlcapaAiPro/code/asset/tools/data/${TemporaryorPRO}/${ID}`;
  const CreateCloudIMG = `/home/debian/Github/AlcapaAiPro/code/asset/tools/data/${TemporaryorPRO}/${ID}/img`;
  const CreateCloudFile = `/home/debian/Github/AlcapaAiPro/code/asset/tools/data/${TemporaryorPRO}/${ID}/History.txt`;
  if(TemporaryorPRO=="Pro"){
    console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY CLOUD [ PRO ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);
    let DirCheck = fs.mkdirSync(CreateCloud, { recursive: true })
    let DirCheckImg = fs.mkdirSync(CreateCloudIMG, { recursive: true })
    if(DirCheck==undefined){
    console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY CLOUD [ [ NOT CREATE ] PRO ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);
    }else{
      fs.writeFileSync(CreateCloudFile, "");
      console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY CLOUD [ [ CREATE ] PRO ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);
    }
  }else if(TemporaryorPRO=="Temporary"){
    console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY CLOUD [ TEMPORÁRIO ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);
    let DirCheck = fs.mkdirSync(CreateCloud, { recursive: true })
    let DirCheckImg = fs.mkdirSync(CreateCloudIMG, { recursive: true })
    if(DirCheck==undefined){
    console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY CLOUD [ [ NOT CREATE ] TEMPORÁRIO ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);
    }else{
    fs.writeFileSync(CreateCloudFile, "");
      console.log(`[ ✅ ] [ ALCAPA.AI [ ID: ${ID} | USER: ${USER}] ] ✅ [ CHECK KEY CLOUD [ [ CREATE ] TEMPORÁRIO ] ] ✅ [ ALCAPA.AI [ PRO ] ]`);
    }
  }
}
module.exports = {CreateCloud}