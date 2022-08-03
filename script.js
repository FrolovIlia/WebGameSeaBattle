let data = {
    "shipTypes": {
        "carrier": { "size": 5, "count": 1 },
        "battleship": { "size": 4, "count": 1 },
        "cruiser": { "size": 3, "count": 1 },
        "submarine": { "size": 3, "count": 1 },
        "destroyer": { "size": 2, "count": 1 }
    },
    "layout": [
        { "ship": "carrier", "positions": [[2,9], [3,9], [4,9], [5,9], [6,9]] },
        { "ship": "battleship", "positions": [[5,2], [5,3], [5,4], [5,5]] },
        { "ship": "cruiser", "positions": [[8,1], [8,2], [8,3]] },
        { "ship": "submarine", "positions": [[3,0], [3,1], [3,2]] },
        { "ship": "destroyer", "positions": [[0,0], [1,0]] }
    ]
}


$('.game_field').click(function(e){
    const target = this.getBoundingClientRect();
    const y = e.clientX - target.left;
    const x = e.clientY - target.top;
    const size_sect = $('.game_field').width() / 10;

    let coordinate_x = Math.floor(x/size_sect);
    let coordinate_y = Math.floor(y/size_sect);

    alert(coordinate_x + ", " + coordinate_y);
    console.log(data)
});

