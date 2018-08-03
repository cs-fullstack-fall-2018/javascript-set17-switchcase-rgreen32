var input = prompt("GIMME A LETTER GRADE");
input.toLowerCase();
switch (input) {
    case("a"):
        alert("100 - 90");
        break;

    case("b"):
        alert("89 - 80");
        break;

    case("c"):
        alert("79 - 70");
        break;

    case("d"):
        alert("69 - 60");
        break;

    default:
        alert("below 60");
        break;
}