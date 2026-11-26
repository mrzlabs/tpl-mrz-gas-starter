/**
 * Proyecto: tpl-mrz-gas-starter
 * Stack: Google Apps Script V8
 * Zona horaria: UTC-5
 */

function main() {
  try {
    const ts = new Date();
    Logger.log('mrzlabs init: ' + ts.toISOString());
  } catch (err) {
    Logger.log('ERR main: ' + err.message);
  }
}