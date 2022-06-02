$(document).ready(function () {
    GetEmployee();
    GetPayment()
});


//Data Table
function GetEmployee() {

    

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: "Services/EMPservices.asmx/PayData",

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

            var thPosition = document.createElement("th");
            thPosition.appendChild(document.createTextNode("Position"));

            var thPay = document.createElement("th");
            thPay.appendChild(document.createTextNode("Pay"));


            tableHRow.appendChild(thName);
            tableHRow.appendChild(thLogin);
            tableHRow.appendChild(thPhone);
            tableHRow.appendChild(thE_Mail);
            tableHRow.appendChild(thGender);
            tableHRow.appendChild(thPosition);
            tableHRow.appendChild(thPay);

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

                var tdPosition = document.createElement("td");
                tdPosition.appendChild(document.createTextNode(value.Position));

                var buttonPay = document.createElement("button");
                buttonPay.type = "button";
                buttonPay.className = "button";
                buttonPay.setAttribute("onclick", "fillPayData('" + value.Id + "')");
                buttonPay.appendChild(document.createTextNode("Pay"));

                var tdPay = document.createElement("td");
                tdPay.appendChild(buttonPay);


                tableDRow.appendChild(tdName);
                tableDRow.appendChild(tdLogin);
                tableDRow.appendChild(tdPhone);
                tableDRow.appendChild(tdE_Mail);
                tableDRow.appendChild(tdGender);
                tableDRow.appendChild(tdPosition);
                tableDRow.appendChild(tdPay);

                table.appendChild(tableDRow);


            });
            _("divPayShow").innerHTML = "";
            _("divPayShow").appendChild(table);

        }


    });
};


// Form Fill Pay
function fillPayData(Id) {
    debugger;
    var member = JSON.stringify({ member: { Id: Id } });

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: "Services/EMPservices.asmx/GetByid",
        data: member,
        success: function (data) {

            fillControl(_("divEmpSalary"), data.d);

            GetEmployee();
        }
    });
}

// Pay Employee
function btnPay_Click() {
    var member = fillObject(_("divEmpSalary"));

    member.Month = $("#Month").val();

    member = JSON.stringify({ member: member });



    debugger;

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: "services/EMPservices.asmx/PayUser",
        data: member,
        success: function (data) {
            alert("Payment Successfull 💵");
            GetPayment()
            
        }
    });

}


//Payments Table
function GetPayment() {



    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: "Services/EMPservices.asmx/GetPayment",

        success: function (data) {


            var table = document.createElement("table");
            table.border = "1";

            var tableHRow = document.createElement("tr");

            var thNo = document.createElement("th");
            thNo.appendChild(document.createTextNode("No"));

            var thid = document.createElement("th");
            thid.appendChild(document.createTextNode("Id"));

            var thName = document.createElement("th");
            thName.appendChild(document.createTextNode("Name"));

            var thMonth = document.createElement("th");
            thMonth.appendChild(document.createTextNode("Month"));

            var thSalary = document.createElement("th");
            thSalary.appendChild(document.createTextNode("Salary"));

            var thDel = document.createElement("th");
            thDel.appendChild(document.createTextNode("Clear Data"));


            tableHRow.appendChild(thid);
            tableHRow.appendChild(thName);
            tableHRow.appendChild(thMonth);
            tableHRow.appendChild(thSalary);
            tableHRow.appendChild(thDel);

            table.appendChild(tableHRow);

            $.each(data.d, function (key, value) {
                var tableDRow = document.createElement("tr");

                var tdNo = document.createElement("td");
                tdNo.appendChild(document.createTextNode(value.No));

                var tdid = document.createElement("td");
                tdid.appendChild(document.createTextNode(value.Id));

                var tdNo = document.createElement("td");
                tdNo.appendChild(document.createTextNode(value.No));

                var tdName = document.createElement("td");
                tdName.appendChild(document.createTextNode(value.Name));

                var tdMonth = document.createElement("td");
                tdMonth.appendChild(document.createTextNode(value.Month));

                var tdSalary = document.createElement("td");
                tdSalary.appendChild(document.createTextNode(value.Salary));

                var buttonClr = document.createElement("button");
                buttonClr.type = "button";
                buttonClr.className = "button";
                buttonClr.setAttribute("onclick", "ClearPayment('" + value.No + "')");
                buttonClr.appendChild(document.createTextNode("Clear Record"));

                var tdClr = document.createElement("td");
                tdClr.appendChild(buttonClr);


                tableDRow.appendChild(tdid);
                tableDRow.appendChild(tdName);
                tableDRow.appendChild(tdMonth);
                tableDRow.appendChild(tdSalary);
                tableDRow.appendChild(tdClr);

                table.appendChild(tableDRow);


            });
            _("DivPayRec").innerHTML = "";
            _("DivPayRec").appendChild(table);

        }


    });
};

//Delete Salary Data
function ClearPayment(No) {

    var payment = JSON.stringify({ payment: { No: No } });

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: "Services/EMPservices.asmx/ClrSalary",
        data: payment,
        success: function (data) {

            alert("Salary Data Cleard ❌");

            GetEmployee();
            GetPayment();

        }
    });
}