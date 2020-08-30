$( document ).ready(function() {
    $('#showPassword').click(function(){
        var type = $('#password').attr('type') == "text" ? "password" : 'text',
            c = $(this).html() == "<span class=\"glyphicon glyphicon-eye-close\" title=\"Скрыть пароль\"></span>" ? "<span class=\"glyphicon glyphicon-eye-open\" title=\"Показать пароль\"></span>" : "<span class=\"glyphicon glyphicon-eye-close\" title=\"Скрыть пароль\"></span>";
        $(this).html(c);
        $('#password').prop('type', type);
    });
});