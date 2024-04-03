function getMenu() {
    // set variables
    var url = window.location.pathname;
    var nav = document.getElementById('nav');

    // create menu tabs from menu array
    for (x = 0; x < aryMenu.length; x++) {

        // create new list item
        var li = document.createElement('li');

        // get page 
        var pageName = aryMenu[x][0];

        // set active status of tab
        if (url.indexOf(pageName) > 0) {
            li.setAttribute('class', 'active')
        } else {
            li.setAttribute('class', 'inactive')
        }

        // create anchor tag
        let a = document.createElement('a');
        a.href = aryMenu[x][0];
        a.innerText = aryMenu[x][1];

        // append anchor tag to li
        li.appendChild(a);

        //append li to ul
        nav.appendChild(li);
    }
}

function getSemester(){
    const semesterList = document.getElementById('semesterList');
    let semesterListOptions = '';
    semesterListOptions += '<option value = "0"> Select a Semester </option>';
    arySemesters.map((op,i) => {
        semesterListOptions += `<option value = "${op[0]}">${op[1]}</option>`;
    })
    semesterList.innerHTML = semesterListOptions 
}

function getClass(obj) {
    const classList = document.getElementById('classList');
    var semesterID = obj.options[obj.selectedIndex].value;
    const aryClass = eval(`ary${semesterID}`);
    let classListOptions = '';
    aryClass.map((op,i) => {
    console.log(op)
    classListOptions += `<option value="${op[0]}">${op[1]}</option>`;
    })
    classList.innerHTML = classListOptions;
    }