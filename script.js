var fib = [];
var n = prompt("Enter number of loops","0");

fib[0] = 1;
fib[1] = 1;
for(var i=2; i<=n; i++)
{
    fib[i] = fib[i-2] + fib[i-1];
}
alert(fib[n]);