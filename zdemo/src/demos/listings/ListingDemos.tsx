import * as React           from 'react';
import {CSS}                from '@partz/ui-basics';
import {Tabs, Tab}          from '@partz/ui-layout';
import MemberTableDemo      from './active/MemberTableDemo';

const cn = new CSS("ListingDemos");


export default function ListingDemos() {
     return (
        <div className={cn.name}>
            <Tabs orientation={cn.part.down.name}>
                <Tab label="Overview">
                    <h3>Artsy Listings</h3>
                    <p>From the perspective of handling data changes, there are three kinds of lists:</p>
                    <ol>
                        <li>standalone - an independent set of objects.  Sometimes called an "extent".</li>
                        <li>owned - a list that exists only in the context of, or on behalf of, some artifact, which can be represented by an identifier.</li>
                        <li>member - a property of a business object which happens to be array-like.</li>
                    </ol>
                </Tab>
               <Tab label="Standalone : SimpleXT">
                    <h4>SimpleXT</h4>
                    <p>A component to manage datasets and/or extents.</p>
                    <p>Demo coming soon...</p>
                </Tab>
                <Tab label="Owned : OwnedLs">
                    <h4>OwnedLsPanel</h4>
                    <p>A component to manage lists that are owned by something.</p>
                    <p>Demo coming soon...</p>
                </Tab>
               <Tab label="Member : ActiveLs">
                    <MemberTableDemo/>
                </Tab>
            </Tabs>
        </div>
    );
}
