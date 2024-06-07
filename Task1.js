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

cekHariKerja('selasa')
.then((jawaban) => {
    console.log((jawaban) + ' adalah hari kerja')
})
.catch((error) => {
    console.log("hari ini bukan hari kerja")
})

const cekHari = async function(day) {
    try {
        const result = await cekHariKerja(day);
        console.log((result) + " adalah hari kerja")
    } catch (error) {
        console.log("hari ini bukan hari kerja")
    }
} 

cekHari('minggu')