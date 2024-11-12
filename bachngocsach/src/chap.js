load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    let response = fetch(url);
    if (response.ok)
	let fix = response.html().select("#noi-dung").html();
	let fix2 = newgpt(fix);
        //return Response.success(response.html().select("#noi-dung").html());
	return Response.success(fix2);
    return null;
}

function newgpt(text){
if(text){

let aa = text.replace(/\.\n/g, 'zzzzz');
let bb = aa.replace(/<br>/g, '\n');
let cc = bb.replace(/zzzzz/g, '.<br>')
return cc;
}
return "lỗi gì đó";

}