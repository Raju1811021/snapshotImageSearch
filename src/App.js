import React,{useState} from 'react';
import { Heading } from './components/heading';
import { Searchbar } from './components/searchBar';
import { Gallery } from './components/gallery';
import axios from 'axios';

export const App=(props)=>{
    const [images,setImg]=useState([]);
    const divStyle={
        // backgroundColor:"aqua",
        width:"100%",
        height:"60vh",
        display:'flex',
        // justifyContent:'center',
        marginTop:"70px",
        alignItems:'center',
        flexDirection:'column'
    };
    const getImages=(item)=>{
        axios
            .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${item}&per_page=24&format=json&nojsoncallback=1`)
            .then(res=>{
                console.log(res.data.photos.photo);
                setImg(res.data.photos.photo);
            })
            .catch(error=>{
                console.log("Error Occured");
                // "https://farm66.staticflickr.com/65535/52814226869_75cab0bf1f_m.jpg"
            })
    };
    return(
        <React.Fragment>
        <Heading/>
        <div style={divStyle}>
            
            <Searchbar getImages={getImages}/>
            <Gallery allImg={images} />
        </div>
        </React.Fragment>
    );
}

// export class App extends Component{
//     state={
//         images:[],
//     };
//     componentDidMount(){
//         axios
//         .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=foods&per_page=24&format=json&nojsoncallback=1`)
//         .then(res=>{
//             console.log(res.data.photos.photo);
//         })
//         .catch(error=>{
//             console.log("Error Occured");
//             "https://farm66.staticflickr.com/65535/52814226869_75cab0bf1f_m.jpg"
//         })
//     };
//     render(){
//         return(
//             <React.Fragment>
//                 <h2>Flicker Testing</h2>
//             </React.Fragment>
//         );
//     }
// }