// 设置cookie
function setcook(cname,cvalue){
    let t = new Date();
    t.setDate(t.getDate()+1);
    let sj = "expire=" + t;
    document.cookie = cname+"="+cvalue+";"+sj;
}
setcook(sy,100);//就是这有问题
let p = document.cookie;
this.alert(p);
// 传参数的时候字符串要带引号