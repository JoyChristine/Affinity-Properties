function house() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("my-list");
    li = document.getElementsByTagName("li");
    for(i = 0; i < li.length;i++){
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContext || a.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            li[i].display = "";
        }else{
            li[i].style.display = "none";
        }

    }
}
