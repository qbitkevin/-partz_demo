import * as React                               from 'react';
import {Cell, Row}                              from '@partz/ui-layout';
import type {PropDemoConfig, CoSpec,SpecProp}   from './types';

import './PropDescCo.scss'



type PropDescription = {
    sp: SpecProp
}

function TypeList( {sp} : PropDescription ) {
    if (sp.restriction != null) {
        return (
            <div>
                <code>{sp.restriction}</code>
            </div>
        );
    } else if (sp.type === "boolean") {
        return (
            <div>
                <code>true | false </code>
            </div>
        );
    }
    return null;
}




function PropDescriber( {sp} : PropDescription  ) {
    function DefaultValue({sp}) {
        if (sp.fallback != null) {
            if (typeof sp.fallback === "boolean") {
                return <code>={sp.fallback.toString()}</code>;
            }
            return <code>={sp.fallback}</code>;
        }
        return null;
    }
    return (
        <Row css="PropDescriber">
            <Cell css="-prop-name">
                <code>{sp.name}</code>
            </Cell>
            <Cell css="-prop-detail">
                <div className="-prop-type">
                    <div>type: <code>{sp.type}</code></div>
                    <TypeList sp={sp}/>
                    <DefaultValue sp={sp}/>
                </div>
                {sp.description}
            </Cell>
        </Row>
    );
}


type PropDescCoPT = {
    spec        : CoSpec,
    demoConfigs : PropDemoConfig[]
}
export default function PropDescCo( {spec, demoConfigs} : PropDescCoPT ) {

    function renderable(sp) {
        const config = demoConfigs.find(e => e.name === sp.name);
        if (config?.hide == null) {
            return true
        }
        return !config.hide;
    }

    return (
        <div className="PropDescCo">
            {spec.props.filter(renderable).map((sp) => {
                return (
                    <div key={sp.name}><PropDescriber sp={sp}/></div>
                );
            })}
        </div>
    );
}
