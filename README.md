# WhatsApp Clone

> WhatsApp construido com React Native + Redux + Firebase

## Instalação

```sh
$ git clone https://github.com/willianpassarelli/whatsappClone.git
```

```sh
$ yarn add react-native
```

```sh
$ react-native init whatsappClone
```

```sh
$ react-native run-ios ou react-native run-ios
```

## Exemplo de uso

O aplicativo tem um conceito simples, basta navegar até a tela de contatos e clique sobre o icone de adicionar contato,
se o contato existir ele irá adicionar a sua lista de contatos.

Ao clicar sobre o contato já adicionado bastar iniciar a conversa com o usuário, neste mesmo instante o conversa ficará salva
na tela de Conversas.

## Configuração de desenvolvimento

Caso algum icone e funções de navegação não esteja funcional após clonar e inicializar o App é necessário utilizar os seguintes comandos abaixo.

```sh
$ react-native link react-native-vector-icons
$ react-native link react-native-gesture-handler
```

## Dependencies

```sh
$ yarn add base-64
$ yarn add firebase
$ yarn add lodash
$ yarn add react-navigation
$ yarn add react-native-gesture-handler
$ yarn add react-native-vector-icons
$ yarn add redux
$ yarn add react-redux
$ yarn add redux-thunk
```

## Configuração Firebase

Path: src\utils\firebase.js

```
const config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_STORAGE",
  messagingSenderId: "YOUR_SENDERID"
};
```

## Rodando a Aplicação

```sh
$ yarn start
```
