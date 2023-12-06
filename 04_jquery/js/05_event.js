/**
 * mouserover/mouseout
 *  - 자식요소 접근시에도 이벤트발생
 * mouseenter/mouseleave
 *  - 자식요소 접근시에도 이벤트발생 안함.
 */
$(".outer")
// .mouseover(() => {
//     console.log('mouseover');
// })
// .mouseout(() => {
//     console.log('mouseout');
// })
// .mouseenter(() => {
//     console.log('mouseenter');
// })
// .mouseleave(() => {
//     console.log('mouseleave');
// })
// hover이벤트는 존재하지 않는다.
.hover(() => {
    console.log('mouseenter');
}, () => {
    console.log('mouseleave');
});

$(title).hover((e) => {
    $(e.target).addClass('reverse');
}, (e) => {
    $(e.target).removeClass('reverse');
});

$(counter).on('click', (e) => {
    let n = $(e.target).html();
    $(e.target).html(--n);

    if(n == 0)
        $(e.target).off('click'); //이벤트핸들러 제거 
});

// 1회용
$(one).one('click', (e) => {
    console.log('🥩');
    $(e.target).html('🥩');
});

// triger event
$(trg).on('click', (e) => {
    $(counter).trigger('click'); // 클릭이벤트 발생 
});

$(memo).on('keyup', (e) => {
    const len = $("#len");
    len.html(e.target.textLength);
    e.target.textLength > 30 ? len.css('color', 'red') : len.css('color', '#000');
});
$(memoFrm).on('submit', (e) => {
    return ($("#memo").val().length < 30);

    // 초기화
    // jquery객체에는 reset이 없다.
    $(e.target).get(0).reset();
});