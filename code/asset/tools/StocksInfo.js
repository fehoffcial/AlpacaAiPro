const  puppeteer = require("puppeteer");
const {KeyCheckCloud} = require ("../key/KeyCheck");
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

async function StocksOverview(Stocks,ID,USER){ 
  try{
    let License = await KeyCheckCloud(ID,USER)
    console.log(`[ PROCESSANDO ] [ INFO STOCKS | MARKETS | Finance | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
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
      console.log(`[ ❌ ]  [ INFO STOCKS | MARKETS | Finance |NOT FOUND > ${Stocks.toUpperCase()} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
      await page.close();
      await browser.close();
      return await [`Desculpe, nenhuma ações foi encontrada da ${Stocks}.`]
      }
    }
    let FindFinance = await page.evaluate(() => Array.from(document.querySelectorAll('[class="text-wrap-container-bYDQcOkp text-wrap-with-ellipsis-bYDQcOkp"] > span'), element => element.textContent));
    let FinanceFind = []
    for (let i = 0; i < FindFinance.length; i++){
      FinanceFind.push(FindFinance[i])
    }
    let Finance = await page.evaluate(() => Array.from(document.querySelectorAll('[class="tv-tabs__tab js-category-tab"]'), element => element.href));
    for (let i = 0; i < Finance.length; i++){
      if(Finance[i]==`https://www.tradingview.com/symbols/${FinanceFind[1]}-${FinanceFind[0]}/financials-overview/`){
        await page.goto(`https://www.tradingview.com/symbols/${FinanceFind[1]}-${FinanceFind[0]}/financials-overview/`, {waitUntil: 'load'});
        break
      }
      if(Finance[i]==`https://www.tradingview.com/symbols/${FinanceFind[0]}-${FinanceFind[1]}/financials-overview/`){
        await page.goto(`https://www.tradingview.com/symbols/${FinanceFind[0]}-${FinanceFind[1]}/financials-overview/`, {waitUntil: 'load'});
        break
      }
    }
  await new Promise(r => setTimeout(r, 5000));
  let FinanceOverview = await page.evaluate(() => Array.from(document.querySelectorAll('[class="item-TYuCkiP9"] > span'), element => element.textContent));
  let FinanceOverviewInfo = [];
  for (let i = 0; i < FinanceOverview.length; i++){
    FinanceOverviewInfo.push(FinanceOverview[i])
  }
  let FinanceOverviewAbout = await page.evaluate(() => Array.from(document.querySelectorAll('[class="description-hegngCX6 collapsed-hegngCX6"]'), element => element.textContent));
  let FinanceOverviewInfoAbout = [];
  for (let i = 0; i < FinanceOverviewAbout.length; i++){
    FinanceOverviewInfoAbout.push(FinanceOverviewAbout[i])
  }
  await new Promise(r => setTimeout(r, 5000));
  const Summary = await page.$(`[class="container-et_hEjZZ"]`);
  await Summary.screenshot({path: `/home/debian/Github/AlpacaAiPro/code/asset/tools/data/${License}/${ID}/img/Summary.jpg`});
  const Performance = await page.$(`[class="wrap-S5220cYk"]`);
  await Performance.screenshot({path: `/home/debian/Github/AlpacaAiPro/code/asset/tools/data/${License}/${ID}/img/Performance.jpg`});
  const Valuation = await page.$(`[class="wrap-S5220cYk"]`);
  try{
    GetItem = await page.$x(`/html/body/div[7]/div/div/div/article/div/div/div/button[2]`)
    await GetItem[0].click();
  }catch{
    console.log("Nao foi encontrado")
  }finally{
    await Performance.screenshot({path: `/home/debian/Github/AlpacaAiPro/code/asset/tools/data/${License}/${ID}/img/Performance.jpg`});
    await Valuation.screenshot({path: `/home/debian/Github/AlpacaAiPro/code/asset/tools/data/${License}/${ID}/img/Valuation.jpg`});
    const Revenue = await page.$(`[class="wrap-S5220cYk"]`);
    await Revenue.screenshot({path: `/home/debian/Github/AlpacaAiPro/code/asset/tools/data/${License}/${ID}/img/Revenue.jpg`});
    await new Promise(r => setTimeout(r, 5000));
    await page.close();
    await browser.close();
    return await [FinanceOverviewInfo,FinanceOverviewInfoAbout]
    }
  }catch (Error){
    console.log(`[ ❌ ] [ INFO STOCKS | MARKETS | Finance | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    return await [`Desculpe, nenhuma ações foi encontrada da ${Stocks}.`]
  }finally{
    console.log(`[ ✅ ] [ INFO STOCKS | MARKETS | Finance | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
  }
};
module.exports = {StocksOverview,ValueStocks}
