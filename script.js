function firstLast6(x){
    if (x[0]==6){
        return true;
    }else if (x[x.length-1]==6){
        return true;
    }else{
        return false;
    }
}

function has23(x){
    if (x.includes(2)|| x.includes(3)){
        return true;
    }else{
        return false;
    }
}

function fix23(x){
    if (x[x.indexOf(3)-1]==2){
        x[x.indexOf(3)]=0;
    }
    return x;
}

function countYZ(x){
    x=x.toUpperCase();
    var count=0;
    for (var i=0;i<x.length;i++){
        if(x[i]=="Z"&&x[i+1]==" "||x[i]=="Y"&&x[i+1]==" "){
            count+=1;
        }
    }
    if(x[x.length-1]=="Z"||x[x.length-1]=="Y"){
        count+=1;
    }
    return count;
}

function endOther(x,y){
    x=x.toLowerCase();
    y=y.toLowerCase();
    if (x.endsWith(y)||y.endsWith(x)){
        return true;
    }else{
        return false;
    }
}

function starOut(x){
    var version="";
    for(var i=0;i<x.length;i++){
        if (x[i] !="*"){
            if (x[i-1] !="*"){
                if (x[i+1]!="*"){
                    version +=x[i];
                }
            }
        }
    }
    return version;
}

function getSandwich(x){
    var firstB=x.indexOf("bread");
    var secondB=x.lastIndexOf("bread");
    if (firstB==secondB){
        return "";
    }else if (firstB==-1||secondB==-1){
        return "";
    }else{
        return x.substring(firstB+5,secondB);
    }
}

function canBalance(x){
    var sum=0;
    var second=0;
    for (var i=0;i<x.length;i++){
        sum+=x[i];
        for (var s=i+1;s<x.length;s++){
            second+=x[s];
        }
        if(sum==second){
            return true;
        }
        second=0;
    }
    return false;
}

function countClumps(x){
    var count=0;
    for (var i=0;i<x.length;i++){
        if (x[i]==x[i+1]&&x[i]!=x[i-1]){
            count++;
        }
    }
    return count;
}

function evenlySpaced(a,b,c){
    if(a+1==b&&b+1==c||c-a==1&&b!=a){
        return true;
    }else if (c-b==a&&b!=a&&b>a){
        return true;
    }else if (b-a==c){
        return true;
    }else if(a-c==b){
        return true;
    }else if(a==c&&b==c){
        return true;
    }else{
        return false;
    }
}

function tester() {

    //document.getElementById("output").innerHTML = firstLast6(x);
    //document.getElementById("output").innerHTML = has23(x);
    //document.getElementById("output").innerHTML = fix23(x);
    //document.getElementById("output").innerHTML = countYZ(x);
    //document.getElementById("output").innerHTML = endOther(x,y);
    //document.getElementById("output").innerHTML = starOut(x);
    //document.getElementById("output").innerHTML = getSandwich(x);
    //document.getElementById("output").innerHTML = canBalance(x);
    //document.getElementById("output").innerHTML = countClumps(x);
    document.getElementById("output").innerHTML = evenlySpaced(a,b,c);
}
