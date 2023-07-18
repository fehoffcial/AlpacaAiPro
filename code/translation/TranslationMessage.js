const translate = require('translation-google');
async function TranslationMessage(Message) {
  return new Promise(async(resolve,reject) => {
    const translation = await translate(Message,{ from : "en", to : "es"});
    await resolve(translation.text);
    await reject("error")
    return translation.text
  });
}
module.exports = {TranslationMessage}