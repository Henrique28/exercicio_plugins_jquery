
$(document).ready(function () {
    $('.carousel-images').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    })

    $('.menu-hamburger').click(function () {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculo: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            telefone: 'Por favor, insira seu número',
            email: 'Por favor, insira seu e-mail',
            mensagem: 'Por favor, envie-nos uma mensagem',
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposInvalidos = validador.numberOfInvalids();
            console.log(camposInvalidos)
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato-loja')
        const tituloVeiculo = $(this).parent().find('h3').text()

        $('#veiculo').val(tituloVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})