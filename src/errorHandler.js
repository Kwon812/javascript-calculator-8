export const errorHandler={



    parsedNumberError:(numberArr)=>{
        numberArr.forEach((num)=>{
            if(isNaN(num)) throw new Error("[ERROR] Invalid number number");
            if(Number(num)<0) throw new Error("[ERROR] no minus");
            if(num.trim()==='') throw new Error("[ERROR] include space");

        })

    }
}