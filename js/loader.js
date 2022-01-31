
    var myVar;
        
    function myFunction() {
        myVar = setTimeout(showPage, 4000);
    }

    function showPage() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("re-cont").style.display = "block";
    AOS.refresh();//recalculate 
    }
