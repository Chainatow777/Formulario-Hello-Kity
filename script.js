var formulario = {};

function armazenarInformacoes() {
    formulario.nome = document.getElementById('nome').value;
    formulario.dataNascimento = document.getElementById('dataNascimento').value;
    formulario.estadoCivil = document.getElementById('estadoCivil').value;

    if (
        formulario.nome !== 'isabela' &&
        formulario.nome !== 'isabela brandão' &&
        formulario.nome !== 'isabela brandão da silva' &&
        formulario.dataNascimento !== '31/12/2006'
    ) {
        var mensagem =
            "SAI DAQUI SUA PRAGA, " +
            formulario.nome +
            ", VOCÊ NÃO É MINHA NAMORADA!!! :(";
        alert(mensagem);
        return;
    }

    exibirCodigoAleatorio();
    exibirProximaEtapa();
}

function enviarInformacoes() {
    var conviteContainer = document.getElementById('conviteContainer');
    var novaInformacaoContainer = document.getElementById('novaInformacaoContainer');
    novaInformacaoContainer.classList.add('hidden');
    conviteContainer.classList.remove('hidden');

    var conviteTexto = document.getElementById('conviteTexto');
    var codigoAleatorio = sessionStorage.getItem('codigoAleatorio');
    conviteTexto.innerHTML =
        "Olá, Sr. " +
        formulario.nome +
        "! Sua disponibilidade para sair no dia 01/05 às 18:00h foi confirmada! <br>OBS: Não aceitamos reagendamentos do horário marcado. Qualquer dúvida, chama no zap ❤️"
}

function exibirCodigoAleatorio() {
    var codigo = gerarCodigoAleatorio();
    sessionStorage.setItem('codigoAleatorio', codigo);

    Swal.fire({
        title: "Código aleatório:",
        text: codigo,
        background: "#DB2B39",
        customClass: {
            title: "swal-title",
            text: "swal-text",
        },
    });

    var alertElements = document.querySelectorAll(".swal-title, .swal-text");
    alertElements.forEach(function (element) {
        element.style.color = "#ffffff";
    });
}



function gerarCodigoAleatorio() {
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var codigo = '';

    for (var i = 0; i < 8; i++) {
        var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres.charAt(indiceAleatorio);
    }

    return codigo;
}

function exibirProximaEtapa() {
    var formContainer = document.getElementById('formContainer');
    var novaInformacaoContainer = document.getElementById('novaInformacaoContainer');
    formContainer.classList.add('hidden');
    novaInformacaoContainer.classList.remove('hidden');
}

function verificarCodigo() {
    var codigoDigitado = document.getElementById('codigo').value;
    var codigoAleatorio = sessionStorage.getItem('codigoAleatorio');

    if (codigoDigitado === codigoAleatorio) {
        exibirElogios();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Código incorreto!',
            text: 'Por favor, verifique o código digitado e tente novamente.',
            customClass: {
                container: 'swal-container-error',
                title: 'swal-title-error',
                text: 'swal-text-error',
            },
        });
    }
}


function exibirElogios() {
    var elogios = [
        "Você é perfeita!",
        "Você é incrível!",
        "Você me faz feliz!",
        "Eu te amo!",
        "Você é linda!",
        "Você é maravilhosa!",
        "Você é gostosa!",
        "Você é engraçada!",
        "Você é talentosa!",
        "Você é cheirosa!",
        "Você é minha vida!",
        "Você tem um sorriso lindo!",
        "Você é única!",
        "Você meu tudo!"
    ];

    function exibirAlerta() {
        var elogioAleatorio = elogios[Math.floor(Math.random() * elogios.length)];
        var alertOptions = {
            icon: "success",
            title: elogioAleatorio,
            position: 'center',
            customClass: {
                container: 'sweet-alert-container',
                popup: 'sweet-alert-popup',
            },
        };

        Swal.fire(alertOptions);

        setTimeout(exibirAlerta, 2000);

        var alertElements = document.querySelectorAll(".sweet-alert-container");
        alertElements.forEach(function (element) {
            element.style.border = '2px solid pink';
        });
    }

    exibirAlerta();
}

exibirElogios();