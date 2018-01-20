(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        var islands = 0,
            map_heights = map.length,
            map_lenghts = map[0].lenghts;
            
        for (var i = 0; i < map_heights; i++) {
            for (var j = 0; j < map_lenghts; j++) {
                if (map[i][j] === 1) {
                    if (i === 0 and j === 0) { 
                        islands += 1;
                        map[i][j] = 2;}
                    elif ( i === 0 and map[i][j-1] !== 2) {
                        islands += 1;
                        map[i][j] = 2;}
                    elif ( i === 0 and map[i][j-1] === 2) {
                        map[i][j] = 2;}
                    elif ( i !== 0 and j === 0 map[i-1][j] !==2 ) {
                        islands += 1;
                        map[i][j] = 2;}
                    elif ( i !== 0 and j === 0 and map[i-1][j] ===2) {
                        map[i][j] = 2;}
                    elif ( i !== 0 and j !== 0 ) {
                        if ( map[i-1][j] == 2 or map [i][j-1] == 2 or map[i][j+1] == 1 ) {
                            map[i][j] = 2;}
                        else { islands += 1;
                              map[i][j] = 2;}
                    }
                }
            }
        return 0;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
