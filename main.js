const display = document.querySelector("#display");
/* Const é uma informação que guarda na memória, é quase a mesma coisa que varáivel. Dizemos que o display vai receber a informação do document sem alterações.
display é o nome da const.
document chama o html (O ID do display)
O querySelector retorna o primeiro elemento dentro do documento
*/

const buttons = document.querySelectorAll("button");

/*Como temos varios buttons usamos o all para pegar todos.
Técnico: retorna uma lista de elementos presentes no documento.*/

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);

        } else {
            display.value += btn.id;
        }

    })
})

/* 
MEUS COMENTÁRIOS:
forEach = para cada constante buttons quero:
colocar o apelido btn
adicionar um evento de click

IF:
se o id do btn for exatamente igual
(=== -> significa exatamente igual)
display.value é o valor do display
o eval converte em valor

ELSE IF:
se o botão com a id com o valor ac for pressionado o valor do display é "" (ZERO)
Slice é o botão de apagar.
0 é o numero que ele começa (APARTIR DO PRIMEIRO CARACTÉRE)
-1 é o número de caracteres que serão apagados.

ELSE FINAL:
Contanear o valor com += usando a id do botão.

===== COMENTARIAOS DO SOR =====
Sobre CONST: A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

Sobre querySelector e querySelectorAll: 
O querySelector retorna o primeiro elemento dentro do documento.
querySelectorAll: Retorna uma lista de elementos presentes no documento.

=== (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.

SOBRE SLICE: 
O método slice() percorre a string ou o array para selecionar a faixa de valores determinada por parâmetro. A primeira posição de uma string ou array é a posição de número 0.

SOBRE CONCATENAÇÃ: O operador de atribuição encurtado += pode ser utilizado para concatenar strings.
*/