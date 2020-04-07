const tot = document.getElementById("total")
let sum = 0;

function increase(ctn, id, prix, chec) {
    /*   let input1 = document.getElementById(id);
       let inc = parseInt(input1.value) + 1;
       input1.value = inc;
       let prix = document.getElementById(price);
       let t = parseInt(ctn) * parseInt(inc);

       prix.value = t;
       let checkitem = document.getElementById(chec);
       console.log(checkitem);
       if (checkitem.checked) {
           tot.innerHTML = `${parseInt(tot.innerHTML)+ctn}$`
       }*/

    let inp = document.getElementById(id);
    let val = parseInt(inp.value);
    val++;
    inp.value = val;
    // inc du prix
    let price = document.getElementById(prix);
    price.innerHTML = `${ctn*val}$`;
    // on inc, tot increase
    let checkitem = document.getElementById(chec);

    if (checkitem.checked) {
        tot.innerHTML = `${parseInt(tot.innerHTML)+parseInt(ctn)}$`

    }
}

function decrease(ctn, id, prix1, chec) {
    /*  let input1 = document.getElementById(id);

    if (input1.value != 0) {
        let inc = parseInt(input1.value) - 1;
    } else { inc = 0; }
    input1.value = inc;
    let prix = document.getElementById(price);

    if (inc > 0) { prix.innerHTML = `${ctn*inc}$` };
    // on dec, tot decrease
    let checkitem = document.getElementById(chec);
    if (checkitem.checked) {
 tot.innerHTML = `${parseInt(tot.innerHTML)-ctn}$`;


    }*/

    let inp = document.getElementById(id);

    let val = parseInt(inp.value);


    if (val != 0) {
        val--;

    } else inp.value = 0;
    inp.value = val;
    // dec du prix

    let price1 = document.getElementById(prix1);


    if (val > 0) { price1.innerHTML = `${ctn*val}$` };
    // on dec, tot decrease

    let checkitem = document.getElementById(chec);
    if (checkitem.checked) {
        sum = parseInt(tot.innerHTML)
        sum = sum - ctn
            // Mission ()
        console.log(sum)
        if (val == 0) {


            event.preventDefault(tot.innerHTML = `${sum}$`)


        } else tot.innerHTML = `${sum}$`;



    }


}

function calculateTotal(chec, price, inp) {
    /* let heart_check = Array.from(document.getElementsByName(name));
     let prixAR = Array.from(document.getElementsByName(price));
     let quantity = Array.from(document.getElementById(qty));
     let totalsum = parseInt(tot.value);
     for (let i = 0; i < heart_check.length; i++) {
         if (heart_check[i].checked) {
             let val = parseInt(prixAR[i].value);
             // totalsum += val;
             //console.log(tot)
             //tot.value = totalsum;
             if (quantity[i] > 0) {
                 let sum = parseInt(tot.innerHTML) + val;
                 tot.innerHTML = `${sum}$`;
             }
         } else {
             let val = parseInt(prixAR[i].value);
             totalsum -= val;
             console.log(tot)
             tot.value = totalsum;
         }*/

    let checkitem = document.getElementById(chec);
    if (checkitem.checked) {
        let prix = document.getElementById(price);
        let input = document.getElementById(inp);
        if (input.value > 0) {
            let sum = parseInt(tot.innerHTML) + parseInt(prix.innerHTML);
            tot.innerHTML = `${sum}$`;
        }
    } else {
        let prix = document.getElementById(price);
        let input = document.getElementById(inp);
        if (input.value > 0) {
            let sum = parseInt(tot.innerHTML) - parseInt(prix.innerHTML);
            tot.innerHTML = `${sum}$`;
        }

    }


}