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
			found_coordinates = [],
            map_heights = map.length,
            map_lenghts = map[0].lenghts;
            
        for (var i = 0; i < map_heights; i++) {
            for (var j = 0; j < map_lenghts; j++) {
                if (map[i][j] === 1) {
                    if (i === 0 and j === 0) { 
                        islands += 1;
                        found_coordinates.push([i,j]);}
                    elif ( i === 0 and [i,j-1] not in found_coordinates) {
                        islands += 1;
                        found_coordinates.push([i,j]);}
                    elif ( i === 0 and [i,j-1] in found_coordinates) {
                        found_coordinates.push([i,j]);}
                    else {
						if ( j === 0 and [i-1,j] not in found_coordinates and map[i][j+1] !== 1 ) {
							islands += 1;
							found_coordinates.push([i,j]);}
						elif ( j === 0 and [i-1,j] in found_coordinates) {
							found_coordinates.push([i,j]);}
						else {
							if ( [i-1,j] in found_coordinates or [i,j-1] in found_coordinates or map[i][j+1] === 1 ) {
								found_coordinates.push([i,j]);}
							else { 
								islands += 1;
								found_coordinates.push([i,j]);}
						}
					}
				}
			}
		}
			
        return 0;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
