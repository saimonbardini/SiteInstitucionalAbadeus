# Paella Beneficente ABADEUS | Site institucional

Site institucional informativo, responsivo e feito em **HTML + CSS + JavaScript puro**, sem dependências obrigatórias, sem banco de dados e sem backend.

## Como abrir no VS Code

1. Extraia o arquivo ZIP.
2. Abra a pasta `paella-institucional` no **Visual Studio Code** (`Arquivo > Abrir Pasta`).
3. Abra o arquivo `index.html` usando a extensão **Live Server** (`Go Live`) ou clique duas vezes nele para abrir no navegador.
4. Edite os textos, salve e atualize a página.

Você **não** precisa instalar Node.js, npm, React ou frameworks para esta versão.

## Estrutura

```text
paella-institucional/
├── index.html               # Página completa e conteúdo institucional
├── styles.css               # Estilos, layout, animações e responsividade
├── config.js                # Dados editáveis da próxima edição
├── script.js                # Interações (menu, FAQ, rolagem e conteúdo)
├── docs/
│   └── Projeto_Paella_Beneficente_ABADEUS.pdf # Documento de origem
└── assets/
    ├── favicon.svg          # Ícone da aba do navegador
    └── paella-ilustracao.svg # Imagem ilustrativa de reserva (offline)
```

## Atualização da próxima edição

Abra `config.js` e altere os campos de `proximaEdicao` **somente após a confirmação oficial**. Por exemplo:

```js
const SITE_CONFIG = {
  proximaEdicao: {
    status: "Nova edição confirmada!",
    data: "12 de setembro de 2027", // EXEMPLO FICTÍCIO
    horario: "11h às 14h",            // EXEMPLO FICTÍCIO
    local: "Local do evento",          // EXEMPLO FICTÍCIO
    localDetalhes: "Bairro, Criciúma - SC",
    ingressos: "Em breve",
    ingressosDetalhes: "Consulte os canais oficiais"
  }
};
```

Os valores do exemplo acima **não são informações reais** do evento; use somente valores confirmados pela organização.

Se o campo estiver vazio (`""`), o site apresenta mensagens como "A confirmar" e "A divulgar". Conteúdos institucionais e links estão no `index.html`.

## Funcionalidades já prontas

- Layout adaptado a computadores, tablets e celulares.
- Navegação por seções, menu mobile e botão de voltar ao topo.
- Área para data, horário, local e ingressos da próxima edição.
- FAQ interativo e rolagem suave.
- Animações leves com respeito a acessibilidade / movimento reduzido.
- Links para o site oficial, e-mail e notícias da ABADEUS.
- Imagem local ilustrativa de reserva se as fotografias externas não carregarem.

## O que não está implementado

Este projeto não efetua vendas, cadastro de interessados, pagamentos, armazenamento de dados, QR Codes, aplicativo, nem painel administrativo. Isso é intencional: esta etapa é uma **landing page institucional**. Para receber inscrições ou enviar notificações por e-mail, será necessário desenvolver uma integração real futuramente.

## Fontes e informações

- Requisitos e propósito do evento: `Projeto_Paella_Beneficente_ABADEUS.pdf`, fornecido para o projeto.
- Referência visual/estrutura: https://site-paella.vercel.app/ (usada como inspiração, não como fonte de datas ou preços).
- Histórico oficial da 18ª edição (12 de setembro de 2026): https://www.abadeus.org.br/postagem/1046/abadeus-chega-a-18-paella-beneficente-com-mais-de-700-ingressos-vendidos
- Site e contato da organização: https://www.abadeus.org.br/
- Fotografias gastronômicas ilustrativas: imagens de https://www.pexels.com/photo/cooked-food-on-stainless-pan-9570408/ e https://www.pexels.com/photo/top-view-of-paella-24906297/, incorporadas por URL externa.
- Foto histórica da edição de 2026: ABADEUS / Marketing ABADEUS, por meio da notícia oficial.
- Ilustração de reserva e favicon produzidos para este layout.

**Importante:** O site de exemplo exibe informações demonstrativas (incluindo uma 27ª edição e uma data de novembro de 2026) que não coincidem com a notícia oficial sobre a 18ª edição realizada em setembro de 2026. Por isso, esta implementação não reutiliza aquelas datas, números de edição nem preços como se fossem oficiais.

## Publicação

É possível hospedar esta pasta em serviços de sites estáticos, por exemplo GitHub Pages, Netlify ou Vercel. Como o projeto não precisa de compilação, a saída publicada é simplesmente a própria pasta.
