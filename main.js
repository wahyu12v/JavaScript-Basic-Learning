// alert("bacot")

// console.log('ayam')

// prompt('masukan umur anda')

/*

let umur = 29
umur = 33 
console.log('nama kamu adalah ' + nama )
alert('usia kamu adalah ' + nama)

*/

/*
const usia = prompt('berapa usia anda')
alert('usia anda adalah ' + usia)
*/

// let nama = "wahyu"; //tipe data string
// let usia = 29; //tipe data integer
// let tinggi = 175.5; //tipe data double float
// let berat
// let ktp 

// berat = 79;

// if(ktp == null){
//     ktp = 'tidak ada'
// }else{
//     ktp ='udah punya'
// }

// let saldoawal = 50000
// let saldotambahan = 3000
// let saldoakhir = saldoawal + saldotambahan


// const x = 7
// const y = 5
// const z = x / y

// alert('nilai x = ' + x + 'nilai y ' + y + 'x dikali y = ' + z )  

// switch (ktp) {
//   case 1:
//     ktp = "belum punya ktp";
//     break;
//   case 2:
//     ktp = "sudah punya ktp";
//     break;
//   default:
//     ktp = "belum cukup umur";
//     break;
// }

// alert("nama anda adalah " + nama + " dan usia anda " + usia + 
// " tinggi badan " + tinggi + " berat badan saya " + berat + 
// " dan nomor ktp saya " + ktp);

// alert("saldo awal saya adalah Rp." + saldoawal + 
// " dan saldo tambahan saya adalah Rp." + saldotambahan 
// +  " total duit saya adalah Rp." + saldoakhir )

//array

// let nama = ['ardian', 'wahyu', 'saputra']
// nama.push('muhammad', 'rizki')
// nama.shift() //menghapus nilai pertama
// nama.pop() // menghapus nilai terkahir
// alert(nama)

// let nama = []

// nama[0] = 'ardian'
// nama[1] = 'wahyu'
// nama[2] = 'saputra'

// alert(nama)


//looping

//for loop

// const nama = ['muhammad','ardian', 'wahyu', 'saputra']
// console.log(nama.length);

// for (let i = 0; i < nama.length; i++) {
//     console.log(nama[i]);
// }

// while loop

// let i = 0
// while(i < 10){
//     i++
//     console.log('wahyu');
// }


// // membuat objek Date
// var today = new Date();

// // membuat array nama-nama hari
// var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

// // mendapatkan hari ini dalam bentuk angka
// var day = today.getDay();

// // menampilkan nama hari ini
// console.log(days[day]);


// var saldo1 = prompt('masukan saldo anda pertama ')
// var saldo2 = prompt('masukan saldo anda kedua ')

// saldo1 = Number(saldo1)
// saldo2 = Number(saldo2)
// var saldo3 = saldo1 + saldo2
// alert('saldo anda adalah ' + saldo3)

//DOM (dokumentasi Objek Model)
// document.title = 'ardian wahyu'

// // // console.log(document.title)

// // //edit body
// const body = document.body 

// body.append('HELLO WORLD')

// //create element body

// const h1 = document.createElement('h1')
// h1.textContent = "CONTOH H1"

// const nama = document.createElement('p')
// nama.innerHTML = '<marquee> ayam goreng </marquee>'

// const nama2 = document.createElement('p')
// nama2.innerText = 'ayam goreng madu'

// body.append(nama2)
// body.append(nama)
// body.append(h1)

// const btn1 = document.getElementById('btn1')
// const btn2 = document.querySelector('.btn2')

// btn1.style.border = 'none'
// btn1.style.backgroundColor = 'green'
// btn1.style.padding = '40px'
// btn1.style.color = 'white'
// btn1.style.fontSize = '20px'

// const defaultText = 'klik saya'
// btn2.textContent = defaultText

// btn2.style.color = 'red' 
// btn2.style.border = 'none'
// btn2.style.backgroundColor = 'green'
// btn2.style.padding = '40px'
// btn2.style.fontSize = '20px'

// function gantiwarna(){
//     btn1.style.backgroundColor = 'blue'
// }

// function mousemasuk(){
//     btn2.style.backgroundColor = 'blue'
  
// }

// function ubahmouse() {
//     btn2.style.backgroundColor = 'yellow'
//     btn2.textContent = 'heii'
//     const nama2 = document.createElement('p')
//     nama2.textContent = 'Ardian Wahyu Saputra'
//     body.append(nama2)
    
// }

