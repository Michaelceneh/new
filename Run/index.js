
let dropDown = document.getElementById("dropdown")
let pastQ = document.getElementById("pastQ")
let schoolList = document.getElementById("school_list")

function disPlay(){
    if (dropDown.style.display !== "none") {
        dropDown.style.display = "none";
    } else {
        dropDown.style.display = "block";
    }


}

function disPlay_school() {
    if (schoolList.style.display !== "none") {
        schoolList.style.display = "none";
    } else {
        schoolList.style.display = "block";
    }
}