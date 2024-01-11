import * as React                           from 'react';
import type {Bo, Token, ChangeH}            from '@partz/abstract';
import {useBoPipe}                          from '@partz/piping';
import {CSS}                                from '@partz/ui-basics';
import {ComboBox, SelectCo, CoFactory}      from '@partz/ui-co';
import {PForm, Form, Field, FCheck, FText,
    FMemo, FToken, MemberForm}              from '@partz/ui-form';
import {Grid, Tabs, Tab}                    from '@partz/ui-layout';
import DemoLayout                           from './DemoLayout';
import NestedMemberDemo                     from './NestedMemberDemo.js';

import './FormDemo.scss';
const cn = new CSS("FormDemo");

Field.injectControls( CoFactory );

const someTokens = [
    {key:"1001", description: "One Thousand and One"},
    {key:"3004", description: "Three Thousand and Four"} ,
    {key:"2007", description: "Two Thousand and Seven"},
    {key:"1015", description: "One Thousand and Fifteen"}
]

interface SomeThing extends Bo {
    bool1: boolean,
    bool2: boolean,
    token1?: Token | null,
    token2?: Token,
    text1: string,
    text2?: string,
    text3?: string | null,
    memo ?: string
}

const initialData: SomeThing = {
    _id  : -1,
    bool1: false,
    bool2: false,
    token1: null,
    //token2 is undefined instead of null.
    text1: "one",
    text2: undefined,
    text3: null,
};

const contact = {
    name : "Peter",
    address: {
        street1: "123 Main",
        city: "Bellevue"
    }
}

function SampleFields() {
    return (
        <Grid cols={3}>
            <FCheck  key="1" name="bool1" label="This is a checkbox 1"/>
            <FText   key="2" name="text1" label="This is Text One" placeholder="Replace me"/>
            <FToken  key="3" name="token1" label="ComboBox for Token One">
                <ComboBox options={someTokens}/>
            </FToken>
            <FToken  key="4" name="token2" label="SelectCo for Token Two">
                <SelectCo options={someTokens}/>
            </FToken>
            <FCheck  key="5" name="bool2" label="This is a checkbox 2"/>
            <FText   key="6" name="text3" label="This is Text Three" placeholder="Replace me" required/>
            <FMemo  key="7" col={1} span={3}  name="memo" label="This is a Memo" placeholder="Fill me up with markup"/>
        </Grid>
    );
}


export default function FormsDemo()  {

    const [value, setValue] = React.useState<SomeThing>( initialData );
    const [person, setPerson] = React.useState( contact );

    const boPipe1 = useBoPipe<SomeThing>( undefined, value, setValue as ChangeH );

    return (
        <Tabs orientation={cn.part.down.name} css={cn.with( "bleed" )}>

            <Tab key="1"  label="Overview">
                <p>Forms are from <code>@partz/ui-form</code>.</p>
                <hr/>
            </Tab>

           <Tab key="2"  label="Simple Form">
                <DemoLayout data={value}>
                    <Form value={value} onChange={setValue}>
                        <SampleFields/>
                    </Form>
                    <p>
                        This tab uses the <code>@partz/ui-form/Form</code> component,
                        a simple form that is not aware of pipes or taps.  Instead, the
                        data object value and a change handler are given to the form.
                    </p>
                </DemoLayout>
           </Tab>

            <Tab key="3"  label="Piped Form">
                <DemoLayout data={value}>
                    <PForm tap={boPipe1.tap()}>
                        <SampleFields/>
                    </PForm>
                    <p>
                        Uses the piped <code>@partz/ui-form/PForm</code> component,
                        which requires a tap prop.
                    </p>
                </DemoLayout>
            </Tab>

            <Tab key="3"  label="Member Form">
                <DemoLayout renderData={ () => (
                        <div>
                            <p>Name: {person.name}</p>
                            <p>Street: {person.address.street1}</p>
                            <p>City: {person.address.city}</p>
                        </div>
                    )}>
                    <Form value={person} onChange={setPerson}>
                        <FText name="name" label="Contact Name"/>
                        <MemberForm field="address">
                            <FText name="street1" label="Street"/>
                            <FText name="city" label="City"/>
                        </MemberForm>
                    </Form>
                    <p>Uses <code>@partz/ui-form/Form</code> and <code>MemberForm</code> components.</p>
                </DemoLayout>
            </Tab>

             <Tab key="3"  label="Nested Member Form">
                 <NestedMemberDemo/>
            </Tab>

        </Tabs>
    );
}
