var map;

function initMap()
{
    map = Raphael("map", 1000, 800);
}

function drawCountry(country)
{
    map.clear();
    
    var trianglesLength = country.triangles.length;
    
    for (var i = 0; i < trianglesLength; i++) {
        for (var j = 0; j < 3; j++) {
            
            if (j == 2)
                var k = 0;
            else
                var k = j+1;
            
            var line = "M " + country.triangles[i].vertex[j].x + " " + country.triangles[i].vertex[j].y;
            line += "L " + country.triangles[i].vertex[k].x + " " + country.triangles[i].vertex[k].y;
            
            line = map.path(line); 
        }
    }
}
/*
function drawCountry(triangles)  //(country)
{
    map.clear();
    
    for (var i = 0; i < triangles.length; i++) {
        for (var j = 0; j < 3; j++) {
            
            if (j == 2)
                var k = 0;
            else
                var k = j+1;
            
            var line = "M " + triangles[i].vertex[j].x + " " + triangles[i].vertex[j].y;
            line += "L " + triangles[i].vertex[k].x + " " + triangles[i].vertex[k].y;
            
            line = map.path(line); 
        }
    }
}
*/
