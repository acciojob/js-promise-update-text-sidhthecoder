//your JS code here. If required.
let output=document.getElementById("output");

function promise(){
	return new promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello,world");
		});
	});
}


output.innerHTML=promise().then((data)=>console.log("data",data));;
/*
function giveFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("giving food...");
      reject("no bread ");
    }, 1000);
  });
}
myPromiseFnc().then((data) => console.log("data", data));
*/