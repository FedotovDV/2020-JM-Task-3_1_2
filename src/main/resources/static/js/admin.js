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
    $("#addUserButton").on('click', function () {


            let roles = [];
            $('#add-role-select :selected').each(function (i, selected) {
                roles[i] = $(selected).val();
            });
            let data = {
                name: $("#addName").val(),
                login: $("#addSurname").val(),
                email: $('#addEmail').val(),
                age: $('#addAge').val(),
                password: $("#addPassword").val(),
                roles: roles
            }

        $.ajax({
            type: 'POST',
            url: '/admin/add',
            data: data,
            dataType: 'html',
            beforeSend:  console.log(data),
            complete: [
                function () {
                    console.log("OK");

                }
            ]
        }).done(function(msg) {
            // parse response from msg
        });
        });



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

})