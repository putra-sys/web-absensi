const API_URL = "https://script.google.com/macros/s/AKfycbyDsqK9DcfegcXIRa4yV7WbDw04Ahi1_hLu2YUNEtd9wF6p7q_E7gnUBQCoD0i6OoI/exec";

function absen(){

let data = {

nama:document.getElementById("nama").value,

tanggal:new Date().toLocaleDateString(),

jam:new Date().toLocaleTimeString()

};

fetch(https://script.google.com/macros/s/AKfycbyDsqK9DcfegcXIRa4yV7WbDw04Ahi1_hLu2YUNEtd9wF6p7q_E7gnUBQCoD0i6OoI/exec,{

method:"POST",

body:JSON.stringify(data)

})

.then(res=>{

document.getElementById("status").innerHTML="Absensi berhasil";

});

}
