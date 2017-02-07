function Table_Generator(){
    var num=parseInt(prompt("Enter Any Number:","2"));
    for(var i=1;i<=20;i++){
        var ans=num*i;
        document.write(num+"*"+i+"="+ans+".<br>");
    }
}


function Diamond_Pattern(){
    var level=parseInt(prompt("Enter Floors Of Pattern:","6"));
    for(var i=1;i<=level;i++){
        for(var k=i;k<=level-1;k++){
            document.write("&nbsp;");
        }
        for(var j=0;j<i;j++){
            document.write("*");
        }
        document.write("<br>");
    }
     for(var i=1;i<=level;i++){
         for(var j=0;j<i;j++){
            document.write("&nbsp;");
         }
         for(var k=i;k<=level-1;k++){
            document.write("*");
         }
         document.write("<br>");
    }
}


function Fibonacci_Series(){
    var first=1, second=1, sum;
    var terms=parseInt(prompt("Enter Number Of Terms:","5"));
    if(terms>2){
        document.write(first+","+second);
        for(var i=2;i<terms;i++){
            sum=first+second;
            document.write(","+sum);
            first=second;
            second=sum;
        }
        document.write(".");
    }
    else{
        if(terms==1)
            document.write(first+".");
        else
            document.write(first+","+second+".");
    }
}
