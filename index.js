initMap = ()=>{
    let mapDiv = document.getElementById("map")
    var map
    map = new google.maps.Map(mapDiv, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
        //
        disableDefaultUI: true
    });

    //Cria o botão controle
    var fabDiv = document.createElement('div');
    var fab = new fabBtn(fabDiv, map);

    // Define posição
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(fabDiv);

    //
    function fabBtn(fabDiv, map) {
        //
        let fabUI = document.createElement('div')
        fabDiv.appendChild(fabUI)
        var btn = document.createElement('button')
        $(btn).addClass("btn btn-info bmd-btn-fab")
        $(btn).attr('type', 'button')
        $(fabDiv).css("margin", "0% 5% 2% 0%")
        var icon = document.createElement('i')
        $(icon).addClass("material-icons")
        // document.getElementById("a").classList.add("classe")
        $(icon).html('grade')
        btn.appendChild(icon)
        fabUI.appendChild(btn)
        
        // Ação do botão
        $(fabUI).on("click", ()=>{
            $('#modalrotas').modal('show')
        })
    
    }
}
var rotas = [
    'Calabouco x Santa Cecília',
    'Ceasa x Santo Antônio',
    'Centro x Bonsucesso',
    'Centro x Cidade Luz',
    'Centro x Codin',
    'Centro x Eldorado',
    'Centro x Escola Agrotécnica',
    'Centro x Fundão',
    'Centro x P. Aurora', 
    'Centro x Jockey', 
    'Centro x Nova Brasília',
    'Centro x Novo Jockey',
    'Centro x Penha',
    'Centro x P. Guarus',
    'Centro x P. Imperial',
    'Centro x Santa Rosa',
    'Jockey x Santa Rosa',
    'Lagoa das Pedras',
    'Nova Campos',
    'Nova Campos via N.Mundo-Custódia',
    'Nova Campos via Nogueira',
    'P. Aurora x Beira Valão',
    'P. Prazeres x Alphaville',
    'P. Prazeres x IPS via J. Maria',
    'Penha x Pecuária',
    'Nova Brasília x Bela Vista',
    'Nova Campos via Novo Mundo',
    'Rodoviária x Capão',
    'Rodoviária x Corrego Fundo',
    'Rodoviária x Farol via Gaivota',
    'Rodoviária x Farol via xexé',
    'Rodoviária x Guandú',
    'Rodoviária x Morro do Côco',
    'Rodoviária x Palmares',
    'Rodoviária x Quixaba',
    'Rodoviária x Ribeiro do Amaro',
    'Rodoviária x Santa Cruz',
    'Rodoviária x Santa Rosa',
    'Rodoviária x São Diogo',
    'Rodoviária x São Sebastião',
    'Rodoviária x Shopping Estrada',
    'Rodoviária x Travessão',
    'Rodoviária x Vila Nova',
    'Santo Eduardo',
]

$(document).ready(()=>{
    rotas.forEach(function(e, i){
        $("#sel-rotas").append("<option value='"+e+"'>"+e+"</option>")
    })
    
    $("#sel-rotas").on("change", function(){
        if($(this).val() == "0"){
            alert("Vc deve escolher")
        }
        else{
            alert($(this).val())
        }
    })

})

