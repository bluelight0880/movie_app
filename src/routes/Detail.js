import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            return (
                <section className="section__Detail">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div>
                        <h4>{location.state.title}</h4>
                        <span>{location.state.year}</span>
                        <span>{location.state.genres}</span>
                        <span>{location.state.summary}</span>
                    </div>
                 </section>
                 );
        } else {
            return null;
        }
        
    }
    
}

export default Detail;