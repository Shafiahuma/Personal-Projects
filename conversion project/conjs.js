newkg= document.getElementById("kg")
newpound= document.getElementById("pound")
newerror=document.getElementById("error")
newsub= document.getElementById("submit")
//newload= document.getElementById("reload")
newsub.addEventListener("click",function(){
    //alert("right")
    //newkm.value=newmile.value
    if(newkg.value==="")
    {
        newerror.innerText="It can't be empty"
    }
    else
    {
        newerror.innerText=""
       newpound.value=newkg.value*2.20462
    }
})