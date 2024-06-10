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

tebakBuah("Edelberry")
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
                return angka === sesuatu
            })
            if (tebakAngka) {
                resolve(tebakAngka)
            } else {
                reject(new Error ("input angka tidak sesuai kriteria"))
            }
        }, 1000)  
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

pilihanAngka(15)

function loginAccount(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "user@example.com" && password === "makan_gratis") {
                resolve ({userId: 1, profile: "User Profile"})
            } else {
                reject(new Error("Try Again, Authentication Failed"))
            }
        }, 1000)
    })
}

loginAccount("user@example.com", "makan_gratis")
.then((email, password) => {
    console.log((email, password) + " has been verified")
})
.catch((error) => {
    console.log("Account has not been registered")
})