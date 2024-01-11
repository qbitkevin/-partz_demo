
export type PropDemoConfig = {
    name         : string,
    initial     ?: any,
    noedit      ?: boolean,
    hide        ?: boolean,
    fn          ?: Function
}

export type PropConfigValue = {
    prop         : string,
    cfg         ?: PropDemoConfig,
    value       ?: any  // default :undefined
    log         ?: boolean,
    fnHandler   ?: Function,
    fnPropBox   ?: Function,
    fnEvent     ?: Function,
}

export type PropType = 'boolean' | 'string' | 'number' | 'function' | 'object';
export type SourcePath = string;
export type Markup = string;


/**
 * Individual prop specification for a component.
 */
export type SpecProp = {
    name: string,
    type: PropType,
    restriction ?: string,
    required: boolean,
    fallback: unknown,
    description: Markup
};


/**
 * Component Specification
 * (will be sourced as YAML)
 */
export interface CoSpec {
    name        : string;
    version     : string;
    source      : SourcePath;
    description : Markup;
    props       : SpecProp[];

}
