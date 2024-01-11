import {CSS}                from '@partz/ui-basics';

const cn = new CSS( "DeveloperGuide" );

type PT = {
    css  ?: string
}
export default function DeveloperGuide( {css} : PT ) {

    return (
        <div className={cn.with( css )}>
            <h2>Developer Guide</h2>
        </div>
    );
}