// function keluar (){
//     btn2.style.backgroundColor = 'cyan'
//     const nama2 = document.createElement('p')
//     nama2.textContent = 'Ardian Wahyu Saputra'
//     nama2.style.color = 'blue'
//     body.append(nama2)

// }


// Array posesioning

// const buah = ['jeruk','semangka','pisang','apel']

// const caribuah = buah.includes('jeruk') //bergfungsi mencaritahu apakah nilai ada di dalam array

// const posisi = buah.indexOf('pisang') //mencari posisi pencarian ada di index ke berapa

// if (caribuah){
//     console.log('buah jeruk berapa di posisi ke ' + posisi)
//     console.log(caribuah); 
// }else{
//     console.log('Tidak ditemukan');
// }


// array logic

//  const arraySaya = ['melon','jeruk','nanas','semangka','jeruk']

//  const semangka = arraySaya.includes('semangka')

//  if (semangka){
//     const posisisemangka = arraySaya.indexOf('semangkla')
//     const indexbefore = posisisemangka - 1
//     const indexafter = posisisemangka + 1
//     const before = arraySaya[indexbefore]
//     const after = arraySaya[indexafter]

//     console.log('posisi buah sebelum semangka adalah ' + before);
//     console.log('posisi buah sebelum semangka adalah ' + after);

//     //mencari tahu buah pertama
//     const buahawal = arraySaya.shift()
//     console.log(buahawal);

//     //mencari buah terkahir
//     const buahakhir = arraySaya.pop()
//     console.log(buahakhir);

// }else{
//     console.log('tidak ditemukan');
//  }



// array Key

// const arraySaya = []

// arraySaya['alpukat'] = '1'
// arraySaya['jeruk'] = '2'
// arraySaya['melon'] = '3'

// console.log(arraySaya['aplukat']);



// array copy

// const arraySaya = ['melon','jeruk','nanas','semangka','jeruk']
// // objek array yang pertama akan ikut brubah walau di duplikat
// // const newarraysaya = arraySaya 


// //tidak akan mengubah nilai array pertama
// const newarraysaya = Array.from(arraySaya)

// newarraysaya [0] = 'mangga'

// console.log(arraySaya);
// console.log(newarraysaya);



// // array dengan beragam tipe data

// const arraySaya = ['melon',10,{tomato: true},['eat','food']]

// // panggil sesuai index ke berapa 
// console.log(arraySaya);

//contoh lain
// const arraySaya = [
//     'pisang',
//     10,
//     {
//         tomato: function(){
//             console.log('ini tomat');
//         },
//     },
//     ['eat','food']
// ]

// console.log(arraySaya[0]);
// console.log(arraySaya[1]);
// console.log(arraySaya[2].tomato());
// console.log(arraySaya[3]);



//penggabungan Array

//menggunakan concat

// const arraySaya = [1,2,3,4,5]
// const arraykamu = ['melon','jeruk','nanas','semangka','jeruk']

// const arraygabungan = arraySaya.concat(arraykamu)

// console.log(arraygabungan);

//mappiing data array (uruatan)

// const arraySaya = [1,2,3,4,5]
// const arraykamu = ['melon','jeruk','nanas','semangka','jeruk']

// const arraygabungan = arraySaya.concat(arraykamu)

// for( list of arraygabungan ) console.log(list);

// // menampilkan index

// arraygabungan.map((value, index) => console.log(index, value)) 

//contoh lain

// const data = [
//     {
//         name: 'ardian',
//         stack: 'html',
//         age:'22',
//     },
//     {
//         name: 'wahyu',
//         stack: 'css',
//         age:'25',
//     },
//     {
//         name: 'saputra',
//         stack: 'javascript',
//         age:'24',
//     },
// ]

// // jika ingin hanya menampilkan nama
// data.map((values, index)=> {
//     console.log(values.name);
//     // alert(values.name)
// })

// // jika ingin hanya menampilkan stack
// data.map((values, index)=> {
//     console.log(values.stack);
//     // alert(values.stack)
// })

// // jika ingin hanya menampilkan umur
// data.map((values, index)=> {
//     console.log(values.age);
//     // alert(values.age)
// })

//jika ingin menampilkan urutan usia terkecil ke terbesar
// data.sort((a, b) => a.age - b.age).map((values)=> console.log(values))

//jika ingin menampilkan urutan usia terbesar ke terkecil
// data.sort((a, b) => b.age - a.age).map((values)=> console.log(values))

//filter mencari usia di atas usia tertentu
// data.sort((a,b) => b.age - a.age).
// filter((x) => x.age >=23).
// map((values)=>console.log(values))



