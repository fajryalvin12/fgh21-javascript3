const getMonth = (callback) => {
    setTimeout(() => {
        let error = false 
        let month = ["Januari", "Februari", "Maret", "April", 
                    "Mei", "Juni", "Juli", "Agustus", "September",
                    "Oktober", "November", "Desember"]
        if (!error) {
            callback(null, month)
        } else {
            callback (new Error("Sorry, data not found"), [])
        }
    }, 4000)
}; 

const showMonth = (error, detectMonth) => {
    if (error) {
        console.log(error);
    } else {
        detectMonth.map((month, i) => {
            console.log((i + 1) + "." + (month));
        }); 
    }
};

getMonth(showMonth)