import type {JsxChildren}   from '@partz/abstract';
import {CSS}                from '@partz/ui-basics';

const cn = new CSS( "TypesReferenceGuide" );

type TypeDocPT = {
    name        : string,
    description : string,
    markup      ?: string,
    children    ?: JsxChildren
}
function TypeDoc( {name, description, markup, children}: TypeDocPT ) {
    return (
        <div className="RzTypeDoc">
            <h4><code>{name}</code>: {description}</h4>
            <div className="-doc-content" dangerouslySetInnerHTML={{__html:markup}}/>
            {children}
        </div>
    );
}

const ubo = `<p>An abstract type that denotes a business object that will not be identified or referenced
             by any application-level identifier except for perhaps its own object identity.</p>`;

type PT = {
    css  ?: string
}
export default function TypesReferenceGuide( {css} : PT ) {

    return (
        <div className={cn.with( css )}>
            <h2>Types</h2>

            <TypeDoc name="Bo" description="Business Object">
                <p>An abstract type intended to represent any defined data structure that holds subject matter
                    related to the application.  It is heavily used throughout <code>@partz</code>
                    to denote the expectation of data with well-defined semantics.</p>
            </TypeDoc>

            <TypeDoc name="UBo" description="Unidentifiable Business Object" markup={ubo}/>

            <TypeDoc name="IBo" description="Identifiable Business Object">
                <p>An abstract type that denotes a business object that self-contains an unique identifier (at
                    least in the object domain's scope), that can be determined by the <code>@partz/alphabit/E.id( bo: IBo )</code> function (which uses pluggable
                    identity resolution).</p>
            </TypeDoc>
        </div>
    );
}


