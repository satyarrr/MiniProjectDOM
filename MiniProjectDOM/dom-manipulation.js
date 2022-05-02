document.getElementById("submit-1").onclick = () => {
    alert("Submitted");
}


let h5 = document.getElementsByTagName("h3")[1];

h5.onclick = () => {
    h5.innerHTML = (h5.innerHTML == "about us") ? "tentang" : "about us";
}

const b = document.createElement("button",);
const p = document.createElement("P");
const footer = document.getElementById("myFooter");
p.innerHTML = " Report about bug this website";
b.innerHTML = "Report";
b.onclick=()=>{ alert("please send report at email MlRoles@gmail.com , Thanks for support us ❤️ ")};
footer.appendChild(p)
footer.appendChild(b)

