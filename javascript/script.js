/* criando a função que vai permitir clicar no botão para adicionar uma tarefa
se o espaco onde vai a tarefa estiver vazio, vai dar erro, se nao, uma nova tarefa será
preennchida */

$("#btn").click(function () {
    const espaçotarefa = $("#tarefa").val();
    if ( espaçotarefa === "") {
        alert("por favor, coloque uma tarefa :D")
    } else {
        $("#lista").append(`<li><i class="material-symbols-outlined">add_circle</i><span>${ espaçotarefa } </span><i
            class="material-symbols-outlined close">delete</i></li>`)
    }
   $("#tarefa").val(""); // remove o resto de palavras que ficaram no input.

   $(".close").each(function(){ //Procura todas as clases .close
    $(this).click(function(){ // para cada botao clicado,
        $(this).parent().remove();//remove
    })
   });


   $("#lista").click(function(){
    $(this).find(".check").css("color", "#fff");
    $(this).find(".span").css("textDecoration", "line-through");


   })


})