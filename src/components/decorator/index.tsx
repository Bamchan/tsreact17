import React ,{ Component } from 'react';

import { decoratorWightHeight, decoratorWightWidth } from '../hoc'


@decoratorWightWidth(10)
@decoratorWightHeight(180)
class Show extends Component<any, any> {
    render() {
        return (
            <div>bbbb,{this.props.name}</div>
        )
    }
}

export default Show;