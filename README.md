# WhatsApp Clone

> WhatsApp construido com React Native + Redux + Firebase

## Telas da Aplicação

<table>
  <tr>
    <th>
      <img src="https://user-images.githubusercontent.com/26445991/56992436-72520d80-6b70-11e9-9e4c-bd8637a22b07.png" width="270" height="540">
    </th>
    <th>
      <img src="https://user-images.githubusercontent.com/26445991/56992471-872ea100-6b70-11e9-9357-5f37674fa8d2.png" width="270" height="540">
    </th>
  </tr>
      <th>
        <img src="https://user-images.githubusercontent.com/26445991/56992492-8dbd1880-6b70-11e9-86d6-93e12dc028a5.png" width="270" height="540">
  </th>
    <th>
      <img src="https://user-images.githubusercontent.com/26445991/56992502-91e93600-6b70-11e9-9e8a-29196a4eed86.png" width="270" height="540">
  </th>
  <tr>
  </tr>
</table>


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
$ react-native run-ios ou react-native run-android
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
