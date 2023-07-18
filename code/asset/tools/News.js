const  puppeteer = require("puppeteer");
async function NewsAll(Funct){ // ! INSERIR OS ID DO USER [ COINS & ID ] ✅
  try{
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    console.log(`[ ✅ ] [ PROCESSANDO ] [ NEWS [ All ] ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    await page.goto('https://www.tradingview.com/news/', {waitUntil: 'load'});
    await new Promise(r => setTimeout(r, 2000));
    let GetNewsTopsText = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB grid-h0q8oyW8"] > a'), element => element.textContent));
    let GetNewsTopsLink = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB grid-h0q8oyW8"] > a'), element => element.href));
    let GetNewsAllTopsTextAll = await []
    let GetNewsAllTopsLinkAll = await []
    await new Promise(r => setTimeout(r, 2000));
    for (let i = 0; i < GetNewsTopsText.length; i++){
      GetNewsAllTopsTextAll.push(`${GetNewsTopsText[i]}\n${GetNewsTopsLink[i]}`);
      GetNewsAllTopsLinkAll.push(`${GetNewsTopsLink[i]}\n${GetNewsTopsText[i]}`);
    }
    if (Funct=="Text"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsTextAll];
  }else if (Funct=="Link"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsLinkAll];
  }
  }catch (Error){
    console.log(`[ REQUEST ERRO ❌  ]  [ NEWS [ All ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    return await ["Estamos em manutenção, por favor tente novamente mais tarde."];
  }
};
async function NewsStocks(Funct){ // ! INSERIR OS ID DO USER [ COINS & ID ] ✅
  try{
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    console.log(`[ ✅ ] [ PROCESSANDO ] [ NEWS [ Stocks ] ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    await page.goto('https://www.tradingview.com/news/?market=stock', {waitUntil: 'load'});
    await new Promise(r => setTimeout(r, 2000));
    let GetNewsTopsText = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB grid-h0q8oyW8"] > a'), element => element.textContent));
    let GetNewsTopsLink = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB grid-h0q8oyW8"] > a'), element => element.href));
    let GetNewsAllTopsTextAll = await []
    let GetNewsAllTopsLinkAll = await []
    await new Promise(r => setTimeout(r, 2000));
    for (let i = 0; i < GetNewsTopsText.length; i++){
      GetNewsAllTopsTextAll.push(`${GetNewsTopsText[i]}\n${GetNewsTopsLink[i]}`);
      GetNewsAllTopsLinkAll.push(`${GetNewsTopsLink[i]}\n${GetNewsTopsText[i]}`);
    }
  if (Funct=="Text"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsTextAll];
  }else if (Funct=="Link"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsLinkAll];
  }
  }catch (Error){
    console.log(`[ REQUEST ERRO ❌  ]  [ NEWS [ Stocks ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    return await ["Estamos em manutenção, por favor tente novamente mais tarde."];
  }
};
async function NewsCrypto(Funct){ // ! INSERIR OS ID DO USER [ COINS & ID ] ✅
  try{
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    console.log(`[ ✅ ] [ PROCESSANDO ] [ NEWS [ Crypto ] ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    await page.goto('https://www.tradingview.com/news/?market=crypto', {waitUntil: 'load'});
    await new Promise(r => setTimeout(r, 2000));
    let GetNewsTopsText = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB grid-h0q8oyW8"] > a'), element => element.textContent));
    let GetNewsTopsLink = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB grid-h0q8oyW8"] > a'), element => element.href));
    let GetNewsAllTopsTextAll = await []
    let GetNewsAllTopsLinkAll = await []
    await new Promise(r => setTimeout(r, 2000));
    for (let i = 0; i < GetNewsTopsText.length; i++){
      GetNewsAllTopsTextAll.push(`${GetNewsTopsText[i]}\n${GetNewsTopsLink[i]}`);
      GetNewsAllTopsLinkAll.push(`${GetNewsTopsLink[i]}\n${GetNewsTopsText[i]}`);
    }
    if (Funct=="Text"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsTextAll];
  }else if (Funct=="Link"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsLinkAll];
  }
  }catch (Error){
    console.log(`[ REQUEST ERRO ❌  ]  [ NEWS [ Crypto ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    return await ["Estamos em manutenção, por favor tente novamente mais tarde."];
  }
};
async function NewsForex(Funct){ // ! INSERIR OS ID DO USER [ COINS & ID ] ✅
  try{
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    console.log(`[ ✅ ] [ PROCESSANDO ] [ NEWS [ Forex ] ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    await page.goto('https://www.tradingview.com/news/?market=forex', {waitUntil: 'load'});
    await new Promise(r => setTimeout(r, 2000));
    let GetNewsTopsText = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB grid-h0q8oyW8"] > a'), element => element.textContent));
    let GetNewsTopsLink = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB grid-h0q8oyW8"] > a'), element => element.href));
    let GetNewsAllTopsTextAll = await []
    let GetNewsAllTopsLinkAll = await []
    await new Promise(r => setTimeout(r, 2000));
    for (let i = 0; i < GetNewsTopsText.length; i++){
      GetNewsAllTopsTextAll.push(`${GetNewsTopsText[i]}\n${GetNewsTopsLink[i]}`);
      GetNewsAllTopsLinkAll.push(`${GetNewsTopsLink[i]}\n${GetNewsTopsText[i]}`);
    }
    if (Funct=="Text"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsTextAll];
  }else if (Funct=="Link"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsLinkAll];
  }
  }catch (Error){
    console.log(`[ REQUEST ERRO ❌  ]  [ NEWS [ Forex ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    return await ["Estamos em manutenção, por favor tente novamente mais tarde."];
  }
};

async function NewsIndices(Funct){ // ! INSERIR OS ID DO USER [ COINS & ID ] ✅
  try{
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    console.log(`[ ✅ ] [ PROCESSANDO ] [ NEWS [ Indices ] ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    await page.goto('https://www.tradingview.com/news/?market=index', {waitUntil: 'load'});
    await new Promise(r => setTimeout(r, 2000));
    let GetNewsTopsText = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB grid-h0q8oyW8"] > a'), element => element.textContent));
    let GetNewsTopsLink = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB grid-h0q8oyW8"] > a'), element => element.href));
    let GetNewsAllTopsTextAll = await []
    let GetNewsAllTopsLinkAll = await []
    await new Promise(r => setTimeout(r, 2000));
    for (let i = 0; i < GetNewsTopsText.length; i++){
      GetNewsAllTopsTextAll.push(`${GetNewsTopsText[i]}\n${GetNewsTopsLink[i]}`);
      GetNewsAllTopsLinkAll.push(`${GetNewsTopsLink[i]}\n${GetNewsTopsText[i]}`);
    }
    if (Funct=="Text"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsTextAll];
  }else if (Funct=="Link"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsLinkAll];
  }
  }catch (Error){
    console.log(`[ REQUEST ERRO ❌  ]  [ NEWS [ Indices ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    return await ["Estamos em manutenção, por favor tente novamente mais tarde."];
  }
};

async function NewsFutures(Funct){ // ! INSERIR OS ID DO USER [ COINS & ID ] ✅
  try{
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    console.log(`[ ✅ ] [ PROCESSANDO ] [ NEWS [ Futures ] ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    await page.goto('https://www.tradingview.com/news/?market=futures', {waitUntil: 'load'});
    await new Promise(r => setTimeout(r, 2000));
    let GetNewsTopsText = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB grid-h0q8oyW8"] > a'), element => element.textContent));
    let GetNewsTopsLink = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB grid-h0q8oyW8"] > a'), element => element.href));
    let GetNewsAllTopsTextAll = await []
    let GetNewsAllTopsLinkAll = await []
    await new Promise(r => setTimeout(r, 2000));
    for (let i = 0; i < GetNewsTopsText.length; i++){
      GetNewsAllTopsTextAll.push(`${GetNewsTopsText[i]}\n${GetNewsTopsLink[i]}`);
      GetNewsAllTopsLinkAll.push(`${GetNewsTopsLink[i]}\n${GetNewsTopsText[i]}`);
    }
    if (Funct=="Text"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsTextAll];
  }else if (Funct=="Link"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsLinkAll];
  }
  }catch (Error){
    console.log(`[ REQUEST ERRO ❌  ]  [ NEWS [ Futures ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    return await ["Estamos em manutenção, por favor tente novamente mais tarde."];
  }
};
async function NewsEconomy(Funct){ // ! INSERIR OS ID DO USER [ COINS & ID ] ✅
  try{
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    console.log(`[ ✅ ] [ PROCESSANDO ] [ NEWS [ Economy ] ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    await page.goto('https://www.tradingview.com/news/?market=economic', {waitUntil: 'load'});
    await new Promise(r => setTimeout(r, 2000));
    let GetNewsTopsText = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB"] > a'), element => element.textContent));
    let GetNewsTopsLink = await page.evaluate(() => Array.from(document.querySelectorAll('[class="grid-ScDiRUwB"] > a'), element => element.href));
    let GetNewsAllTopsTextAll = await []
    let GetNewsAllTopsLinkAll = await []
    await new Promise(r => setTimeout(r, 2000));
    for (let i = 0; i < GetNewsTopsText.length; i++){
      GetNewsAllTopsTextAll.push(`${GetNewsTopsText[i]}\n${GetNewsTopsLink[i]}`);
      GetNewsAllTopsLinkAll.push(`${GetNewsTopsLink[i]}\n${GetNewsTopsText[i]}`);
    }
    if (Funct=="Text"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsTextAll];
  }else if (Funct=="Link"){
    await page.close();
    await browser.close();
    return await [GetNewsAllTopsLinkAll];
  }
  }catch (Error){
    console.log(`[ REQUEST ERRO ❌  ]  [ NEWS [ Economy ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    return await ["Estamos em manutenção, por favor tente novamente mais tarde."];
  }
};
// let NewsAllText = NewsAll("Text").then(res => {console.log(res[0])});
// let NewsAllLink = NewsAll("Link").then(res => {console.log(res[0])});
// let NewsStocksText = NewsStocks("Text").then(res => {console.log(res[0])});
// let NewsStocksLink = NewsStocks("Link").then(res => {console.log(res[0])});
// let NewsCryptoText = NewsCrypto("Text").then(res => {console.log(res[0])});
// let NewsCryptoLink = NewsCrypto("Link").then(res => {console.log(res[0])});
// let NewsForexText = NewsForex("Text").then(res => {console.log(res[0])});
// let NewsForexLink = NewsForex("Link").then(res => {console.log(res[0])});
// let NewsIndicesText = NewsIndices("Text").then(res => {console.log(res[0])});
// let NewsIndicesLink = NewsIndices("Link").then(res => {console.log(res[0])});
// let NewsFuturesText = NewsFutures("Text").then(res => {console.log(res[0])});
// let NewsFuturesLink = NewsFutures("Link").then(res => {console.log(res[0])});
// let NewsEconomyText = NewsEconomy("Text").then(res => {console.log(res[0])});
// let NewsEconomyLink = NewsEconomy("Link").then(res => {console.log(res[0])});
module.exports = {NewsAll,NewsStocks,NewsCrypto,NewsForex,NewsIndices,NewsFutures,NewsEconomy}