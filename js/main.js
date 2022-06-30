$(document).ready(()=>{

    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        stopAutoOnClick: true,
        pager: false,
        controls: false
    });


    // Tema en localStorage
    var tema = $("#theme");
    var cargado = localStorage.getItem("color");
    if(cargado == null){
        cargado = "css/base.css";
    }
    tema.attr("href", cargado);

    // Selector de Tema
    $("#to-base").click(()=>{
        let base = "css/base.css";
        tema.attr("href", base);
        localStorage.setItem("color", base)
    });
    $("#to-dark").click(()=>{
        let dark = "css/dark.css";
        tema.attr("href", dark);
        localStorage.setItem("color", dark)
    });
    $("#to-golden").click(()=>{
        let golden = "css/golden.css";
        tema.attr("href", "css/golden.css");
        localStorage.setItem("color", golden)
    });
    $("#to-lilac").click(()=>{
        let lilac = "css/lilac.css";
        tema.attr("href", lilac);
        localStorage.setItem("color", lilac)
    });

    // Scroll hacia el top
    $('.subir').click((e)=>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // loguear falso
    $("#loguear form").submit(()=>{
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);     
      
    });

    var form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != "undefined"){
        var bienvenido =  $("#bienvenido")
        bienvenido.show();
        bienvenido.html("<strong>Bienvenido, "+form_name+"!<strong/>");
        bienvenido.append("<br><a href='#' id='logout'>Cerrar sesión</a>");

        $("#loguear").hide();

        $("#logout").click(()=>{
            localStorage.removeItem("form_name");
            bienvenido.hide();
            location.reload();
        });
    };

    //Acordeon en about
    if(window.location.href.indexOf('about')>-1){
        $("#acordeon").accordion();
    };

});