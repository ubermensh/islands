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
                    if (i === 0 && j === 0) { 
                        islands++;
                        found_coordinates.push([i,j]);}
		}
	    }
	}
			
        return islands;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
