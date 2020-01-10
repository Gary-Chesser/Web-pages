function performStatistics(){
    var numstring=document.getElementById("num").value, patt= new RegExp("[A-z]");
    if(!patt.test(numstring)){
        var numarray=numstring.split(" ").map(Number);
        if(numarray.length>4 && numarray.length<21){
            if(findMin(numarray)>-1 && findMax(numarray)<101){
                document.getElementById("max").value=findMax(numarray);
                document.getElementById("min").value=findMin(numarray);
                document.getElementById("median").value=calcMedian(numarray);
                document.getElementById("sum").value=calcSum(numarray);
                document.getElementById("mean").value=calcMean(numarray);
                document.getElementById("variance").value=calcVariance(numarray);
                document.getElementById("stdev").value=calcStdDev(numarray); 
                document.getElementById("mode").value=calcMode(numarray); 
                
            }else{
                alert("Error: Range of numbers must be between 0 and 100.")
            }
        }else{
            alert("Error: Amount of numbers must be between 5 and 20.");
       
        }
        
    }else{
        alert("Error: Input must only be numbers.");
    }
    return false;
    
}
function findMin(nums){
    nums.sort(function(a, b){return a-b});
    var min=nums[0], n=min.toFixed(2);
    return n;
}
function findMax(nums){
    var max=nums[nums.length-1], n=max.toFixed(2);
    return n;
}
function calcMedian(nums){
    var total=nums.length-1, med,medi;
    if (nums.length%2==0){
        med=(total+1)/2;
        medi=(nums[med]+nums[med-1])/2;
    }else{
    med=total/2;
    medi=nums[med];
    }
    var n=medi.toFixed(2)
    return n;
}
function calcSum(nums){
    var sum=0;
    var numcopy=nums.slice(0);
    while(numcopy.length != 0){
        sum=sum+numcopy.pop();
    }
    var n=sum.toFixed(2);
    return n;
}
function calcMean(nums){
    var total=nums.length;
    var sum=Number(calcSum(nums));
    var mean=sum/total, n=mean.toFixed(2);
    return n;
}
function calcVariance(nums){
    var mean= Number(calcMean(nums));
    var div=nums.length, top=0, numcopy=nums.slice(0);
    while(numcopy.length != 0){
        top=top+Math.pow(numcopy.pop()-mean,2)
    }
    top=top/div;
    var n=top.toFixed(2)
    return n;
}
function calcStdDev(nums){
    var stdev=Math.sqrt(Number(calcVariance(nums))), n=stdev.toFixed(2);
    return n;
}
function calcMode(nums){
    var freq = {}, max=0, modes=[]; 
  for (var i in nums) {
    freq[nums[i]] = (freq[nums[i]] || 0) + 1; 

    if (freq[nums[i]] > max) { 
      max = freq[nums[i]]; 
    }
  }

  for (var k in freq) {
    if (freq[k] == max) {
      modes.push(k);
    }
  }

  return modes.join(" ");

}