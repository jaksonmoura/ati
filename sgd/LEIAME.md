Olá developers,
Aqui estão pontos sobre o redesign:

## Geral
- O intuito desse redesign é principalmente visual/organizacional e, portanto, o jeito que o sistema deverá funcionar é basicamente o mesmo.
- Os itens do menu foram modificados. Vários removidos pois sempre iam primeiro para uma busca simples.
- A página Follow-up foi renomeada para Painel de acompanhamento, mas ainda **acompanha** entre parentesis o nome antigo.

## Barra superior (Branca)
- A barra superior funciona como a busca simples global. Criei um script simples que deve servir de modelo para o funcionamento de como a másca deve funcionar.
- Ao focar no input da busca a máscara deve carregar o ano atual e o código para documentos baseado no usuário.
- A barra superior a ser copiada para a partial é a do arquivo home.html pois tem as configurações do perfil
- É preciso colocar os links nos botões.

## Listagem de Processos e Documentos
- As tabelas estão feitas no formato mais simples, sem row/colspans.
- Apesar de feito da forma mais simples o ideal seria o DATATABLE funcionar de forma assíncrona.
- As opcões que a pessoa tem para fazer não estão completas, servem apenas de guia, obviamente.
- É sábio evitar que o campo de filtro do datatable funcione onkeypressed, seria melhor usar a tecla enter ou mesmo com uma quantidade mínima de caracteres. Ex. 3 chars.
- Por uma limitação do template evite muitos itens no menu dropdown.

## Visualização de documentos
- Do atual histórico de tramitção para baixo todos os items foram transformados em abas para diminuir o tempo de carregamento. Abrindo inicialmente apenas o histórico e os outros sob demanda.

