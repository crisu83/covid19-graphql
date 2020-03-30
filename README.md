# Covid-19 GraphQL

GraphQL API for querying data about Covid-19 across the world.

[![Action Status](https://github.com/crisu83/covid19-graphql/workflows/CI/badge.svg)](https://github.com/crisu83/covid19-graphql/actions)

## Requirements

- [Node](https://github.com/tj/n) 12 and [Yarn](https://yarnpkg.com).
- [Azure](https://azure.com/) account
- [Azure Functions Core Tools CLI](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#v3)
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
- [Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) for [VSCode](https://code.visualstudio.com/)

## Development

Do the following to run the project on your own computer:

- Run `yarn` to install the dependencies
- Run `yarn gen` to generate TypeScript definitions
- Run `yarn watch` to watch files for changes
- Run `yarn start` to start the development server

## Production

You can deploy the project using the [Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) extension for [VSCode](https://code.visualstudio.com/). Please note that you have to setup billing for your Azure account before you can deploy to Azure.

- Run `az login` to log in to your Azure account
- Open the **Azure Tools** extension in **VSCode**
- Under **Functions** select: **Local Project (covid19-graphql) > Functions > graphql (HTTP)**
- Press **Deploy to Function App** and follow the instructions

## Contributing

Please read our [guidelines](.github/CONTRIBUTING.md).

## License

See [LICENSE](LICENSE).
