# tpl-mrz-gas-starter

[![CI](https://github.com/mrzlabs/tpl-mrz-gas-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/mrzlabs/tpl-mrz-gas-starter/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Runtime: Apps Script V8](https://img.shields.io/badge/runtime-Apps%20Script%20V8-4285F4)

**ES** · Plantilla para arrancar proyectos de Google Apps Script en minutos: clasp, ESLint, Prettier y CI/CD con GitHub Actions ya configurados.  
**EN** · A template to start Google Apps Script projects in minutes: clasp, ESLint, Prettier and GitHub Actions CI/CD already set up.

## Qué incluye / What's included

- Google Apps Script V8 con zona horaria `America/Bogota` (cámbiala en `appsscript.json`).
- [clasp](https://github.com/google/clasp) para subir y bajar código desde la terminal.
- ESLint 9 (configuración plana) y Prettier.
- Workflow de CI (lint) y workflow opcional de despliegue con clasp.
- Dependabot, plantilla de pull request y plantillas de issues.

## Cómo empezar / Getting started

1. Pulsa **Use this template** en GitHub y clona tu repositorio nuevo. / Click **Use this template** and clone your new repository.
2. Copia la configuración de clasp y pon tu `scriptId`: / Copy the clasp config and set your `scriptId`:
   ```bash
   cp .clasp.json.example .clasp.json
   ```
3. Instala y comprueba: / Install and check:
   ```bash
   npm ci
   npm run lint
   ```
4. Entra a Google y sube el código: / Log in and push:
   ```bash
   npx clasp login
   npm run push
   ```
5. Desarrolla en `src/main.js`. / Develop in `src/main.js`.

`.clasp.json` contiene el ID de tu proyecto y **no se versiona**. / `.clasp.json` holds your project ID and is **not versioned**.

## Despliegue automático (opcional) / Automatic deploy (optional)

`.github/workflows/deploy-clasp.yml` ejecuta `clasp push` al hacer push a `main`. Requiere dos secretos en tu repositorio: `CLASPRC_JSON` y `CLASP_JSON`. Si no los configuras, elimina ese workflow.  
`.github/workflows/deploy-clasp.yml` runs `clasp push` on pushes to `main`. It needs two repository secrets: `CLASPRC_JSON` and `CLASP_JSON`. If you do not set them, delete that workflow.

## Estructura / Structure

```text
src/main.js              punto de entrada / entry point
appsscript.json          manifiesto / manifest
eslint.config.js         lint (globals de Apps Script)
.clasp.json.example      ejemplo de configuración de clasp
docs/                    arquitectura y plantillas de documentación
```

## Convenciones / Conventions

- Funciones cortas (12-15 caracteres como máximo) y sin comentarios decorativos.
- Manejo explícito con `try/catch`.
- `getLastDataRow` en hojas con `ARRAYFORMULA`.
- Zona horaria UTC-5.

Documentación: [arquitectura](docs/arquitectura.md) · [endpoints](docs/endpoints.md) · [PHVA técnica](docs/PHVA-tecnica.md) · [PHVA simple](docs/PHVA-doomies.md).  
Utilidades listas para usar: [lib-mrz-gas-utils](https://github.com/mrzlabs/lib-mrz-gas-utils).

## Contribuir y seguridad / Contributing and security

[CONTRIBUTING.md](CONTRIBUTING.md) · [SECURITY.md](SECURITY.md) · [CHANGELOG](CHANGELOG.md) · [MIT License](LICENSE)
