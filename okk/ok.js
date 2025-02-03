function check(){
    let s = prompt("请输入待查文字","");
    let sc = prompt("请输入待确定文字","");
    // let s = "sssicscccccsc";
    let ans = s.search(/* /sc/i */sc);
    document.getElementById("write").innerHTML=ans;
}
function displace(){
    let s = document.getElementById("replace-ans").innerHTML;
    let text = s.replace("我是sbo","嘻嘻其实我是hhuo");
    document.getElementById("replace-ans").innerHTML=text;
}
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}


