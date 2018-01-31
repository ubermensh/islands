(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     *
     */
    function solution(map) {
			const _map =_copyMatrix(map); 
        let islandsCount = 0;
        let yCoordinate = 0;
        let xCoordinate = 0;
        
        _map.map((row) => {
            yCoordinate += 1;
            row.map((val) =>{
                xCoordinate +=1;
                isIsland(val);
            })
        });
        function isIsland(val) {
            if (val == 1 && !isIslandCounted() ){
               islandsCount +=1;  
            }
        };
        //recursive
        function isIslandCounted(val){
            //island is already counted if it has parts ABOVE or LEFT 
            //get point ABOVE 
            //get point LEFT
            return 

            

        }

        for (var i = 0; i < map_heights; i++) {
            for (var j = 0; j < map_lenghts; j++) {
                if (map_c[i][j] === 1) {
                    if (i === 0 && j === 0) { 
                        islands++;
                        map_c[i][j] = 'x';}
                    else if ( i == 0 && map_c[i][j-1] != 'x') {
                        islands++;
                        map_c[i][j] = 'x';}
                    else if ( i == 0 && map_c[i][j-1] == 'x' ) {
                        map_c[i][j] = 'x';}
                    else {
						if ( j == 0 && map_c[i-1][j] != 'x' && map_b[i][j+1] != 1 ) {
							islands++;
							map_c[i][j] = 'x';}
						else if ( j == 0 && map_c[i-1][j] == 'x' ) {
							map_c[i][j] = 'x';}
						else if ( map_c[i-1][j] == 'x' || map_b[i][j-1] == 'x' || map_c[i][j+1] == 1) {
						map_c[i][j] = 'x';}
						else {
								islands++;
								map_c[i][j] = 'x';}
						
					}
				}
			}
		}
        console.log('sol',islands );
			
        return islands;
    }
    function _copyMatrix(matrix) {
        var result = matrix.map(function(arr) {
            return arr.slice();
        });
        return result;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
