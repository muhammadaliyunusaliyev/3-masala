function separateArr(arr) {
     let plusArr = []
     let minusArr = []
     arr.forEach((item)=>{
          if(item < 0){
               minusArr.push(item)
          }else{
               plusArr.push(item)
          }
     })
     console.log(plusArr)
     console.log(minusArr)
}
separateArr([1,-3,4,-9,95,34,-54]);