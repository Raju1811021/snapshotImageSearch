import React from 'react';

export const Gallery=(props)=>{
    return(
        <div>
            <h4 style={{textAlign:'center',marginTop:'30px'}}>Pictures</h4>
            <div style={{textAlign:'center'}}>
                {
                    props.allImg.map((image,index)=>{
                        if(index>14){
                            return;
                        }
                        let farm = image.farm;
                        let server = image.server;
                        let id = image.id;
                        let secret = image.secret;
                        let title = image.title;
                        let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
                        // return <Image url={url} key={id} alt={title} />;
                        return <img style={{margin:"19px"}} src={url} key={id} width="300px" height="350px" alt={title}/>
                    })
                }
            </div>
        </div>
    );
};