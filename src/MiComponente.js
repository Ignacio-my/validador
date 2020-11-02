import React, { Component } from 'react';

class MiComponente extends Component {

    render() {
        return (
            <div>
                <p>Hello world 2 mtf{this.props.mensaje}</p>
                <input type="button" value="presione aqui" />
                <img src = "https://static.wikia.nocookie.net/doblaje/images/c/c1/Ace1.jpg/revision/latest/top-crop/width/360/height/450?cb=20090914143015&path-prefix=es" />
            </div>

        );      
    }
}

export default MiComponente;