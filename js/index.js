(function (root) {
    var map = root.SHRI_ISLANDS.MAP;
    console.log('index aaaa', map);
    var count = root.SHRI_ISLANDS.solution(map);
    //root.SHRI_ISLANDS.visualizeSolution(map);

    document.querySelector('.outer').appendChild(
        root.SHRI_ISLANDS.render(map, count)
    );
})(this);
