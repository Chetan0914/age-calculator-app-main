// Selecting the output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_date = document.querySelector(".output-day");
const sub_button = document.querySelector(".sub-button")

//selecting input elements
const input_year=document.getElementById("input-year");
const input_month=document.getElementById("input-month");
const input_date=document.getElementById("input-day");

//selecting error elements
const error_year = document.getElementById("error-year");
const error_month = document.getElementById("error-month");
const error_day = document.getElementById("error-day");

//button for calculating age
sub_button.addEventListener('click',calculateAge);

let isValue = false;

input_date.addEventListener('input',(e)=>{
    if (+input_date.value>31) {
        error_day.textContent = "Enter a valid date";
        isValue = false;
    }
    else{
        isValue=true;
        error_day.textContent = "";

    }
    if (+input_date.value===0) {
        isValue = false;
        error_day.textContent = "this field is required";
    }
});
input_month.addEventListener('input',(e)=>{
    if (+input_month.value>12) {
        error_month.textContent = "Enter a valid month";
        isValue = false;
    }
    else{
        isValue=true;
        error_month.textContent = "";

    }
    if (+input_month.value===0) {
        isValue=false;
        error_month.textContent = "this field is required";
    }
});
input_year.addEventListener('input',(e)=>{
   if (+input_year.value>new Date().getFullYear()) {
       error_year.textContent = "Enter valid year";
       isValue =false;
   }
   else{
        isValue=true;
        error_year.textContent="";
       }
   if(+input_year.value===0){
        isValue=false;
        error_year.textContent="This field is required";
       }
});
function calculateAge() {
    if (isValue) {
        const input_date = parseInt(document.getElementById("input-day").value);
        const input_month = parseInt(document.getElementById("input-month").value);
        const input_year = parseInt(document.getElementById("input-year").value);

        //fetching current date
        let today = new Date();
        let currentDay = today.getDate();
        let currentMonth = today.getMonth() + 1;
        let currentYear = today.getFullYear();
        
        //Calculating Age
        let ageYears = currentYear-input_year;
        let ageMonth = currentMonth-input_month;
        let ageDay = currentDay-input_date;

        //Adjusting age
        if (ageMonth<0|| (ageMonth===0 && ageDay<0)) {
            ageYears--;
            ageMonth +=12;
        }
        if (ageDay<0) {
            ageMonth--;
            const daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
            ageDay += daysInPreviousMonth;
        }
        output_date.textContent=ageDay;
        output_month.textContent=ageMonth;
        output_year.textContent=ageYears;

    }//end of outer if
}//end of function

