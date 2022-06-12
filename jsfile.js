function change(options) {
    var parent = document.getElementsByClassName("md-form")[0];
    if (document.getElementById("mySelect") != undefined) document.getElementById("mySelect").remove();
    var selectList = document.createElement("select");
    let selected = [...options].filter(o => o.selected).map(o => {

        selectList.id = "Food";
        selectList.multiple = "multiple";
        parent.appendChild(selectList);
        var option = document.createElement("option");
        option.value = o.value;
        option.text = o.text;
        selectList.appendChild(option);

    });

}
