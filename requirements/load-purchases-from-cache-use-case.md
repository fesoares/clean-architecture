# Carregar Compras do Cache

> ## Caso de sucesso
1. Sistema executa o comando "Carregar compras"
2. Sistema carrega os dados do cache
3. Sistema valida se o cache tem menos de 3 dias
4. Sistema cria uma lista de compras a partir dos dados do cache
5. Sistema retorna uma lista de compras

> ## Exceção - Erro ao apagar dados do Cache
1. Sistema limpa o cache
2. Sistema retorna uma lista vazia


> ## Exceção - Erro ao gravar dados do Cache
1. Sistema retorna uma lista vazia