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
        const height = _map.length;
        const width = _map[0].length;
        let islandsCount = 0;
        //cartesian coordinates
        let x, y;
        //let restArray;
        _map.forEach((row, index, rest) => {
            y = index;
            row.forEach((val, index, rest) =>{
                x = index;
                if (x == width) { x -= width;}
                isIsland(val);
            })
        });
        function isIsland(val) {
            if (val == ISLAND){
               islandsCount +=1;  
                destroyIsland([y, x]);
            }
        };
        //recursive
        function destroyIsland(coordinates){
             let [y, x]  =  coordinates;
            //if coordinates not out of bounds
            if ((y >= 0 && y <= height) && (x >= 0 && x <= width)){
                _map[y][x] = WATER;
                //wright, down, left, up  
                const wright = [y, x+1];
                const down = [y+1, x];
                const left = [y, x-1];
                const up = [y-1, x ];
                const neighbours = [wright, down, left, up];
                console.log(`y: ${y} x: ${x} `);
                console.log(neighbours);

            }
            //console.log(`y: ${y} x: ${x} `);
        }
        console.log('result', _map);
        return islandsCount;
    }

    function _copyMatrix(matrix) {
        var result = matrix.map(function(arr) {
            return arr.slice();
        });
        return result;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
