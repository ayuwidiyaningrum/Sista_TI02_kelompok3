let email = document.getElementById("email");
let nama = document.getElementById("nama");
let nim = document.getElementById("nim");
let password = document.getElementById("password");

document.getElementById("signup").addEventListener("click", function(event) {
  event.preventDefault();
  cekform();
});

function cekform() {
  if (email.value == "") {
    error(email, "*Isi Email Anda");
  } else if (!iniEmail(email.value)) {
    error(email, "*Email Tidak Valid");
    return false;
  } else {
    sukses(email);
    email.value = "";
  }

  if (nama.value == "") {
    error(nama, "*Isi Nama Anda");
  } else if (nama.value.length >= 20) {
    error(nama, "*Nama Tidak Boleh Lebih Dari 20 Huruf");
    return false;
  } else {
    sukses(nama);
    nama.value = "";
  }

  if (nim.value == "") {
    error(nim, "*Isi NIM Anda");
  } else if (nim.value.length > 10) {
    error(nim, "Jumlah NIM tidak boleh lebih dari 10 angka");
    return false;
  } else {
    sukses(nim);
    nim.value = "";
  }

    
  if (password.value == "") {
    error(password, "*Isi password anda");
  }else if (password.value.length > 8) {
      error(password, "*Jumlah Password tidak boleh lebih dari 8 karakter");
      return false;
  } else {
    sukses(password);
    password.value= "";
  }

  function error(input, pesan) {
    const inputan = input.parentElement;
    const span = inputan.querySelector("span");
    span.className = "error";
    span.innerText = pesan;
  }

  function sukses(input) {
    const li = input.parentElement;
    const span = li.querySelector("span");
    span.className = "sukses";
  }

  function iniEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
}
