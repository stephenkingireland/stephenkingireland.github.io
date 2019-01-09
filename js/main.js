function tableCreate(el, data)
{
    var tbl  = document.createElement("table");

    for (var i = 0; i < data.length; ++i)
    {
        var tr = tbl.insertRow();
        for(var j = 0; j < data[i].length; ++j)
        {
            var td = tr.insertCell();
            td.appendChild(document.createTextNode(data[i][j].toString()));
        }
    }
    el.appendChild(tbl);
}





$(document).ready( function () {

    var boulderProblems = [];

    $.each(climbData,function(i, cragData){


        $.each(cragData.climbs,function(i, climbData){
            var climb = {};

            climb.cragName = cragData.name;

            climb.climbName = climbData.name;
            climb.grade = climbData.grade;
            climb.sector = climbData.sector;

            if(climbData.type === "Boulder"){
             if(climbData.cragName === "Awesome Walls Dublin"){
                }
                else{
                boulderProblems.push(climb);
                }
            }
        });

    } 
    );

    boulderProblems;



    $('#boulderTable').DataTable( {
        data: boulderProblems,
        columns: [
            { data: 'cragName' },
            { data: 'sector' },
            { data: 'climbName' },
            { data: 'grade' }

        ]
    } );


} );