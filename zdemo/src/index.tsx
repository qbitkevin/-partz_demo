import * as React                   from 'react';
import ReactDOM                     from 'react-dom';
import {CSS}                        from '@partz/ui-basics';
import {RzPane, Tabs, Tab}          from '@partz/ui-layout';
import GeneralInfo                  from './demos/general/GeneralInfo';
import ButtonDemo                   from './demos/buttons/ButtonsDemo';
import ControlsDemo                 from './demos/controls/ControlsDemo';
import FormDemo                     from './demos/forms/FormDemo';
import LayoutDemo                   from './demos/layout/LayoutDemo';
import ModalsDemos                  from './demos/modal/ModalsDemo.js';
import ListingDemos                 from './demos/listings/ListingDemos';
import ThemingGuide                 from './theming/ThemingGuide';

const DI_HOST = "#zdemo-demo1";
const cn = new CSS( "Demo" );

// @ts-ignore  .env is not defined in meta... where's type def?
const mode = import.meta.env.MODE;

function Demo() {
    console.log( "Main Demo rendering!")
    return (
        <RzPane css={cn.with('rz-themed')}>
            <Tabs>
               <Tab key="1" label="General">
                    <GeneralInfo/>
                </Tab>
                <Tab key="2" label="Theming">
                    <ThemingGuide/>
                </Tab>
                <Tab key="3" label="Buttons">
                    <ButtonDemo/>
                </Tab>
                <Tab key="4" label="Controls">
                    <ControlsDemo/>
                </Tab>
               <Tab key="5" label="Layouts">
                    <LayoutDemo/>
                </Tab>
               <Tab key="5b" label="Modals">
                    <ModalsDemos/>
                </Tab>
               <Tab key="6" label="Forms">
                    <FormDemo/>
                </Tab>
               <Tab key="7" label="Listings">
                    <ListingDemos/>
                </Tab>
            </Tabs>
        </RzPane>
    );
}

ReactDOM.render(
    <Demo/>,
    document.querySelector( DI_HOST )
);

