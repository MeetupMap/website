import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps';

const Map = () => {
    const RegularMap = withScriptjs(
        withGoogleMap(props => (
            <GoogleMap 
                defaultZoom={15}
            >
            
            </GoogleMap>
        ))
    );

    return (
        <RegularMap
        />
    );
};

export default Map;