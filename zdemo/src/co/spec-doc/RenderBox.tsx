import * as React                           from 'react';
import {JsxCo}                              from '@partz/abstract';
import {PropConfigValue, CoSpec, SpecProp}  from './types';

import './RenderBox.scss';

function RenderedGenericCo( {co, coProps} ) {
    return React.createElement( co, coProps );
}

function produceProps( spec: CoSpec, cvs: PropConfigValue[] ) : object {
    function prepareSpecProp( spec: SpecProp ): void {
        const p: PropConfigValue = cvs.find( c => c.prop === spec.name );
        props[p.prop]=p.value;
    }
    const props = {};
    spec.props.forEach( prepareSpecProp );
    return props;
}

type PT = {
    cvs         : PropConfigValue[],
    co          : JsxCo,
    spec        : CoSpec,
    eventLog   ?: string[],
}
export default function RenderBox({  co, spec, cvs, eventLog}: PT) {
    const props = produceProps( spec, cvs );

    function displayLog() {

        function editable( sp: SpecProp ) {
            const p: PropConfigValue = cvs.find(s => s.prop === sp.name )
            return p.cfg == null || !p.cfg.noedit;
        }

        function isFunc( sp ) {
            return sp.type === "function";
        }

        const funcProps= spec.props.filter( editable ).filter( isFunc );
        return funcProps.length!==0
    }
    return (
        <div className="RenderBox">
            <h4>Render: {spec.name}</h4>
            <div className="-rb-rendered-co">
                <RenderedGenericCo co={co} coProps={ props } />
            </div>
            {displayLog() ?
                <div className="EventLogBox">
                    <h5>Event Handler Log</h5>
                    <div className="EventLog">
                        {eventLog && eventLog.map((s, i) => <div key={i}>{s}</div>)}
                    </div>
                </div>
                : null
            }
        </div>
    );
}
