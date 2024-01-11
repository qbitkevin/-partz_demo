import * as React       from 'react';
import {CSS} from '@partz/ui-basics';
import {Tabs, Tab}     from '@partz/ui-layout';
import {TextButton, Button}     from '@partz/ui-btn';
import ComponentSpecDoc  from '../../co/spec-doc/ComponentSpecDoc';


import './ButtonsDemo.scss';
const cn = new CSS("ButtonsDemo");


const buttonSpec = new URL('../../co-docs/ButtonDoc.yaml', import.meta.url).href;
const textButtonSpec = new URL('../../co-docs/TextButtonDoc.yaml', import.meta.url).href;



export default function ButtonDemo( ) {

    const buttonDemoConfigs = [
        {name: "label", initial: "button"}
    ];

    return (
        <div className={cn.name}>
            <p>Buttons are from the <code>@partz/ui-btn</code> package.</p>
            <Tabs orientation={cn.part.down.name} >
                <Tab label="Button">
                    <ComponentSpecDoc co={Button} specPath={buttonSpec} demoConfigs={buttonDemoConfigs}/>
                </Tab>
                <Tab label="TextButton">
                    <ComponentSpecDoc co={TextButton} specPath={textButtonSpec}/>
                </Tab>
            </Tabs>
        </div>
    );
}


