$('document').ready(function () {
    $('button-edit').on('click', function (event) {
        event.preventDefault();
        const href = $(this).attr('href');

        $.get(href, function (user) {
            $('#id').attr('value', user.id);
            $('#name').attr('value', user.name);
            $('#surname').attr('value', user.surname);
            $('#age').attr('value', user.age);
            $('#email').attr('value', user.email);
            $('#password').attr('value', user.password);


        });
        $('#editModal').showModal();
    });
})


