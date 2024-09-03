function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let htm = doc.select("div.box-chap").html();
    //   let fix = clearContent(htm); 
 //let fix = formatText(htm);
let fix = newgpt(htm);
        return Response.success(fix);
    }
    return null;
}

function newgptokfull(text){
if(text){
let aa = text.replace(/<br>/g, ' ');
let bb = aa.replace(/\./g, '.<br>');
return bb;
}
return "lỗi gì đó";

}
function newgptok(text){
if(text){
return text.replace(/\.<br>/g, '.\n').replace(/<br>/g, ' ');
return "lỗi gì đó";
}
}
function newgpt(text){
if(text){

let aa = text.replace(/\.\n/g, 'aaaaa');
let bb = aa.replace(/<br>/g, ' ');
let cc = bb.replace(/aaaaa/g, '.<br>')
return cc;
}
return "lỗi gì đó";

}