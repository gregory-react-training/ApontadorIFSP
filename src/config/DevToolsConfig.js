/**
 * Ferramenta de debug, excelente por mostrar os detalhes da aplicação.
 * Para utilizar:
 * Adicionar dependência react-devtools --dev (caso não tenha);
 * Adicionar ao arquivo package.json o script: "react-devtool": "react-devtools" (caso não tenha);
 * Abrir a pasta raiz do projeto no cmd e rodar o comando: yarn run react-devtool ou o equivalente no npm.
 */

if (__DEV__) {
  require('react-devtools');
}
