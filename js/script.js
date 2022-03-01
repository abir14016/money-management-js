//function for getting input value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}
//function for getting income
function getIncome(){
    const income = getInputValue('income-field');
    if(income<0){
        document.getElementById('negative').style.display = 'block';
        document.getElementById('error-throw-income').style.display = 'inline';
    }
    else if(isNaN(income) == true){
        document.getElementById('not-a-number').style.display = 'block';
        document.getElementById('error-throw-income').style.display = 'inline';
    }
    else{
        return income;
    }
}
//function for getting totalExpenses
function getExpense(){
    const foodCost = getInputValue('food-field');
    const rentCost = getInputValue('rent-field');
    const clothesCost = getInputValue('clothes-field');
    const totalExpense = foodCost + rentCost + clothesCost;

    //error validation
    if(isNaN(foodCost) == true && isNaN(rentCost) == true && isNaN(clothesCost) == true){
        document.getElementById('not-a-number').style.display = 'block';
        document.getElementById('error-throw-food').style.display = 'inline';
        document.getElementById('error-throw-rent').style.display = 'inline';
        document.getElementById('error-throw-clothes').style.display = 'inline';
    }
    else if(isNaN(foodCost) == true && isNaN(rentCost) == true){
        document.getElementById('not-a-number').style.display = 'block';
        document.getElementById('error-throw-food').style.display = 'inline';
        document.getElementById('error-throw-rent').style.display = 'inline';
    }
    else if(isNaN(foodCost) == true && isNaN(clothesCost) == true){
        document.getElementById('not-a-number').style.display = 'block';
        document.getElementById('error-throw-food').style.display = 'inline';
        document.getElementById('error-throw-clothes').style.display = 'inline';
    }
    else if(isNaN(rentCost) == true && isNaN(clothesCost) == true){
        document.getElementById('not-a-number').style.display = 'block';
        document.getElementById('error-throw-rent').style.display = 'inline';
        document.getElementById('error-throw-clothes').style.display = 'inline';
    }
    else if(isNaN(foodCost) == true){
        document.getElementById('not-a-number').style.display = 'block';
        document.getElementById('error-throw-food').style.display = 'inline';
    }
    else if(foodCost<0){
        document.getElementById('negative').style.display = 'block';
        document.getElementById('error-throw-food').style.display = 'inline';
    }
    else if(isNaN(rentCost) == true){
        document.getElementById('not-a-number').style.display = 'block';
        document.getElementById('error-throw-rent').style.display = 'inline';
    }
    else if(rentCost<0){
        document.getElementById('negative').style.display = 'block';
        document.getElementById('error-throw-rent').style.display = 'inline';
    }
    else if(isNaN(clothesCost) == true){
        document.getElementById('not-a-number').style.display = 'block';
        document.getElementById('error-throw-clothes').style.display = 'inline';
    }
    else if(clothesCost<0){
        document.getElementById('negative').style.display = 'block';
        document.getElementById('error-throw-clothes').style.display = 'inline';
    }
    else{
        return totalExpense;
    }
}
//function for setting innerText
function setInnerText(fieldId,setvalue){
    const field = document.getElementById(fieldId);
    field.innerText = setvalue;
}
//error message remove function
function removeError(){
    document.getElementById('excesssive-saving-2').style.display = 'none';
    document.getElementById('error-throw-savings').style.display = 'none';
    document.getElementById('excesssive-saving').style.display = 'none';
    document.getElementById('excesssive-expense').style.display = 'none'; 
    document.getElementById('not-a-number').style.display = 'none';
    document. getElementById('negative').style.display = 'none';
    document.getElementById('error-throw-income').style.display = 'none';
    document.getElementById('error-throw-clothes').style.display = 'none';
    document.getElementById('error-throw-rent').style.display = 'none';
    document.getElementById('error-throw-food').style.display = 'none';
}
//handle calculation button
document.getElementById('calculation-button').addEventListener('click',function(){
    const income = getIncome();
    const totalExpense = getExpense();

    //error validation
    if(isNaN(income) == true){
        document.getElementById('not-a-number').style.display = 'block';
        document.getElementById('error-throw-income').style.display = 'inline';
    }
    else if(isNaN(totalExpense) == true){
        document.getElementById('not-a-number').style.display = 'block';
    }
    else if(income<0){
        document.getElementById('negative').style.display = 'block';
        document.getElementById('error-throw-income').style.display = 'inline';
    }
    else if(totalExpense>income){
        document.getElementById('excesssive-expense').style.display = 'block';
    }
    else{
        const balance = income - totalExpense;
        setInnerText('total-expense',totalExpense);
        setInnerText('balance',balance);
        removeError();
    }
});
//handle save button
document.getElementById('save-button').addEventListener('click',function(){
    const income = getIncome();
    const totalExpense = getExpense();
    const saveParcent = getInputValue('save-parcent-Field');
    //error validation
    if(isNaN(saveParcent) == true || isNaN(income) == true || isNaN(totalExpense)){
        document.getElementById('not-a-number').style.display = 'block';
        document.getElementById('error-throw-savings').style.display = 'inline'
    }
    else if(income<0){
        document. getElementById('negative').style.display = 'block';
        document.getElementById('error-throw-income').style.display = 'inline';
    }
    else if(totalExpense>income){
        document.getElementById('excesssive-expense').style.display = 'block'; 
    }
    else if(saveParcent > 100 || saveParcent < 0){
        document.getElementById('excesssive-saving').style.display = 'block';
        document.getElementById('error-throw-savings').style.display = 'inline'
    }
    else{
        const savingAmount = income * (saveParcent/100);
        const remainingBalance = (income-totalExpense)-savingAmount;
        if(savingAmount>(income-totalExpense)){
            document.getElementById('excesssive-saving-2').style.display = 'block';
            document.getElementById('error-throw-savings').style.display = 'inline';
        }
        else{
            setInnerText('saving-field',savingAmount);
            setInnerText('remaining-field',remainingBalance);
            removeError();
        }
    }
});