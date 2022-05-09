import React from 'react';

type IProps = any;

export default function RenderPropsComponent (props: IProps) {
    const { render } = props;
    const a = 2;
    return (
        render(a)
    )
}