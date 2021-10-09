let a;

function show_hide() {
    if (a==1)
    {
        document.getElementById("forms").style.display="none";
        return a=0;
    }

    else
    {
        document.getElementById("forms").style.display="inline";
        return a=1
    }
}