function initMap(){
    var options={
        zoom:11,
        center:{lat:28.6139,lng:77.2090}
    }
    var map = new google.maps.Map(document.getElementById('map'),options);
  
    var markers=[
        { coords: {lat:28.6990,lng:77.1384}, 
          content:'<h6>Pitampura</h6>'
        },
        { coords: {lat:28.5273,lng:77.1515},
          content:'<h6>Vasant Kunj</h6>'
        },
        { coords: {lat:28.6738,lng:77.1273},
          content:'<h6>Punjabi Bagh</h6>'
        },
        { coords: {lat:28.6219,lng:77.0878}, 
          content:'<h6>Janakpuri</h6>'
        },
        { coords: {lat:28.5246,lng:77.2066},
          content:'<h6>Saket</h6>'
        },
        { coords: {lat:28.5677,lng:77.2433},
          content:'<h6>Lajpat Nagar</h6>'
        }
  
    ];
  
    for(var i=0;i<markers.length;i++)
    {
      addMarker(markers[i]);
    }
    function addMarker(props){
        var marker=new google.maps.Marker({
        position:props.coords,
        map:map
        });
    
    if(props.content)
    {
        var infowindow=new google.maps.InfoWindow({
        content:props.content
        });
        marker.addListener('click', function(){
        infowindow.open(map, marker);
        });
    }
  
    }
  }