const API_URL = "https://script.google.com/macros/s/AKfycbyd2H5EOp6_482xWjuMhyjMItiL4pmoPpS_rll2eoRAk_b8uziYYZ9VyPU0dQCd0Pcb/exec";

fetch(API_URL, {
  method: "POST",
  body: JSON.stringify({
    nama: nama,
    jam: new Date().toLocaleTimeString(),
    gps: lokasi,
    foto: foto
  })
})
.then(res => res.text())
.then(data => alert("Absensi berhasil"));
