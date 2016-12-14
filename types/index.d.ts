import { FOO } from './dep/foo';
export declare class Demo {
    _name: string;
    _dep: FOO;
    constructor(Dep: any);
    name: string;
    readonly dep: FOO;
}
export declare function create(): any;
