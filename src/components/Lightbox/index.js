import React, { Component } from 'react';
import './lightbox.scss';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Icon from "@material-ui/core/es/Icon/Icon";

class Lightbox extends Component {
    state = {
      isOpen: false,
    };

    openLightbox = () => {
      this.setState({isOpen: true});
    };

    closeLightbox = () => {
      this.setState({isOpen: false});
    };

    render() {
        const { src, alt, className } = this.props;

        return (
            <div className="lightbox-container">
                <div
                    onClick={this.openLightbox}
                    className="img-hover"
                >
                    <img
                        className={className}
                        alt={alt}
                        src={src}
                    />

                    <div>
                        <Icon className="fa fa-search" />
                    </div>
                </div>

                {
                    this.state.isOpen ?
                        <div className="lightbox">
                            <img
                                alt={alt}
                                src={src}
                            />

                            <IconButton onClick={this.closeLightbox} className="close-lightbox">
                                <Icon className="fa fa-times" />
                            </IconButton>
                        </div>
                        : null
                }
            </div>
        );
    };
}

export default Lightbox;