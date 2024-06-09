const tebakBuah = (fruit) => { 
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            const listOfFruits = ["Apel", "Belimbing", "Ceri", "Durian", "Edelberry"];
            let buah = listOfFruits.find((barang) => {
                return barang === fruit 
            })
            if (buah) {
                resolve(buah)
            } else {
                reject(new Error("Coba lagi abangku"))
            }
        }, 1000)  
    })
}

tebakBuah("Apel")
.then((isinya) => {
    console.log((isinya) + " adalah buah yang sesuai, mantap!")
})
.catch((error) => {
    console.log("Yuk Tebak Lagi Abangku")
})

const pilihAngka = (numb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sesuatu = [1, 2, 3, 5, 8, 11, 15, 20];
            let tebakAngka = sesuatu.find((angka) => {
                return angka === sesuatu.length
            })
            if (tebakAngka) {
                resolve(tebakAngka)
            } else {
                reject(new Error ("input angka tidak sesuai kriteria"))
            }
        }, 5000)  
    })
}

const pilihanAngka = async function(numb) {
    try {
        const angkaSesuai = await pilihAngka(numb)
        console.log((angkaSesuai) + " adalah angka terpilih")
    } catch (error) {
        console.log("Maaf, angka yang anda pilih belum sesuai")
    }
}

pilihanAngka(20)