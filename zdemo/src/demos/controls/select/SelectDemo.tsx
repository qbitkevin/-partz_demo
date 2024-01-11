import * as React           from 'react';
import type {Nullable}      from '@partz/abstract';
import {CSS}                from '@partz/ui-basics';
import {SelectCo, ComboBox} from '@partz/ui-co';
import {Grid, Block, Panel} from '@partz/ui-layout';

const cn = new CSS("SelectDemo");
const src = "@partz/ui-co/src/select/*";

const numberWords = [ "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten" ];

export default function SelectDemo() {

    const [s1, setS1] = React.useState<Nullable>( null );
    const [s2, setS2] = React.useState<Nullable>( numberWords[1] );
    const [s3, setS3] = React.useState<Nullable>( null );

    return (
        <Panel css={cn.name}>
            <Block>
                <h4>SelectCo (work in progress: not released)</h4>
                <Grid cols={2}>
                    <div className="fakeField">
                        <label>Text combo with text options</label>
                        <SelectCo value={s1} onChange={setS1} options={numberWords}/>
                    </div>
                    <div className="fakeField">
                        <label>Text combo with text options</label>
                        <SelectCo value={s2} onChange={setS2} options={numberWords}/>
                    </div>
                    <div className="fakeField">
                        <label>Text combo with text options</label>
                        <SelectCo value={s3} onChange={setS3} options={numberWords}/>
                    </div>
                </Grid>
            </Block>
            <hr/>
            <Block>
                <h4>ComboBox (being deprecated, in favor of above)</h4>
                <Grid cols={2}>
                    <div className="fakeField">
                        <label>Text combo with text options</label>
                        <ComboBox value={s1} onChange={setS1} options={numberWords}/>
                    </div>
                    <div className="fakeField">
                        <label>Text combo with text options</label>
                        <ComboBox value={s2} onChange={setS2} options={numberWords}/>
                    </div>
                    <div className="fakeField">
                        <label>Text combo with text options</label>
                        <ComboBox value={s3} onChange={setS3} options={numberWords}/>
                    </div>
                </Grid>
            </Block>
            <hr/>
            <Block css="CoDoc">
                <section className="Props">
                    <p>source: <code>{src}</code></p>
                    <br/>
                    <h3>React Props:</h3>
                    <ul>
                        <li><code>value</code> - <code>any</code> - control value</li>
                    </ul>
                </section>
            </Block>
        </Panel>
    );
}
