/**
 * Age Calculator
 * @param {*} name 
 * @param {*} age 
 * @returns Age
 */
function ageCal (name, age){
    let date = new Date();
    let ageCalRes = date.getFullYear() - age;
    let ageComment = ageStatus(ageCalRes)
    return `
    <div class = "alert alert-${ageComment.status}">
    Hello ${name}, Tomar Boyos ${ageCalRes} Bosor & Tumi ${ageComment.comment}
    </div> `
};

function ageStatus(Age){

 if (Age > 0 && Age < 10 ){
     return {
         comment : 'Babu',
         status : 'primary'
     }

}else if(Age >= 10 && Age < 18 ){
return {
    comment : 'Kishor',
    status : 'secondary'}

}else if(Age >= 18 && Age < 36 ){
return {
    comment : 'Jubok',
    status : 'success'} 

}else if(Age >= 36 && Age < 50 ){
return {
    comment : 'Boyosko',
    status : 'info'}
        
}else if(Age >= 50 && Age < 70 ){
return {
    comment : 'Briddho',
    status : 'warning'}
            
}else{
return {
    comment : 'Jin',
    status : 'danger'}
                
}
}

// =========== Marriage Checker ==============


/**
 * Marriage Checker
 * @param {*} name 
 * @param {*} m_age 
 * @returns age status
 */
function marriage_check(name, m_age, m_gender){
    let m_date = new Date();
    let marriage_age = m_date.getFullYear() - m_age;
    let congra = "Congratulations,";
    let p_status = "Tomar Biyer Boyos Hoyeche. Tomar Jonne Sundor Patri Royeche";
    let sorry = "Sorry!";
    let n_status = "Tomar Biyer Boyos Hoini.";
    let kom_ase = 18 - marriage_age;
    let permission = "Tomar Boyos Bashi. Miyer Thake Onumoti Nite Hobe.";
    let patri = "Tomar Jonne Kono Patri Nei";
    let name_con = con_sorry_name(m_gender);

if (marriage_age > 0 && marriage_age < 17){ 

    return `
    <div class="out_put">
        <h1 class="congra text-center text-warning">${sorry} ${name_con}.</h1>
        <h4>Name  <span class="span-1">: ${name}.</span></h4>
        <h6>Age  <span class="span-2">: ${marriage_age} Years.</h4>
        <h6>Gender <span class="span-3">: ${m_gender}.</span></h6>
        <h6>Status <span class="span-4">:</span><span class="status"> ${n_status}. Tumi ${kom_ase} Year Por Biye Korte Parbe.</span></h6>
    </div>
 `
}else if (marriage_age >= 18 && marriage_age <= 35){ 
    return `
    <div class="out_put">
        <h1 class="congra text-center text-success">${congra} ${name_con}.</h1>
        <h4>Name  <span class="span-1">:</span> ${name}.</h4>
        <h6>Age  <span class="span-2">:</span> ${marriage_age} Years.</h6>
        <h6>Gender <span class="span-3">:</span> ${m_gender}.</h6>
        <h6>Status <span class="span-4">:</span><span class="status">${p_status}.</span></h6>
    </div>
 `
}else if (marriage_age > 35 && marriage_age < 55){ 
    return `
    <div class="out_put">
        <h1 class="congra text-center text-warning">${sorry} ${name_con}.</h1>
        <h4>Name  <span class="span-1">:</span> ${name}.</h4>
        <h6>Age  <span class="span-2">:</span> ${marriage_age} Years.</h6>
        <h6>Gender <span class="span-3">:</span> ${m_gender}.</h6>
        <h6>Status <span class="span-4">:</span><span class="status"> ${permission}.</span></h6>
    </div>
 `
}else{
    return`<div class="out_put">
    <h1 class="congra text-center text-warning">${sorry} ${name_con}.</h1>
    <h4>Name  <span class="span-1">:</span> ${name}. </h4>
    <h6>Age  <span class="span-2">:</span> ${marriage_age} Years.</h6>
    <h6>Gender <span class="span-3">:</span> ${m_gender}.</h6>
    <h6>Status <span class="span-4">:</span><span class="status">${patri}.</span></h6>
</div>
`
}}

function con_sorry_name(gender){

    if(gender == 'Male'){
        return `Sir`
    }else if(gender = 'Fenmale'){
        return `Madam`
    }else{
        return`Wrong`
    }



}