$('document').ready(function () {
    $('button-edit').on('click', function (event) {
        event.preventDefault();
        alert("edit");
        let href = $(this).attr('href');
        alert(href);
        $.get(href, function (user) {
            $('#id').val(user.id);
        });
        $('#editModal').modal();
    });
})
