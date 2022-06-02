$(document).ready(function () {
    Data_GetAll();
});

//Data Table
function Data_GetAll() {

    debugger;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: "Services/EMPservices.asmx/Data_GetAll",

        success: function (data) {


            var table = document.createElement("table");
            table.border = "1";

            var tableHRow = document.createElement("tr");

            var thid = document.createElement("th");
            thid.appendChild(document.createTextNode("Id"));

            var thName = document.createElement("th");
            thName.appendChild(document.createTextNode("Name"));

            var thLogin = document.createElement("th");
            thLogin.appendChild(document.createTextNode("Login"));

            var thPhone = document.createElement("th");
            thPhone.appendChild(document.createTextNode("Phone Number"));

            var thE_Mail = document.createElement("th");
            thE_Mail.appendChild(document.createTextNode("E-Mail"));

            var thGender = document.createElement("th");
            thGender.appendChild(document.createTextNode("Gender"));

            var thFramework = document.createElement("th");
            thFramework.appendChild(document.createTextNode("Framework"));

            var thPosition = document.createElement("th");
            thPosition.appendChild(document.createTextNode("Position"));

            var thDes = document.createElement("th");
            thDes.appendChild(document.createTextNode("Description"));

            var thEditDel = document.createElement("th");
            thEditDel.appendChild(document.createTextNode("Edit & Delete Data"));
            thEditDel.colSpan = "2";


            tableHRow.appendChild(thName);
            tableHRow.appendChild(thLogin);
            tableHRow.appendChild(thPhone);
            tableHRow.appendChild(thE_Mail);
            tableHRow.appendChild(thGender);
            tableHRow.appendChild(thFramework);
            tableHRow.appendChild(thPosition);
            tableHRow.appendChild(thDes);
            tableHRow.appendChild(thEditDel);

            table.appendChild(tableHRow);

            $.each(data.d, function (key, value) {
                var tableDRow = document.createElement("tr");

                var tdid = document.createElement("td");
                tdid.appendChild(document.createTextNode(value.Id));

                var tdName = document.createElement("td");
                tdName.appendChild(document.createTextNode(value.Name));

                var tdLogin = document.createElement("td");
                tdLogin.appendChild(document.createTextNode(value.Login));

                var tdPhone = document.createElement("td");
                tdPhone.appendChild(document.createTextNode(value.Mobile));

                var tdE_Mail = document.createElement("td");
                tdE_Mail.appendChild(document.createTextNode(value.Email));

                var tdGender = document.createElement("td");
                tdGender.appendChild(document.createTextNode(value.Gender));

                var tdFramework = document.createElement("td");
                tdFramework.appendChild(document.createTextNode(value.Framework));

                var tdPosition = document.createElement("td");
                tdPosition.appendChild(document.createTextNode(value.Position));

                var tdDes = document.createElement("td");
                tdDes.appendChild(document.createTextNode(value.Description));

                var buttonEdit = document.createElement("button");
                buttonEdit.type = "button";
                buttonEdit.setAttribute("onclick", "bindMember('" + value.Id + "')");
                buttonEdit.appendChild(document.createTextNode("Edit"));

                var tdEdit = document.createElement("td");
                tdEdit.appendChild(buttonEdit);

                var buttonDelete = document.createElement("button");
                buttonDelete.type = "button";
                buttonDelete.setAttribute("onclick", "DeleteData('" + value.Id + "')");
                buttonDelete.appendChild(document.createTextNode("Delete"));

                var tdDelete = document.createElement("td");
                tdDelete.appendChild(buttonDelete);


                tableDRow.appendChild(tdName);
                tableDRow.appendChild(tdLogin);
                tableDRow.appendChild(tdPhone);
                tableDRow.appendChild(tdE_Mail);
                tableDRow.appendChild(tdGender);
                tableDRow.appendChild(tdFramework);
                tableDRow.appendChild(tdPosition);
                tableDRow.appendChild(tdDes);
                tableDRow.appendChild(tdEdit);
                tableDRow.appendChild(tdDelete);

                table.appendChild(tableDRow);


            });
            _("divshow").innerHTML = "";
            _("divshow").appendChild(table);

        }


    });
}

