var v1;
        window.console.log(typeof v1); //undefined type

        v1 = 10; //number type
        window.console.log(typeof v1);

        v1 = 'hello'; //string type
        window.console.log(typeof v1);

        v1 = true; //boolean type
        window.console.log(typeof v1);

        v1 = null; //object type
        window.console.log(typeof v1);

        var result = 10 + 20;
        result = '10' + '20';
        result = '10' / '5';
        
        var result = 30 * '2';
        console.log(result);

        var Result = 60;

        if(result == Result) {
            console.log("같다")
        } else {
            console.log("다르다")
        }

        window.document.write("Hello");
        window.document.write("<h1>Hello</h1>");

        var strTag = '<h1>Hello</h1>';
        strTag += '<ul><li><Apple><li>';
        strTag += '<li><Banana><li>';
        strTag += '</ul>'
        
        strTag = "result 변수에 들어있는 값 " + result;
        strTag = `result 변수에 들어있는 값 ${result}`;
        window.document.write(strTag);

        result = 6 / 4;
        document.write(result);

        if(result > 1) {
            document.write(`1보다 큼`)
        } else {
            document.write(`1보다 작음`)
        }

        var cnt = 10;
        for (var i=1; i<10; i++) {
            document.write(`${i} <br>`)
        }

        document.write(`<ul>`);
        while(cnt > 0) {
            document.write(`<li>i의값: ${cnt}</li>`);
            cnt--;
        }
        document.write(`</ul>`);

        document.write(`<ul>`);
        while(cnt) {
            document.write(`<li>i의값: ${cnt}</li>`);
            cnt--;
        }
        document.write(`</ul>`);

        // false: +0, -0, null, ``, undefined

        var obj = {}; //new Object();
        obj.id ='user1';
        obj.name = 'Hong';
        obj['phone'] = '010-1111-2222';

        obj = {
            id: 'user2',
            name: 'hwang',
            phone: '010-4455-8877'
        }
        var field = 'phone';
        console.log(obj);

        document.write(`<p>id: ${obj.id}</p>`);
        document.write(`<p>name: ${obj['name']}</p>`);
        document.write(`<p>phone: ${obj[field]}</p>`);
        
        var ary = []; // new Array();
        ary[0] = 'Hong';
        ary[1] = 'Hwang';
        ary[2] = 'Park';
        ary[3] = 100;
        ary[4] = {
            name: 'Amy',
            age: 15
        };
        delete ary[1];
        for(var i=0; i<ary.length; i++) {
            if(ary[i] != undefined) {
            console.log(ary[i]);
            }
        }

        console.log(Math.sign(-0))

        //primitive type
        var a = b = 10;
        a = 20;

        console.log(a, b);

        //reference type
        var obj1 = {
            name: 'Hwang'
        };

        var obj2 = obj1;
        obj2 = {
            name: 'Kim'
        };
        // 참조 타입을 다시보자
        console.log(obj1);

        var kim = {
            name: 'Kim',
            age: 15,
            phone:'010-4444-5555'
        }

        var lee = {
            name: 'Lee',
            age: 23,
            phone:'010-1111-2222'
        }

        var park = {
            name: 'Park',
            age: 21,
            phone:'010-6666-7777'
        }

        park.address = '대구 100번지'
        park['birth'] = '1995-05-05'

        //object일 경우에 for..in 반복문
        for(var field in park) {     //필드갯수만큼 반복
            console.log(field, park[field]);
        }
        
        console.clear();
        var objAry = [kim, lee, park];
        document.write('<table border="1">');

        // 배열일 경우 for..of 반복문
        for(var obj of objAry) { //for(String str : strList){}
            for(var field in obj) { 
                console.log(`${field}, ${obj[field]}`); //필드이름과 필드값을 출력
                document.write(`<li>${field}, ${obj[field]}</li>`)
            }
            console.log('----------------------------------')
        }
        document.write('</table>');