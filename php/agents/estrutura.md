# A estrutura é a que está dentro da pasta PHP

1 - agents = uma pasta onde tem .md para auxiliar IA sobre o projeto
2 - assets = Onde fica as pastas ligado ao front-end, CSS para cores e aparencia, JS(app.js importa todas as outras funções de outros arquivos scripts) para interações e img para imagens do projeto
3 - Providers = Nele fica duas classes:
    RederView = Classe que renderia e retorna uma view.
    JsonDecoder = Classe para trar apis vinda do node.js
4 - views = nela vai ter as paginas do projeto, a pasta layout vai ter o header e footer para repetir mesno codigo.
5 - raiz:
    .htaccess = Avisa o servidor que a pagina principal é a index.php
    index.php = font-controller do site, ele defini a url, importa as classes da Providers, pega a url e fala qual pagina o usuario deve ir ou qual json pegar no node.js