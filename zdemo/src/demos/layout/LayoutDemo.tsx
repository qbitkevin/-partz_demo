import * as React                           from 'react';
import type {Bo, ChangeH}                   from '@partz/abstract';
import {useBoPipe}                          from '@partz/piping';
import {CSS}                                from '@partz/ui-basics';
import {Grid, Cell, Row, Tabs, Tab, PopupEdit} from '@partz/ui-layout';
import {PForm, FQuantity}                   from '@partz/ui-form';

import './LayoutDemo.scss';
const cn = new CSS("LayoutDemo");

function LayoutCell( {name} : {name:string} ) {
    return <Cell css="-boxed">{name}</Cell>;
}

function SampleUI() {
    return <Cell css="SampleUI -inset -boxed">An example of popup content.  This could be an image, a form, or anything else.</Cell>
}

const words = ["zero", "one", "two", "three", "four",  "five", "six", "seven", "eight", "nine", "ten" ];

const init = {
    cols : 3
}
type Props = Bo & typeof init;


export default function LayoutDemo() {

    const [props, setProps] = React.useState<Props>( init );

    const pipe = useBoPipe<Props>( undefined, props, setProps as ChangeH );
    pipe.becomeVerbose();

    return (
        <div className={cn.name}>
            <p>Layouts come from <code>@partz/ui-layout</code>.</p>
            <hr/>
            <Tabs orientation={cn.part.down.name}>

                <Tab label="Grid Layout">
                    <p>A grid containing {words.length} vanilla &quot;cells&quot;.</p>
                    <PForm tap={pipe.tap()}>
                        <FQuantity name="cols"/>
                    </PForm>
                    <Grid {...props}>
                        {words.map( (w,i) => <LayoutCell key={i} name={w}/>)}
                    </Grid>
                    <hr/>
                </Tab>

                <Tab label="Row Layout">
                    <p>A row of {words.length} cells.</p>
                    <Row>
                        {words.map(  (w,i) => <LayoutCell key={i} name={w}/>)}
                    </Row>
                    <hr/>
                </Tab>
                <Tab label="Modals">
                    <Cell>
                        <h4>PopupEdit</h4>
                        <p>A component that pops up additional UI when clicked</p>
                        <label> Example: </label>
                        <PopupEdit renderEditCo={SampleUI}>
                            <div>Click me for a popup</div>
                        </PopupEdit>
                    </Cell>

                </Tab>
            </Tabs>
        </div>
    );
}
