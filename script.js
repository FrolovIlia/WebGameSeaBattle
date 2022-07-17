
$('.game_field').mousemove(function(e){
    var target = this.getBoundingClientRect();
    var x = e.clientX - target.left;
    var y = e.clientY - target.top;
    $('#coord-live').html(x + ', ' + y);

});

$('.game_field').click(function(e){
    var target = this.getBoundingClientRect();
    var x = e.clientX - target.left;
    var y = e.clientY - target.top;
    $('#coord-click').html(x + ', ' + y);

    alert(x + ', ' + y +  + $('.game_field').width());
});


//TODO Нужно перевести координаты в номер ячейки.
// Для этого, делим размер поля на 10, получаем размер одной ячейки. А потом, делим нацело координату по х,
//     и соответствующую координату по y.