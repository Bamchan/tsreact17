import React , { Component }from 'react';

interface State {
    name: string;
}

export const decoratorWightHeight = (height: number) => {
    return (WrapperComponent: any) => {
        return class extends Component<any, State> {
            public state: State = {
                name: ''
            }
            render() {
                return (
                    <div>
                        <WrapperComponent name={this.state.name} {...this.props}></WrapperComponent>
                        {this.state.name} ss {height}
                    </div>
                )
            }
        }
    }
}

export const decoratorWightWidth = (width: number) => {
    return (WrapperComponent: any) => {
        return class extends Component<any, State> {
            public state: State = {
                name: ''
            }
            render() {
                return (
                    <div>
                        <WrapperComponent name={this.state.name} {...this.props}></WrapperComponent>
                        {this.state.name} ss {width}
                    </div>
                )
            }
        }
    }
}