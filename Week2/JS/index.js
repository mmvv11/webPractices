// img 태그의 속성을 수정합니다.

// 1. imgTag 변수를 선언하고 그곳에 img 태그 객체를 선언합니다.
var imgTag = document.getElementsByTagName("img")[0];

// 2. imgTag에 있는 src를 변경합니다.
imgTag.src = "https://www.fillmurray.com/640/360";

//  h1 태그의 css를 수정합니다.

// 1. h1Tag 변수를 선언하고 그곳에 h1 태그 객체를 선언합니다.
var h1Tag = document.getElementsByTagName("h1")[0];

// 2. h1Tag에 있는 css를 변경합니다.
h1Tag.style.color = "red";

// img 태그에 클릭 이벤트를 연결합니다.
imgTag.addEventListener("click", function() {
    alert("hi");
})