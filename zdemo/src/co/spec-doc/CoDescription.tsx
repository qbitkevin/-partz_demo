import * as React                       from 'react';
import PropDescCo                       from './PropDescCo';
import type {PropDemoConfig, CoSpec}    from './types';

import './CoDescription.scss';


type PT = {
    spec: CoSpec ,
    demoConfigs: PropDemoConfig[]
}
export default function CoDescription({spec, demoConfigs} : PT) {
    return (
        <div className="CoDescription">
            <h2 className="DocuHeader">Documentation</h2>
            <div className="UseCo">
                <h4>When To Use {spec.name}</h4>
                <div>{spec.description}</div>
            </div>
            <h2>Props</h2>
            <PropDescCo spec={spec} demoConfigs={demoConfigs}/>

        </div>
    );
}
