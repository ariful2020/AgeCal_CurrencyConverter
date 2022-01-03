// =============== Age Calculation =====================

const name = document.querySelector('#name');
const year = document.querySelector('#year');
const sub_form = document.querySelector('#sub_form');
const result = document.querySelector('.result');

sub_form.addEventListener ('submit', (e) => {
    e.preventDefault();
    let Name = name.value;
    let Year = year.value;
    let nPattern = /^[a-zA-Z ]*$/;
    let yPattern = /^[0-9]{4,4}$/;
    
    name.style.border = (Name == '') ? "1px solid red" : "1px solid #ced4da";
    year.style.border = (Year == '') ? "1px solid red" : "1px solid #ced4da";
    
    
if(Name == '' || Year == ''){
    result.innerHTML = `<div class="alert alert-success text-center" >All Field Required!</div>`

    name.value = "";
    year.value = "";
}else if (nPattern.test(Name) == false || yPattern.test(Year) == false ){
    result.innerHTML = `<p class= "alert alert-warning">Name must be letters and years must be numbers.</p>`;
    name.value = "";
    year.value = "";
}else{
    result.innerHTML = ageCal (Name, Year);
    name.value = "";
    year.value = "";
} 
})

// ================= Currency Converter ==================

const con_form = document.querySelector('#Currency_con-form');
const amount_here = document.querySelector('#Amount_here');
const cor_select_from = document.querySelector('#cor_select');
const cor_select_to = document.querySelector('#cor_select_2');
const cal_result = document.querySelector('#cal_result');
const fa_dollar_sign = document.querySelector('.fa-dollar-sign')
const fa_pound_sign = document.querySelector('.fa-pound-sign')
const fa_euro_sign = document.querySelector('.fa-euro-sign')



con_form.onsubmit = (e) => {
    e.preventDefault()
    let amount = amount_here.value;
    let from_value = cor_select.value;
    let to_value = cor_select_to.value;
    let first_con_result = amount * from_value;
    let con_result = first_con_result / to_value
    
    amount_here.style.border = (amount == '') ? "1px solid red" : "1px solid #ced4da";
    cor_select.style.border = (from_value == 0) ? "1px solid red" : "1px solid #ced4da";
    cor_select_to.style.border = (to_value == 0) ? "1px solid red" : "1px solid #ced4da";
    
    
    if (amount == '' || from_value == 0 || to_value == 0){
        cal_result.innerHTML = `<span class=" text-success"> All Field Required! </span>` 
    }else if (to_value == 1){
        cal_result.innerHTML = `<p class="text-success">Congratulations, Your Total Amount ${con_result.toFixed(2)} BDT.</p>` 
    }else if (to_value == 85){
        cal_result.innerHTML = `<p class="text-success">Congratulations, Your Total Amount ${con_result.toFixed(2)} DOLLAR.</p>` 
    }else if (to_value == 67){
        cal_result.innerHTML = `<p class="text-success">Congratulations, Your Total Amount ${con_result.toFixed(2)} DOLLAR.</p>` 
    }else if (to_value == 100){
        cal_result.innerHTML = `<p class="text-success">Congratulations, Your Total Amount ${con_result.toFixed(2)} EURO.</p>` 
    }else if (to_value == 115){
        cal_result.innerHTML = `<p class="text-success">Congratulations, Your Total Amount ${con_result.toFixed(2)} Pound.</p>` 
    }else{
        cal_result.innerHTML = `<p class="text-warning">WARNING! Wrong Number.</P>`
    }
    cal_result.style.border="1px solid #198754"
    amount_here.value = "";
    cor_select.value = 0;
    cor_select_to.value = 0;
}

// ================= Marriage Calculation ============= 

const marriage_cal = document.querySelector('#marriage_cal');
const first_name = document.querySelector('.first_name');
const last_name = document.querySelector('.last_name');
const marriage_year = document.querySelector('#marriage_year');
const gender = document.querySelector('#gender');
const m_check_result = document.querySelector('#m_check_result');

marriage_cal.onsubmit = (e) => {
    e.preventDefault();
let f_name = first_name.value;
let l_name = last_name.value;
let name = f_name + ' ' + l_name;
let m_year = marriage_year.value;
let m_gender = gender.value;
let m_n_Pattern = /^[a-zA-Z ]*$/;
let m_y_Pattern = /^[0-9]{4,4}$/;

first_name.style.border = (f_name == '') ? "1px solid red" : "1px solid #ced4da";
last_name.style.border = (l_name == '') ? "1px solid red" : "1px solid #ced4da";
marriage_year.style.border = (m_year == '') ? "1px solid red" : "1px solid #ced4da";
gender.style.border = (m_gender == 0) ? "1px solid red" : "1px solid #ced4da";



if (f_name == '' || l_name == '' || m_year == '' || m_gender == 0){
    m_check_result.innerHTML = `<h3 class= "alert alert-warning text-center">Warning! All Field Required.</h3>`
    
}else if (m_n_Pattern.test(f_name) == false || m_n_Pattern.test(l_name) == false || m_y_Pattern.test(m_year) == false){
    m_check_result.innerHTML = `<h5 class= "alert alert-warning text-center">Name must be letter and year must be number.</h5>`
}else{
    m_check_result.innerHTML = marriage_check(name, m_year, m_gender);
}

first_name.value = '';
last_name.value = '';
marriage_year.value = '';
gender.value = 0;


}