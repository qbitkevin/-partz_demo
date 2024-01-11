import {CheckBoxCo, MemoCo, TextCo}         from '@partz/ui-co';
import {Column, Grid}                       from '@partz/ui-layout';
import * as React                           from 'react';
import {Consumer}                           from '@partz/abstract';
import {PropConfigValue, CoSpec, SpecProp}  from './types';

import './PropsBox.scss';

type PropEditorPT = {
    cvs     : PropConfigValue[],
    onChange: Consumer<PropConfigValue>,
    sp      : SpecProp
}
function PropEditor( {cvs, sp, onChange} : PropEditorPT )   {
    const pcv = cvs.find(c => c.prop === sp.name )

    function handleAny(v: string | number) {
        onChange({...pcv, value:v });
    }
    function handleObject(v: string) {
        onChange({...pcv, value: JSON.parse( v ) });
    }
    function handleBoolean() {
        onChange({...pcv, value: !pcv.value} );
    }
    function handleEventLogSwitch() {
        onChange({...pcv, log: !pcv.log} );
    }

    if ( sp.type === "object") {
        return (
            <div>
                <label>{sp.name}</label>
                <MemoCo value={JSON.stringify(pcv.value)} onChange={handleObject}/>
            </div>
        );
    }
    else if ( sp.type === "boolean" ) {
        return (
            <div>
                <CheckBoxCo value={pcv.value} label={sp.name} onChange={handleBoolean}/>
            </div>
        );
    }
    else if ( sp.type === "function" ) {
        // for functions, we only care about whether to log calls to the function.
        return (
            <div>
                <CheckBoxCo value={pcv.log} label={sp.name} onChange={handleEventLogSwitch}/>
            </div>
        )
    }
    else {
        return (
            <div>
                <label>{sp.name}</label> <br/>
                <TextCo value={pcv.value} onChange={handleAny}/>
            </div>
        );
    }

}

type PropsBoxPT = {
    cvs         : PropConfigValue[],
    spec        : CoSpec,
    onChange    : Consumer<PropConfigValue>,
    onLogChange : Consumer<PropConfigValue>
}
export default function PropsBox({cvs, onChange, onLogChange, spec} : PropsBoxPT) {

    function editable( sp: SpecProp ) {
        const p: PropConfigValue = cvs.find(s => s.prop === sp.name )
        return p.cfg == null || !p.cfg.noedit;
    }

    function isBoolean( sp ) {
        return sp.type === "boolean";
    }

    function isFunc( sp ) {
        return sp.type === "function";
    }

    function isNotBooleanOrFunc( sp ) {
        return !(isBoolean( sp ) || isFunc(sp));
    }

    const funcProps = spec.props.filter( editable ).filter( isFunc );
    return (
        <div className="PropsBox">
            <h4>Props: {spec.name}</h4>
            <Grid cols={2} gutter="2em">
                <Column>
                        {spec.props.filter( editable ).filter( isNotBooleanOrFunc ).map( (p) => (<PropEditor key={p.name} sp={p} onChange={onChange} cvs={cvs}/>) )}
                </Column>
                <Column>
                        {spec.props.filter( editable ).filter( isBoolean ).map( (p) => (<PropEditor key={p.name} sp={p} onChange={onChange} cvs={cvs}/>) )}
                </Column>
                { funcProps.length===0 ? null :
                    <Column>
                        <h5>Event Handlers</h5>
                        {funcProps.map( (p) => (<PropEditor key={p.name} sp={p} onChange={onLogChange} cvs={cvs}/>) )}
                    </Column>
                }

            </Grid>
        </div>
    );

}
