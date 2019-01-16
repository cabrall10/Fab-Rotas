var map
initMap = ()=>{
    let mapDiv = document.getElementById("map")
    
    map = new google.maps.Map(mapDiv, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 13,
        //desabilita interface padrão do mapa
        disableDefaultUI: true
    });

    //Cria a div do botão controle
    var fabDiv = document.createElement('div');
    //Cria o botão controle
    var fab = new fabBtn(fabDiv, map);

    // Define posição
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(fabDiv);

    //função responsavel por criar o botão
    function fabBtn(fabDiv, map) {
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
//Função executada assim que o documento estiver carregado
$(document).ready(()=>{
    //Recebe e atribui o array
    var rotas = getRotas()
    //For para percorrer rotas e adicionar ao select
    rotas.forEach(function(e, i){
        $("#sel-rotas").append("<option value='"+i+"'>"+e.nome+"</option>")
    })

    //Variável que irá conter  a rota atual
    var rotaAtual = null

    //Função que troca a rota quando o valor for alterado
    $("#sel-rotas").on("change", function(){
        if($(this).val() == "padrao"){
            alert("Vc deve escolher")
        }
        //Se o valor selecionado for diferente do padrão
        else{
            console.log($(this).val())
            //Se já existir uma rota selecionada, será removida
            if(rotaAtual){
                rotaAtual.setMap(null)
            }
            //Define e exibe a nova rota
            rotaAtual = new google.maps.Polyline({
                path: rotas[$(this).val()].coords,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            })
            //Centraliza o mapa na primeira coordenada da rota
            map.setCenter(rotas[$(this).val()].coords[0]); 
            rotaAtual.setMap(map);
            $('#modalrotas').modal('hide') 
        }
    })

})

