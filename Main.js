/*spouští fci při otevření okna*/
window.onload = function chordFromSuperMusic() {
    /*u elementů označených tímto tagem provede nasledující*/
    let str = document.getElementById("text-akordy").innerHTML;
        /*vytvoř novou proměnou a přičítej k ní 1 dokud se hodnota proměné nebude rovnat počtu písmen v elemtu... Takt oprojedem celý text*/
        for (let index = 0; index < str.length; index++) {
            let c = str[index];
            /*když se znak rovná symbolu, přiřaď ho do ccs třídy*/
            if (c == "[") {
                str = str.replace("[", "<em>");
            }else if (c == "]") {
                str = str.replace("]", "</em>");
            }   
        }
        document.getElementById("text-akordy").innerHTML = str;
}