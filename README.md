# -partz_demo
I made this repository to show some the code of a demo website while working at Rezometry for potential empoloyers and others. 
The website was a demo page with the purpose of documenting and demoing components of Partially Artsy, a UI React Framework being made at Rezometry. You cannot clone and run this project as the rest of the dependencies are still private.

Inside zdemo, there is src and index. Index is the index html page for the entire web demo. src is the code for the jsx and react components for the page aswell as index html files for various inner pages of the demo page.

In src there is co/spec-doc. spec-doc contains all the react commponents for creating a demo of a certain component. For example, if you wanted to demo a Buttom component, "<ComponentSpecDoc co={Button} specPath={buttonSpec} demoConfigs={buttonDemoConfigs}", would be sufficient. This one line would allow you to create 2 side by side panels, the left with the component being displayed and the right side with the components props listed. You can then interact with the component itself or alter proptypes (for example changing disabled to true) and see effects on the button! Note that these components are not conponents of the partially artsy framework but were what I made with the purpose of easily making demo pages on the webpage of partially artsy comnponents.

