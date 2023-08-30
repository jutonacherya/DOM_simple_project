var statu = document.querySelector("h3");
var btn = document.querySelector("#Add");
var flag =0
 

    btn.addEventListener("click" ,function(){
        if(flag==0) {
        statu.innerHTML="Friends"
        statu.style.color="green"
        btn.innerHTML="Remove Friend"
        btn.style.backgroundColor="gray"
     flag=1
        }else{
   
            statu.innerHTML="Mutual Friend"
            statu.style.color="red"
            btn.innerHTML="Add Friend"
            btn.style.backgroundColor=" rgb(132, 202, 202)"
         flag=0
        
    
    }
    })
    






 
