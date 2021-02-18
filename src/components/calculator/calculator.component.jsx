function add (a, b) {
    //the following converts the strings into decimals if there are any comma's
    // in the strings.
    var aa = a*1;
    var bb = b*1;
    console.log(typeof(aa));
    console.log(typeof(bb));
    return aa+bb;
}

function sub (a, b) {
    return a-b;
}

function multi (a, b) {
    return a*b;
}

function div (a, b) {
    return a/b;
}

export  {add, multi, sub, div};

