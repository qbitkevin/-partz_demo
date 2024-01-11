import * as React       from 'react';
import {CSS}            from '@partz/ui-basics';
import {Tabs, Tab}      from '@partz/ui-layout';
import CheckBoxDemo     from './switch/CheckBoxDemo';
import SelectDemo       from './select/SelectDemo';
import TextCoDemo       from './text/TextCoDemo';
import TimeDemo         from './time/TimeDemo';
import OtherCoDemo      from "./other/OtherCoDemo";

import './ControlsDemo.scss';
const cn = new CSS("ControlsDemo");


export default function ControlsDemo() {
    return (
        <div className={cn.name}>
            <p>Controls are from <code>@partz/ui-co</code>.</p>
            <hr/>
            <Tabs orientation={cn.part.down.name}>
                <Tab label="Text">
                    <TextCoDemo/>
                 </Tab>
                 <Tab label="CheckBox">
                    <CheckBoxDemo/>
                </Tab>
                <Tab label="Select">
                    <SelectDemo/>
                </Tab>
                <Tab label="Time">
                    <TimeDemo/>
                </Tab>
                <Tab label="Other">
                    <OtherCoDemo/>
                </Tab>
             </Tabs>
        </div>
    );
}
