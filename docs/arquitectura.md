# Arquitectura

## Capas
- src/main.js: punto de entrada
- src/services/: integraciones externas (Wasapi, Meta, Zoom, Sheets)
- src/utils/: helpers genericos (logger, retry, fechas, validacion)
- src/config/: constantes, IDs, scopes, endpoints

## Flujo deploy
local -> git push -> GitHub Actions -> clasp push -> Apps Script project