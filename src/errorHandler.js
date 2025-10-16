export const errorHandler={



    parsedNumberError:(numberArr)=>{
        if(numberArr.length===1 && numberArr[0]==='') return
        numberArr.forEach((num)=>{
            if(isNaN(num)) throw new Error("[ERROR] Invalid number number");
            if(Number(num)<0) throw new Error("[ERROR] no minus");
            if(num.trim()==='') throw new Error("[ERROR] include space");

        })

    }
}