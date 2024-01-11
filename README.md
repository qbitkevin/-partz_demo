# -partz_demo
Code written to demonstrate some of the components of Partially Artsy, a UI React Framework. I wrote this while working at rezometry. You cannot clone and run this project as the rest of the dependencies are still private. I removed some fluff files (package.json, ect) as to make it easier to see and read the code I wrote. 

Inside zdemo, there is src and index. Index is the index html page for the entire web demo. src is the code for the jsx and react components for the page aswell as index html files for various inner pages of the demo page.

Src is most important. In src there is co/spec-doc. spec-doc contains all the react commponents for creating a demo of a certain component. For example, if you wanted to demo a Buttom component, "<ComponentSpecDoc co={Button} specPath={buttonSpec} demoConfigs={buttonDemoConfigs}", would be sufficient. This one line would allow you to create 2 side by side panels, the left with the component being displayed and the right side with the components props listed. You can then interact with the component itself or alter proptypes (for example changing disabled to true) and see effects on the button!

