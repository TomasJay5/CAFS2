let groupmembers = +prompt("enter group members count:");

if (groupmembers == 0){ 
    
    alert("no group");

}else if(groupmembers === 1){
    
    alert("solo group");

}else if(groupmembers === 2){
    
    alert("duo");

}else if(groupmembers === 3){
    
    alert("trio");

}else if(groupmembers === 4){
    
    alert("quartet");

}else if(groupmembers > 4){
    
    alert("big group");
}else {
    alert("please enter a number");
}