// Alkisah sedang diselenggarakan pertandingan sepakbola Asian Super
// League. Sebagai bagian dari tim IT, Anda diminta membantu
// menentukan nilai dari setiap tim berdasarkan hasil pertandingan.
// Daftar Tim
// Team Nilai
// Indonesia 0
// Malaysia 0
// Jepang 0
// Cina 0
// Untuk menampilkan nilai tim, gunakan Nilai[y]. Sedangkan untuk
// mengisi nilai, gunakan Nilai[y] = poin, dengan y adalah nama negara.
// Contoh: “Nilai[Indonesia]” akan menampilkan nilai tim Indonesia,
// sedangkan “Nilai[Indonesia] = 1” berarti mengisi nilai 1 ke tim
// Indonesia.
// Hasil Pertandingan

// Untuk mengakses tabel hasil pertandingan, gunakan NamaTeam1[x],
// NamaTeam2[x], SkorTeam1[x], SkorTeam2[x], dengan x adalah index.
// Contoh:
// NamaTeam1[0] = Indonesia
// NamaTeam2[1] = Jepang
// Index NamaTeam1 NamaTeam2 SkorTeam1 SkorTeam2
// 0 Indonesia Malaysia 5 2
// 1 Malaysia Jepang 1 3
// 2 Cina Malaysia 3 0
// 3 Cina Indonesia 0 2
// 4 Indonesia Jepang 0 0
// 5 Jepang Cina 1 3

// SkorTeam1[1] = 1
// SkorTeam2[2] = 0
// Tuliskan algoritma untuk mengisi nilai masing-masing tim dengan
// melihat hasil pertandingan, dengan peraturan:
// jika menang mendapat nilai 3,
// jika seri kedua tim mendapat nilai 1,
// jika kalah mendapat nilai 0.
// Tuliskan berapa nilai yang didapat dari setiap negara.

let NamaTeam1 = ["Indonesia", "Malaysia", "Cina", "Cina", "Indonesia", "Jepang"];
let NamaTeam2 = ["Malaysia", "Jepang", "Malaysia", "Indonesia", "Jepang", "Cina"];
let SkorTeam1 = [5, 1, 3, 0, 0, 1]
let SkorTeam2 = [2, 3, 0, 2, 0, 3]

let DaftarTeam= [{team: "Indonesia", nilai: 0},
                {team: "Malaysia", nilai: 0},
                {team: "Jepang", nilai: 0},
                {team: "Cina", nilai: 0},]

for(var n=0; n<NamaTeam1.length; n++){
    if(SkorTeam1[n]>SkorTeam2[n]){
        DaftarTeam.map(obj => {
            if(obj.team === NamaTeam1[n]){
                obj.nilai += 3;
            }
            if(obj.team === NamaTeam2[n]){
                obj.nilai += 0;
            }
        })
    } else if (SkorTeam1[n]===SkorTeam2[n]){
        DaftarTeam.map(obj => {
            if(obj.team === NamaTeam1[n]){
                obj.nilai += 1;
            }
            if(obj.team === NamaTeam2[n]){
                obj.nilai += 1;
            }
        })
    } else {
        DaftarTeam.map(obj => {
            if(obj.team === NamaTeam1[n]){
                obj.nilai += 0;
            }
            if(obj.team === NamaTeam2[n]){
                obj.nilai += 3;
            }
        })
    }
} 

for(var i =0; i<DaftarTeam.length; i++){
    console.log(DaftarTeam[i].team)
    console.log(DaftarTeam[i].nilai)
}
