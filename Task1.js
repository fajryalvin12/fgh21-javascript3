const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek){
                resolve(cek)
            } else {
                reject (new Error('hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// Tugas a
cekHariKerja('selasa') 
// lakukan pemanggilan fungsi atau callback terlebih dahulu sesuai dengan program yang sudah dibuat

.then((jawaban) => {
    console.log((jawaban) + ' adalah hari kerja')
})
// tambahkan function .then setelah proses callback jika parameter yang dibuat sesuai

.catch((error) => {
    console.log(error.message)
})
// berikan function .catch jika dalam proses callback, fungsi yang dibuat mengalami error atau ada ketidaksesuaian parameter

// Tugas b 
const cekHari = async function(day) 
// buat variabel fungsi async terlebih dahulu dikarenakan callback function yang dipanggil merupakan asynchronus function dan perlu diubah menjadi synchronus
{
    try {
        const result = await cekHariKerja(day);
        console.log((result) + " adalah hari kerja")
// tambahkan function try pada blockscope dan buat scope baru dengan menambahkan variabel baru yang berisikan fungsi await agar asynchronus function yang sudah dicallback dapat ditunggu terlebih dahulu. 
// kemudian, lakukan pengoutputan dengan memberikan parameter berupa variabel yang sudah ditambahkan proses await diatas

    } catch (error) {
        console.log(error.message)
    }
// buat function catch untuk melakukan callback function disaat parameter yang dipanggil tidak sesuai atau ada error, dan setelahnya dapat dibuat output untuk error message nya
} 

cekHari('minggu')