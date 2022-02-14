
$('#sortable').on({
    'mouseenter':function(){
	$(this).children('.editpager').removeClass("unvisible");
    },
    'mouseleave':function(){
	$(this).children('.editpager').addClass("unvisible");
    }
}, ".item");

//課題１
$('.item_submit').click(function(){
    var i = $('.form-control').val();
      
    var ls = $(".item").eq(0).clone();
    var cs = $(ls).children('p').text(i);
    
    $("#sortable").append(ls);

    $('.form-control').val("");
});

//課題２
//一番上
$('#sortable').on('click','.first-order', function() {
    var i = $(this).parent().parent();
    $("#sortable").prepend(i);
    $(this).parent('.editpager').addClass("unvisible");
});
//一番下
$('#sortable').on('click','.last-order', function() {
    var i = $(this).parent().parent();
    $("#sortable").append(i);
    $(this).parent('.editpager').addClass("unvisible");
});
//上
$('#sortable').on('click','.minus-order', function() {
    var i = $(this).parent().parent();
    $(i).insertBefore($(i).prev());
    $(this).parent('.editpager').addClass("unvisible");
});
//下へ
$('#sortable').on('click','.plus-order', function() {
    var i = $(this).parent().parent();
    $(i).insertAfter($(i).next());
    $(this).parent('.editpager').addClass("unvisible");
});



//課題３
$('#sortable').on('click','.delete-item', function() {
    if(confirm('本当に削除してよろしいですか？')){
	   $(this).parent().parent().find("p").remove();
    }
});



//課題４

$('#sortable').on('click','.edit-item', function() {
    var def = $(this).parent().parent().find("p").text();
    var origin = $(this).parent().parent().find("p").text("");
    console.log(def);

    var i = $(".form-control").clone().val(def);
    var j = $(".item_submit").clone();
    
    
    $(this).parent().parent().append(i).append(j);
    $(j).click(function(){
        var k = $(i).val();

        console.log(k);
        console.log(origin);

        r = $(origin).text(k);
        console.log(r);

        $(j).off();

        $(i).val("");

        $(i).remove();
        $(j).remove();

    });
    
});