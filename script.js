function typeWriter(elementId, text, delay) {
    var i = 0;
    var txt = text;
    let isAutoScrolling = true;

    document.addEventListener('mousedown', function (event) {
        if (event.button === 0) {
            isAutoScrolling = false;
        }
    });

    document.addEventListener('touchstart', function (event) {
        isAutoScrolling = false;
    });

    function type() {
        if (i < txt.length) {
            document.getElementById(elementId).innerHTML += txt.charAt(i);
            i++;
            setTimeout(type, delay);

            if (isAutoScrolling == true) {
                // document.getElementById("myElement").scrollIntoView();
                const myElement = document.getElementById("myElement");
                myElement.scrollTop = myElement.scrollHeight;

            }
        } else {
            return;
        }
    }

    type();
}
