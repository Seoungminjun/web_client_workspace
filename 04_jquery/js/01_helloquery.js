/**
 * jQuery
 *  - javascript 라이브러리(기능구현이 된채로 제공되는 코드뭉치)
 *  - 브라우져간 호환이슈, DOM제어, 이벤트처리등을 간결히 사용할 수 있도록 지원
 *  - jquery에서 slim버젼 절때쓰지말기 
 * 
 *  1. jquery.js 다운로드 후 서버에서 함께 제공
 *  2. CDN(Content Delivery Network) 웹상의  jquery.js를 클라이언트가 직접 다운로드
 * 
 * 
 * jQuery방식의 이벤트핸들러 등록
 */
$("#btn1").on('click', (e) => {
    console.log('🥩🥩🥩');
});

$("#btn2").on('click', (e) => {
    console.log('🍗🍗🍗');
});