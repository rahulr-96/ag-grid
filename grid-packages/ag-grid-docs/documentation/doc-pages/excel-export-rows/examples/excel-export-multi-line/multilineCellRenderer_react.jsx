import React, {Component} from "react";

// simple cell renderer returns dummy buttons. in a real application, a component would probably
// be used with operations tied to the buttons. in this example, the cell renderer is just for
// display purposes.
export default class MultilineComponent extends Component {

    constructor(props) {
        super(props);

        this.value = props.value.replace('\n', '<br/>')
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.value}}></div>
        );
    }
};
