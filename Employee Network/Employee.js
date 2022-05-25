
function btnSubmit_Click() {
    var member = fillObject(_("divEmployee"));

    member.Gender = $("input[type=radio][name=Gender]:checked").val();
    member.Framework = $("input[type=radio][name=Framework]:checked").val();
    member.Position = $("#Position").val();

    member = JSON.stringify({ member: member });



    debugger;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: "services/EMPservices.asmx/AddUser",
        data: member,
        success: function (data) {
            alert("Data Added Successfully 🎂");
        }
    });

}
