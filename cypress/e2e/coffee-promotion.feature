#utf-8
#language: pt

Funcionalidade: Realizar compra de cafés com promoção

  Cenário: Comprar cafés, aceitar promoção e finalizar compra com sucesso
    Dado que acesso a loja de cafés
    Quando seleciono três cafés diferentes
    E visualizo a aparição do modal de oferta promocional
    E aceito a promoção do café Mocha
    E verifico que o carrinho contém quatro itens com valores corretos
    E removo um item do carrinho
    E realizo o pagamento
    Então a mensagem de sucesso deverá ser exibida