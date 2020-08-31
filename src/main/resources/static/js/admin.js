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
//     $("#addUserButton").on('click', function () {
//
//
//         // let roles = new Set;
//         // $('#add-role-select :selected').each(function (i, selected) {
//         //     roles.add($(selected).val());
//         // });
//         let roles = [];
//         $('#add-role-select :selected').each(function (i, selected) {
//             roles[i]=$(selected).val();
//         });
//
//         let user = {
//             name: $("#addName").val(),
//             surname: $("#addSurname").val(),
//             email: $('#addEmail').val(),
//             age: $('#addAge').val(),
//             password: $("#addPassword").val(),
//         }
//         user = $.param(user);
//
//
//         $.ajax({
//             type: 'POST',
//             url: '/admin/add',
//             data: {user:user, roles:roles},
//             dataType: 'html',
//             beforeSend: console.log(roles),
//             complete: [
//                 function () {
//                     console.log("OK");
//
//                 }
//             ]
//         }).done(function (msg) {
//             // parse response from msg
//         });
//     });


    $("#v-pills-users-tab").on('click', function () {
        const href = "/admin/role";
        $.get(href, function (data) {
            console.log(data);

        });
    });

    $("#v-pills-newuser-tab").on('click', function () {
        const href = "/admin/all";
        $.get(href, function (data) {
            console.log(data);

        });
    });


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


    $("#deleteModal").on('show.bs.modal', function (event) {
        let userId = $(event.relatedTarget).data('user-id');
        const href = "/admin/delete?id=" + userId;
        $.get(href, function (data) {
            $('#idDelete').val(data.id);
            $('#nameDelete').val(data.name);
            $('#surnameDelete').val(data.surname);
            $('#ageDelete').val(data.age);
            $('#emailDelete').val(data.email);
            $('#passwordDelete').val(data.password);
            $('#role-selectDelete').val(data.authorities);

        });
    });


})