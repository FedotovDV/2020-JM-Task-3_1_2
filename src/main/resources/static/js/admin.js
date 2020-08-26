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
        var userId = $(event.relatedTarget).data('user-id');
        const href = "/admin/update?id=" + userId;
        let roles = [];
        $.get(href, function (user) {
            $('#id').val(user.id);
            $('#name').attr('value', user.name);
            $('#surname').attr('value', user.surname);
            $('#age').attr('value', user.age);
            $('#email').attr('value', user.email);
            $('#password').attr('value', user.password);
            $('#role-select').val(user.authorities);

        });

        // $('#id').attr('value',"Id="+ userId);<option th:each="role : ${user.getRoles()}"
        //                                                 th:value="${role.name()}"
        //                                                 th:text="${role.name()}"></option>
    });

})