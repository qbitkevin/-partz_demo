import * as React                    from 'react';
import {Form, FText, MemberForm}     from '@partz/ui-form';
import DemoLayout                    from './DemoLayout';


const initialData = {
    name: {
        first: "Peter",
        last: "Wabbit"
    },
    contact: {
        address: {
            street1: "123 Main",
            city: "Bellevue"
        },
        phone : "101-555-1212"
    }
}

export default function NestedMemberDemo()  {

    const [person, setPerson] = React.useState( initialData );

    return (

        <div>
            <DemoLayout renderData={ () => (
                <div>
                    <p>Name: {person.name.first} {person.name.last}</p>
                    <p>Street: {person.contact.address.street1}</p>
                    <p>City: {person.contact.address.city}</p>
                </div>
            )}>
                <Form value={person} onChange={setPerson}>
                    <FText name="name.first" label="First Name"/>
                    <FText name="name.last" label="Last Name"/>
                    <MemberForm field="contact.address">
                        <FText name="street1" label="Street"/>
                        <FText name="city" label="City"/>
                    </MemberForm>
                </Form>
                <p>Uses <code>Form</code> and <code>MemberForm</code> components from <code>@partz/ui-form</code>.</p>
            </DemoLayout>
        </div>
    );
}
