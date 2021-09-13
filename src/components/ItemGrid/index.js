import { Component } from "react";
import "./style.css";

class ItemGrid extends Component {
    render() {
        return (
            <div className="ItemGrid">
                {this.props.items.map(item => {
                    return <img className="Item" key={item.id} src={item.image_url} alt="An item" width="150" height="150" />;
                })}
            </div>
        );
    }
}

export default ItemGrid;
