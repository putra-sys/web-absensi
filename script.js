const API_URL="https://script.google.com/macros/s/AKfycbwtc0exPXKiDr73hpEEX4RRcfYc0raPsNiyW_EBs_2LEjZXYvJC-LywKYlkfRKiHFPC/exec"

let video=document.getElementById("video")

navigator.mediaDevices.getUserMedia({video:true})
.then(stream=>{
video.srcObject=stream
})

function ambilFoto(){

let canvas=document.createElement("canvas")

canvas.width=video.videoWidth
canvas.height=video.videoHeight

let ctx=canvas.getContext("2d")

ctx.drawImage(video,0,0)

window.foto=canvas.toDataURL()

}

function absen(){

let nama=document.getElementById("nama").value
let jam=new Date().toLocaleString()

navigator.geolocation.getCurrentPosition(function(pos){

let lokasi=pos.coords.latitude+","+pos.coords.longitude

fetch(API_URL,{

method:"POST",

body:JSON.stringify({

nama:nama,
jam:jam,
lokasi:lokasi,
foto:window.foto

})

})

document.getElementById("status").innerHTML="Absensi berhasil"

})

}
