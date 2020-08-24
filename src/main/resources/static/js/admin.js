$('document').ready(function () {
    $('button-edit').on('click', function (event) {
        event.preventDefault();
        const href = $(this).attr('href');

        $.get(href, function (user) {
            alert(user.name);
            $('body').add('<div th:insert="blocks/edit-user::edit-form"></div>');
            $('#editModal').modal();
        });

    });
})
