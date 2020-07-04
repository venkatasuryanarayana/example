// function loadjson(file,callback) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState===4 && xhr.status == "200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// 	xhr.send(null);
// 	// body...
// }

// loadjson("data.json",function(text){
// 	var data = JSON.parse(text); // serialised data
// 	// var jsonstring = JSON.stringify(data); // deserialised data
// 	console.log(data);
// 	// console.log(jsonstring);
// 	basics(data.details);
// 	careerinfo(data.careerobjective);
// })

function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json())
			}else{
				reject(new Error('error'))
			}
		})
	})
}

var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
    careerinfo(data.careerobjective);
    education(data.educationalqualification);
    skills(data.techinicalskills);
    achievements(data.achievements);


})
var child1 = document.querySelector(".child1");
function basics(det) {

	var image = document.createElement("img");
	image.src="download.jpg";
	child1.appendChild(image);
	
  var name1 = document.createElement("h4");
  name1.textContent=det.name;
  child1.appendChild(name1);

  var email = document.createElement("a");
  email.href="mailto:suryanarla54121@gmail.com";
  email.textContent=det.email;
  child1.appendChild(email);
	
  child1.appendChild(document.createElement("hr"));

  var number = document.createElement("p");
  number.textContent=det.number;
  child1.appendChild(number);

  var address = document.createElement("h3");
  address.textContent="Address";
  child1.appendChild(address);

  child1.appendChild(document.createElement("hr"));


  var address1 = document.createElement("p");
  address1.textContent=det.address;
  child1.appendChild(address1);

}

var child2 = document.querySelector(".child2");
function careerinfo(info1){
	var heading = document.createElement("h2");
	heading.textContent="career objective";
	child2.appendChild(heading);

	var hr = document.createElement("hr");
	child2.appendChild(hr);

	var heading2 = document.createElement("p");
	heading2.textContent=info1.info;
	child2.appendChild(heading2);
}

function education(edu){
	var hd = document.createElement("h2");
	hd.textContent="Educational qualification";
	child2.appendChild(hd);

	var hr = document.createElement("hr");
	child2.appendChild(hr);

	var ts = document.createElement("div");
	ts.classList.add("table1");
	child2.appendChild(ts);

	var table1 = document.createElement("table");
	table1.border = "1";
	child2.appendChild(table1);

	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>";

	}
	table1.innerHTML=tabledata;
	
}

function skills(skillinfo) {
	var hd = document.createElement("h3");
	hd.textContent = "Techinical skills";
	child2.appendChild(hd);

	var hr = document.createElement("hr");
	child2.appendChild(hr);

	for(i=0;i<skillinfo.length;i++){
		var title = document.createElement("h4");
		title.textContent=skillinfo[i].title;
		child2.appendChild(title);

		var eduul = document.createElement("ul");
		var eduli = document.createElement("li");
		eduli.textContent=skillinfo[i].info;
		eduul.appendChild(eduli);
		child2.appendChild(eduul);

	}
}

function achievements(act) {
	var hd = document.createElement("h2");
	hd.textContent="achievements";
	child2.appendChild(hd);

	var hr = document.createElement("hr");
	child2.appendChild(hr);

	for(i=0;i<act.length;i++){
	var title = document.createElement("h4");
	title.textContent=act[i].title;
	child2.appendChild(title);

	var eduul = document.createElement("ul");
	var eduli = document.createElement("li");
	eduli.textContent=act[i].info;
	eduul.appendChild(eduli);
	child2.appendChild(eduul);
}}