import {CSS}                from '@partz/ui-basics';

const cn = new CSS( "CheatSheet" );

type PT = {
    css  ?: string
}
export default function CheatSheet( {css} : PT ) {

    return (
        <div className={cn.with( css )}>
            <h2>Cheat Sheet</h2>
            <h4>Esoteric CSS Properties</h4>
            <h5><code>display:inline</code></h5>
            <ul>
                <li>starts on current line</li>
                <li>width and height settings have no effect</li>
                <li>block-direction margin ignored</li>
                <li>padding will not affect text height</li>
            </ul>
            <h5><code>display:inline-block</code></h5>
            <ul>
                <li>same as <code>inline</code>, but width and height settings work</li>
            </ul>
            <h5><code>display:block</code></h5>
            <ul>
                <li>starts on a new line</li>
                <li>tries to consume 100% width of it's container</li>
            </ul>

            <h2>Browser Information</h2>
            <dl>
                <dt>navigator.language</dt>
                <dd>{window.navigator.language}</dd>
            </dl>
            <dl>
                <dt>navigator.languages</dt>
                <dd>{window.navigator.languages}</dd>
            </dl>

        </div>
    );
}
