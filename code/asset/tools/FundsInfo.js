const  puppeteer = require("puppeteer");
async function ValueFunds(Stocks){ 
  try{ 
    console.log(`[ PROCESSANDO ] [ INFO FUNDS | VALUE | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://www.tradingview.com/', {waitUntil: 'load'});
    await new Promise(r => setTimeout(r, 2000));
    GetItem = await page.$x(`/html/body/div[3]/div[4]/div[1]/div[1]/div[2]/div[1]/div/button`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 3000));
    GetItem = await page.$x(`//*[@id="funds"]`)
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
      console.log(`[ ❌ ]  [ INFO FUNDS | VALUE |NOT FOUND > ${Stocks.toUpperCase()} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
      await page.close();
      await browser.close();
      return await [`Desculpe, nenhuma fundos foi encontrada da ${Stocks}.`]
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
    console.log(`[ ✅ ] [ INFO FUNDS | VALUE | 1 DAY | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
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
    console.log(`[ ✅ ] [ INFO FUNDS | VALUE | 15 MINUTES | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
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
    console.log(`[ ✅ ] [ INFO FUNDS | VALUE | 4 HOURS | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    await new Promise(r => setTimeout(r, 2000));
    GetItem = await page.$x(`/html/body/div[2]/div[6]/div/div[2]/div/div/div/div/button[1]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 3000));
    await page.close();
    await browser.close();
    return [ValueDataDay, ValueDataMinutes, ValueDataHours]
  }catch (Error){
    console.log(`[ ❌ ] [ INFO FUNDS | VALUE | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    return await [`Desculpe, nenhuma fundos foi encontrada da ${Stocks}.`]
  }finally{
    console.log(`[ ✅ ] [ INFO FUNDS | VALUE | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
  }
};
async function MarketsFunds(Stocks){ 
  try{ 
    console.log(`[ PROCESSANDO ] [ INFO FUNDS | VALUE | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://www.tradingview.com/markets/', {waitUntil: 'load'});
    await new Promise(r => setTimeout(r, 2000));
    GetItem = await page.$x(`/html/body/div[3]/div[3]/div[2]/div[2]/div/div/button[1]`)
    await GetItem[0].click();
    await new Promise(r => setTimeout(r, 3000));
    GetItem = await page.$x(`//*[@id="funds"]`)
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
      console.log(`[ ❌ ]  [ INFO FUNDS | VALUE |NOT FOUND > ${Stocks.toUpperCase()} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
      await page.close();
      await browser.close();
      return await [`Desculpe, nenhuma fundos foi encontrada da ${Stocks}.`]
      }
    }
  }catch (Error){
    console.log(`[ ❌ ] [ INFO FUNDS | VALUE | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
    return await [`Desculpe, nenhuma fundos foi encontrada da ${Stocks}.`]
  }finally{
    console.log(`[ ✅ ] [ INFO FUNDS | VALUE | ${Stocks} ] [ ✅ ] [  ALCAPA.AI [ PRO ] ]`);
  }
};

MarketsFunds("IBOV11").then(res => console.log(res))