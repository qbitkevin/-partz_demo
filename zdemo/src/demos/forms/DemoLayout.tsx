import * as React               from 'react';
import type {JsxEl, Customizable}             from '@partz/abstract';
import {T}                      from '@partz/alphabit';
import {Grid, Cell, Panel}      from '@partz/ui-layout';

type ValuePT = {
    name : string;
    value: any;
};
function DataValue( {name, value}: ValuePT ) {
    const disp = value==null ? "--" :
        (typeof value === "boolean") ? (value?"true":"false") :
            (typeof value === "object") ? value.key : value;

    return (<>
        <div>{name}</div>
        <div>{T.of(disp)}</div>
    </>);
}

type OvPT = {
    data : Customizable
};
function ObjectView( {data} : OvPT ) {
    const props = data ?? {};
    return (
        <Panel title="Data values">
            <Grid cols={2}>
                {Object.keys( props ).map( k => <DataValue key={k} name={k} value={props[k]}/> )}
            </Grid>
        </Panel>
    );
}

type DemoLayoutPT = {
    children     : React.ReactNode      // demo content
    css         ?: string,              // css class for this layout
    renderData  ?: () => JsxEl,         // function to render the caller's underlying data affected by this demo...
    data        ?: object,              // ...or, data to display in a simple ObjectView
}
export default function DemoLayout( {css, children, data, renderData} : DemoLayoutPT ) {
    function renderDataView() {
        if ( typeof renderData === "function" ) {
            return renderData();
        }
        return <ObjectView data={data}/>;
    }
    return (
        <Grid css={css} cols={4} gutter="3em">
            <Cell span={3}>
                {children}
            </Cell>
            {renderDataView()}
        </Grid>
    );
}
