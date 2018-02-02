(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;
    const ITERATOR = root.SHRI_ISLANDS.ITERATOR;
    const DESTROY = root.SHRI_ISLANDS.DESTROY;

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
        //ms per point
        const speed = 30;
        console.log(`height: ${height} width: ${width}`);
        let islandsCount = 0;
        //cartesian coordinates
        let x, y;
        _map.delayedForEach((row, index, rest) => {
            y = index;
            row.delayedForEach((val, index, rest) => {
                x = index;
                isIsland(val);
                _map[y][x] = ITERATOR;
                _visualizeRender(_map, islandsCount);
                _map[y][x] = WATER;
            }, speed);
            //so that all x axess will be traversed + time to destroy  
            //time to destroy = костыль, который можно сломать большим островом. по хорошему, дестрой должен быть асинхроным, и процесс должен ждать ее завершения
            // тогда можно было бы визуализировать процесс уничтожения, but who cares
        }, width * speed + 600);

        function isIsland(val) {
            console.log(`is island: y: ${y} x: ${x} `);
            if (val == ISLAND) {
                console.log(`island found: y: ${y} x: ${x} `);
                islandsCount += 1;
                console.log('islandsCount',islandsCount );
                destroyIsland([y, x]);
            }
        };
        //recursive
        function destroyIsland(coordinates) {
            let [y, x] = coordinates;
            //console.log(`destroy attempt  y: ${y} x: ${x} `);
            //if coordinates not out of bounds
            if ((y >= 0 && y < height) && (x >= 0 && x < width)) {
                //if it island, make it water, find its neighbours(silly), and destroy them recursively
                if (_map[y][x] == ISLAND) {
                console.log(`destroy island y: ${y} x: ${x} `);
                    _map[y][x] = DESTROY;
                    const right = [y, x + 1];
                    const down = [y + 1, x];
                    const left = [y, x - 1];
                    const up = [y - 1, x];
                    const neighbours = [right, down, left, up];
                    console.log(` destroy y: ${y} x: ${x} `);
                    return neighbours.forEach((coordinates) => {
                        destroyIsland(coordinates);
                        _visualizeRender(_map, islandsCount);
                    } );
                }
            }
        }
        console.log('result', _map);
        return islandsCount;
    } 

	//https://gist.github.com/fernandosavio/6011834
	/**
	 * An array forEach with a delay between steps.
	 *
	 * @param {Function} callback Function to execute for each element. It receives three arguments, the element value, the element index and the array being traversed, respectivily.
	 * @param {Number} timeout Number of milliseconds that the function call should be delayed by.
	 * @param {Object} thisArg Object to use as this when executing callback.
	 * @this {Array}
	 * @return {undefined}
	 */
	Array.prototype.delayedForEach = function(callback, timeout, thisArg) {
	    var i = 0,
	        l = this.length,
	        self = this,
	        caller = function() {
	            callback.call(thisArg || self, self[i], i, self);
	            (++i < l) && setTimeout(caller, timeout);
	        };
	    caller();
	};
     function _visualizeRender(_map, islandsCount) {
        //_pause(1000);
        let outerElement = document.querySelector('.outer');
        let oldMapElement= document.querySelector('.map');
        let newMapElement=  root.SHRI_ISLANDS.render(_map, islandsCount);
        //replace map
        if (oldMapElement){
            outerElement.removeChild(oldMapElement);
        }
        outerElement.appendChild(newMapElement);
    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
