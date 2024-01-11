import React                    from 'react';
import {useRef}                 from 'react';
import {CSS}                    from '@partz/ui-basics';
import {Stacked}                from '@partz/ui-layout';
import {themeVariableMetaList}  from './themeVariableMetaList'
import {ThemePanel}             from "./ThemePanel";

const cn = new CSS( "ThemingGuide" );

type PT = {
    css  ?: string
}

export default function ThemingGuide( {css} : PT ) {
    const [dx, setDx] = React.useState( 0 );

    const ref = useRef<HTMLElement>();
    React.useEffect( () => {
        ref.current = document.querySelector( ".whole.rz-themed" );
        setDx( d => d+1 );
    }, []);

    if ( dx===0 ) {
        return <div>Loading</div>;
    }
    return (
        <div className={cn.with( css )}>
            <h2>Theming</h2>
            <p>
                Theming in partially artsy takes advantage of the newly added feature, layers. The layers are organized
                as <code>rz, rz.reset, rz.theme, rz.theme.scheme, rz.theme.dom, rz.theme.canvas, rz.global, rz.page, rz.ux, rz.co</code>.
            </p>
            <div>
                    - rz              : the framework's CSS layer, nesting the following<br/>
                    - rz.reset        : normalizing style rules<br/>
                    - rz.theme        : to apply theming throughout<br/>
                    - rz.theme.scheme : to apply values to theming variables <br/>
                    - rz.theme.dom    : to apply apply theme.scheme variables to canvas variables <br/>
                    - rz.theme.canvas : to apply canvas variables to elements <br/>
                    - rz.global       : rules intended to be global, but overridable<br/>
                    - rz.page         : rules targeting the browser page <br/>
                    - rz.ux           : rules targeting generic and/or non-component interactive elements <br/>
                    - rz.co           : rules specific to components; last, to get highest precedence in framework
            </div>
            <p>
                The theme editor below allows you to edit the theming variables in rz.theme.scheme. These variables
            are used throughout the dom, canvas, global, page, ux and co layers in order to create common styling
            when applicable.
            </p>
            <Stacked>
                <ThemePanel category="standard colors" themeVars={themeVariableMetaList} themedEl={ref.current}/>
                <ThemePanel category="standard sizes" themeVars={themeVariableMetaList} themedEl={ref.current}/>
                <ThemePanel category="pages" themeVars={themeVariableMetaList} themedEl={ref.current}/>
                <ThemePanel category="buttons" themeVars={themeVariableMetaList} themedEl={ref.current}/>
                <ThemePanel category="blocks boxes and cells" themeVars={themeVariableMetaList} themedEl={ref.current}/>
                <ThemePanel category="navs and links" themeVars={themeVariableMetaList} themedEl={ref.current}/>
                <ThemePanel category="dialogs" themeVars={themeVariableMetaList} themedEl={ref.current}/>
                <ThemePanel category="controls fields and forms" themeVars={themeVariableMetaList} themedEl={ref.current}/>
                <ThemePanel category="cards" themeVars={themeVariableMetaList} themedEl={ref.current}/>
                <ThemePanel category="lists" themeVars={themeVariableMetaList} themedEl={ref.current}/>
                <ThemePanel category="popups" themeVars={themeVariableMetaList} themedEl={ref.current}/>
                <ThemePanel category="others" themeVars={themeVariableMetaList} themedEl={ref.current}/>
            </Stacked>
        </div>
    );
}
