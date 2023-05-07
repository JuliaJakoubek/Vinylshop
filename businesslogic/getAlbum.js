//function to get single album from json file
function loadAlbum(){
    $.getJSON({
        type: "GET",
        url: "../database/albums.json",
        cache: false,
        dataType: "json",
        success: function (response){

            $.each(response, function(i, jsonData){
                let artist = jsonData["artist"];
                let titel = jsonData["titel"];
                let label = jsonData["label"];
                let genre = jsonData["genre"];
                let description = jsonData["description"];
                let year = jsonData["year"];
                let technical = jsonData["technical"];
                let songs = jsonData["songs"];
                let cover = jsonData["cover"]
                let $cover = $("<img>", {class:"cover", id:"cover"});
                let $album = $("<img>", {class:"cover", id:"cover"});
            })
            console.log(artist, title, label, genre);

        }
        
    })
}


//function to get the list of all albums
function loadAlbumList(){
    $.getJSON({
        type: "GET",
        url: "../database/albums.json",
        cache: false,
        dataType: "json",
        success: function (response){

            $.each(response, function(i, jsonData){
                let artist = jsonData["artist"];
                let title = jsonData["title"];
                let label = jsonData["label"];
                let genre = jsonData["genre"];
                let cover = jsonData["cover"];
           //     let $cover = $("<img>", {class:"cover", src: cover});
                let $album = $("<span>", {class:"album", id:"aalbum"});
                $album.html(artist, title, label, genre)
                console.log(artist, title, label, genre);
                $("#albumlist").append(
                //    $cover,
                    $album
                )

            
            })


        }
        
    })
}

//function to get the albums of a genre
function loadAlbumPreviews(genre){
    $.getJSON({
        type: "GET",
        url: "../database/albums.json",
        cache: false,
        dataType: "json",
        success: function (response){
            if(genre == genre){
                $.each(response, function(i, jsonData){
                    let artist = jsonData["artist"];
                    let titel = jsonData["titel"];
                    let label = jsonData["label"];
                    let genre = jsonData["genre"];
                    let year = jsonData["year"];
                    let cover = jsonData["cover"]
                    let $cover = $("<img>", {class:"cover"});
                })
            }
            console.log(artist, title, label, genre);
        }
        
    })

}