function timeWord (time) {
    let out = '';
    let timeOfDay;
    let counter = 0;
    const first = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve']
    const double = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const high = ['twenty','thirty','fourty','fifty']
    for(let i = 0; i < time.length; i++){
        if (time[0] + time[1] > 12){
            timeOfDay = 'pm';
        }
        else {
            timeOfDay = 'am';
        }
        if(time[i] !== ':'){

            //first number ifs

            if(time[0] == 0 && time[1] != 0 && !out){
               console.log(1)
                out += `${first[time[1] - 1]} `
                
            }
            else if (time[0] + time[1] > 12 && !out && time[0] + time[1] != 0){
                let num = parseInt(time[0] + time[1])
                
                out += `${first[(num-12) - 1]} `
                
            }
            else if (time[0] != 0 && !out && time[0] + time[1] != 0){
                
                let num = parseInt(time[0] + time[1])
                if(time[3] + time[4] == 0 && time[0] + time[1] == 12) {
                    out += 'noon'
                }
                else {
                    
                    out += `${first[num - 1]} `
                }

                
            }
            else if(!out) {
                console.log('t')
                if (time[0] + time[1] == 0 && time[3] + time[4] == 0){
                    out += "midnight "
                }else {
                    out += 'twelve '
                }
                
            }
            
            //second number ifs
            
            if(time[3] == 0 && time[4] != 0 && counter < 1 ){
               
                out += `${first[time[4] - 1]}`
                counter++
            }
            else if (time[3] + time[4] >= 10 && counter < 1 && time[3] + time[4] < 20 && time[3] + time[4] != 0){
                let num = parseInt(time[3] + time[4])
                console.log(2)
                out += `${double[(num - 10)]}`
                counter++
            }
            else if (time[3] != 0 && counter < 1 && time[3] + time[4] >= 20 && time[3] + time[4] != 0){
                /*console.log(3)
                let rawNum = time[3] + time[4]
                let firstNum;
                let secondNum;
                for (let i = 0; i < rawNum.length; i++) {
                     firstNum = rawNum[0]
                     secondNum = rawNum[1]
                }
                //let num = parseInt(time[3] + time[4])*/
                
                out += `${high[time[3] - 2] += time[4] > 0 ? first[time[4] - 1]: ''}`
                counter ++
            }
            else {
                counter++
            }


        }
    }
   // console.log(out)
    console.log([out,timeOfDay].join(' ')) 
}

timeWord('08:10');