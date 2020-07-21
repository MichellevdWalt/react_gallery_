import React from 'react';
import Photo from './Photo';

//maps results from prop received from home and returns array of image urls to render the images.
const PhotoConstructor = props => {
    const results = props.data;
    let photos;
    if (results.length) {
       photos = results.map(photo => <Photo  url= {`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key= {photo.id} />)
    }

    return(
        <div className= "photo-container">
            <ul>
            {photos}
            </ul>
        </div>
      );

}
 export default PhotoConstructor;