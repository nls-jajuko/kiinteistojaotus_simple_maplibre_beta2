
import { Map } from 'maplibre-gl'
import 'maplibre-gl/dist/mapbox-gl.css';

var map = new Map({
    container: 'map', // container id
    hash: true,
    style: 'https://beta-karttakuva.maanmittauslaitos.fi/kipa/kiinteistojaotus_mobile_beta1/style-3857.json',
    center: [24.937048, 60.198872], // starting position [lng, lat]
    zoom: 15.29, // starting zoom
});
    