const  puppeteer = require("puppeteer");
async function ValueStocks(Stocks,ID){ // ! INSERIR OS ID DO USER [ COINS & ID ] ✅
  try{ 
    console.log(`[ PROCESSANDO ] [ INFO STOCKS | VALUE | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://www.tradingview.com/', {waitUntil: 'load'});
    await new Promise(r => setTimeout(r, 2000));
    GetItem = await page.$x(`/html/body/div[3]/div[4]/div[1]/div[1]/div[2]/div[1]/div/button`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 3000));
    GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[2]/span[2]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 5000));
    GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[1]/span/form/input`)
    await GetItem[0].type(Stocks);
    await new Promise(r => setTimeout(r, 5000));
    let StocksFind = await page.evaluate(() => Array.from(document.querySelectorAll('[class="itemInfoCell-oRSs8UQo cell-oRSs8UQo"]'), element => element.textContent));
    for (let i = 0; i < StocksFind.length; i++){
      if (StocksFind[i].toUpperCase()==Stocks.toUpperCase()) {
        if (i=="0") {
          console.log(i)
          GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[4]/div/div/div`)
          await GetItem[0].click();
          await new Promise(r => setTimeout(r, 5000));
          break
        }else{
          GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[4]/div/div/div[${i}]`)
          await GetItem[0].click();
          await new Promise(r => setTimeout(r, 5000));
          break
        }
      }else if(StocksFind[i].toUpperCase()==`${Stocks[0].toUpperCase()}${Stocks.toUpperCase()}`){
        if (i=="0") {
          GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[4]/div/div/div`)
          await GetItem[0].click();
          await new Promise(r => setTimeout(r, 5000));
          break
        }else{
          GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[4]/div/div/div[${i}]`)
          await GetItem[0].click();
          await new Promise(r => setTimeout(r, 5000));
          break
        }
      }else{
      console.log(`[ ❌ ]  [ INFO STOCKS | VALUE |NOT FOUND > ${Stocks.toUpperCase()} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
      await page.close();
      await browser.close();
      return await [`Desculpe, nenhuma ação foi encontrada da ${Stocks}.`]
      }
    }
    // ! 1-) GET VOLUME INFODATA
    await new Promise(r => setTimeout(r, 2000));
    GetItem = await page.$x(`/html/body/div[2]/div[6]/div/div[2]/div/div/div/div/button[3]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 3000));
    let ValueDataWindowDay = await page.evaluate(() => Array.from(document.querySelectorAll('[class="item-_gbYDtbd"] > div'), element => element.textContent));
    let ValueDataDay = [];
    for (let i = 0; i < ValueDataWindowDay.length; i++){
      ValueDataDay.push(ValueDataWindowDay[i])
    }
    console.log(`[ ✅ ] [ INFO STOCKS | VALUE | 1 DAY | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    await new Promise(r => setTimeout(r, 1000));
    GetItem = await page.$x(`/html/body/div[2]/div[3]/div/div/div[3]/div[1]/div/div/div/div/div[4]/div/button`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 2000));
    GetItem = await page.$x(`//*[@id="overlap-manager-root"]/div/span/div[1]/div/div/div/div[12]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 3000));
    let ValueDataWindowMinutes = await page.evaluate(() => Array.from(document.querySelectorAll('[class="item-_gbYDtbd"] > div'), element => element.textContent));
    let ValueDataMinutes = [];
    for (let i = 0; i < ValueDataWindowMinutes.length; i++){
      ValueDataMinutes.push(ValueDataWindowMinutes[i])
    }
    console.log(`[ ✅ ] [ INFO STOCKS | VALUE | 15 MINUTES | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    await new Promise(r => setTimeout(r, 1000));
    GetItem = await page.$x(`/html/body/div[2]/div[3]/div/div/div[3]/div[1]/div/div/div/div/div[4]/div/button`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 2000));
    GetItem = await page.$x(`//*[@id="overlap-manager-root"]/div/span/div[1]/div/div/div/div[20]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 3000));
    let ValueDataWindowHours = await page.evaluate(() => Array.from(document.querySelectorAll('[class="item-_gbYDtbd"] > div'), element => element.textContent));
    let ValueDataHours = [];
    for (let i = 0; i < ValueDataWindowHours.length; i++){
      ValueDataHours.push(ValueDataWindowHours[i])
    }
    console.log(`[ ✅ ] [ INFO STOCKS | VALUE | 4 HOURS | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    await new Promise(r => setTimeout(r, 2000));
    GetItem = await page.$x(`/html/body/div[2]/div[6]/div/div[2]/div/div/div/div/button[1]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 3000));
    await page.close();
    await browser.close();
    return await [ValueDataDay, ValueDataMinutes, ValueDataHours]
  }catch (Error){
    console.log(`[ ❌ ] [ INFO STOCKS | VALUE | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    return await [`Desculpe, nenhuma ação foi encontrada da ${Stocks}.`]
  }finally{
    console.log(`[ ✅ ] [ INFO STOCKS | VALUE | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
  }
};
// ValueStocks("IBOV11").then(res => console.log(res))

async function MarketsStocksOverview(Stocks,ID){ 
  try{ 
    console.log(`[ PROCESSANDO ] [ INFO STOCKS | MARKETS | Overview | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://www.tradingview.com/markets/', {waitUntil: 'load'});
    await new Promise(r => setTimeout(r, 2000));
    GetItem = await page.$x(`/html/body/div[3]/div[3]/div[2]/div[2]/div/div/button[1]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 3000));
    GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[2]/span[2]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 2000));
    GetItem = await page.$x(`//*[@id="Ideas"]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 5000));
    GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[1]/span/form/input`)
    await GetItem[0].type(Stocks);
    await new Promise(r => setTimeout(r, 5000));
    let StocksFind = await page.evaluate(() => Array.from(document.querySelectorAll('[class="itemInfoCell-oRSs8UQo cell-oRSs8UQo"]'), element => element.textContent));
    for (let i = 0; i < StocksFind.length; i++){
      if (StocksFind[i].toUpperCase()==Stocks.toUpperCase()) {
        if (i=="0") {
          console.log(i)
          GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[4]/div/div/div`)
          await GetItem[0].click();
          await new Promise(r => setTimeout(r, 5000));
          break
        }else{
          GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[4]/div/div/div[${i}]`)
          await GetItem[0].click();
          await new Promise(r => setTimeout(r, 5000));
          break
        }
      }else if(StocksFind[i].toUpperCase()==`${Stocks[0].toUpperCase()}${Stocks.toUpperCase()}`){
        if (i=="0") {
          GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[4]/div/div/div`)
          await GetItem[0].click();
          await new Promise(r => setTimeout(r, 5000));
          break
        }else{
          GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[4]/div/div/div[${i}]`)
          await GetItem[0].click();
          await new Promise(r => setTimeout(r, 5000));
          break
        }
      }else{
      console.log(`[ ❌ ]  [ INFO STOCKS | MARKETS | Overview |NOT FOUND > ${Stocks.toUpperCase()} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
      await page.close();
      await browser.close();
      return await [`Desculpe, nenhuma ações foi encontrada da ${Stocks}.`]
      }
    }
    GetItem = await page.$x(`/html/body/div[3]/div[4]/div[2]/div[1]/div[2]/div/div[1]/div/a[4]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 5000));
    // ! Overview
    let StocksOverview = await page.evaluate(() => Array.from(document.querySelectorAll('[class="item-TYuCkiP9"] > span'), element => element.textContent));
    let StocksOverviewInfo = [];
    for (let i = 0; i < StocksOverview.length; i++){
      StocksOverviewInfo.push(StocksOverview[i]);
    }
    let StocksOverviewAbout = await page.evaluate(() => Array.from(document.querySelectorAll('[class="wrap-hegngCX6"] > div'), element => element.textContent));
    let StocksOverviewAboutInfo = [];
    for (let i = 0; i < StocksOverviewAbout.length; i++){
      StocksOverviewAboutInfo.push(StocksOverviewAbout[i]);
    }
    let StocksOverviewShip = await page.evaluate(() => Array.from(document.querySelectorAll('[class="item-Cl4BR6bv"] > div > span'), element => element.textContent));
    let StocksOverviewShipInfo = [];
    for (let i = 0; i < StocksOverviewShip.length; i++){
      StocksOverviewShipInfo.push(StocksOverviewShip[i]);
    }
    let StocksOverviewShipValue = await page.evaluate(() => Array.from(document.querySelectorAll('[class="item-Cl4BR6bv"] > [class="value-Cl4BR6bv"]'), element => element.textContent));
    let StocksOverviewShipValueInfo = [];
    for (let i = 0; i < StocksOverviewShipValue.length; i++){
      StocksOverviewShipValueInfo.push(StocksOverviewShipValue[i]);
    }
    await page.close();
    await browser.close();
    return [StocksOverviewInfo,StocksOverviewAboutInfo,StocksOverviewShipInfo,StocksOverviewShipValue]
  }catch (Error){
    console.log(`[ ❌ ] [ INFO STOCKS | MARKETS | Overview | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    return await [`Desculpe, nenhuma ações foi encontrada da ${Stocks}.`]
  }finally{
    console.log(`[ ✅ ] [ INFO STOCKS | MARKETS | Overview | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
  }
};
// MarketsStocksOverview("META").then(res => {
// console.log(res[0])
// console.log(res[1])
// console.log(res[2])
// console.log(res[3])})

async function MarketsStocksStatements(Stocks,ID){ 
  try{ 
    console.log(`[ PROCESSANDO ] [ INFO STOCKS | MARKETS | Statements | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://www.tradingview.com/markets/', {waitUntil: 'load'});
    await new Promise(r => setTimeout(r, 2000));
    GetItem = await page.$x(`/html/body/div[3]/div[3]/div[2]/div[2]/div/div/button[1]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 3000));
    GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[2]/span[2]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 2000));
    GetItem = await page.$x(`//*[@id="Ideas"]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 5000));
    GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[1]/span/form/input`)
    await GetItem[0].type(Stocks);
    await new Promise(r => setTimeout(r, 5000));
    let StocksFind = await page.evaluate(() => Array.from(document.querySelectorAll('[class="itemInfoCell-oRSs8UQo cell-oRSs8UQo"]'), element => element.textContent));
    for (let i = 0; i < StocksFind.length; i++){
      if (StocksFind[i].toUpperCase()==Stocks.toUpperCase()) {
        if (i=="0") {
          console.log(i)
          GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[4]/div/div/div`)
          await GetItem[0].click();
          await new Promise(r => setTimeout(r, 5000));
          break
        }else{
          GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[4]/div/div/div[${i}]`)
          await GetItem[0].click();
          await new Promise(r => setTimeout(r, 5000));
          break
        }
      }else if(StocksFind[i].toUpperCase()==`${Stocks[0].toUpperCase()}${Stocks.toUpperCase()}`){
        if (i=="0") {
          GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[4]/div/div/div`)
          await GetItem[0].click();
          await new Promise(r => setTimeout(r, 5000));
          break
        }else{
          GetItem = await page.$x(`/html/body/div[8]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div[4]/div/div/div[${i}]`)
          await GetItem[0].click();
          await new Promise(r => setTimeout(r, 5000));
          break
        }
      }else{
      console.log(`[ ❌ ]  [ INFO STOCKS | MARKETS | Statements |NOT FOUND > ${Stocks.toUpperCase()} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
      await page.close();
      await browser.close();
      return await [`Desculpe, nenhuma ações foi encontrada da ${Stocks}.`]
      }
    }
    GetItem = await page.$x(`/html/body/div[3]/div[4]/div[2]/div[1]/div[2]/div/div[1]/div/a[4]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 5000));
    // ! Statements
    GetItem = await page.$x(`//*[@id="statements"]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 5000));
    let StocksStatements = await page.evaluate(() => Array.from(document.querySelectorAll('[class="wrap-hegngCX6 description-XBlFAtm7"] > h2'), element => element.textContent));
    let StocksStatementsInfo = [];
    for (let i = 0; i < StocksStatements.length; i++){
      StocksStatementsInfo.push(StocksStatements[i]);
    }
    console.log(StocksStatementsInfo);
    let StocksStatementsAbout = await page.evaluate(() => Array.from(document.querySelectorAll('[class="wrap-hegngCX6 description-XBlFAtm7"] > div'), element => element.textContent));
    let StocksStatementsAboutInfo = [];
    for (let i = 0; i < StocksStatementsAbout.length; i++){
      StocksStatementsAboutInfo.push(StocksStatementsAbout[i]);
    }
    console.log(StocksStatementsAboutInfo);
    await new Promise(r => setTimeout(r, 5000));
    const test = await page.$(`[class="chartContainer-MJytD_Lf"]`)
    await test.screenshot({path: `/home/debian/Github/AlcapaAiPro/code/asset/tools/data/Temporary/6263218951/img/${ID}`}); 
    // take screenshot element in puppeteer
  }catch (Error){
    console.log(`[ ❌ ] [ INFO STOCKS | MARKETS | Statements | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    return await [`Desculpe, nenhuma ações foi encontrada da ${Stocks}.`]
  }finally{
    console.log(`[ ✅ ] [ INFO STOCKS | MARKETS | Statements | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
  }
};
MarketsStocksStatements("Meta")