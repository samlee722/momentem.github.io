const title = document.querySelector(".hello h1");
console.dir(title);

function handelWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleMouseEnter(){
    console.log("title was clicked!");
}



title.addEventListener("mouseenter",handleMouseEnter);

window.addEventListener("resize", handelWindowResize);

window.addEventListener("copy", e => {
    alert("Copying is prohibited by our policy.")
    e.preventDefault();
    e.clipboardData.clearData("text");
});

document.oncopy = handleCopyProhibit;

function handleCopyProhibit(){
    alert("Copying is prohibited by our policy.")
    window.addEventListener.preventDefault() ;
    clipboardData.clearData("text");
}