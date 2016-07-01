     var a=prompt("enter value of a","");
     var b=prompt("enter value of b","");
     var c=prompt("enter value of c","");
function calculate()
    {
        var disc=Math.sqrt(b*b-4*a*c);
        var denominator= 2*a;
        
        var root1=(-b+disc)/denominator;
        var root2=(-b-disc)/denominator;
    document.write("first root is:"+root1+"<br>");
    document.write("second root is:"+root2+"<br>");    
    }
    
