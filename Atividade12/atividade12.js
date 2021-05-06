function validarDados(){

    if (document.forms.formulario1.elements[0].value == "" || document.forms.formulario1.elements[0].length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.formulario1.elements[0].focus();
        return false;
    };

    if (document.forms.formulario1.elements["idEmail"].value == "" || document.forms.formulario1.elements["idEmail"].value.indexOf('@') == -1 || document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formulario1.elements.idEmail.focus();
        return false;
    }

    if (document.forms.formulario1.elements.idComentario.value == "" || document.forms.formulario1.elements.idComentario.value.length < 20) {
        alert("É necessario preencher o campo COMENTARIO com pelo menos 20 caracteres!");
        document.getElementById("idComentario").focus();
        return false;
    }

    if (document.forms.formulario1.elements.radioButton[0].checked == true) {
        alert("Volte sempre à esta página!");
        return false;
    }

    if (document.forms.formulario1.elements.radioButton[1].checked == true) {
        alert("Que bom que você voltou a visitar esta página!");
        return false;
    }

return true;
}