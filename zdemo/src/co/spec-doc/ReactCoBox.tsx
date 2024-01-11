import * as React                                           from 'react';
import {JsxCo}                                              from '@partz/abstract';
import PropsBox                                             from './PropsBox';
import RenderBox                                            from './RenderBox';
import {PropDemoConfig,SpecProp, PropConfigValue, CoSpec}   from './types';

import './ReactCoBox.scss';



type PT = {
    demoConfigs : PropDemoConfig[],
    co          : JsxCo,
    spec        : CoSpec,
}
export default function ReactCoBox({co, spec, demoConfigs} : PT) {

    // noinspection JSUnusedLocalSymbols
    const [count, setCount] = React.useState<number>(0);
    const [eventLog, setEventLog] = React.useState<string[]>( [] );
    const propValues = React.useRef<PropConfigValue[]>();


    function updatePropValues( pv ) {
        propValues.current = pv;
        setCount( ( v ) => v+1 );
    }

    function specProp( name: string ) {
        return spec.props.find( sp => sp.name === name );
    }

    function updateEventLog( s: string ) {
        setEventLog( ( log ) =>  [s, ...log] );
    }

    function eventLogHandler( p: SpecProp ): ()=>void {
       if ( propValues.current != null ) {
            const k = propValues.current.find(pv => pv.prop === p.name);
            if (k.log === true) return () => updateEventLog( p.name );
        }
        return null;
    }

    function propValueChanged( p:SpecProp, v: string ) {
        const changed = [...propValues.current];
        const i = changed.findIndex(e => e.prop === 'value');
        changed[i] = {...changed[i], value: v};
        updatePropValues( changed );
    }
    function propBoxHandler( p:SpecProp ): (v: string)=>void {
       if ( p.name==='onChange' || p.name==='onChanging' ) {
            return ( v: string ) => {
                propValueChanged( p, v );
            };
       }
       return null;
    }

    function createHandler( name: string, pbHandler, evHandler ) {
        if ( pbHandler==null ) return evHandler;
        if ( evHandler==null ) return pbHandler;
        return ( hint ?: unknown ) => {
            pbHandler( hint );
            evHandler( );
        };
    }


    function createPCV( pSpec: SpecProp, demoConfigs:PropDemoConfig[] ) : PropConfigValue {
        const cfg = demoConfigs.find( e=> e.name===pSpec.name );
        if ( cfg!=null && cfg.noedit ) {
            if ( pSpec.type==="function" ) {
                const fnPropBox = propBoxHandler( pSpec );
                const fnEvent   = eventLogHandler( pSpec );
                return {
                    prop: pSpec.name,
                    cfg,
                    log: false,
                    value:  createHandler( pSpec.name, fnPropBox, fnEvent )
                };
            }
            if (cfg.initial) {
                return {prop:pSpec.name, cfg, value:cfg.initial};
            }
            return {prop:pSpec.name, cfg, value:pSpec.fallback};
        }
        if ( pSpec.type === "function" ) {
            const fnPropBox = propBoxHandler( pSpec );
            const fnEvent   = eventLogHandler( pSpec );
            return {
                prop: pSpec.name,
                cfg,
                log: false,
                value:  createHandler( pSpec.name, fnPropBox, fnEvent )
            };
        }
        return {
            prop: pSpec.name,
            cfg,
            log: undefined,
            value: cfg?.initial ?? ((pSpec.fallback === undefined || pSpec.fallback === "undefined") ? undefined : pSpec.fallback)
        };
    }

    React.useEffect( () => {
        updatePropValues( spec.props.map( p=> createPCV( p, demoConfigs ) ) );
    }, [demoConfigs]);


    function handlePropBoxChange( pcv: PropConfigValue ) {
        const i = propValues.current.findIndex(e => e.prop === pcv.prop);
        const changed = [...propValues.current];
        changed[i] = pcv;
        updatePropValues( changed );
    }

    function handleEventLogChange( pcv: PropConfigValue ) {
        const pSpec = specProp( pcv.prop );
        if ( pSpec.type==="function" ) {
            const fnEvent = pcv.log ? () => updateEventLog( pcv.prop ) : undefined;
            const fnPropBox = propBoxHandler( pSpec );
            pcv.value = createHandler( pSpec.name, fnPropBox, fnEvent );
        }
        handlePropBoxChange( pcv );
    }

    if ( propValues.current==null ) return null;
    return (
        <div className="ReactCoBox">
            <RenderBox co={co} spec={spec} cvs={propValues.current} eventLog={eventLog}/>
            <PropsBox cvs={propValues.current} spec={spec} onChange={handlePropBoxChange} onLogChange={handleEventLogChange}/>
        </div>
    );
}
