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
// CLEAR SEARCH BOX
function clearInputFields(divElement) {
    var ele = document.getElementById(divElement);

    // IT WILL READ ALL THE ELEMENTS. <p>, <div>, <input> ETC.
    for (i = 0; i < ele.childNodes.length; i++) {

        // SINCE THE <input> FIELDS ARE INSIDE A <p> TAG, 
        // I'LL USE THE "firstChild" PROPERTY TO GET THE <input> TAG.
        var child = ele.childNodes[i].firstChild;
        //console.log(child);

        // CHECK IF CHILD NOT NULL.
        // THIS IS IMPORTANT AS IT WILL RETURN A TEXT FOR EVERY "Whitespace".
        // 'Whitespace' IS A TEXT OR NODE BETWEEN <div> AND <p> AND AFTER <p>.
        if (child) {
            switch (child.type) {
                case 'text':
                    child.value = '';
            }
        }
    }
}