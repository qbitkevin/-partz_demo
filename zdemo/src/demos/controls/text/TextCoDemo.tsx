import * as React                               from 'react';
import {CSS}                                    from '@partz/ui-basics';
import {Grid, Cell, Tabs, Tab}                  from '@partz/ui-layout';
import {Button}                                 from '@partz/ui-btn';
import {TextCo, FilterTextCo, StaticText,
    MarkedTextBox, AlertableText, MemoCo,
    Markup, PasswordCo, Text, TextArrayInput}   from '@partz/ui-co';
import ComponentSpecDoc                         from '../../../co/spec-doc/ComponentSpecDoc';


const cn = new CSS('TextCoDemo');

const texts = ["abc", "def", "ghi", "jkl", "mno"];
let t = 0;


const inputDemoConfigs = [
    {name:"field",     noedit: true, hide: true },
    {name: "validator", noedit: true},

];

const textCoSpec = new URL('../../../co-docs/TextCoDoc.yaml', import.meta.url).href;
const textCoDemoConfigs = [
    ...inputDemoConfigs,
     {name:"type", noedit: true, initial: "text" }
];

const filterTextCoSpec = new URL('../../../co-docs/FilterTextCoDoc.yaml', import.meta.url).href;

const staticTextSpec = new URL('../../../co-docs/StaticTextDoc.yaml', import.meta.url).href;
const staticTextDemoConfigs = [
    {name: "value", initial: "static text"}
];


export default function TextCoDemo() {

    const [s4, setS4] = React.useState<string | null>( null );
    const [s5, setS5] = React.useState<string | null>( null );
    const [s6, setS6] = React.useState<string>( "start" );

    const textArray = ['ArrayText1','ArrayText2','3']

    function randomizeText() {
        if (t >= texts.length ){
            t = 0;
        }
        setS6( texts[t++] );
    }


    return (
        <Tabs css={cn.name}>
            <Tab label="TextCo">
                <ComponentSpecDoc co={TextCo} specPath={textCoSpec} demoConfigs={textCoDemoConfigs}/>
            </Tab>
            <Tab label="FilterTextCo">
                <ComponentSpecDoc co={FilterTextCo} specPath={filterTextCoSpec} />
            </Tab>
            <Tab label="StaticText">
                <ComponentSpecDoc co={StaticText} specPath={staticTextSpec} demoConfigs={staticTextDemoConfigs} />
            </Tab>
            <Tab label="Text">
                <Grid cols={3}>
                    <Cell>
                        <label> Text: received by given text </label>
                        <Text text="Input directly" />
                    </Cell>
                    <Cell>
                        <label>TextArrayInput- Array of text</label><br/>
                        <TextArrayInput value={textArray} />
                    </Cell>
                    <Cell>
                        <label> MarkedTextBox- Allows you to see markup</label>
                        <MarkedTextBox value={'This Text Cannot Be Changed. This Box Has 6 Rows'} rows={6}/>
                    </Cell>
                </Grid>

            </Tab>
            <Tab label="AlertableText">
                <Grid cols={1}>
                    <Cell>
                        <label> Text that flashes to alert of a value change</label>
                        <AlertableText text={s6} />
                        <Button label="click me" onClick={randomizeText} />
                    </Cell>
                </Grid>
            </Tab>
            <Tab label="TextBoxes">
                <Grid cols={2}>
                    <Cell>
                        <label> MemoCo W/ Editable Size</label><br/>
                        <MemoCo value={s4} placeholder="insert your text"  onChange={setS4}/>
                    </Cell>
                    <Cell>
                        <label> Markup</label><br/>
                        <Markup value={s5}  onChange={setS5} placeholder="insert your text" doChangedOnEnter={true} />
                    </Cell>
                </Grid>
            </Tab>
            <Tab label="PasswordText">
                <Grid cols={1}>
                    <Cell>
                        <label>PasswordCo-Enter Secret Password Here:  </label>
                        <PasswordCo />
                    </Cell>
                </Grid>
            </Tab>
        </Tabs>
    );
}
