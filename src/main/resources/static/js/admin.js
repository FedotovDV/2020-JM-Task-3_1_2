$('document').ready(function () {
//     $('button-edit').on('click', function (event) {
//         event.preventDefault();
    // alert(${user.id});
    // const href = $(this).attr('href');
    //
    // $.get(href, function (user) {
    // var userId = $(event.relatedTarget).data('user-id');
    // $(this).find("#userId").html();
    //
    //     $('#id').attr('value',"Id=" + cutomerId);
    //     $('#name').attr('value', user.name);
    //     $('#surname').attr('value', user.surname);
    //     $('#age').attr('value', user.age);
    //     $('#email').attr('value', user.email);
    //     $('#password').attr('value', user.password);
    //
    //
    // });
    // $('#editModal').showModal();
//     });


    $("#editModal").on('show.bs.modal', function (event) {
        let userId = $(event.relatedTarget).data('user-id');
        const href = "/admin/update?id=" + userId;
        $.get(href, function (data) {
            $('#id').val(data.id);
            $('#name').val(data.name);
            $('#surname').val(data.surname);
            $('#age').val(data.age);
            $('#email').val(data.email);
            $('#password').val(data.password);
            $('#role-select').val(data.authorities);

        });
    });

})