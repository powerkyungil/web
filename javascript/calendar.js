//calender.js
var year = 2021;
var month = 10; // 0~11 이라서 내년1월이 찍힘

createCalendar(year, month); //매개값

function createCalendar(year, month) {
    var thisMonth = new Date(year, month - 1); //2021년 12월 1일
    var thisMonthDay = thisMonth.getDay(); //1일의 요일정보
    console.log(thisMonth.getDay()); //해당날짜의 요일정보: 0=> 일요일, 1=>월요일

    var today = new Date();
    //console.log(today.getDate());
    var todate = today.getDate();
    var days = ["일", "월", "화", "수", "목", "금", "토"]
    var str = "";
    str += "<table border='1'>";
    str += "<cation>" + year + "년" + month + "월" + "</cation>"
    str += "<thead>";
    for (var day of days) {
        str += "<th>" + day + "</th>";
    }
    str += "</thead>";
    str += "<tbody>";
    str += "<tr>";
    for (var i = 0; i < thisMonthDay; i++) {
        str += "<td></td>";
    }

    var lastDay = getLastDate(year, month);
    console.log(lastDay);
    for (var i = 1; i <= lastDay; i++) {
        if (i == todate) {
            str += "<td onclick= 'clickFnc(event)' class='active'>" + i + "</td>";
        } else {
            str += "<td onclick= 'clickFnc(event)'>" + i + "</td>";
        }

        if ((i + thisMonthDay) % 7 == 0) {
            str += "</tr><tr>";
        }
    }
    str += "</tr>";
    str += "</tbody>";
    str += "</table>";
    window.document.write(str); //window 생략가능

}

function getLastDate(year, month) {
    var result = -1;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return result = 31;
            break;
        case 2:
            return result = getYunYear(year) ? 29 : 28; //삼항연산자
            break;
        default:
            return result = 30;
            break;
    }

} //end of getLastDay()

function getYunYear() {
    // 년도 100으로 나눠지는 값 
    //4, 400 나누어지면 윤년 100 나누어지면 평년
    // if(year % 4 == 0 && year % 400 == 0) {
    //     return true;
    // } else if(year % 100 == 0) {
    //     return false;  
    // }


    if (year % 4 == 0) {
        if (year % 400 == 0) {
            return true;
        } else if (year % 100 == 0) {
            return false;
        }
        return true;
    }
    return false;
}

function clickFnc(e) {
    console.log(this);
    window.console.log(e.target.textContent); //this -> window 객체
    window.alert(e.target.textContent + "를 선택했습니다.");
}

// object 는 값을 가지고 속성(필드)
// object 는 기능 가지고 메소드(메소드);
var obj = {
    name: "홍길동",
    age: 15,
    getInfo: function() {
        return "이름은 " + this.name + ", 나이는 " + this.age + " 입니다";
    }
}
console.log(obj.getInfo());