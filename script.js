//your JS code here. If required.
function Hello(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000);
	});
}
Hello().then(data=>{
   document.getElementById("output").textContent=data;
});

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