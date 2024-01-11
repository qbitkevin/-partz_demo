import {CSS}                from '@partz/ui-basics';

const cn = new CSS( "MaintainerGuide" );

type PT = {
    css  ?: string
}
export default function MaintainerGuide( {css} : PT ) {

    return (
        <div className={cn.with( css )}>
            <h2>Maintainer Guide</h2>
        </div>
    );
}