// Form Fill using data
function bindMember(Id) {
    debugger;
    var member = JSON.stringify({ member: { Id: Id } });

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: "Services/EMPservices.asmx/GetByid",
        data: member,
        success: function (data) {

            fillControl(_("divEmployee"), data.d);

            // For Position
            $("#Position").val(data.d.Position);

            // For Gender
            if (data.d.Gender == "Male") {
                $("#Male").prop("checked", true);
                $("#Female").prop("checked", false);
            }
            else {
                $("#Male").prop("checked", false);
                $("#Female").prop("checked", true);
            }

            // For Framework
            if (data.d.Framework == "React") {
                $("#React").prop("checked", true);
                $("#Vue").prop("checked", false);
                $("#Angular").prop("checked", false);
                $("#Riot").prop("checked", false);
                $("#Polymer").prop("checked", false);
                $("#Ember").prop("checked", false);
                $("#Meteor").prop("checked", false);
                $("#ehsUICompliance").prop("checked", false);
            }
            else if (data.d.Framework == "Vue") {
                $("#React").prop("checked", false);
                $("#Vue").prop("checked", true);
                $("#Angular").prop("checked", false);
                $("#Riot").prop("checked", false);
                $("#Polymer").prop("checked", false);
                $("#Ember").prop("checked", false);
                $("#Meteor").prop("checked", false);
                $("#ehsUICompliance").prop("checked", false);
            }
            else if (data.d.Framework == "Angular") {
                $("#React").prop("checked", false);
                $("#Vue").prop("checked", false);
                $("#Angular").prop("checked", true);
                $("#Riot").prop("checked", false);
                $("#Polymer").prop("checked", false);
                $("#Ember").prop("checked", false);
                $("#Meteor").prop("checked", false);
                $("#ehsUICompliance").prop("checked", false);
            }
            else if (data.d.Framework == "Riot") {
                $("#React").prop("checked", false);
                $("#Vue").prop("checked", false);
                $("#Angular").prop("checked", false);
                $("#Riot").prop("checked", true);
                $("#Polymer").prop("checked", false);
                $("#Ember").prop("checked", false);
                $("#Meteor").prop("checked", false);
                $("#ehsUICompliance").prop("checked", false);
            }
            else if (data.d.Framework == "Polymer") {
                $("#React").prop("checked", false);
                $("#Vue").prop("checked", false);
                $("#Angular").prop("checked", false);
                $("#Riot").prop("checked", false);
                $("#Polymer").prop("checked", true);
                $("#Ember").prop("checked", false);
                $("#Meteor").prop("checked", false);
                $("#ehsUICompliance").prop("checked", false);
            }
            else if (data.d.Framework == "Ember") {
                $("#React").prop("checked", false);
                $("#Vue").prop("checked", false);
                $("#Angular").prop("checked", false);
                $("#Riot").prop("checked", false);
                $("#Polymer").prop("checked", false);
                $("#Ember").prop("checked", true);
                $("#Meteor").prop("checked", false);
                $("#ehsUICompliance").prop("checked", false);
            }
            else if (data.d.Framework == "Meteor") {
                $("#React").prop("checked", false);
                $("#Vue").prop("checked", false);
                $("#Angular").prop("checked", false);
                $("#Riot").prop("checked", false);
                $("#Polymer").prop("checked", false);
                $("#Ember").prop("checked", false);
                $("#Meteor").prop("checked", true);
                $("#ehsUICompliance").prop("checked", false);
            }

            else {
                $("#React").prop("checked", false);
                $("#Vue").prop("checked", false);
                $("#Angular").prop("checked", false);
                $("#Riot").prop("checked", false);
                $("#Polymer").prop("checked", false);
                $("#Ember").prop("checked", false);
                $("#Meteor").prop("checked", false);
                $("#ehsUICompliance").prop("checked", true);
            }

            Data_GetAll();
        }
    });
}

// Update Data
function btnUpdate_Click() {
    debugger;
    var member = fillObject(_("divEmployee"));
    member.Gender = $("input[type=radio][name=Gender]:checked").val();
    member.Framework = $("input[type=radio][name=Framework]:checked").val();
    member.Position = $("#Position").val();

    member = JSON.stringify({ member: member });



    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: "Services/EMPservices.asmx/UpdateData",
        data: member,
        success: function (data) {
            alert("Data Updated");
            Data_GetAll();
        }
    });
}

//Delete Data
function DeleteData(Id) {

    var member = JSON.stringify({ member: { Id: Id } });

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: "Services/EMPservices.asmx/DeleteData",
        data: member,
        success: function (data) {

            alert("User Deleted ❌");

            Data_GetAll();

        }
    });
}