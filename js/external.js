/*
var a=10;
b=20;
let c=a+b;

document.write("the sum of "+a+" and "+b+" is " +c)
*/
function greeting()
{
    alert("WELCOME :) ")
}
function userName()
{
    var name;
    name=prompt("enter your name?");
document.getElementsByID('name').innerHTML="WELCOME,"+
name;
}
function oddEven()
{
    var num;
    num=parseInt(prompt("enter the number:"));
    if(num%2==0)
    {
        alert(num + "is Even")
    }
    else
    {
     alert(num + "is Odd")   
    }
}
function christmas()
{
    var month="December";
    var day="25";
if(month=="December" && day==12)
{
    alert("hurray!merry christmas")

}
else if(month=="December"&&(day>=20 / day<=30))
{
    alert("christmas week")
}
else
{
    alert("normal day")
}
}
function mulTable()
{
    
}


