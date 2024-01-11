import * as React                           from 'react';
import {useBoPipe}                          from '@partz/piping';
import {CSS}                                from '@partz/ui-basics';
import {Cell, Row}                          from '@partz/ui-layout';
import type {PFormPT}                       from '@partz/ui-form';
import {PForm, FList, FText, FQuantity}     from '@partz/ui-form';
import {XtMien, ActiveLs}                   from '@partz/ux-extent';

const cn = new CSS("MemberTableDemo");

let bookID = 1000001;

interface BookDTo {
    _id: number,
    isbn: string,
    name: string,
    publisher: string,
    pages: number
}
function book( name: string, publisher: string, pages: number ) {
    const id = ++bookID;
    return {
        _id: id,
        isbn: "IS-BN-"+id,
        name,
        publisher,
        pages
    };
}

interface AuthorDTo {
    _id: number,
    name: string,
    books: BookDTo[]
}
const init: AuthorDTo = {
    _id: 1001,
    name: "John Jacobs",
    books: [
        book( "Beyond the Hills", "Great Stories Company", 428 ),
        book( "Around the Corner", "Better Fiction Inc.", 367 ),
    ]
}
function BookForm( {tap}: PFormPT ) {
    return (
        <PForm tap={tap}>
            <Row>
                <FText name="isbn"/>
                <FText name="name"/>
            </Row>
            <FQuantity name="pages"/>
            <FText name="publisher"/>
        </PForm>
    );
}

const bookCP = XtMien.cp.atomic( "book", BookForm );
bookCP.ls.cols = [
    {key:"name"},
    {key:"publisher"},
    {key:"isbn"},
]
bookCP.ls.relation = "by";
bookCP.ls.locality = "author"; // overridden using dp in the form below.



export default function MemberTableDemo() {

    // Mocks an external source of a business object
    // for use by this demo.
    const [bo, setBo] = React.useState<AuthorDTo>( init );

    // The BoPipe manages the BO locally, and will be
    // tapped for this demo's UI.
    const pipe = useBoPipe<AuthorDTo>( undefined, bo, setBo as any);

    return (
        <div className={cn.name}>
              <Cell css="-boxed">
                <PForm tap={pipe.tap()}>
                    <FText name="name" label="Author"/>
                    <FList name="books" nolabel placeholder="No books yet">
                        <ActiveLs cp={bookCP} dp={ {locality:bo.name} }/>
                    </FList>
                </PForm>
            </Cell>
        </div>
    );
}
