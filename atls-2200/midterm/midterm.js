// (function() {
//     // Add event listener
//     document.addEventListener("mousemove", parallax);
//     const elem = document.querySelector("#test");
//     // Magic happens here
//     function parallax(e) {
//         let _w = window.innerWidth/2;
//         let _h = window.innerHeight/2;
//         let _mouseX = e.clientX;
//         let _mouseY = e.clientY;
//         let _depth1 = `${50 - (_mouseX - _w) * -0.03}% ${50 - (_mouseY - _h) * -0.03}%`;
//         let _depth2 = `50% 50%`;
//         let _depth3 = `${50 - (_mouseX - _w) * -0.03}% ${50 - (_mouseY - _h) * -0.03}%`;
//         let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//         console.log(x);
//         elem.style.backgroundPosition = x;
//     }

// })();
(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const lv1 = document.querySelector("#level_1");
    const lv3 = document.querySelector("#level_3");
    const lv4 = document.querySelector("#level_4");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        // 1
        let lv1_lTemp = (30 - (((_mouseX/_w) - 1) * -8));
        let lv1_tTemp = (50 - (((_mouseY/_h) - 1) * -8));
        //3
        let lv3_lTemp = (60 - (((_mouseX/_w) - 1) * 5));
        let lv3_tTemp = (50 - (((_mouseY/_h) - 1) * 5));
        //4
        let lv4_lTemp = (50 - (((_mouseX/_w) - 1) * 2));
        let lv4_tTemp = (50 - (((_mouseY/_h) - 1) * 2));
        // ~~~
        // 1
        lv1.style.left = lv1_lTemp.toString() + "%";
        lv1.style.top = lv1_tTemp.toString() + "%";
        //3
        lv3.style.left = lv3_lTemp.toString() + "%";
        lv3.style.top = lv3_tTemp.toString() + "%";
        //4
        lv4.style.left = lv4_lTemp.toString() + "%";
        lv4.style.top = lv4_tTemp.toString() + "%";
    }

})();