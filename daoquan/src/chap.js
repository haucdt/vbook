function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let htm = doc.select("div.box-chap").html();
        let fix = newfix(htm);
        return Response.success(fix);
    }
    return null;
}
function newfix(text)
{
if(text){
let aa = text.replace(/\.\n/g, 'aaaaa');
let bb = aa.replace(/<br>/g, ' ');
    let cc = bb.replace(/aaaaa/g,'.<br>');
    return cc;
}
   return "lỗi gì đó"; 
}
