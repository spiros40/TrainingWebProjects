module.exports.getDate=()=>{
    let date=new Date();
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"};

    let day=date.toLocaleDateString("gr-GR", options);
    
    return day;
}

module.exports.getDay=()=>{
    let date=new Date();
    let options = {
        weekday:"long"};

    let day=date.toLocaleDateString("gr-GR", options);
    
    return day;
}