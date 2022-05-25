/**
 * Created by Shalindra Code Name EHS on 11/4/2015.
 */
var Tag = "tag";

function _(el) {

    var value = document.getElementById(el);

    if (value == null) {
        value = document.getElementsByName(el);
    }
    return value;
}

Element.prototype.text = function (value) {
    //var element = document.getElementById(el);

    //if (element == null) {
    //    element = document.getElementsByName(el);
    //}
    this.innerHTML = "";
    this.appendChild(document.createTextNode(value));
}

Element.prototype.clear = function () {
    this.innerHTML = ""
};

function setSession(name, value) {
    localStorage.setItem(name, value);
}

function getSession(name) {
    return localStorage.getItem(name);
}

function fillObject(document) {
    try {

        var obj = {};
        var x = document.getElementsByTagName("input");

        for (var index = 0; index < x.length; index++) {
            var textBox = x[index];

            try {
                if (textBox.type == "text" || textBox.type == "password" || textBox.type == "email" || textBox.type == "number" || textBox.type == "hidden" || textBox.type == "checkbox") {
                    if (textBox.getAttribute("dataSourceItem") != null) {
                        var datasourceItem = textBox.getAttribute("dataSourceItem");

                        if (datasourceItem.includes(".")) {
                            objSub = {};
                            array = datasourceItem.split(".");

                            objSub[array[1]] = textBox.value;

                            obj[array[0]] = objSub;

                        }
                        else {
                            obj[datasourceItem] = textBox.value;

                            if (textBox.type == "hidden") {
                                if (textBox.value == '') {
                                    obj[datasourceItem] = 0;
                                }
                                else {
                                    obj[datasourceItem] = textBox.value;
                                }
                            }
                            else if (textBox.type == "checkbox") {
                                obj[datasourceItem] = textBox.checked;
                            }
                            else if (textBox.type == "radio") {
                                obj[datasourceItem] = textBox.checked;
                            }
                        }
                    }
                }
            }
            catch (ex) {

            }
        }

        var x = document.getElementsByTagName("textarea");

        for (var index = 0; index < x.length; index++) {
            var textBox = x[index];

            try {
                if (textBox.getAttribute("dataSourceItem") != null) {
                    obj[textBox.getAttribute("dataSourceItem")] = textBox.value;
                }
            }
            catch (ex) {

            }
        }
        return obj;
    }
    catch (err) {
        alert(err.message);
    }
}

function fillControl(document, obj) {
    try {
        var x = document.getElementsByTagName("input");

        for (var index = 0; index < x.length; index++) {
            var textBox = x[index];

            if (textBox.type == "text" || textBox.type == "password" || textBox.type == "email" || textBox.type == "number" || textBox.type == "hidden" || textBox.type == "checkbox") {
                if (textBox.getAttribute("dataSourceItem") != null) {
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            if (textBox.getAttribute("dataSourceItem").toLowerCase() == key.toLowerCase()) {
                                if (textBox.type == "checkbox") {
                                    textBox.checked = obj[key];
                                }
                                else {
                                    textBox.value = obj[key];
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }

        var x = document.getElementsByTagName("textarea");

        for (var index = 0; index < x.length; index++) {
            var textBox = x[index];

            if (textBox.getAttribute("dataSourceItem") != null) {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (textBox.getAttribute("dataSourceItem") == key) {
                            textBox.value = obj[key];

                            break;
                        }
                    }
                }
            }

        }
    }
    catch (err) {
        alert(err.message);
    }
}

function clearAllTextBoxes(document) {
    try {
        var x = document.getElementsByTagName("input");

        for (var index = 0; index < x.length; index++) {
            if (x[index].type == "text" || x[index].type == "password" || x[index].type == "email" || x[index].type == "number")
                x[index].value = "";
            if (x[index].type == "hidden") {
                //////
                if (x[index].id === 'Id') {
                    x[index].value = "";
                }
            }
        }

        var x = document.getElementsByTagName("textarea");

        for (var index = 0; index < x.length; index++) {
            x[index].value = "";
        }
    }
    catch (err) {
        alert(err.message);
    }
}

function showError(message) {
    swal({ title: "Error!", text: message, type: "error", confirmButtonText: "Ok", timer: 5000 });
}

function showSuccess(message) {
    swal({ title: message, text: '', type: "success", confirmButtonText: "Ok", timer: 55000 });
}

function showSuccessShortTime(message) {
    swal({ title: message, text: '', type: "success", confirmButtonText: "Ok", timer: 3000 });
}


function showError(header, message) {
    swal({ title: header, text: message, type: "error", confirmButtonText: "Ok", timer: 5000 });
}

function isNumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault)
            theEvent.preventDefault();
    }
}

function validateCommonOld() {
    try {
        var x = document.getElementsByTagName("input");

        for (var index = 0; index < x.length; index++) {
            var textBox = x[index];

            if (textBox.type == "text" || textBox.type == "textarea") {
                if (!textBox.disabled) {
                    if (textBox.value == "") {
                        if (textBox.getAttribute("errorMessage") != null && textBox.getAttribute("errorMessage") != "") {
                            $("validation" + textBox.id).html(textBox.getAttribute("errorMessage"));
                            alert(textBox.getAttribute("errorMessage"));

                            $("#validation" + textBox.id).addClass("show");


                            return false;
                        }
                    }
                }
            }
        }
    }
    catch (err) {
        alert(err.message);
    }


    return true;
}

function validateCommon(formName) {
    var f = $("#" + formName).find('.form-group'),

          ferror = false,
          emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function () { // run all inputs

        var i = $(this); // current input
        var rule = i.attr('data-rule');

        if (rule !== undefined) {
            var ierror = false; // error flag for current input
            var pos = rule.indexOf(':', 0);
            if (pos >= 0) {
                var exp = rule.substr(pos + 1, rule.length);
                rule = rule.substr(0, pos);
            } else {
                rule = rule.substr(pos + 1, rule.length);
            }

            switch (rule) {
                case 'required':
                    if (i.val() === '') {
                        ferror = ierror = true;
                    }
                    break;

                case 'minlen':
                    if (i.val().length < parseInt(exp)) {
                        ferror = ierror = true;
                    }
                    break;

                case 'email':
                    if (!emailExp.test(i.val())) {
                        ferror = ierror = true;
                    }
                    break;

                case 'checked':
                    if (!i.is(':checked')) {
                        ferror = ierror = true;
                    }
                    break;

                case 'regexp':
                    exp = new RegExp(exp);
                    if (!exp.test(i.val())) {
                        ferror = ierror = true;
                    }
                    break;
            }
            i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
        }
    });
    f.children('textarea').each(function () { // run all inputs

        var i = $(this); // current input
        var rule = i.attr('data-rule');

        if (rule !== undefined) {
            var ierror = false; // error flag for current input
            var pos = rule.indexOf(':', 0);
            if (pos >= 0) {
                var exp = rule.substr(pos + 1, rule.length);
                rule = rule.substr(0, pos);
            } else {
                rule = rule.substr(pos + 1, rule.length);
            }

            switch (rule) {
                case 'required':
                    if (i.val() === '') {
                        ferror = ierror = true;
                    }
                    break;

                case 'minlen':
                    if (i.val().length < parseInt(exp)) {
                        ferror = ierror = true;
                    }
                    break;
            }
            i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
        }
    });
    if (ferror)
        return false;
    else
        return true;

}
function randomNumberGenerator(start, end) {

    var array = new Array();

    var count = start;

    while (count <= end) {
        array[count] = count;
        count++;
    }

    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
