import * as Promise from 'bluebird';
import { FetchOptions } from 'cget';
import { Context } from './Context';
import { Namespace } from './Namespace';
import { Source } from './Source';
/** Loader handles caching schema definitions and calling parser stages. */
export declare class Loader {
    constructor(context: Context, options?: FetchOptions);
    import(urlRemote: string): Promise<Namespace>;
    importFile(urlRemote: string, namespace?: Namespace): Source;
    private finish();
    getOptions(): FetchOptions;
    private static cache;
    private static sourceTbl;
    private context;
    private options;
    private parser;
    private source;
    private pendingCount;
    private resolve;
    private reject;
}
