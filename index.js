
function ip1(){
    var num = document.getElementById("number").value;
    var isprime;
    var content ='';
    for (let i = 2 ; i < num ; i++) {
       isprime = 1;
        for (let j =2 ; j < i ; j++) {
            if (i% j === 0 ){
                isprime = 0;
                break;
            } 
        }
        if(isprime === 1){
            content += i + '  ';
            console.log(i);
            document.getElementById("result").innerHTML= (content);
        }
    }
}

function EandO(){
    var even ='';
    var odd ='';
    for (var i = 1 ; i < 100 ; i++) {
        if (i % 2 === 0 ){
            even += i + ', ';
        }
        if(i % 2 !==0){
            odd += i + ', ';
        }  
    }
    document.getElementById("Rs").value= ("số chẵn : "+even +"\n" +"số lẻ : "+odd)
}

function sum(){
    var sum = 0;
    var n = 10000;
    for (var i=1 ; i < n ; i++){
        sum = sum + i;
       if (sum >= n ){
        
        break;
    }
    document.getElementById("Rs1").innerHTML = ("so nguyen duong nho nhat co tong lon hon 10000 la : "+(i+1))
    console.log((i));
}
}

function sn(){
    var x = Number(document.getElementById("numX").value);
    var n =  Number(document.getElementById("numN").value);
    var sum =0;
    for (var i = 1 ; i <= n ; i++){
            
            console.log(Math.pow(x,i))
            sum += Math.pow(x,i);
        document.getElementById("Rs2").innerHTML = ("Tổng="+sum)
    }
}
sn();

function giaithua(){
    var n = Number(document.getElementById("numn").value);
    var sum = 1;
    for (var i = 1 ; i <= n ; i++){
        sum *= i;
        document.getElementById("Rs3").innerHTML = ("giai thừa ="+sum)
    }
}

function lechan(){
    var div = document.getElementsByClassName("div");
    for (var i =0 ; i < div.length;i++){
        if (i%2==0){
            div[i].style.display="block";
            div[i].style.backgroundColor="red";

        }else{
            div[i].style.display="block";
            div[i].style.backgroundColor="blue";
        }
    }
}

function dem(){
    var n=0;
    for (var i=0 ; i <=1000;i++){
        if (i%3==0){
            n++;
        }
    }
    document.getElementById("dem").innerHTML=("Số chia hết cho 3 nhỏ hơn 1000: " + n);
    console.log(n);
}