import * as React           from 'react';
import {CSS}                from '@partz/ui-basics';
import {Tabs, Tab}          from '@partz/ui-layout';
import TypesReferenceGuide  from '../../guide/TypesReferenceGuide.js';
import CheatSheet           from '../../guide/CheatSheet.js';
import DeveloperGuide       from '../../guide/DeveloperGuide.js';
import MaintainerGuide      from '../../guide/MaintainerGuide.js';

const cn = new CSS("GeneralInfo");

export default function GeneralInfo() {
    return (
        <div className={cn.name}>
            <Tabs orientation={cn.part.down.name}>
                <Tab label="Types">
                    <TypesReferenceGuide/>
                </Tab>
                <Tab label="Cheat Sheet">
                    <CheatSheet/>
                </Tab>
                <Tab label="Developer">
                    <DeveloperGuide/>
                </Tab>
                <Tab label="Maintainer">
                    <MaintainerGuide/>
                </Tab>
            </Tabs>
        </div>
    );
}
