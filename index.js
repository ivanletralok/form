$(document).ready(function() {
    console.log("ready");

    $('#enviar').click(function() {
        // let name, lastname, country;
        // name = $('#name').val();
        // lastname = $('#lastname').val();
        // country = $('#country').val();
        // console.log(name, lastname, country)
        let data = $('#form').serialize();

        if (valisarInput() == true) {
            console.log(data)
            limpiarInput();
            swal({
                title: "Datos Enviados Con Exito!",
                text: "Ok Para Salir!",
                icon: "success",
            });
        } else {
            console.log("todo esta mal")

        }
    })
});



function limpiarInput() {
    $('#name').val('');
    $('#lastname').val('');
    $('#country').val('');
}

function valisarInput() {
    let name;
    name = $('#name').val();
    lastname = $('#lastname').val();
    country = $('#country').val();

    if (name == "") {
        $('#name').css('border', '1px solid red');
        swal("campo name no puede estar vacio");
        return false
    } else {
        $('#name').css('border', '1px solid #ced4da');
        if (lastname == "") {
            $('#lastname').css('border', '1px solid red');
            swal("campo lastname no puede estar vacio");
            return false
        } else {
            $('#lastname').css('border', '1px solid #ced4da');
            if (country == "") {
                $('#country').css('border', '1px solid red');
                swal("campo country no puede estar vacio");
                return false
            } else {
                $('#country').css('border', '1px solid #ced4da');
                return true
            }
        }
    }
}