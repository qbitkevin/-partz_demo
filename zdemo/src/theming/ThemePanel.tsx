import React                        from 'react';
import type {Consumer}              from '@partz/abstract';
import {T}                          from '@partz/alphabit';
import {CSS}                        from '@partz/ui-basics';
import {TextButton}                 from '@partz/ui-btn'
import {TextCo, LabelValue}         from '@partz/ui-co';
import {Panel, Block, Grid, Column} from '@partz/ui-layout';

import './ThemePanel.scss'


type ThemeVarMeta = {
    name: string,
    category: string,
    description: string,
    type: string,
    defaultValue: string
}
type VarDescPT = ThemeVarMeta;

function normalizeVarValue( cv ) {
    cv = cv?.trim();
    while( cv?.includes( "  " ) ) {
        cv = cv.replace( "  ", " " );
    }
    return cv;
}

type ResetPT = {
    themeVar : ThemeVarMeta,
    curValue: string,
    onClick: Consumer<string>,
    el : HTMLElement
}
function ResetButton( {el, curValue, themeVar, onClick}: ResetPT ) {
    const [resolved, setResolved] = React.useState( themeVar.defaultValue );

    React.useEffect( () => {
            el.style.setProperty( "--demo-check", themeVar.defaultValue );
            let cv = getComputedStyle( el ).getPropertyValue( "--demo-check" );
            setResolved( normalizeVarValue( cv ) );
    }, [themeVar] );

    function handleClick() {
        onClick( resolved );
    }

    if ( resolved == curValue ) {
        return null;
    }
    return (
        <TextButton css="-reset" label="Reset To Default" onClick={handleClick} />
    )
}

type VarDescriptionPT = {
    themeVar : VarDescPT,
    themedEl : HTMLElement
}
function VarDescriber({themeVar, themedEl} : VarDescriptionPT) {
    const [varValue, setVarValue] = React.useState<string>( themeVar.defaultValue );


    function handleVar(v:string) {
        themedEl.style.setProperty(themeVar.name, v);
        setVarValue(v);
    }

    React.useEffect( () => {
             const vv = getComputedStyle(themedEl).getPropertyValue(themeVar.name);
            setVarValue( normalizeVarValue( vv ) );
    }, [themeVar,themedEl]);
    return (
        <Block>
            <Grid cols={2}>
                <Column>
                    <h4>{themeVar.name}</h4>
                    <LabelValue label="type">{themeVar.type}</LabelValue>
                    <LabelValue css="-def-value-" label="default">{themeVar.defaultValue}</LabelValue>
                    <p>{themeVar.description}</p>
                </Column>
                <Column>
                    <fieldset>
                        <legend>Current Value</legend>
                        <TextCo key={themeVar.name} value={varValue} onChange={handleVar} />
                   </fieldset>
                    <ResetButton el={themedEl} curValue={varValue} themeVar={themeVar} onClick={handleVar}/>
                </Column>
           </Grid>
        </Block>
    );
}


type VarListPT = {
    themes: VarDescPT[],
    themedEl: HTMLElement,
    css ?: string
}
function VarList({ themes, themedEl, css} : VarListPT) {
    const [themeVar, setThemeVar] = React.useState<VarDescPT>(themes[0])
    const [selected, setSelected] = React.useState( 0 );

    const cn = new CSS( 'VarList', 'vl' );

    return (
        <div className={cn.with( css )}>
            <ul className={cn.child( "ls" ).name}>
                {themes.map( ( e, i) => {
                    function handleClick() {
                        if ( selected !== i ) {
                            setSelected( i );
                        }
                        setThemeVar(e);
                    }
                    return (
                        <li key={i} onClick={handleClick} className={selected===i?"selected":undefined}>{e.name}</li>
                    );
                } ) }
            </ul>
            <VarDescriber themeVar={themeVar} themedEl={themedEl} />
        </div>

    );
}


type ThemePanelPT = {
    category: string,
    themeVars: VarDescPT[],
    themedEl: HTMLElement
}
export function ThemePanel( { category, themeVars, themedEl } : ThemePanelPT ) {
    const catThemes = themeVars.filter( e => e.category===category )
    return (
        <Panel key={category} title={T.capitalize(category)} collapsible reversedHead>
            <VarList themes={catThemes} themedEl={themedEl}/>
        </Panel>
    );
}
