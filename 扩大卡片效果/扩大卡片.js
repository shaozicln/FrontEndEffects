function hide(xx,yy) {
    let x = document.getElementById(xx);
    x.style.display = "none";
    let y = document.getElementById(yy);
    y.style.display = "block";
    document.getElementById("head").style.display = "block";
    document.getElementById("space").style.display = "none"; 
    document.getElementById("top").style.display = "none"; 
}
function show(xx,yy) {
    let x = document.getElementById(xx);
    x.style.display = "block";
    let y = document.getElementById(yy);
    y.style.display = "none";
    document.getElementById("head").style.display = "none";
    document.getElementById("space").style.display = "block"; 

}