const 이름 = document.getElementById("userName")
const 나이 = document.getElementById("userAge")
const 성별 = document.getElementById("userGender")

function printJSObject() {
    const value1 = 이름.value
    const value2 = 나이.value
    const value3 = 성별.value

    
    const user = {이름 : value1, 나이 : value2, 성별 : value3};
 
    console.log(user);
}



// 예시 답안
function printJSObject (){
    const userName = document.getElementById("userName")
    const userAge = document.getElementById("userAge")
    const userGender = document.getElementById("userGender")

    const userInfo = {
        이름 : userName.value,
        나이 : userAge.value,
        성별 : usergender.value,
    }
    console.log(userInfo);
}