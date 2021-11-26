<script>
        // 함수
        function sum(a, b) {
            var result = a + b; // 지역변수
            return result;
        }

        var result = sum(10); //전역변수 10+undefined = NaN
        console.log(result);

        function getSum() {
            var lnth = arguments.length;
            for(var i=0; i<lnth; i++) {
                sum += arguments[i];
            }
            return sum;
        }

        result = getSum(1, 2, 3, 4, 5, 6, 7);
        console.log(result);

        var fnc = function(n1 = 1, n2 = 1) {
            return n1 * n2;
        }
        //fnc(3, 5);
        console.log(fnc(3,5));
        var otherFnc = fnc;
        console.log(otherFnc(2, 10));

        var students = [
            {name:"홍길동", math: 80, eng: 90},
            {name:"김수미", math: 85, eng: 75},
            {name:"김민수", math: 90, eng: 80}
        ];
        function makeTableList(ary) {
            var str = "<table border='1'>";
            var obj = ary[0]; // {name:"홍길동", math: 80, eng: 90}
            str += "<thead>";
            for(var field in obj) {
                str += "<th>" + field + "</th>";
            }

            str += "</thead><tbody>"
            for(var i=0; i<ary.length; i++) {
                str += "<tr><td>" + ary[i].name + "</td><td>" + ary[i].math + "</td><td>" + ary[i].eng + "</td></tr>"
            }
            str += "</tbody></table>";
            document.write(str);
        }

        makeTableList(students);
    </script>