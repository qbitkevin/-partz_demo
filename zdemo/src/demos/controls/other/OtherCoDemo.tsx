import {CSS}                    from '@partz/ui-basics';
import {Copyright, Term}        from "@partz/ui-co";
import {Grid, Cell}             from "@partz/ui-layout"

const cn = new CSS("OtherCoDemo");


export default function OtherCoDemo() {
    return (
        <Grid cols={2} css={cn.name}>
            <Cell>
                <h4>Copyright</h4>
                <p> A simple component to display a copyright notice</p>
                <p>Code:</p>
                <code>&lt;Copyright owner="Demo Partz, Inc."/&gt;</code>
                <p>Result:</p>
                <Copyright owner="Demo Partz, Inc."/>
            </Cell>
            <Cell>
                <h4>Term</h4>
                <p> A term is a component that formats in this way given a term, num, def, and per. </p>
                <label> Example: </label>
                <Term css="PPD" term="Price" num="3" def="USD" per="Day"/>
                <p> term='Price', num='3', def='USD' and per='Day'</p>
            </Cell>

        </Grid>
    );
}
