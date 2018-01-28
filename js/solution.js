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
        console.log('sol', map);
        var islands = 0,
			map_c = [],
			found_coordinates = [],
            map_heights = map.length,
            map_lenghts = map[0].length;
console.log('sol', map_heights, map_lenghts );
        
		map_c = map;
        for (var i = 0; i < map_heights; i++) {
            for (var j = 0; j < map_lenghts; j++) {
                if (map_c[i][j] === 1) {
                    if (i === 0 && j === 0) { 
                        islands++;
                        map_c[i][j] = 2;}
                    else if ( i == 0 && map_c[i][j-1] != 2) {
                        islands++;
                        map_c[i][j] = 2;}
                    else if ( i == 0 && map_c[i][j-1] == 2 ) {
                        map_c[i][j] = 2;}
                    else {
						if ( j == 0 && map_c[i-1][j] != 2 && map[i][j+1] != 1 ) {
							islands++;
							map_c[i][j] = 2;}
						else if ( j == 0 && map_c[i-1][j] == 2 ) {
							map_c[i][j] = 2;}
						else if ( map_c[i-1][j] == 2 || map[i][j-1] == 2 || map_c[i][j+1] == 1) {
						map_c[i][j] = 2;}
						else {
								islands++;
								map_c[i][j] = 2;}
						
					}
				}
			}
		}
        console.log('sol',islands );
			
        return islands;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
