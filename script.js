function isLeadZero()
{
    var t=document.getElementById("t1").value;
    return t.charAt(0)=="0";
}
function isDecExists(){
    var t=document.getElementById("t1").value;
    return t.indexOf(".")>=0;
}
var opr=false;

function addText(v){
    var t=document.getElementById("t1");

switch(v)
{
        case "0":
            if( isDecExists() || ! isLeadZero())
                t.value+=v;
            break;
        case ".":
                if(! isDecExists())
                    t.value+=v;
            break;
        default:
                if((isLeadZero() && ! isDecExists()) || opr)
                    t.value=v;
                else
                    t.value+=v;
    }
    opr=false;
}
    function operate(op){
        opr=true;
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
            if(t2.value.length==0)
                t2.value=t1.value+" "+op;
            else{
                var str=t2.value.split(" ");
                var t=str[str.length-1];
                t2.value+=" "+t1.value+" "+op;
                var x=parseFloat(t3.value);
                var y=parseFloat(t1.value);

                switch(t){
                    case "+": t1.value=x+y; break;
                    case "-": t1.value=x-y; break;
                    case "/": t1.value=x/y; break;
                    case "*": t1.value=x*y; break;
                    case "%": t1.value=x*y/100; break;

                }
            }
            t3.value=t1.value;
            if(op=="=")
                {
                    t2.value="";
                    t3.value="";
                }
    }
    function init(){
        opr=false;
        document.getElementById("t1").value="0";
        document.getElementById("t2").value="";
        document.getElementById("t3").value="";
    }
    function bkspc(){
        opr=false;
        var t=document.getElementById("t1").value;
        t=t.substring(0,t.length-1);
        document.getElementById("t1").value=t;

    }
    function sqrt(){
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
        t1.value=Math.sqrt(parseFloat(t1.value));
        opr=false;
        t3.value=t1.value;
        t2.value="";
    }
    function tgl(){
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
        var v=t1.value;
        t1.value=v*-1;
        opr=false;
        t3.value=t1.value;
        t2.value="";
    }
    function inv(){
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
        var v=t1.value;
        t1.value=1/v;
        opr=false;
        t3.value=t1.value;
        t2.value=" ";
    }
    function sin(){
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
        var v=t1.value;
        t1.value=Math.sin(v);
        opr=false;
        t3.value=t1.value;
        t2.value=" ";
    }
    function cos(){
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
        var v=t1.value;
        t1.value=Math.cos(v);
        opr=false;
        t3.value=t1.value;
        t2.value=" ";
    }
    function tan(){
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
        var v=t1.value;
        t1.value=Math.tan(v);
        opr=false;
        t3.value=t1.value;
        t2.value=" ";
    }
    function log(){
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
        var v=t1.value;
        t1.value=Math.log(v);
        opr=false;
        t3.value=t1.value;
        t2.value=" ";
    }
    function ln(){
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
        var v=t1.value;
        t1.value=Math.ln(v);
        opr=false;
        t3.value=t1.value;
        t2.value=" ";
    }
    function pi(){
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
        var v=t1.value;
        t1.value=3.14159265359;
        opr=false;
        t3.value=t1.value;
        t2.value=" ";
    }
    function sq(){
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
        var v=t1.value;
        t1.value=v*v;
        opr=false;
        t3.value=t1.value;
        t2.value=" ";
    }
    function cube(){
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
        var v=t1.value;
        t1.value=v*v*v;
        opr=false;
        t3.value=t1.value;
        t2.value=" ";
    }
    function exp()
    {
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
        var v=t1.value;
        t1.value=Math.exp(v);
        opr=false;
        t3.value=t1.value;
        t2.value=" ";
    } 
    function fact()
    {
        var t1=document.getElementById("t1");
        var t2=document.getElementById("t2");
        var t3=document.getElementById("t3");
        var v=t1.value;
        let pro=1;
        for(var i=1;i<=v;i++)   pro=pro*i;   
        t1.value=pro;
        opr=false;
        t3.value=t1.value;
        t2.value=" ";
    }