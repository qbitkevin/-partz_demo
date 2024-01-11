import {Action}                 from '@partz/basics';
import {CSS, useToggle}         from '@partz/ui-basics';
import {TextButton, Trigger}    from '@partz/ui-btn';
import {Instruct}               from '@partz/ui-co';
import {Tabs, Tab, Dialog}      from '@partz/ui-layout';

const cn = new CSS("ModalsDemo");

export default function ModalsDemo() {

    const [open, toggle, openDlg, closeDlg] = useToggle( false );

    const triggers: Trigger[] = [
        {act:Action.save, label:"OK... all Good!", onClick:closeDlg}
    ]

    return (
        <div className={cn.name}>
            <p>Modal Dialogs, etc, come from <code>@partz/ui-layout</code>.</p>
            <hr/>
            <Tabs orientation={cn.part.down.name}>
                <Tab label="Dialog">
                    <TextButton label="Click to Open Dialog" onClick={openDlg}/>
                    <hr/>
                    {open &&
                        <Dialog title="A Nice Little Modal Popup Dialog Box..." onCancel={closeDlg} actions={triggers}>
                            <div>
                                <Instruct>Changing to the <em>Invoice</em> phase will post this sales order as closed, and prevent any further changes.</Instruct>
                                <p>Are you sure you want to <strong>Close</strong> this sale order?</p>
                            </div>
                        </Dialog>
                    }
                </Tab>
            </Tabs>
        </div>
    );
}
