# Formulário - Hello Kity

O Formulário - Hello Kity é um projeto que busca criar uma experiência romântica e fofa para os usuários. Ele consiste em um formulário onde os usuários fornecem informações pessoais, como nome, data de nascimento e estado civil. Em seguida, um código aleatório é gerado e exibido na tela, adicionando um toque misterioso ao processo. Os usuários são convidados a confirmar sua disponibilidade para um encontro, e um convite personalizado é exibido. Além disso, o código também apresenta elogios aleatórios em intervalos regulares. Com uma estética encantadora, incluindo imagens da Hello Kity e cores suaves, o projeto proporciona uma experiência interativa e envolvente, transmitindo aos usuários uma sensação de serem amados e especiais.

![ForYouLario -  Image](https://github.com/Chainatow777/Formulario-Hello-Kity/assets/107222555/1569d5c7-0bda-412b-80db-33ad50ff91b2)

## Funcionalidades

1. O formulário solicita ao usuário as seguintes informações:
   - Nome: campo de texto para inserir o nome.
   - Data de Nascimento: campo de data para selecionar a data de nascimento.
   - Estado Civil: menu suspenso para selecionar o estado civil.

2. Quando o usuário clica no botão "Próxima Etapa", a função `armazenarInformacoes()` é chamada. Essa função armazena as informações do formulário em um objeto chamado `formulario`.

3. Em seguida, a função `exibirCodigoAleatorio()` é chamada para gerar e exibir um código aleatório usando a biblioteca Swal (SweetAlert). O código aleatório é armazenado na sessão do navegador usando o `sessionStorage`.

4. A função `exibirProximaEtapa()` é chamada para ocultar o formulário atual e exibir a próxima etapa do processo, onde o usuário pode confirmar sua disponibilidade para um evento.

5. Quando o usuário clica no botão "Enviar" na segunda etapa, a função `enviarInformacoes()` é chamada. Essa função exibe um convite personalizado com base nas informações fornecidas pelo usuário.

6. A função `verificarCodigo()` é chamada quando o usuário digita um código no campo fornecido e clica no botão "Verificar". A função compara o código digitado com o código aleatório armazenado na sessão do navegador e exibe uma mensagem de sucesso ou erro com base na correspondência.

7. A função `exibirElogios()` é chamada para exibir uma série de elogios personalizados usando a biblioteca Swal. Os elogios são escolhidos aleatoriamente de uma lista predefinida.

## Arquivos

O projeto consiste nos seguintes arquivos:

- `index.html`: o arquivo HTML principal que contém a estrutura do formulário.
- `style.css`: um arquivo CSS que contém estilos para o formulário.
- `script.js`: um arquivo JavaScript que contém as funções para interatividade do formulário.

Além desses arquivos, também são usados os seguintes recursos externos:

- Biblioteca Swal (SweetAlert): é usada para exibir mensagens de alerta personalizadas.
- Biblioteca Bootstrap: é usada para estilizar os componentes do formulário.

## Executando o Projeto

Para executar o projeto, você precisa colocar todos os arquivos (HTML, CSS, JavaScript) em um diretório e abra o arquivo `index.html` em um navegador da web. O formulário será exibido e você poderá interagir com ele.

## Observações

- Este projeto é fornecido apenas como um exemplo de código e não inclui tratamento completo de erros, validações robustas ou recursos de backend. É importante implementar as verificações e validações necessárias para garantir a segurança e a integridade dos dados em um ambiente de produção real.
- O conteúdo dos elogios exibidos é fornecido como um exemplo e pode ser personalizado conforme necessário.
- Certifique-se de ter uma conexão com a internet ao executar o projeto, pois ele depende das bibliotecas externas (Swal e Bootstrap) carregadas de CDNs.
