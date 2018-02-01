(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */
    function visualizeSolution(map){
        const _map = root.SHRI_ISLANDS.copyMatrix(map);
        const height = _map.length;
        const width = _map[0].length;
        console.log(`height: ${height} width: ${width}`);
        let islandsCount = 0;
        //cartesian coordinates
        let x, y;
        _map.forEach((row, index, rest) => {
            y = index;
            row.forEach((val, index, rest) => {
                x = index;
                isIsland(val);
            })
        });

        function isIsland(val) {
            if (val == ISLAND) {
                islandsCount += 1;
                destroyIsland([y, x]);
            }
        };
        //recursive
        function destroyIsland(coordinates) {
            let [y, x] = coordinates;
            console.log(`y: ${y} x: ${x} `);
            //if coordinates not out of bounds
            if ((y >= 0 && y < height) && (x >= 0 && x < width)) {
                //if it island, make it water, find its neighbours(silly), and destroy them recursively
                if (_map[y][x] == ISLAND) {
                    _map[y][x] = WATER;
                    const right = [y, x + 1];
                    const down = [y + 1, x];
                    const left = [y, x - 1];
                    const up = [y - 1, x];
                    const neighbours = [right, down, left, up];
                    console.log(` destroy y: ${y} x: ${x} `);
                    console.log(neighbours);
                    return neighbours.forEach((coordinates) => {
                        destroyIsland(coordinates);
                    });
                }
            }
        }
        console.log('result', _map);
        return islandsCount;
    } 

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
