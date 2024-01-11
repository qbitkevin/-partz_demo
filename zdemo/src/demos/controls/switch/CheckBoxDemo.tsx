import * as React           from 'react';
import {CSS, useToggle}     from '@partz/ui-basics';
import {CheckBoxCo}         from '@partz/ui-co';
import {Grid, Block, Panel} from '@partz/ui-layout';

//import './CheckBoxDemo.scss';
const cn = new CSS("CheckBoxDemo");
const src = "@partz/ui-co/src/switch/CheckBoxCo.tsx";

const tac = "<div><h3>Terms and Conditions</h3><p>One bit of lawyer speak that seems to go on and on forever.  It&apos;s perfectly fine to ignore this paragraph.</p><p>Two bits of lawyer speak.</p><p>Three bits of lawyer speak.</p><p>More bits of lawyer speak.</p></div>";


export default function CheckBoxDemo() {


    const [b1, swB1] = useToggle( false );
    const [b2, swB2] = useToggle( false );
    const [b3, swB3] = useToggle( false );
    const [b4, swB4] = useToggle( false );
    const [b5, swB5] = useToggle( false );

    return (
        <Panel css={cn.name}>
            <Grid cols={2}>
                <CheckBoxCo value={b1} onChange={swB1}
                            label="Fairly long regular text label for the check box"/>

                <CheckBoxCo value={b2} onChange={swB2} markup={tac}/>

                <div className="spaced-4">
                    <CheckBoxCo value={b3} onChange={swB3} label="First one is value 3."/>
                    <CheckBoxCo value={b4} onChange={swB4} label="This one is value 4."/>
                    <CheckBoxCo value={b5} onChange={swB5} label="The last one is value 5."/>
                </div>

            </Grid>
            <hr/>
            <Block css="CoDoc">
                <section className="Props">
                    <p>source: <code>{src}</code></p>
                    <br/>
                    <h3>React Props:</h3>
                    <ul>
                        <li><code>value</code> - <code>bool</code> - true if checked</li>
                    </ul>
                </section>
            </Block>
        </Panel>
    );
}
