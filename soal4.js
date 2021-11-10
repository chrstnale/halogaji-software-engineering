// Tersedia fungsi Max2 sebagai berikut:
// function Max2 (a,b : integer) : integer
// { Menghasilkan nilai tertinggi dari 2 angka }

// Buatlah fungsi Max3 dan Max9 dengan memanfaatkan fungsi yang sudah
// dibuat:
// function Max3 (a,b,c : integer) : integer
// { Menghasilkan nilai tertinggi dari 3 angka. Gunakan fungsi Max2 }
// function Max9 (a,b,c,d,e,f,g,h,i : integer) : integer
// { Menghasilkan nilai tertinggi dari 9 angka. Gunakan fungsi Max3 }

const max2 = (a, b) => {
    //Menggunakan pengandaian untuk menemukan nilai tertinggi
    if(a > b){
        return a
    } else {
        return b
    }
}

const max3 = (a, b, c) => {
    //Memanfaatkan fungsi max2 untuk menemukan nilai tertinggi tiap 2 angka
    ab = max2(a,b)
    return max2(ab, c)
}

const max9 = (a,b,c,d,e,f,g,h,i) => {
    //Memanfaatkan fungsi max3 untuk menemukan nilai tertinggi tiap 3 angka
    abc = max3(a,b,c)
    def = max3(d,e,f)
    ghi = max3(g,h,i)

    return max3(abc, def, ghi)
}

// Uji coba fungsi max9
console.log(max9(2,3,8,4,5,10,90,12,7))