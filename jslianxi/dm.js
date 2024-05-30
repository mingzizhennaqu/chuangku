// 设置cookie
function setcookie(cname,cvalue){
    let t = new Date();
    t.setDate(t.getDate()+1);
    let sj = "expire=" + t;
    document.cookie = cname+"="+cvalue+";"+sj;
}
function getcookie(cname){
    let name = cname+"="
    let p = document.cookie.split(";")
    for(var i=1;i<p.length;i++){
        let p1 = p[i].trim()
        if(p1.indexOf(cname)==0){return p1.substring(name.length,p1.length)}//传入参数
    }
    return ""
}
function checkcookie(){
    // if(document.cookie!=""){
    //     getcookie()
    let o = getcookie("user")
    if(o!=""){
        alert("欢迎"+o+"访问本网站")
    }
    else{
        let s = prompt("请输入您的名字")
        if(s!=""&&s!=null){
            setcookie("user",s)
        }
    }
}
// setcook("sy",100);//就是这有问题"sy"
// let p = document.cookie;
// this.alert(p);
// 传参数的时候字符串要带引号
//substring是正常计数不算前算后
let a = getcookie("sy")
console.log(a)