var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            //English
            var replacedText = text.replace(/AI/g, "Genie");
            var replacedText = replacedText.replace(/Artificial Intelligence/gi, "Genie in a Bottle");

            //Finnish
            var replacedText = replacedText.replace(/tekoälyksi/gi, "lampun hengeksi");
            var replacedText = replacedText.replace(/tekoälyllä/gi, "lampun hengellä");
            var replacedText = replacedText.replace(/tekoälyillä/gi, "lampun hengillä");
            var replacedText = replacedText.replace(/tekoälyssä/gi, "lampun hengessä");
            var replacedText = replacedText.replace(/tekoälystä/gi, "lampun hengestä");
            var replacedText = replacedText.replace(/tekoälynä/gi, "lampun henkenä");
            var replacedText = replacedText.replace(/tekoälyjä/gi, "lampun henkiä");
            var replacedText = replacedText.replace(/tekoälyn/gi, "lampun hengen");
            var replacedText = replacedText.replace(/tekoälyä/gi, "lampun henkeä");
            var replacedText = replacedText.replace(/tekoäly/g, "lampun henki");
            var replacedText = replacedText.replace(/Tekoäly/g, "Lampun henki");


            var replacedText = replacedText.replace(/koneoppiminen/g, "lampun hierominen");
            var replacedText = replacedText.replace(/Koneoppiminen/g, "Lampun hierominen");

            var replacedText = replacedText.replace(/koneoppimista/g, "lampun hieromista");
            var replacedText = replacedText.replace(/Koneoppimista/g, "Lampun hieromista");

            var replacedText = replacedText.replace(/koneoppiminen/g, "lampun hierominen");
            var replacedText = replacedText.replace(/Koneoppiminen/g, "Lampun hierominen");

            var replacedText = replacedText.replace(/koneoppimisen/g, "lampun hieromisen");
            var replacedText = replacedText.replace(/Koneoppimisen/g, "Lampun hieromisen");

            var replacedText = replacedText.replace(/Koneoppimis/g, "Lampun hieromis");
            var replacedText = replacedText.replace(/Koneoppimis/g, "Lampun hieromis");




            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
