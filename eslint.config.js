const js = require('@eslint/js');

const appsScriptGlobals = {
  Logger: 'readonly',
  Utilities: 'readonly',
  UrlFetchApp: 'readonly',
  SpreadsheetApp: 'readonly',
  PropertiesService: 'readonly',
  CacheService: 'readonly',
  LockService: 'readonly',
  ContentService: 'readonly',
  HtmlService: 'readonly',
  DriveApp: 'readonly',
  GmailApp: 'readonly',
  MailApp: 'readonly',
  CalendarApp: 'readonly',
  Session: 'readonly',
  ScriptApp: 'readonly',
  console: 'readonly',
};

module.exports = [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: appsScriptGlobals,
    },
    rules: {
      // En Apps Script las funciones de nivel superior son puntos de entrada.
      'no-unused-vars': ['warn', { vars: 'local' }],
    },
  },
];
