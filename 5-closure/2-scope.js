var a = 1;

var func1 = function() {
    var b = 2;
    var func2 = function() {
        var c = 3;
        console.log(b);
        console.log(a)
    }
    func2();
    console.log(c);
}

func1();