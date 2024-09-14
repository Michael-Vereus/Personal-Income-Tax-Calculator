const GajiBersih = document.getElementById("GajiBersih")
const Jenis = document.getElementById("Jenis") 
const Hitung = document.getElementById("Hitung")
const output = document.getElementById("output")
const GajiHelp = document.getElementById("GajiHelp")
const PTKPHelp = document.getElementById("PTKPHelp")
const Reset = document.getElementById("Reset")

let CleanSalary ;
let Type ;
let PTKP ; 
let PKP ;
let PPH21 ;
let PPHFINAL ; 
let LAPIS1 = 60000000 ; 
let LAPIS2 = 250000000 ;
let LAPIS3 = 500000000 ;
let LAPIS4 = 5000000000 ;
let PPHLapis1 ; 
let PPHLapis2 ; 
let PPHLapis3 ;
let PPHLapis4 ; 



Hitung.onclick = function(){
    result = output.value
CleanSalary = GajiBersih.value
Type = Jenis.value 
Number(CleanSalary)
Number(PKP)
    CleanSalary = CleanSalary * 12
    if (CleanSalary <= 0 ){
        output.textContent = ("Masukkan Gaji Anda")
    }
    else if (CleanSalary >= 0 ){
        if ( Type ==  "" ){
            output.textContent = ("Masukkaan Jenis PTKP Anda")
        }
        else if ( Type = "TK/0"){
            let PTKP = 54000000 ; 
            PKP = CleanSalary - PTKP
            console.log(PKP)
            if ( PKP <= 60000000){
                PPHFINAL = PKP * 0.05 ;
                PPHFINAL = PPHFINAL /= 12
                output.textContent = (`PPH 21 Terutang Sebesar ${PPHFINAL} per bulan`) 
            }
            else if ((PKP > 60000000) && (PKP <= 250000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPH21 = PKP - LAPIS1;
                console.log (PPH21)
                PPH21 = PPH21 * 0.15;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1;  
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            } 
            else if ((PKP > 250000000) && (PKP <= 500000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPH21 = PKP - LAPIS2 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.25;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round (PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if ((PKP > 500000000) && (PKP <= 5000000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPH21 = PKP - LAPIS3 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.30 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if (PKP > 5000000000){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPHLapis4 = LAPIS4 * 0.30 ;
                console.log(PPHLapis4)
                PPH21 = PKP - LAPIS4 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.35 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 + PPHLapis4;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
        }
        else if ( Type = "TK/1"){
            let PTKP = 58500000 ; 
            PKP = CleanSalary - PTKP
            console.log(PKP)
            if ( PKP <= 60000000){
                PPHFINAL = PKP * 0.05 ;
                PPHFINAL = PPHFINAL /= 12
                output.textContent = (`PPH 21 Terutang Sebesar ${PPHFINAL} per bulan`) 
            }
            else if ((PKP > 60000000) && (PKP <= 250000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPH21 = PKP - LAPIS1;
                console.log (PPH21)
                PPH21 = PPH21 * 0.15;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1;  
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            } 
            else if ((PKP > 250000000) && (PKP <= 500000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPH21 = PKP - LAPIS2 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.25;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round (PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if ((PKP > 500000000) && (PKP <= 5000000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPH21 = PKP - LAPIS3 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.30 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if (PKP > 5000000000){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPHLapis4 = LAPIS4 * 0.30 ;
                console.log(PPHLapis4)
                PPH21 = PKP - LAPIS4 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.35 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 + PPHLapis4;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
        }
        else if ( Type = "TK/2"){
            let PTKP = 54000000 ; 
            PKP = CleanSalary - PTKP
            console.log(PKP)
            if ( PKP <= 60000000){
                PPHFINAL = PKP * 0.05 ;
                PPHFINAL = PPHFINAL /= 12
                output.textContent = (`PPH 21 Terutang Sebesar ${PPHFINAL} per bulan`) 
            }
            else if ((PKP > 60000000) && (PKP <= 250000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPH21 = PKP - LAPIS1;
                console.log (PPH21)
                PPH21 = PPH21 * 0.15;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1;  
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            } 
            else if ((PKP > 250000000) && (PKP <= 500000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPH21 = PKP - LAPIS2 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.25;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round (PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if ((PKP > 500000000) && (PKP <= 5000000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPH21 = PKP - LAPIS3 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.30 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if (PKP > 5000000000){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPHLapis4 = LAPIS4 * 0.30 ;
                console.log(PPHLapis4)
                PPH21 = PKP - LAPIS4 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.35 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 + PPHLapis4;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
        }else if ( Type = "TK/3"){
            let PTKP = 54000000 ; 
            PKP = CleanSalary - PTKP
            console.log(PKP)
            if ( PKP <= 60000000){
                PPHFINAL = PKP * 0.05 ;
                PPHFINAL = PPHFINAL /= 12
                output.textContent = (`PPH 21 Terutang Sebesar ${PPHFINAL} per bulan`) 
            }
            else if ((PKP > 60000000) && (PKP <= 250000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPH21 = PKP - LAPIS1;
                console.log (PPH21)
                PPH21 = PPH21 * 0.15;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1;  
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            } 
            else if ((PKP > 250000000) && (PKP <= 500000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPH21 = PKP - LAPIS2 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.25;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round (PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if ((PKP > 500000000) && (PKP <= 5000000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPH21 = PKP - LAPIS3 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.30 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if (PKP > 5000000000){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPHLapis4 = LAPIS4 * 0.30 ;
                console.log(PPHLapis4)
                PPH21 = PKP - LAPIS4 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.35 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 + PPHLapis4;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
        }
        else if ( Type = "K/0"){
            let PTKP = 54000000 ; 
            PKP = CleanSalary - PTKP
            console.log(PKP)
            if ( PKP <= 60000000){
                PPHFINAL = PKP * 0.05 ;
                PPHFINAL = PPHFINAL /= 12
                output.textContent = (`PPH 21 Terutang Sebesar ${PPHFINAL} per bulan`) 
            }
            else if ((PKP > 60000000) && (PKP <= 250000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPH21 = PKP - LAPIS1;
                console.log (PPH21)
                PPH21 = PPH21 * 0.15;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1;  
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            } 
            else if ((PKP > 250000000) && (PKP <= 500000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPH21 = PKP - LAPIS2 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.25;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round (PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if ((PKP > 500000000) && (PKP <= 5000000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPH21 = PKP - LAPIS3 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.30 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if (PKP > 5000000000){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPHLapis4 = LAPIS4 * 0.30 ;
                console.log(PPHLapis4)
                PPH21 = PKP - LAPIS4 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.35 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 + PPHLapis4;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
        }
        else if ( Type = "K/1"){
            let PTKP = 54000000 ; 
            PKP = CleanSalary - PTKP
            console.log(PKP)
            if ( PKP <= 60000000){
                PPHFINAL = PKP * 0.05 ;
                PPHFINAL = PPHFINAL /= 12
                output.textContent = (`PPH 21 Terutang Sebesar ${PPHFINAL} per bulan`) 
            }
            else if ((PKP > 60000000) && (PKP <= 250000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPH21 = PKP - LAPIS1;
                console.log (PPH21)
                PPH21 = PPH21 * 0.15;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1;  
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            } 
            else if ((PKP > 250000000) && (PKP <= 500000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPH21 = PKP - LAPIS2 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.25;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round (PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if ((PKP > 500000000) && (PKP <= 5000000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPH21 = PKP - LAPIS3 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.30 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if (PKP > 5000000000){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPHLapis4 = LAPIS4 * 0.30 ;
                console.log(PPHLapis4)
                PPH21 = PKP - LAPIS4 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.35 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 + PPHLapis4;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
        }
        else if ( Type = "K/2"){
            let PTKP = 54000000 ; 
            PKP = CleanSalary - PTKP
            console.log(PKP)
            if ( PKP <= 60000000){
                PPHFINAL = PKP * 0.05 ;
                PPHFINAL = PPHFINAL /= 12
                output.textContent = (`PPH 21 Terutang Sebesar ${PPHFINAL} per bulan`) 
            }
            else if ((PKP > 60000000) && (PKP <= 250000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPH21 = PKP - LAPIS1;
                console.log (PPH21)
                PPH21 = PPH21 * 0.15;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1;  
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            } 
            else if ((PKP > 250000000) && (PKP <= 500000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPH21 = PKP - LAPIS2 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.25;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round (PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if ((PKP > 500000000) && (PKP <= 5000000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPH21 = PKP - LAPIS3 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.30 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if (PKP > 5000000000){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPHLapis4 = LAPIS4 * 0.30 ;
                console.log(PPHLapis4)
                PPH21 = PKP - LAPIS4 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.35 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 + PPHLapis4;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
        }
        else if ( Type = "K/3"){
            let PTKP = 54000000 ; 
            PKP = CleanSalary - PTKP
            console.log(PKP)
            if ( PKP <= 60000000){
                PPHFINAL = PKP * 0.05 ;
                PPHFINAL = PPHFINAL /= 12
                output.textContent = (`PPH 21 Terutang Sebesar ${PPHFINAL} per bulan`) 
            }
            else if ((PKP > 60000000) && (PKP <= 250000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPH21 = PKP - LAPIS1;
                console.log (PPH21)
                PPH21 = PPH21 * 0.15;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1;  
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            } 
            else if ((PKP > 250000000) && (PKP <= 500000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPH21 = PKP - LAPIS2 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.25;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round (PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if ((PKP > 500000000) && (PKP <= 5000000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPH21 = PKP - LAPIS3 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.30 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if (PKP > 5000000000){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPHLapis4 = LAPIS4 * 0.30 ;
                console.log(PPHLapis4)
                PPH21 = PKP - LAPIS4 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.35 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 + PPHLapis4;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
        }
        else if ( Type = "K/I/0"){
            let PTKP = 54000000 ; 
            PKP = CleanSalary - PTKP
            console.log(PKP)
            if ( PKP <= 60000000){
                PPHFINAL = PKP * 0.05 ;
                PPHFINAL = PPHFINAL /= 12
                output.textContent = (`PPH 21 Terutang Sebesar ${PPHFINAL} per bulan`) 
            }
            else if ((PKP > 60000000) && (PKP <= 250000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPH21 = PKP - LAPIS1;
                console.log (PPH21)
                PPH21 = PPH21 * 0.15;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1;  
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            } 
            else if ((PKP > 250000000) && (PKP <= 500000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPH21 = PKP - LAPIS2 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.25;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round (PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if ((PKP > 500000000) && (PKP <= 5000000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPH21 = PKP - LAPIS3 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.30 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if (PKP > 5000000000){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPHLapis4 = LAPIS4 * 0.30 ;
                console.log(PPHLapis4)
                PPH21 = PKP - LAPIS4 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.35 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 + PPHLapis4;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
        }
        else if ( Type = "K/I/1"){
            let PTKP = 54000000 ; 
            PKP = CleanSalary - PTKP
            console.log(PKP)
            if ( PKP <= 60000000){
                PPHFINAL = PKP * 0.05 ;
                PPHFINAL = PPHFINAL /= 12
                output.textContent = (`PPH 21 Terutang Sebesar ${PPHFINAL} per bulan`) 
            }
            else if ((PKP > 60000000) && (PKP <= 250000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPH21 = PKP - LAPIS1;
                console.log (PPH21)
                PPH21 = PPH21 * 0.15;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1;  
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            } 
            else if ((PKP > 250000000) && (PKP <= 500000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPH21 = PKP - LAPIS2 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.25;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round (PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if ((PKP > 500000000) && (PKP <= 5000000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPH21 = PKP - LAPIS3 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.30 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if (PKP > 5000000000){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPHLapis4 = LAPIS4 * 0.30 ;
                console.log(PPHLapis4)
                PPH21 = PKP - LAPIS4 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.35 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 + PPHLapis4;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
        }
        else if ( Type = "K/I/2"){
            let PTKP = 54000000 ; 
            PKP = CleanSalary - PTKP
            console.log(PKP)
            if ( PKP <= 60000000){
                PPHFINAL = PKP * 0.05 ;
                PPHFINAL = PPHFINAL /= 12
                output.textContent = (`PPH 21 Terutang Sebesar ${PPHFINAL} per bulan`) 
            }
            else if ((PKP > 60000000) && (PKP <= 250000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPH21 = PKP - LAPIS1;
                console.log (PPH21)
                PPH21 = PPH21 * 0.15;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1;  
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            } 
            else if ((PKP > 250000000) && (PKP <= 500000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPH21 = PKP - LAPIS2 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.25;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round (PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if ((PKP > 500000000) && (PKP <= 5000000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPH21 = PKP - LAPIS3 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.30 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if (PKP > 5000000000){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPHLapis4 = LAPIS4 * 0.30 ;
                console.log(PPHLapis4)
                PPH21 = PKP - LAPIS4 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.35 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 + PPHLapis4;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
        }
        else if ( Type = "K/I/3"){
            let PTKP = 54000000 ; 
            PKP = CleanSalary - PTKP
            console.log(PKP)
            if ( PKP <= 60000000){
                PPHFINAL = PKP * 0.05 ;
                PPHFINAL = PPHFINAL /= 12
                output.textContent = (`PPH 21 Terutang Sebesar ${PPHFINAL} per bulan`) 
            }
            else if ((PKP > 60000000) && (PKP <= 250000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPH21 = PKP - LAPIS1;
                console.log (PPH21)
                PPH21 = PPH21 * 0.15;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1;  
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            } 
            else if ((PKP > 250000000) && (PKP <= 500000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPH21 = PKP - LAPIS2 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.25;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round (PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if ((PKP > 500000000) && (PKP <= 5000000000)){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPH21 = PKP - LAPIS3 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.30 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 ;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
            else if (PKP > 5000000000){
                PPHLapis1 = LAPIS1 * 0.05 ;
                console.log(PPHLapis1)
                PPHLapis2 = LAPIS2 * 0.15 ;
                console.log(PPHLapis2)
                PPHLapis3 = LAPIS3 * 0.25 ;
                console.log(PPHLapis3)
                PPHLapis4 = LAPIS4 * 0.30 ;
                console.log(PPHLapis4)
                PPH21 = PKP - LAPIS4 ;
                console.log(PPH21)
                PPH21 = PPH21 * 0.35 ;
                console.log(PPH21)
                PPHFINAL = PPH21 + PPHLapis1 + PPHLapis2 + PPHLapis3 + PPHLapis4;
                console.log(PPHFINAL)
                PPHFINAL = PPHFINAL /= 12 ;
                console.log(PPHFINAL)
                PPHFINAL = Math.round(PPHFINAL)
                output.textContent = (`PPH 21 Terutang Sebesar Rp ${PPHFINAL},00- per bulan`) ;
            }
        }
    }
    else if (CleanSalary = 4500000){
        output.textContent = (`Selamat Anda Tidak Dikenakan Pajak`)
    }    
}

GajiHelp.onclick = function(){
    alert("Untuk menghitung Gaji Bersih = Gaji yang diterima ditambah tunjangan yang diberikan kemudian dikurangi oleh premi dan potongan-potongan yang ada.")
}
PTKPHelp.onclick = function(){
    alert("Silahkan masukkan jenis PTKP Anda, TK = Tidak Kawin , Kawin , kemudian penambahan 'I' ditengah menunjukkan penghasilan digabung, kemudian penambahan angka di akhir menunjukkan berapa tanggungan yang dimiliki. Maksimal tanggungan yang dapat ditanggung adalah tiga. Contoh Tidak Kawin tidak memiliki tanggungan maka penulisan yang benar TK/0 , Kawin dengan 2 tanggungan maka penulisan yang benar K/2 , Kawin penghasilan digabung serta memiliki 3 tanggungan K/I/3.")
}
Reset.onclick = function(){
    CleanSalary = 0 ;
    Type = "" ;
    output.textContent = ("")
}