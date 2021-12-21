function load(name) {
    let xhr = new XMLHttpRequest(),
        okStatus = document.location.protocol === "file:" ? 0 : 200;
    xhr.open('GET', name, false);
    xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8
    xhr.send(null);
    return xhr.status === okStatus ? xhr.responseText : null;
}
 
let text = load("../../res/res/news/01.txt");  
 
console.log(text);  //输出到浏览器控制器中
 
document.write(text);  //打印在网页中