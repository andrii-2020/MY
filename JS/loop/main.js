
const btn = document.getElementById('tru');
const btn1 = document.getElementById('fal');


btn.onclick = () =>{
    
    function up(mor) {
        return new Promise((res, rej) => {//res uspich //rej polomka
            setTimeout(() => {
                if (mor) {
                    res('<h2>6:00 <br>prosnywsia--URA!!!!!!!!<br>');
                } else {
                    rej(`<h1>10:00<br>*__*<br> ERORRRRR!!!!!!!!! ----> tu prospav<br>`);
    
    
                }
            }, 1000)
    
        })
    
    }
    function zeem(zub) {
        return new Promise((rees, reej) => {
            setTimeout(() => {
                if (zub) {
                    rees('idemo mutu zuby!!!!');
                } else {
                    reej(`ERORRRRR!!--tu prospav__zubu__grazni!!!`)
                }
    
            }, 2000)
        })
    
    }
    
    function am(am) {
        return new Promise((rees, reej) => {
            setTimeout(() => {
                if (am) {
                    rees(`<h2>zuby chusti--IDEMO PUTU KOFE))`);
                } else {
                    reej(`ERORRRRR!!--NEMA - KOFE !!!`)
                }
    
            }, 2500)
        })
    
    }
    
    function work(work) {
        return new Promise((rees, reej) => {
            setTimeout(() => {
                if (work) {
                    rees(`<h2>populu KOFE--chas na roboty((`);
                } else {
                    reej(`ERORRRRR!!--NEMA - roboty))) !!!`)
                }
    
            }, 3000)
        })
    
    }
    
    
    up(true).then(value => {
        document.write(value);
    
        return zeem(value);
    })
        //rees('idemo mutu zuby!!!!');
        .then(reees => {
            document.write(reees);
            return am(reees);
        })
        //rees(`<h2>zuby chusti--IDEMO GAMATU))`);
        .then(ama => {
            document.write(ama);
    
            return work(ama);
        })
        //reej(`ERORRRRR!!--NEMA - roboty !!!`)
        .then(work=>{
            document.write(work);
        })
        // rej(`<h1>10:00<br>*__*<br> ERORRRRR!!!!!!!!! ----> tu prospav<br>`);
        .catch(reason => {
            document.write(reason + `*__*<br>`);
            return zeem();
        })
        //reej(`ERORRRRR!!--tu prospav__zubu__grazni!!!`)
        .catch(re => {
            document.write(re + `<br>`);
            return am();
        })
        //rees(`<h2>zuby chusti--IDEMO PUTU KOFE))`);
        .catch(am => {
            document.write(am+`<br>`);
            return work();
        })
        .catch(wo=>{
            document.write(wo);
        })
        // .finally(()=>{   //uspich zavsru ---false ---true 
        //     console.log('wewewewewe');
        // })
    


}



btn1.onclick = () =>{
    
    function up(mor) {
        return new Promise((res, rej) => {//res uspich //rej polomka
            setTimeout(() => {
                if (mor) {
                    res('<h2>6:00 <br>prosnywsia--URA!!!!!!!!<br>');
                } else {
                    rej(`<h1>10:00<br>*__*<br> ERORRRRR!!!!!!!!! ----> tu prospav<br>`);
    
    
                }
            }, 1000)
    
        })
    
    }
    function zeem(zub) {
        return new Promise((rees, reej) => {
            setTimeout(() => {
                if (zub) {
                    rees('idemo mutu zuby!!!!');
                } else {
                    reej(`ERORRRRR!!--tu prospav__zubu__grazni!!!`)
                }
    
            }, 2000)
        })
    
    }
    
    function am(am) {
        return new Promise((rees, reej) => {
            setTimeout(() => {
                if (am) {
                    rees(`<h2>zuby chusti--IDEMO PUTU KOFE))`);
                } else {
                    reej(`ERORRRRR!!--NEMA - KOFE !!!`)
                }
    
            }, 2500)
        })
    
    }
    
    function work(work) {
        return new Promise((rees, reej) => {
            setTimeout(() => {
                if (work) {
                    rees(`<h2>populu KOFE--chas na roboty((`);
                } else {
                    reej(`ERORRRRR!!--NEMA - roboty))) !!!`)
                }
    
            }, 3000)
        })
    
    }
    
    
    up(false).then(value => {
        document.write(value);
    
        return zeem(value);
    })
        //rees('idemo mutu zuby!!!!');
        .then(reees => {
            document.write(reees);
            return am(reees);
        })
        //rees(`<h2>zuby chusti--IDEMO GAMATU))`);
        .then(ama => {
            document.write(ama);
    
            return work(ama);
        })
        //reej(`ERORRRRR!!--NEMA - roboty !!!`)
        .then(work=>{
            document.write(work);
        })
        // rej(`<h1>10:00<br>*__*<br> ERORRRRR!!!!!!!!! ----> tu prospav<br>`);
        .catch(reason => {
            document.write(reason + `*__*<br>`);
            return zeem();
        })
        //reej(`ERORRRRR!!--tu prospav__zubu__grazni!!!`)
        .catch(re => {
            document.write(re + `<br>`);
            return am();
        })
        //rees(`<h2>zuby chusti--IDEMO PUTU KOFE))`);
        .catch(am => {
            document.write(am+`<br>`);
            return work();
        })
        .catch(wo=>{
            document.write(wo);
        })
        // .finally(()=>{   //uspich zavsru ---false ---true 
        //     console.log('wewewewewe');
        // })
    


}





