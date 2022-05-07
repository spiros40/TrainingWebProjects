

//returns full date
module.exports.getDate = function(){
    let date=new Date();

    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"};

    let day=date.toLocaleDateString("gr-GR", options);
    
    return day;
}

// return week day
module.exports.getDay = function(){
    let date=new Date();

    let options = {
        weekday:"long" };

    let day=date.toLocaleDateString("gr-GR", options);
    
    return day;
}