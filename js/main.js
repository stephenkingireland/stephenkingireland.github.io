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




    $('#boulderTable').DataTable();
} );