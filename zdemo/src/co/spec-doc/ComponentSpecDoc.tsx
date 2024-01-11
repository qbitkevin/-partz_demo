import {JsxCo}                  from '@partz/abstract';
import * as React               from 'react';
import CoDescription            from './CoDescription';
import {CSS}                    from '@partz/ui-basics';
import ReactCoBox               from './ReactCoBox';
import {PropDemoConfig, CoSpec} from './types';
import yaml                     from 'js-yaml';

import './ComponentSpecDoc.scss';

// To document a component, create a yaml file that documents each of the components proptypes with
// their name, type, restriction, required, fallback and description. Call ComponentSpecDoc and send in
// the component's name (co) and the yaml doc using:
// const componentName = new URL('/../co-location/ComponentName.yaml', import.meta.url).href;
// Optionally send in css classname and demoConfigs for non default configurations of the demo.

const cn = new CSS( "ComponentSpecDoc", "doc" );
const EMPTY = [];


type PT = {
    co          : JsxCo,
    specPath    : string,
    demoConfigs?: PropDemoConfig[],
    css        ?: string
}
export default function ComponentSpecDoc( {co, specPath, demoConfigs=EMPTY, css } : PT ) {
    const [spec,setSpec] = React.useState<CoSpec>( null );
    React.useEffect(loadSpec, [specPath]);

    function loadSpec() {
        fetch(specPath)
            .then( rs => rs.text() )
            .then( text => yaml.load(text) )
            .then( setSpec );
    }

    if ( spec==null) return null;
    return (
        <article className={cn.with( css )}>
            <h2>{spec.name}</h2>
            <ReactCoBox co={co} demoConfigs={demoConfigs} spec={spec} />
            <CoDescription spec={spec} demoConfigs={demoConfigs}/>
        </article>
    );
}
