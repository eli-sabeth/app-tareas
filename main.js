$(document).ready(function(){
    $('.agregar').on('click',function(){
        var tarea = $('.tarea').val();

        if(tarea == ''){
            return;
        }

        var tarea_nueva = '<li class="list-group-item d-flex justify-content-between align-items-center"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">' + tarea + '</label></div><i class="far fa-trash-alt"></i></li>'; // cadena de mensaje

        $('.scroll').append(tarea_nueva); //envio el mensaje al chat

        $('.tarea').val(''); // limpiar el input
    })

    $(document).on('click',function(){
        $('.form-check-input').on('click',function(){
            if (this.checked){
                $(this).siblings().css("text-decoration","line-through");//Agrega el tachado
            }else{
                $(this).siblings().css("text-decoration","none");//Cuando la porpiedad checked es false quita el tachado
            }
    
        })
    
        $('.far').on('click',function(){
            $(this).closest('li').remove();
        });

    })

})