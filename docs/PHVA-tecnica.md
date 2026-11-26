# PHVA Tecnica. tpl-mrz-gas-starter

## PLANEAR
Objetivo: template GitHub para bootstrap de proyectos Apps Script.
Alcance: estructura, lint, formato, CI/CD via clasp, documentacion dual.
Requisitos: Node 20+, clasp 2.4+, cuenta GCP con scriptId.
Recursos: GitHub Actions free tier, secrets CLASPRC_JSON y CLASP_JSON.
Responsable: amtz-dev.

## HACER
1. Click Use this template en https://github.com/mrzlabs/tpl-mrz-gas-starter
2. Clonar nuevo repo
3. cp .clasp.json.example .clasp.json y reemplazar scriptId
4. npm install
5. clasp login local o configurar secrets en GitHub
6. Desarrollar en src/
7. git push origin main dispara workflow deploy-clasp.yml

## VERIFICAR
- KPI tiempo bootstrap proyecto: < 5 min SLA
- KPI tasa de error CI: < 5 percent en 30 dias
- KPI cobertura: 100 percent proyectos GAS nuevos usan template
- KPI adopcion: medido por count de repos derivados
- Aceptacion: clasp push exitoso desde Action sin intervencion manual

## ACTUAR
- Iteracion 0.2: agregar tests con clasp run
- Iteracion 0.3: integrar logger centralizado lib-mrz-gas-utils
- Iteracion 0.4: pre commit hooks con husky

## Cierre
Molde vivo. Mejora con cada proyecto nuevo.