function msgSubmit_Click() {
    var message = fillObject(_("divMessage"));

    message = JSON.stringify({ message: message });

    debugger;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: "services/EMPservices.asmx/SndMsg",
        data: message,
        success: function (data) {
            alert("Send Message Successfully 🍻");
        }
    });
}