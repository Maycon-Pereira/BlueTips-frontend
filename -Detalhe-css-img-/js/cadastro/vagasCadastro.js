//VAGAS--------------------------------------------
function vagasCad(event) {
    event.preventDefault();
    //var x = $( "form" ).serialize();


    var name = $("#name").val();
    var tipo = $("#type").val();
    var qtda = $("#qtda").val();
    var data = $("#data").val();
    var salario = $("#salario").val();
    var escolaridade = $("#escolaridadeVaga").val();
    var area = $("#area").val();
    var exigencia = $("#exigencia").val();
    var valorizado = $("#valorizado").val();
    var tipoContrato = $("#tipoContrato").val();
    var sobre = $("#historia-vaga").val();
    var cnpj = $("#cnpj").val();
    var senha = $("#password").val();
    var cep = $("#cep").val();
    var logradouro = $("#rua").val();
    var bairro = $("#bairro").val();
    var uf = $("#uf").val();
    var cidade = $("#cidade").val();
    var fotoPerfil = $("#uploadImg").val();


    var request = {
        "nome": name,
        "tipo": tipo,
        "qtda": qtda,
        "data": data,
        "salario": salario,
        "escolaridade": escolaridade,
        "area": area,
        "exigencias": exigencia,
        "valorizado": valorizado,
        "contrato": tipoContrato,
        "sobre": sobre,
        "cnpj": cnpj,
        "senha": senha,
        "cep": cep,
        "logradouro": logradouro,
        "bairro": bairro,
        "uf": uf,
        "cidade": cidade,
        "fotoPerfil":fotoPerfil,
    }

    console.log("1")


    $.ajax({
        url: "http://localhost:8080/vagas",
        type: "POST",
        crossDomain: true,
        data: JSON.stringify(request),
        contentType: "application/json",
        dataType: "json",
        
        success: function (response) {
            console.log("2")
            //var resp = JSON.parse(response)
            console.log(response);
            console.log("3")
            uploadImagem(response.id, event);console.log("4")
        },
        error: function (xhr, status) {
            console.log("5")
            console.log(xhr);
            console.log("6")
            console.log(status);
            console.log("7")

        }
        
    });
    console.log("8")

    console.log(" DADOS CADASTRADOS ")
    console.log(" nome "+ name)
    console.log(" tipo "+ tipo)
    console.log(" qtda "+ qtda)
    console.log(" data "+ data)
    console.log(" salario "+ salario)
    console.log(" escolaridade "+ escolaridade)
    console.log(" area "+ area)
    console.log(" exigencia "+ exigencia)
    console.log(" valorizado "+ valorizado)
    console.log(" tipoContrato "+ tipoContrato)
    console.log(" sobre "+ sobre)
    console.log(" cnpj "+ cnpj)
    console.log(" senha  "+ senha)
    console.log(" cep "+ cep)
    console.log(" logradouro "+ logradouro)
    console.log(" bairro "+ bairro)
    console.log(" uf "+ uf)
    console.log(" cidade "+ cidade)
    console.log(" fotoPerfil "+ fotoPerfil)
}

function uploadImagem(id, event) {

    let foto = document.getElementById("uploadImg").files[0];
    //var file = $('#uploadImg').attr('src', event.target.result);
    var data = new FormData();
        data.append('file', foto);
 

    jQuery.ajax({
        url: 'http://localhost:8080/vagas/v2/image/upload/' + id,
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST', // For jQuery < 1.9
        success: function (data) {
            alert("Vaga cadastrada com sucesso!");
        }
    });
}
