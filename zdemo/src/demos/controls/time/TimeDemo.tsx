import * as React               from 'react';
import {Tod}                    from '@partz/time';
import {CSS}                    from '@partz/ui-basics';
import {TimeOfDayCo}            from '@partz/ui-co';
import {Grid, Cell, Tabs, Tab}  from '@partz/ui-layout';

const cn = new CSS("TimeDemo");
const src = "@partz/ui-co/src/time/*";


export default function TimeDemo() {

    const [v1, setV1] = React.useState<string | null>( "00:00" );

    return (
        <Tabs css={cn.name}>
            <Tab label="TimeOfDayCo">
                <Grid cols={2}>
                    <Cell>
                        <label>TimeOfDayCo</label><br/>
                        <TimeOfDayCo value={v1} onChange={setV1} name="time1" autoFocus disabled={false}/>
                    </Cell>
                    <Cell>
                        <h4>Display via Tod</h4>
                        <div>
                            {Tod.of( v1 ).iso()}
                        </div>
                    </Cell>
               </Grid>
            </Tab>
    </Tabs>
    );
}
