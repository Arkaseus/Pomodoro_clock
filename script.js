let mm=0,ss=0;
let strmm="00",strss="00";

let bmm=0,bss=0;
let stime=1,btime=0;
let iid,iid2;
let session=0;
let breakc=0;
let flag=1;

function start()
{   
        mm=stime;
        ss=0;
        iid=setInterval(counter,100);
        
        if(stime>0)
        { 
            flag=1;
            document.getElementById("session").style="color:yellow";
            document.getElementById("session").innerHTML=`Session ${session}`
             session++;
        }        
    
       document.getElementById("btnstart").innerHTML="Pause";
       document.getElementById("btnstart").setAttribute("onclick","pause()");

       deactive_btn();
}

function resume(){
    if(flag==2)
    {
       iid2=setInterval(counter2,100);

    }
    else{
       iid=setInterval(counter,100);
    } 

    document.getElementById("btnstart").innerHTML="Pause";
    document.getElementById("btnstart").setAttribute("onclick","pause()");

}
function pause(){

    clearInterval(iid);
    clearInterval(iid2);
    
        document.getElementById("btnstart").innerHTML="Start";
        document.getElementById("btnstart").setAttribute("onclick","resume()");
    
    }

function counter()
{ 
    if(mm!=0 || ss>=0)
    { 
        if(mm>0 && ss==0)
        {
            ss=59;
            mm--;
        }
      
        strss=(ss<10)? '0'+ss : ss;
        strmm=(mm<10)? '0'+mm : mm;

        document.getElementById("u").innerHTML=`${strmm}:${strss}`;
        ss--;
    }
    else{
         clearInterval(iid);

          mm=btime;
          ss=0;
          if(btime>0)
          {  flag=2;
             breakc++;
             document.getElementById("session").style="color:#17f82a";
             document.getElementById("session").innerHTML=`Break ${breakc}`
          }
          iid2=setInterval(counter2,100);
        } 
}

function counter2(){
    
    if(mm!=0 || ss>=0)
    {  
    
        if(mm>0 && ss==0)
        {
            ss=59;
            mm--;
        }
    
        strss=(ss<10)? '0'+ss : ss;
        strmm=(mm<10)? '0'+mm : mm;

        document.getElementById("u").innerHTML=`${strmm}:${strss}`;

        ss--;
    }
    else
    {
        clearInterval(iid2);
        start();
    }

}

function sup(){
    stime++;
    document.getElementById("sid").innerHTML=`${stime} min`;
}
function sdown(){
    if(stime>1)
    { stime--;
     document.getElementById("sid").innerHTML=`${stime} min`;
    }
}

function bup(){
    btime++;
    document.getElementById("bid").innerHTML=`${btime} min`;
}
function bdown(){
    if(btime>0)
    { btime--;
     document.getElementById("bid").innerHTML=`${btime} min`;
    }
}



function reset()
{
    mm=0;
    ss=0;
    session=1;
    breakc=0;
    document.getElementById("session").innerHTML=`Session ${session}`
    clearInterval(iid);
    clearInterval(iid2);
    document.getElementById("u").innerHTML="00:00";

    document.getElementById("btnstart").innerHTML="Start";
    document.getElementById("btnstart").setAttribute("onclick","start()");

    active_btn();

}

function active_btn(){

    document.getElementById("btn1").setAttribute("onclick","sdown()");
    document.getElementById("btn2").setAttribute("onclick","sup()");
 
    document.getElementById("btn3").setAttribute("onclick","bdown()");
    document.getElementById("btn4").setAttribute("onclick","bup()");
 
}

function deactive_btn(){

    document.getElementById("btn1").setAttribute("onclick","");
    document.getElementById("btn2").setAttribute("onclick","");
 
    document.getElementById("btn3").setAttribute("onclick","");
    document.getElementById("btn4").setAttribute("onclick","");
}